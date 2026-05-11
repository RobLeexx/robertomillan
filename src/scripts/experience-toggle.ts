const toggles = Array.from(document.querySelectorAll<HTMLElement>('[data-experience-toggle]'));

toggles.forEach((toggleRoot) => {
  const tabs = Array.from(toggleRoot.querySelectorAll<HTMLButtonElement>('[data-experience-tab]'));
  const panels = Array.from(toggleRoot.querySelectorAll<HTMLElement>('[data-experience-panel]'));
  const initialSectionId = toggleRoot.dataset.initialSection;

  if (tabs.length === 0 || panels.length === 0 || !initialSectionId) {
    return;
  }

  const activatePanel = (targetId: string) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.target === targetId;
      tab.classList.toggle('experience-toggle__tab--active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === targetId;
      panel.hidden = !isActive;
      panel.classList.toggle('experience-toggle__panel--active', isActive);
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;

      if (targetId) {
        activatePanel(targetId);
      }
    });

    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
        return;
      }

      event.preventDefault();

      let nextIndex = index;

      if (event.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabs.length - 1;
      }

      const nextTab = tabs[nextIndex];
      const nextTargetId = nextTab?.dataset.target;

      if (!nextTab || !nextTargetId) {
        return;
      }

      activatePanel(nextTargetId);
      nextTab.focus();
    });
  });

  activatePanel(initialSectionId);
});
