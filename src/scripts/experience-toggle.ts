const toggles = Array.from(document.querySelectorAll<HTMLElement>('[data-experience-toggle]'));

toggles.forEach((toggleRoot) => {
  const tabs = Array.from(toggleRoot.querySelectorAll<HTMLButtonElement>('[data-experience-tab]'));
  const panels = Array.from(toggleRoot.querySelectorAll<HTMLElement>('[data-experience-panel]'));
  const previousButton = toggleRoot.querySelector<HTMLButtonElement>('[data-experience-prev]');
  const nextButton = toggleRoot.querySelector<HTMLButtonElement>('[data-experience-next]');
  const currentLabel = toggleRoot.querySelector<HTMLElement>('[data-experience-current]');
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

      if (isActive && currentLabel) {
        currentLabel.textContent = tab.textContent?.trim() ?? '';
      }
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === targetId;
      panel.hidden = !isActive;
      panel.classList.toggle('experience-toggle__panel--active', isActive);
    });
  };

  const activatePanelByOffset = (offset: number) => {
    const activeIndex = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
    const nextIndex = (activeIndex + offset + tabs.length) % tabs.length;
    const nextTargetId = tabs[nextIndex]?.dataset.target;

    if (nextTargetId) {
      activatePanel(nextTargetId);
    }
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

  previousButton?.addEventListener('click', () => activatePanelByOffset(-1));
  nextButton?.addEventListener('click', () => activatePanelByOffset(1));

  activatePanel(initialSectionId);
});
