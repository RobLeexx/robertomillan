import type { Lang } from '../i18n/utils';

export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
}

const projectsByLang: Record<Lang, ProjectItem[]> = {
  en: [
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
  ],
  es: [
    {
      title: 'CRM de Mudanzas Willy',
      summary:
        'CRM en Odoo en producción para una empresa de mudanzas con lógica personalizada de presupuestos, generación de contratos, firma electrónica, entrada de leads, filtrado anti-spam y despliegue con Docker.',
      stack: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Nginx']
    },
    {
      title: 'Arquitectura de Plataforma de Reclutamiento',
      summary:
        'Trabajo de arquitectura funcional y técnica para una plataforma de reclutamiento con Supabase, Next.js y NestJS, centrado en autenticación, flujos por rol y decisiones escalables de entrega.',
      stack: ['Next.js', 'TypeScript', 'NestJS', 'Supabase']
    },
    {
      title: 'Entrega de Portafolios y Sitios Estáticos con Astro',
      summary:
        'Trabajo frontend static-first con Astro, enfocado en rendimiento, estructura limpia de contenido, diseño responsive y una presentación fácil de mantener para sitios tipo portfolio.',
      stack: ['Astro', 'TypeScript', 'CSS', 'Cloudflare Pages']
    }
  ]
};

export function getProjects(lang: Lang) {
  return projectsByLang[lang];
}
