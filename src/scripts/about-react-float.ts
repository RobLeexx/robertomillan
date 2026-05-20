const about = document.querySelector<HTMLElement>('[data-about-parallax]');
const logos = about ? Array.from(about.querySelectorAll<HTMLElement>('[data-about-float]')) : [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileQuery = window.matchMedia('(max-width: 759px)');

if (about && logos.length > 0) {
  let frame = 0;
  let ticking = false;
  const states = logos.map((logo) => ({
    logo,
    shiftVar: logo.dataset.aboutShiftVar || '--about-logo-shift',
    amplitudeMobile: Number(logo.dataset.aboutAmplitudeMobile || 16),
    amplitudeDesktop: Number(logo.dataset.aboutAmplitudeDesktop || 42),
    lerp: Number(logo.dataset.aboutLerp || 0.14),
    currentY: 0,
    targetY: 0
  }));

  const clearOffset = () => {
    for (const state of states) {
      state.currentY = 0;
      state.targetY = 0;
      state.logo.style.setProperty(state.shiftVar, '0px');
    }
  };

  const computeTarget = () => {
    if (reducedMotion.matches) {
      for (const state of states) {
        state.targetY = 0;
      }

      return;
    }

    const rect = about.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const centered = clamped - 0.5;

    for (const state of states) {
      const amplitude = mobileQuery.matches ? state.amplitudeMobile : state.amplitudeDesktop;
      state.targetY = centered * amplitude;
    }
  };

  const render = () => {
    frame = 0;

    if (reducedMotion.matches) {
      clearOffset();
      ticking = false;
      return;
    }

    let needsMore = false;

    for (const state of states) {
      state.currentY += (state.targetY - state.currentY) * state.lerp;
      state.logo.style.setProperty(state.shiftVar, `${state.currentY.toFixed(2)}px`);

      if (Math.abs(state.targetY - state.currentY) > 0.08) {
        needsMore = true;
      }
    }

    if (needsMore) {
      frame = window.requestAnimationFrame(render);
      return;
    }

    ticking = false;
  };

  const requestRender = () => {
    computeTarget();

    if (ticking) {
      return;
    }

    ticking = true;
    frame = window.requestAnimationFrame(render);
  };

  const handleMotionChange = () => {
    if (reducedMotion.matches) {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }

      clearOffset();
      return;
    }

    requestRender();
  };

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender);
  reducedMotion.addEventListener('change', handleMotionChange);
  mobileQuery.addEventListener('change', requestRender);
  requestRender();
}

export {};
