export interface ExperienceItem {
  period: string;
  title: string;
  summary: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    period: 'Recent',
    title: 'Fullstack and Odoo Developer | Production CRM delivery',
    summary:
      'Built and deployed a custom Odoo CRM for a moving company, covering lead intake, quote logic, contracts, operational workflows, and production infrastructure.',
    highlights: [
      'Custom Odoo modules and CRM automation',
      'Docker, PostgreSQL, Nginx, and SSL deployment',
      'WordPress form intake, anti-spam filtering, and document workflows'
    ]
  },
  {
    period: 'Ongoing',
    title: 'Fullstack Developer | Product and platform work',
    summary:
      'Worked across Django, React, TypeScript, Supabase, and NestJS projects with a focus on authentication, product structure, and maintainable implementation.',
    highlights: [
      'Authentication and role-based flows',
      'Frontend and backend architecture decisions',
      'Product-oriented implementation with clean delivery scope'
    ]
  },
  {
    period: 'Broader practice',
    title: 'Frontend, systems, and applied experimentation',
    summary:
      'Built static Astro sites, explored UX and interface design, and experimented with AI and computer vision to strengthen product and engineering judgment.',
    highlights: [
      'Astro static sites and responsive frontend work',
      'UX and UI thinking grounded in usability',
      'Applied AI and computer vision experimentation'
    ]
  }
];
