import { defaultLang, ui, languages } from './ui';

export type Lang = keyof typeof languages;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in languages) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function stripLocaleFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] in languages) {
    const next = `/${segments.slice(1).join('/')}`;
    return next === '/' ? '/' : next.replace(/\/$/, '') || '/';
  }
  return pathname === '' ? '/' : pathname;
}

export function getLocalizedPath(lang: Lang, pathname: string) {
  const basePath = stripLocaleFromPath(pathname).replace(/\/$/, '') || '/';

  if (lang === defaultLang) {
    return basePath === '/' ? '/' : basePath;
  }

  return basePath === '/' ? `/${lang}/` : `/${lang}${basePath.startsWith('/') ? basePath : `/${basePath}`}`;
}
