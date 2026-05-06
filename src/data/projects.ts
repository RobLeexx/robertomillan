export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
}

export const projects: ProjectItem[] = [
  {
    title: 'Mudanzas Willy CRM',
    summary:
      'Production Odoo CRM for a moving company with custom quote logic, contract generation, electronic signature flow, lead ingestion, anti-spam filtering, and Dockerized deployment.',
    stack: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Nginx']
  },
  {
    title: 'Recruitment Platform Architecture',
    summary:
      'Product and technical architecture work for a recruitment platform using Supabase, Next.js, and NestJS, focused on authentication, role-aware flows, and scalable delivery decisions.',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Supabase']
  },
  {
    title: 'Astro Portfolio and Static Site Delivery',
    summary:
      'Static-first frontend work with Astro, focused on performance, clean content structure, responsive design, and maintainable presentation for portfolio-style websites.',
    stack: ['Astro', 'TypeScript', 'CSS', 'Cloudflare Pages']
  }
];
