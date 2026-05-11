import type { ContactLink } from '../types/content';

export const siteConfig = {
  name: 'Roberto Millan',
  title: 'Fullstack Developer',
  defaultOrigin: 'https://robertomillan.dev',
  socialCard: '/social-card.svg',
  heroImage: {
    src: '/hero-abstract.svg',
    width: 720,
    height: 520
  },
  location: {
    locality: 'Valencia',
    country: 'ES'
  },
  themeColor: '#0b1220',
  knowsAbout: [
    'Python',
    'Django',
    'React',
    'TypeScript',
    'Odoo',
    'PostgreSQL',
    'Docker',
    'Astro'
  ]
} as const;

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    href: 'mailto:hello@robertomillan.dev',
    value: 'hello@robertomillan.dev'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com',
    value: 'LinkedIn profile',
    external: true
  },
  {
    id: 'github',
    href: 'https://github.com',
    value: 'GitHub profile',
    external: true
  }
];
