import { themeChainConfig } from '../config/theme';

const themeControls = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-control]'));

themeControls.forEach((themeControlRoot) => {
  const chainButton = themeControlRoot.querySelector<HTMLButtonElement>('[data-theme-chain]');
  const svg = themeControlRoot.querySelector<SVGSVGElement>('[data-chain-svg]');
  const path = themeControlRoot.querySelector<SVGPathElement>('[data-chain-path]');
  const beads = Array.from(themeControlRoot.querySelectorAll<SVGCircleElement>('[data-chain-bead]'));
  const weight = themeControlRoot.querySelector<SVGCircleElement>('[data-chain-weight]');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!chainButton || !svg || !path || !weight || beads.length === 0) {
    return;
  }

  const state = {
    swingAngle: 0,
    swingVelocity: 0,
    targetAngle: 0,
    verticalPull: 0,
    verticalVelocity: 0,
    targetPull: 0,
    pointerX: 0,
    pointerY: 0,
    active: false,
    pullStartedAt: 0,
    lastTime: performance.now(),
    frameId: 0
  };

  const renderState = {
    pathD: '',
    weightCx: Number.NaN,
    weightCy: Number.NaN,
    beadState: ''
  };

  const controller = new AbortController();
  const { signal } = controller;

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
  const lerp = (from: number, to: number, amount: number) => from + ((to - from) * amount);

  const createBezier = (x1: number, y1: number, x2: number, y2: number) => {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;

    const sampleX = (t: number) => (((ax * t) + bx) * t + cx) * t;
    const sampleY = (t: number) => (((ay * t) + by) * t + cy) * t;
    const sampleDerivativeX = (t: number) => ((3 * ax * t) + (2 * bx)) * t + cx;

    return (x: number) => {
      let t = clamp(x, 0, 1);

      for (let index = 0; index < 5; index += 1) {
        const derivative = sampleDerivativeX(t);

        if (Math.abs(derivative) < 0.001) {
          break;
        }

        const difference = sampleX(t) - x;
        t -= difference / derivative;
        t = clamp(t, 0, 1);
      }

      return sampleY(t);
    };
  };

  const heavyEase = createBezier(0.18, 0.75, 0.25, 1);

  const getQuadraticPoint = (
    t: number,
    start: { x: number; y: number },
    control: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const inv = 1 - t;
    return {
      x: (inv * inv * start.x) + (2 * inv * t * control.x) + (t * t * end.x),
      y: (inv * inv * start.y) + (2 * inv * t * control.y) + (t * t * end.y)
    };
  };

  const getInteractionMetrics = () => {
    const bounds = chainButton.getBoundingClientRect();
    const centerX = bounds.left + (bounds.width / 2);
    const centerY = bounds.top + (bounds.height / 2);

    return {
      centerX,
      centerY,
      radiusX: Math.max(bounds.width * 1.6, 1),
      radiusY: Math.max(bounds.height * 0.9, 1)
    };
  };

  const normalizePointer = (
    metrics: ReturnType<typeof getInteractionMetrics>,
    pointerX = state.pointerX,
    pointerY = state.pointerY
  ) => {
    const dx = pointerX - metrics.centerX;
    const dy = pointerY - metrics.centerY;
    const distance = Math.hypot(dx, dy);

    return {
      dx,
      dy,
      distance,
      normalizedX: clamp(dx / metrics.radiusX, -1.25, 1.25),
      normalizedY: clamp(dy / metrics.radiusY, -1.25, 1.25)
    };
  };

  const getHoverTargetAngle = () => {
    if (reducedMotion || !canHover || !state.active) {
      return 0;
    }

    const metrics = getInteractionMetrics();
    const pointer = normalizePointer(metrics);
    const proximity = clamp(1 - (pointer.distance / themeChainConfig.hover.radius), 0, 1);

    if (proximity <= 0) {
      return 0;
    }

    const influence = heavyEase(proximity);
    const targetAngle =
      pointer.normalizedX *
      themeChainConfig.hover.maxAngle *
      (0.44 + (influence * themeChainConfig.hover.horizontalResponse));

    return clamp(targetAngle, -themeChainConfig.physics.maxAngle, themeChainConfig.physics.maxAngle);
  };

  const getClickPullTarget = (now: number) => {
    if (!state.pullStartedAt) {
      return 0;
    }

    const elapsed = now - state.pullStartedAt;
    const progress = clamp(elapsed / themeChainConfig.click.duration, 0, 1);

    if (progress >= 1) {
      state.pullStartedAt = 0;
      return 0;
    }

    if (progress < 0.2) {
      return lerp(0, themeChainConfig.click.pullDistance, heavyEase(progress / 0.2));
    }

    if (progress < 0.4) {
      return lerp(
        themeChainConfig.click.pullDistance,
        themeChainConfig.click.recoilDistance,
        heavyEase((progress - 0.2) / 0.2)
      );
    }

    if (progress < 0.72) {
      return lerp(
        themeChainConfig.click.recoilDistance,
        themeChainConfig.click.settleDistance,
        heavyEase((progress - 0.4) / 0.32)
      );
    }

    return lerp(
      themeChainConfig.click.settleDistance,
      0,
      heavyEase((progress - 0.72) / 0.28)
    );
  };

  const computeChainGeometry = () => {
    const currentLength = themeChainConfig.chain.restLength + state.verticalPull;
    const swingInfluence = Math.abs(state.swingAngle) / themeChainConfig.physics.maxAngle;
    const endPoint = {
      x: themeChainConfig.anchor.x + (Math.sin(state.swingAngle) * currentLength),
      y: themeChainConfig.anchor.y + (Math.cos(state.swingAngle) * currentLength)
    };
    const controlPoint = {
      x:
        themeChainConfig.anchor.x +
        (Math.sin(state.swingAngle) * currentLength * (
          themeChainConfig.chain.controlRatioX + (swingInfluence * themeChainConfig.chain.lowerCurveBoost)
        )),
      y:
        themeChainConfig.anchor.y +
        (currentLength * (
          themeChainConfig.chain.controlRatioY +
          (Math.abs(state.swingAngle) * themeChainConfig.chain.controlAngleBoost)
        ))
    };

    return { endPoint, controlPoint };
  };

  const render = () => {
    const geometry = computeChainGeometry();
    const pathD =
      `M ${themeChainConfig.anchor.x} ${themeChainConfig.anchor.y} ` +
      `Q ${geometry.controlPoint.x.toFixed(2)} ${geometry.controlPoint.y.toFixed(2)} ` +
      `${geometry.endPoint.x.toFixed(2)} ${geometry.endPoint.y.toFixed(2)}`;
    const beadState = beads.map((_, index) => {
      const t = (index + 1) / (beads.length + 1);
      const point = getQuadraticPoint(t, themeChainConfig.anchor, geometry.controlPoint, geometry.endPoint);
      return `${point.x.toFixed(2)}:${point.y.toFixed(2)}`;
    }).join('|');
    const nextWeightY = geometry.endPoint.y + 8;

    if (
      renderState.pathD === pathD &&
      renderState.beadState === beadState &&
      Math.abs(renderState.weightCx - geometry.endPoint.x) <= themeChainConfig.render.epsilon &&
      Math.abs(renderState.weightCy - nextWeightY) <= themeChainConfig.render.epsilon
    ) {
      return;
    }

    renderState.pathD = pathD;
    renderState.beadState = beadState;
    renderState.weightCx = geometry.endPoint.x;
    renderState.weightCy = nextWeightY;

    path.setAttribute('d', pathD);

    beads.forEach((bead, index) => {
      const t = (index + 1) / (beads.length + 1);
      const point = getQuadraticPoint(t, themeChainConfig.anchor, geometry.controlPoint, geometry.endPoint);
      bead.setAttribute('cx', point.x.toFixed(2));
      bead.setAttribute('cy', point.y.toFixed(2));
    });

    weight.setAttribute('cx', geometry.endPoint.x.toFixed(2));
    weight.setAttribute('cy', nextWeightY.toFixed(2));
  };

  const updatePhysics = (now: number) => {
    const dt = clamp(
      (now - state.lastTime) / 16.6667,
      themeChainConfig.timing.minDt,
      themeChainConfig.timing.maxDt
    );
    state.lastTime = now;
    state.targetAngle = getHoverTargetAngle();
    state.targetPull = getClickPullTarget(now);

    const angularAcceleration =
      ((state.targetAngle - state.swingAngle) * themeChainConfig.physics.angleStiffness) -
      (state.swingVelocity * themeChainConfig.physics.angleDamping);
    state.swingVelocity += angularAcceleration * dt;
    state.swingVelocity *= Math.pow(themeChainConfig.physics.angleFriction, dt);
    state.swingAngle += state.swingVelocity * dt;
    state.swingAngle = clamp(
      state.swingAngle,
      -themeChainConfig.physics.maxAngle,
      themeChainConfig.physics.maxAngle
    );

    const verticalAcceleration =
      ((state.targetPull - state.verticalPull) * themeChainConfig.physics.pullStiffness) -
      (state.verticalVelocity * themeChainConfig.physics.pullDamping);
    state.verticalVelocity += verticalAcceleration * dt;
    state.verticalVelocity *= Math.pow(themeChainConfig.physics.pullFriction, dt);
    state.verticalPull += state.verticalVelocity * dt;
    state.verticalPull = clamp(
      state.verticalPull,
      themeChainConfig.physics.pullClamp.min,
      themeChainConfig.physics.pullClamp.max
    );

    if (
      !state.active &&
      Math.abs(state.swingAngle) < themeChainConfig.settle.angleEpsilon &&
      Math.abs(state.swingVelocity) < themeChainConfig.settle.velocityEpsilon
    ) {
      state.swingAngle = 0;
      state.swingVelocity = 0;
    }

    if (
      !state.pullStartedAt &&
      Math.abs(state.verticalPull) < themeChainConfig.settle.pullEpsilon &&
      Math.abs(state.verticalVelocity) < themeChainConfig.settle.pullEpsilon
    ) {
      state.verticalPull = 0;
      state.verticalVelocity = 0;
    }
  };

  const shouldAnimate = () => (
    state.active ||
    state.pullStartedAt !== 0 ||
    Math.abs(state.swingAngle) > themeChainConfig.settle.angleEpsilon ||
    Math.abs(state.swingVelocity) > themeChainConfig.settle.velocityEpsilon ||
    Math.abs(state.verticalPull) > themeChainConfig.settle.pullEpsilon ||
    Math.abs(state.verticalVelocity) > themeChainConfig.settle.pullEpsilon
  );

  const tick = (now: number) => {
    state.frameId = 0;
    updatePhysics(now);
    render();

    if (shouldAnimate()) {
      state.frameId = window.requestAnimationFrame(tick);
    }
  };

  const ensureAnimation = () => {
    if (reducedMotion || state.frameId) {
      return;
    }

    state.frameId = window.requestAnimationFrame(tick);
  };

  const updatePointer = (event: MouseEvent | PointerEvent | KeyboardEvent) => {
    if ('clientX' in event && 'clientY' in event) {
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
    }
  };

  const handlePointerEnter = (event: PointerEvent) => {
    updatePointer(event);
    const metrics = getInteractionMetrics();
    const pointer = normalizePointer(metrics);

    state.active = true;
    state.swingVelocity += pointer.normalizedX * themeChainConfig.hover.enterImpulse;
    ensureAnimation();
  };

  const handlePointerLeave = () => {
    state.active = false;
    ensureAnimation();
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (!state.active) {
      return;
    }

    updatePointer(event);
    ensureAnimation();
  };

  const handlePull = (event: MouseEvent | KeyboardEvent) => {
    if (reducedMotion) {
      return;
    }

    const metrics = getInteractionMetrics();

    if ('clientX' in event && 'clientY' in event) {
      updatePointer(event);
    } else {
      state.pointerX = metrics.centerX;
      state.pointerY = metrics.centerY;
    }

    const pointer = normalizePointer(metrics);
    const horizontalDirection =
      Math.abs(pointer.normalizedX) < themeChainConfig.click.centerDeadZone
        ? 0
        : Math.sign(pointer.normalizedX);

    state.pullStartedAt = performance.now();
    state.verticalVelocity += themeChainConfig.click.verticalImpulse;

    if (horizontalDirection !== 0) {
      state.swingVelocity += horizontalDirection * themeChainConfig.click.swingImpulse;
    }

    ensureAnimation();
  };

  const cleanup = () => {
    if (state.frameId) {
      window.cancelAnimationFrame(state.frameId);
      state.frameId = 0;
    }

    controller.abort();
  };

  render();

  if (canHover && !reducedMotion) {
    themeControlRoot.addEventListener('pointerenter', handlePointerEnter, { signal });
    themeControlRoot.addEventListener('pointerleave', handlePointerLeave, { signal });
    themeControlRoot.addEventListener('pointermove', handlePointerMove, { passive: true, signal });
  }

  chainButton.addEventListener('click', handlePull, { signal });
  chainButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handlePull(event);
    }
  }, { signal });

  window.addEventListener('pagehide', cleanup, { once: true, signal });
  window.addEventListener('beforeunload', cleanup, { once: true, signal });
  document.addEventListener('astro:before-swap', cleanup, { once: true, signal });
});
