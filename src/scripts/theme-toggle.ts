import { themeConfig } from '../config/theme';

const root = document.documentElement;
const controls = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-toggle-control]'));

if (controls.length > 0) {
  const syncTheme = () => {
    const currentTheme = root.dataset.theme ?? themeConfig.light;
    const isDark = currentTheme === themeConfig.dark;

    controls.forEach((control) => {
      const label = control.querySelector<HTMLElement>('[data-theme-label]');
      const darkLabel = control.dataset.labelDark ?? 'Dark';
      const lightLabel = control.dataset.labelLight ?? 'Light';
      const darkAria = control.dataset.ariaDark ?? 'Switch to dark theme';
      const lightAria = control.dataset.ariaLight ?? 'Switch to light theme';

      control.setAttribute('aria-pressed', String(isDark));
      control.setAttribute('aria-label', isDark ? lightAria : darkAria);

      if (label) {
        label.textContent = isDark ? lightLabel : darkLabel;
      }
    });
  };

  const toggleTheme = () => {
    const currentTheme = root.dataset.theme ?? themeConfig.light;
    const nextTheme = currentTheme === themeConfig.dark ? themeConfig.light : themeConfig.dark;

    root.dataset.theme = nextTheme;
    localStorage.setItem(themeConfig.storageKey, nextTheme);
    syncTheme();
  };

  controls.forEach((control) => {
    control.addEventListener('click', toggleTheme);
  });

  syncTheme();
}
