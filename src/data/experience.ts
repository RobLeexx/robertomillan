import type { Lang } from '../i18n/utils';

export interface ExperienceItem {
  period: string;
  title: string;
  summary: string;
  highlights: string[];
}

const experienceByLang: Record<Lang, ExperienceItem[]> = {
  en: [
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
  ],
  es: [
    {
      period: 'Reciente',
      title: 'Desarrollador Fullstack y Odoo | Entrega de CRM en producción',
      summary:
        'Construí y desplegué un CRM personalizado en Odoo para una empresa de mudanzas, cubriendo captación de leads, lógica de presupuestos, contratos, flujos operativos e infraestructura de producción.',
      highlights: [
        'Módulos personalizados de Odoo y automatización de CRM',
        'Despliegue con Docker, PostgreSQL, Nginx y SSL',
        'Entrada de formularios desde WordPress, filtrado anti-spam y flujos documentales'
      ]
    },
    {
      period: 'Actual',
      title: 'Desarrollador Fullstack | Trabajo de producto y plataforma',
      summary:
        'He trabajado en proyectos con Django, React, TypeScript, Supabase y NestJS con foco en autenticación, estructura de producto e implementación mantenible.',
      highlights: [
        'Flujos de autenticación y roles',
        'Decisiones de arquitectura frontend y backend',
        'Implementación orientada a producto con alcance claro'
      ]
    },
    {
      period: 'Trayectoria ampliada',
      title: 'Frontend, sistemas y experimentación aplicada',
      summary:
        'He desarrollado sitios estáticos con Astro, explorado UX e interfaces, y experimentado con IA y visión por computador para fortalecer criterio de producto e ingeniería.',
      highlights: [
        'Sitios estáticos con Astro y frontend responsive',
        'Pensamiento UX y UI basado en usabilidad',
        'Experimentación aplicada con IA y visión por computador'
      ]
    }
  ]
};

export function getExperience(lang: Lang) {
  return experienceByLang[lang];
}
