const currentHash = window.location.hash;
const currentSearch = window.location.search;
const switchers = Array.from(document.querySelectorAll<HTMLElement>('[data-language-switcher]'));

switchers.forEach((switcher) => {
  const links = Array.from(switcher.querySelectorAll<HTMLAnchorElement>('[data-language-link]'));

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (!href) {
      return;
    }

    link.setAttribute('href', `${href}${currentSearch}${currentHash}`);
  });
});
