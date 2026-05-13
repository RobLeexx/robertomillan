import type { Lang } from '../i18n/utils';
import type { ProjectItem } from '../types/content';
import appImage from '../../static/projects/app.png';
import crmImage from '../../static/projects/crm.png';
import gameImage from '../../static/projects/game.png';

const exampleVideoUrl = 'https://www.youtube.com/embed/ZPVJQlDZlwo?autoplay=1&rel=0&modestbranding=1';
const exampleYoutubeUrl = 'https://www.youtube.com/shorts/ZPVJQlDZlwo';
const workahoricVideoUrl = 'https://www.youtube.com/embed/QuYKSTyoO8c?autoplay=1&rel=0&modestbranding=1';
const workahoricYoutubeUrl = 'https://www.youtube.com/shorts/QuYKSTyoO8c';
const masitasDemoUrl = 'https://robleexx.github.io/Masitas';

const projectsByLang: Record<Lang, ProjectItem[]> = {
  en: [
    {
      title: 'Odoo CRM',
      summary:
        'Production Odoo CRM for a moving company with custom quote logic, contract generation, electronic signature flow, lead ingestion, anti-spam filtering, and Dockerized deployment.',
      stack: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'Spec-Driven Development'],
      actions: [
        { kind: 'youtube', href: exampleYoutubeUrl }
      ],
      videoUrl: exampleVideoUrl,
      imageSrc: crmImage.src,
      imageAlt: 'Odoo CRM project preview',
      imageWidth: 1913,
      imageHeight: 940
    },
    {
      title: 'Atenea: AI in Forensics',
      summary:
        'This project is an intelligent web-based system designed to support criminal investigation processes through advanced image analysis and data management with TensorFlow and GAN AI. Built with a Django backend and React frontend architecture, it integrates multiple specialized modules to streamline forensic workflows.',
      stack: ['Django', 'React', 'TypeScript', 'TensorFlow', 'GAN', 'AI', 'Artificial Vision', 'Criminal Analysis'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/Atenea' },
        { kind: 'youtube', href: exampleYoutubeUrl }
      ],
      videoUrl: exampleVideoUrl
    },
    {
      title: 'WorkaHoric',
      summary:
        'WorkaHoric is a mobile productivity and financial tracking app built with React Native, Expo, and TypeScript. It helps hourly workers and freelancers manage projects, track worked hours, estimate monthly income, monitor paydays, holidays, and work projections through an interactive calendar-based interface. The app also lays the foundation for future personal finance features, including expense tracking and automated payment analysis.',
      stack: ['React Native', 'Expo', 'TypeScript', 'i18n'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/WorkaHoric' },
        { kind: 'youtube', href: workahoricYoutubeUrl }
      ],
      videoUrl: workahoricVideoUrl,
      imageSrc: appImage.src,
      imageAlt: 'WorkaHoric app preview',
      imageWidth: 1448,
      imageHeight: 1086
    },
    {
      title: 'Canes',
      summary:
        'Police georeferencing system for monitoring and tracking dangerous breed dogs with online QR certification for proper training and instruction of dogs with dangerous characteristics according to Law 533 of Bolivia.',
      stack: ['Vue', 'JavaScript', 'Laravel', 'Inertia', 'QR/PDF', 'Nginx', 'Docker', 'MapsGL'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/WorkaHoric' },
        { kind: 'youtube', href: exampleYoutubeUrl },
        { kind: 'docs', href: 'https://sea.gob.bo/digesto/CompendioII/I/60_L_553.pdf' }
      ],
      videoUrl: exampleVideoUrl
    },
    {
      title: 'Masitas',
      summary:
        'Web and desktop video game made with Unity about a masa looking for meat to become the famous Bolivian "salteña".',
      stack: ['Unity', 'WebGL 2.0', 'GitHub Pages', 'HTML/CSS', 'WebAssembly'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/Masitas' },
        { kind: 'unityWebgl', href: masitasDemoUrl }
      ],
      demoUrl: masitasDemoUrl,
      imageSrc: gameImage.src,
      imageAlt: 'Masitas game preview',
      imageWidth: 962,
      imageHeight: 656
    }
  ],
  es: [
    {
      title: 'Odoo CRM',
      summary:
        'CRM productivo en Odoo para una empresa de mudanzas con lógica personalizada de presupuestos, generación de contratos, firma electrónica, entrada de leads, filtrado anti-spam y despliegue con Docker.',
      stack: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'Spec-Driven Development'],
      actions: [
        { kind: 'youtube', href: exampleYoutubeUrl }
      ],
      videoUrl: exampleVideoUrl,
      imageSrc: crmImage.src,
      imageAlt: 'Vista previa del proyecto Odoo CRM',
      imageWidth: 1913,
      imageHeight: 940
    },
    {
      title: 'Atenea: IA Forense',
      summary:
        'Proyecto web inteligente diseñado para apoyar procesos de investigación criminal mediante análisis avanzado de imágenes y gestión de datos con IA basada en TensorFlow y GAN. Construido con una arquitectura de backend en Django y frontend en React, integra múltiples módulos especializados para optimizar flujos de trabajo forense.',
      stack: ['Django', 'React', 'TypeScript', 'TensorFlow', 'GAN', 'IA', 'Visión Artificial', 'Análisis Criminal'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/Atenea' },
        { kind: 'youtube', href: exampleYoutubeUrl }
      ],
      videoUrl: exampleVideoUrl
    },
    {
      title: 'WorkaHoric',
      summary:
        'WorkaHoric es una aplicación móvil de productividad y seguimiento financiero construida con React Native, Expo y TypeScript. Ayuda a trabajadores por hora y freelancers a gestionar proyectos, registrar horas trabajadas, estimar ingresos mensuales, monitorear días de pago, feriados y proyecciones laborales mediante una interfaz interactiva basada en calendario. La app también deja la base para futuras funciones de finanzas personales, incluyendo seguimiento de gastos y análisis automático de pagos.',
      stack: ['React Native', 'Expo', 'TypeScript', 'i18n'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/WorkaHoric' },
        { kind: 'youtube', href: workahoricYoutubeUrl }
      ],
      videoUrl: workahoricVideoUrl,
      imageSrc: appImage.src,
      imageAlt: 'Vista previa de la app WorkaHoric',
      imageWidth: 1448,
      imageHeight: 1086
    },
    {
      title: 'Canes',
      summary:
        'Sistema policial de georreferenciación para monitoreo y seguimiento de perros de raza peligrosa con certificación QR en línea para el correcto adiestramiento e instrucción de perros con características peligrosas según la Ley 533 de Bolivia.',
      stack: ['Vue', 'JavaScript', 'Laravel', 'Inertia', 'QR/PDF', 'Nginx', 'Docker', 'MapsGL'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/WorkaHoric' },
        { kind: 'youtube', href: exampleYoutubeUrl },
        { kind: 'docs', href: 'https://sea.gob.bo/digesto/CompendioII/I/60_L_553.pdf' }
      ],
      videoUrl: exampleVideoUrl
    },
    {
      title: 'Masitas',
      summary:
        'Videojuego web y de escritorio hecho con Unity sobre una masa que busca carne para convertirse en la famosa "salteña" boliviana.',
      stack: ['Unity', 'WebGL 2.0', 'GitHub Pages', 'HTML/CSS', 'WebAssembly'],
      actions: [
        { kind: 'github', href: 'https://github.com/RobLeexx/Masitas' },
        { kind: 'unityWebgl', href: masitasDemoUrl }
      ],
      demoUrl: masitasDemoUrl,
      imageSrc: gameImage.src,
      imageAlt: 'Vista previa del juego Masitas',
      imageWidth: 962,
      imageHeight: 656
    }
  ]
};

export function getProjects(lang: Lang) {
  return projectsByLang[lang];
}
