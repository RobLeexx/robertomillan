const about = document.querySelector<HTMLElement>('[data-about-parallax]');
const logo = about?.querySelector<HTMLElement>('[data-about-logo]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileQuery = window.matchMedia('(max-width: 759px)');

if (about && logo) {
  let frame = 0;
  let currentY = 0;
  let targetY = 0;
  let ticking = false;

  const clearOffset = () => {
    currentY = 0;
    targetY = 0;
    logo.style.setProperty('--about-logo-shift', '0px');
  };

  const computeTarget = () => {
    if (reducedMotion.matches) {
      targetY = 0;
      return;
    }

    const rect = about.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const centered = clamped - 0.5;
    const amplitude = mobileQuery.matches ? 10 : 28;

    targetY = centered * amplitude;
  };

  const render = () => {
    frame = 0;

    if (reducedMotion.matches) {
      clearOffset();
      ticking = false;
      return;
    }

    currentY += (targetY - currentY) * 0.12;
    logo.style.setProperty('--about-logo-shift', `${currentY.toFixed(2)}px`);

    if (Math.abs(targetY - currentY) > 0.08) {
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
