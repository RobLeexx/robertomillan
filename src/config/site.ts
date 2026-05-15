import type { ContactLink } from '../types/content';

export const siteConfig = {
  name: 'Roberto Mill\u00e1n',
  title: 'Fullstack Developer',
  defaultOrigin: 'https://robertomillan.dev',
  socialCard: '/social-card.svg',
  location: {
    locality: 'Valencia',
    country: 'ES'
  },
  themeColor: '#0E3746',
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
    href: 'mailto:rc_millan@outlook.com',
    value: 'rc_millan@outlook.com'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com',
    value: 'LinkedIn profile',
    external: true
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com',
    value: 'Instagram profile',
    external: true
  },
  {
    id: 'whatsapp',
    href: 'https://www.whatsapp.com/',
    value: 'WhatsApp',
    external: true
  }
];
