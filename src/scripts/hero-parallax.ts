const hero = document.querySelector<HTMLElement>('[data-hero-parallax]');
const heroTitle = hero?.querySelector<HTMLElement>('[data-hero-title]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (hero && heroTitle) {
  let frame = 0;

  const clearOffsets = () => {
    hero.style.removeProperty('--hero-bg-shift');
    heroTitle.style.removeProperty('--hero-title-shift');
  };

  const update = () => {
    frame = 0;

    if (reducedMotion.matches) {
      clearOffsets();
      return;
    }

    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    const centeredScroll = clampedProgress - 0.5;

    const bgShift = centeredScroll * 52;
    const titleShift = centeredScroll * -34;

    hero.style.setProperty('--hero-bg-shift', `${bgShift}px`);
    heroTitle.style.setProperty('--hero-title-shift', `${titleShift}px`);
  };

  const requestUpdate = () => {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(update);
  };

  const handleMotionChange = () => {
    if (reducedMotion.matches) {
      clearOffsets();
      return;
    }

    requestUpdate();
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  reducedMotion.addEventListener('change', handleMotionChange);
  requestUpdate();
}

export {};
