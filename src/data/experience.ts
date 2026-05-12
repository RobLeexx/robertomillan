import type { Lang } from '../i18n/utils';
import type { ExperienceSpecialtySection } from '../types/content';

const experienceByLang: Record<Lang, ExperienceSpecialtySection[]> = {
  en: [
    {
      id: 'crm-automation',
      navLabel: 'CRM & Automation',
      title: 'CRM & Automation',
      emphasis: 'primary',
      entries: [
        {
          title: 'Mudanzas Willy — Odoo CRM Developer',
          subtitle: 'Production CRM and business workflow automation',
          period: '2026 - Present',
          location: 'Spain',
          summary:
            "Custom Odoo CRM implementation designed around a moving company's real commercial and operational workflow.",
          highlights: [
            'CRM customization, quotation flows, and contract generation',
            'PDF systems, lead management, and spam detection',
            'Digital signatures, identity validation, and email integrations',
            'Operational workflow modeling with Docker and VPS deployment'
          ],
          stack: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'VPS', 'Automation']
        }
      ]
    },
    {
      id: 'fullstack-backend',
      navLabel: 'Fullstack Development',
      title: 'Fullstack Development',
      entries: [
        {
          title: 'Banco Solidario — Fullstack Developer',
          subtitle: 'Enterprise platform delivery across frontend and backend',
          period: '2025',
          location: 'Bolivia',
          summary:
            'Worked across frontend and backend-aligned enterprise delivery with a strong focus on architecture, interfaces, APIs, and integration discipline.',
          highlights: [
            'React, Next.js, and TypeScript application delivery',
            'Atomic Design, Tailwind, MUI, and Vuetify component systems',
            '.NET services, Ardalis architecture, and Entity Framework',
            'REST APIs, authentication systems, backend integrations, Docker, and Azure DevOps workflow'
          ],
          stack: ['React', 'Next.js', 'TypeScript', '.NET', 'Entity Framework', 'Docker', 'Azure DevOps']
        },
        {
          title: 'Jalasoft — Fullstack Developer Intern',
          subtitle: 'Enterprise engineering foundation',
          period: '2022',
          location: 'Bolivia',
          summary:
            'Early enterprise experience across structured software delivery, reusable frontend systems, and service-oriented engineering practices.',
          highlights: [
            'Spring Boot and microservice-oriented development exposure',
            'React, TypeScript, Storybook, and microfrontend workflows',
            'Team-based engineering foundations and maintainable architecture'
          ],
          stack: ['Spring Boot', 'React', 'TypeScript', 'Storybook', 'Microservices', 'Microfrontends', 'MapGL APIs']
        },
        {
          title: 'National Directorate of Technology and Telematics',
          subtitle: 'Fullstack internal systems delivery',
          period: '2021',
          location: 'Bolivia',
          summary:
            'Built internal business software features across backend flows, data handling, document generation, and interface integration.',
          highlights: [
            'Laravel, Vue, and Inertia implementation',
            'PostgreSQL, MySQL, and backend data workflows',
            'QR, PDF, and mapping-related integrations'
          ],
          stack: ['Laravel', 'Vue', 'Inertia', 'PostgreSQL', 'MySQL', 'QR/PDF']
        }
      ]
    },
    {
      id: 'ai-computer-vision',
      navLabel: 'AI & Computer Vision',
      title: 'AI & Computer Vision',
      entries: [
        {
          title: 'FELCC Public Safety Collaboration',
          subtitle: 'Applied AI and fullstack engineering project',
          period: '2023 - 2024',
          location: 'Bolivia',
          summary:
            'Real-world applied AI engineering collaboration for public safety workflows, combining fullstack delivery with computer vision and investigation-focused software.',
          highlights: [
            'Django APIs, React + TypeScript frontend, PostgreSQL, and Docker',
            'TensorFlow experimentation, facial recognition, and image analysis pipelines',
            'AI-assisted investigation systems in an institutional software context'
          ],
          stack: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'TensorFlow', 'Computer Vision']
        }
      ]
    },
    {
      id: 'consulting-freelance',
      navLabel: 'Consulting & Freelance',
      title: 'Consulting & Freelance',
      emphasis: 'compact',
      entries: [
        {
          title: 'Consulting Academy',
          subtitle: 'Automation and business support tooling',
          period: '2025',
          location: 'Bolivia / Remote',
          summary:
            'Rapid consulting delivery for automation-heavy workflows and lightweight operational tooling.',
          highlights: [
            'Python automation and Selenium scraping',
            'API integrations and business support systems',
            'Fast delivery for external consulting needs'
          ],
          stack: ['Python', 'Selenium', 'APIs', 'Automation', 'Business Tools']
        },
        {
          title: 'Blockchain Consultora',
          subtitle: 'Interfaces for external consulting projects',
          period: '2024',
          location: 'Bolivia',
          summary:
            'Client-facing interface delivery for compact consulting projects with an emphasis on speed, clarity, and integration readiness.',
          highlights: [
            'React interfaces and Tailwind implementation',
            'Lightweight backend-aware UI delivery',
            'Rapid consulting workflows for business software'
          ],
          stack: ['React', 'Tailwind', 'TypeScript', 'UI Delivery', 'Consulting', 'Next.js', 'Ecommerce']
        }
      ]
    },
    {
      id: 'volunteer-experience',
      navLabel: 'Volunteer Experience',
      title: 'Volunteer Experience',
      emphasis: 'compact',
      entries: [
        {
          title: 'TEDxUMSA',
          subtitle: 'Graphic Design & Creative Support',
          period: '2024',
          location: 'Bolivia',
          summary:
            'Creative collaboration supporting event visuals, design consistency, and multidisciplinary communication workflows.',
          highlights: [
            'Graphic design collaboration and event visual support',
            'Figma, FigJam, and Adobe-based creative workflows',
            'Visual communication, teamwork, and design-system thinking'
          ],
          stack: ['Figma', 'FigJam', 'Illustrator', 'Photoshop', 'Design Systems']
        }
      ]
    }
  ],
  es: [
    {
      id: 'crm-automation',
      navLabel: 'CRM y Automatización',
      title: 'CRM y Automatización',
      emphasis: 'primary',
      entries: [
        {
          title: 'Mudanzas Willy — Desarrollador Odoo CRM',
          subtitle: 'CRM productivo y automatización de flujos de negocio',
          period: '2026 - Actualidad',
          location: 'España',
          summary:
            'Implementación personalizada de Odoo CRM construida alrededor del flujo comercial y operativo real de una empresa de mudanzas.',
          highlights: [
            'Personalización CRM, flujos de cotización y generación de contratos',
            'Sistemas PDF, gestión de leads y detección de spam',
            'Firmas digitales, validación de identidad e integraciones de correo electrónico',
            'Modelado operativo con Docker y despliegue en VPS'
          ],
          stack: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'VPS', 'Automatización']
        }
      ]
    },
    {
      id: 'fullstack-backend',
      navLabel: 'Desarrollo Fullstack',
      title: 'Desarrollo Fullstack',
      entries: [
        {
          title: 'Banco Solidario — Desarrollador Fullstack',
          subtitle: 'Entrega de plataforma empresarial en frontend y backend',
          period: '2025',
          location: 'Bolivia',
          summary:
            'Trabajo orientado a entrega empresarial con foco en arquitectura, interfaces, APIs y disciplina de integración entre frontend y backend.',
          highlights: [
            'Entrega con React, Next.js y TypeScript',
            'Sistemas de componentes con Atomic Design, Tailwind, MUI y Vuetify',
            'Servicios .NET, arquitectura Ardalis y Entity Framework',
            'REST APIs, autenticación, integraciones backend, Docker y flujo con Azure DevOps'
          ],
          stack: ['React', 'Next.js', 'TypeScript', '.NET', 'Entity Framework', 'Docker', 'Azure DevOps']
        },
        {
          title: 'Jalasoft — Becario Fullstack',
          subtitle: 'Base de ingeniería empresarial',
          period: '2022',
          location: 'Bolivia',
          summary:
            'Experiencia temprana en un entorno profesional con foco en entrega estructurada, sistemas reutilizables y prácticas de ingeniería orientadas a servicios.',
          highlights: [
            'Exposición a Spring Boot y desarrollo orientado a microservicios',
            'React, TypeScript, Storybook y flujos de microfrontends',
            'Base de arquitectura mantenible, trabajo de equipo y APIs de mapas con Mapbox y MapLibre'
          ],
          stack: ['Spring Boot', 'React', 'TypeScript', 'Storybook', 'Microservices', 'Microfrontends', 'MapGL APIs']
        },
        {
          title: 'Dirección Nacional de Tecnología y Telemática',
          subtitle: 'Entrega fullstack de sistemas internos',
          period: '2021',
          location: 'Bolivia',
          summary:
            'Desarrollo de funcionalidades internas para software de negocio en flujos backend, manejo de datos, documentos e integraciones de interfaz.',
          highlights: [
            'Implementación con Laravel, Vue e Inertia',
            'PostgreSQL, MySQL y flujos de datos backend',
            'Integraciones con QR, PDF y mapas'
          ],
          stack: ['Laravel', 'Vue', 'Inertia', 'PostgreSQL', 'MySQL', 'QR/PDF']
        }
      ]
    },
    {
      id: 'ai-computer-vision',
      navLabel: 'IA y Visión Artificial',
      title: 'IA y Visión por Computador',
      entries: [
        {
          title: 'Colaboración de Seguridad Pública con FELCC',
          subtitle: 'Proyecto aplicado de IA e ingeniería fullstack',
          period: '2023 - 2024',
          location: 'Bolivia',
          summary:
            'Colaboración real de ingeniería aplicada para flujos de seguridad pública, combinando entrega fullstack con visión por computador y software de apoyo investigativo.',
          highlights: [
            'APIs con Django, frontend React + TypeScript, PostgreSQL y Docker',
            'TensorFlow, reconocimiento facial y pipelines de análisis de imagen',
            'Sistemas asistidos por IA en un contexto institucional'
          ],
          stack: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'TensorFlow', 'Visión por Computador']
        }
      ]
    },
    {
      id: 'consulting-freelance',
      navLabel: 'Consultoría y Freelance',
      title: 'Consultoría y Freelance',
      emphasis: 'compact',
      entries: [
        {
          title: 'Consulting Academy',
          subtitle: 'Automatización y herramientas de soporte de negocio',
          period: '2025',
          location: 'Bolivia / Remoto',
          summary:
            'Entrega rápida para flujos de consultoría enfocados en automatización y tooling operativo ligero.',
          highlights: [
            'Automatización en Python y scraping con Selenium',
            'Integraciones API y sistemas de soporte de negocio',
            'Implementación ágil para necesidades externas de consultoría'
          ],
          stack: ['Python', 'Selenium', 'APIs', 'Automatización', 'Business Tools']
        },
        {
          title: 'Blockchain Consultora',
          subtitle: 'Interfaces para proyectos externos de consultoría',
          period: '2024',
          location: 'Bolivia',
          summary:
            'Entrega de interfaces para proyectos compactos de consultoría, con foco en velocidad, claridad y preparación para integraciones.',
          highlights: [
            'Interfaces con React e implementación con Tailwind',
            'Entrega UI ligera con conciencia backend',
            'Flujos rápidos para software de negocio'
          ],
          stack: ['React', 'Tailwind', 'TypeScript', 'UI Delivery', 'Consulting', 'Next.js', 'Ecommerce']
        }
      ]
    },
    {
      id: 'volunteer-experience',
      navLabel: 'Experiencia Voluntaria',
      title: 'Experiencia Voluntaria',
      emphasis: 'compact',
      entries: [
        {
          title: 'TEDxUMSA',
          subtitle: 'Diseño Gráfico y Soporte Creativo',
          period: '2024',
          location: 'Bolivia',
          summary:
            'Colaboración creativa enfocada en piezas visuales para eventos, coherencia de diseño y flujos de comunicación multidisciplinarios.',
          highlights: [
            'Colaboración en diseño gráfico y soporte visual para eventos',
            'Flujos creativos con Figma, FigJam y herramientas Adobe',
            'Comunicación visual, trabajo en equipo y pensamiento de design systems'
          ],
          stack: ['Figma', 'FigJam', 'Illustrator', 'Photoshop', 'Design Systems']
        }
      ]
    }
  ]
};

export function getExperience(lang: Lang) {
  return experienceByLang[lang];
}
