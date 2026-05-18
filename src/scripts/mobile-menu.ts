const menus = Array.from(document.querySelectorAll<HTMLDetailsElement>('.site-mobile-menu'));

menus.forEach((menu) => {
  const toggle = menu.querySelector<HTMLElement>('[data-mobile-menu-toggle]');
  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>('.site-mobile-menu__panel a'));

  const syncExpanded = () => {
    toggle?.setAttribute('aria-expanded', String(menu.open));
  };

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.open = false;
      syncExpanded();
    });
  });

  menu.addEventListener('toggle', syncExpanded);
  syncExpanded();
});

export {};
