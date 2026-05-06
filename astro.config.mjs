// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://robertomillan.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
