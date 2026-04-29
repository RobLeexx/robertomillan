import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cog,
  Database,
  FileText,
  Globe,
  LayoutDashboard,
  Mail,
  MonitorCog,
  Rocket,
  ScanSearch,
  Server,
  ShieldCheck,
  Sparkles,
  Waypoints,
  Workflow,
  Wrench
} from 'lucide-static';

export interface NavItem {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  summary: string;
  impact: string;
  href: string;
  label: string;
  stack: string[];
}

export interface Service {
  title: string;
  icon: string;
  summary: string;
  idealFor: string;
  deliverables: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface TestimonialPlaceholder {
  title: string;
  quote: string;
}

export const siteMeta = {
  name: 'Roberto Millan',
  defaultTitle: 'Fullstack Developer building CRM, automation, and business software',
  description:
    'Portfolio for a Fullstack Developer focused on React, TypeScript, Django, Odoo CRM customization, business automation, and production-ready deployments.',
  longDescription:
    'Fullstack Developer building CRM systems, operational dashboards, and automation workflows for service companies using React, TypeScript, Django, Python, Odoo, Docker, PostgreSQL, and VPS infrastructure.',
  fallbackSiteUrl: 'https://example.com',
  ogImage: '/social-card.svg',
  email: 'hello@robertomillan.dev',
  location: 'Remote from Spain, available worldwide'
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export const heroHighlights = [
  'React + TypeScript frontend systems',
  'Django and Python backends',
  'Odoo CRM customization',
  'Deployment and automation'
];

export const heroStats = [
  { value: 'CRM + ERP', label: 'Custom workflows for service businesses' },
  { value: 'Fullstack delivery', label: 'From UI to deployment and maintenance' },
  { value: 'Automation-first', label: 'Reduce manual admin and follow-up work' }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: Database,
    items: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Business logic design']
  },
  {
    title: 'Frontend',
    icon: LayoutDashboard,
    items: ['React', 'TypeScript', 'Astro', 'Accessible UI', 'Design systems']
  },
  {
    title: 'ERP / CRM',
    icon: BriefcaseBusiness,
    items: ['Odoo customization', 'Lead workflows', 'Contracts', 'Document generation', 'Integrations']
  },
  {
    title: 'DevOps',
    icon: Server,
    items: ['Docker', 'Linux VPS', 'Nginx', 'CI-friendly builds', 'Deployment hardening']
  },
  {
    title: 'Automation',
    icon: Workflow,
    items: ['Python scripts', 'Duplicate detection', 'Email flows', 'WhatsApp workflows', 'Process optimization']
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: ['Workflow augmentation', 'Prompt-driven helpers', 'Data extraction', 'Practical AI tooling']
  }
];

export const projects: Project[] = [
  {
    title: 'Django + React operations portal',
    summary:
      'A custom web app for managing day-to-day operational data, statuses, internal notes, and document flows with a clean React interface.',
    impact: 'Gives teams one shared source of truth instead of spreadsheets and fragmented tools.',
    href: '/contact',
    label: 'Internal tooling',
    stack: ['Django', 'React', 'TypeScript', 'PostgreSQL']
  },
  {
    title: 'Automation toolkit for service workflows',
    summary:
      'A collection of Python automations for repetitive admin work, document processing, validation rules, and follow-up tasks.',
    impact: 'Reduces manual handling and improves process consistency across teams.',
    href: '/services',
    label: 'Automation',
    stack: ['Python', 'APIs', 'Task automation', 'Reporting']
  },
  {
    title: 'Deployment-ready business platforms',
    summary:
      'Production deployments for business software on VPS infrastructure with Docker, environment management, backups, and secure delivery.',
    impact: 'Ships custom systems with fewer handoff gaps between development and operations.',
    href: '/about',
    label: 'Infrastructure',
    stack: ['Docker', 'VPS', 'Linux', 'PostgreSQL']
  }
];

export const services: Service[] = [
  {
    title: 'Odoo CRM customization',
    icon: MonitorCog,
    summary:
      'Tailored CRM workflows for service businesses that need custom modules, better lead handling, documents, or integrations.',
    idealFor: 'Companies that have outgrown default CRM flows.',
    deliverables: ['Custom models and views', 'Lead stages and automations', 'Document / PDF workflows', 'Integration planning']
  },
  {
    title: 'Django + React product delivery',
    icon: Rocket,
    summary:
      'End-to-end development of internal tools or client-facing platforms with modern frontend UX and maintainable backend architecture.',
    idealFor: 'Founders or teams that need a reliable fullstack builder.',
    deliverables: ['Product scoping', 'Frontend implementation', 'Backend APIs', 'Production deployment']
  },
  {
    title: 'Business process automation',
    icon: Wrench,
    summary:
      'Automation for repetitive workflows, communication loops, and operational bottlenecks using Python, APIs, and practical business logic.',
    idealFor: 'Teams losing time to manual coordination and duplicated data entry.',
    deliverables: ['Workflow mapping', 'Automation scripts', 'Data validation', 'Operational dashboards']
  },
  {
    title: 'Technical cleanup and platform hardening',
    icon: ShieldCheck,
    summary:
      'Improve performance, reliability, and deployment confidence for existing business software without rebuilding from scratch.',
    idealFor: 'Teams with a useful product that now needs structure and polish.',
    deliverables: ['Codebase review', 'Performance tuning', 'Deployment cleanup', 'Maintainability improvements']
  }
];

export const testimonials: TestimonialPlaceholder[] = [
  {
    title: 'Operations reference',
    quote: 'Testimonial placeholder: client references for CRM and process automation work can be shared in private conversations.'
  },
  {
    title: 'Technical collaboration',
    quote: 'Testimonial placeholder: references for freelance or embedded product work can be provided on request.'
  }
];

export const aboutPillars = [
  {
    title: 'Business-first engineering',
    icon: Blocks,
    body: 'I focus on workflows, bottlenecks, and real operational outcomes instead of building software that looks polished but stays disconnected from day-to-day work.'
  },
  {
    title: 'Comfortable across the stack',
    icon: Waypoints,
    body: 'I can move between frontend UX, Django or Odoo backend work, integrations, deployment, and process design without losing the thread of the product.'
  },
  {
    title: 'Clear, low-friction collaboration',
    icon: Sparkles,
    body: 'I work well with founders, operators, and technical teams who want someone pragmatic, communicative, and able to ship with ownership.'
  }
];

export const processSteps = [
  {
    title: 'Audit the workflow',
    icon: ScanSearch,
    body: 'Map where leads, documents, approvals, and handoffs break down.'
  },
  {
    title: 'Design the operating model',
    icon: Cog,
    body: 'Turn business rules into clear system behavior, data structures, and UI flows.'
  },
  {
    title: 'Build and integrate',
    icon: Bot,
    body: 'Implement the interfaces, backend logic, automation hooks, and deployment path.'
  },
  {
    title: 'Launch and refine',
    icon: BadgeCheck,
    body: 'Stabilize the workflow with feedback loops, fixes, and careful iteration.'
  }
];

export const contactChannels = [
  {
    title: 'Email',
    icon: Mail,
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}?subject=Project%20Inquiry`
  },
  {
    title: 'Best fit',
    icon: FileText,
    value: 'Remote freelance, part-time, or full-time product work',
    href: '/services'
  },
  {
    title: 'Primary markets',
    icon: Globe,
    value: 'Service companies, operations-heavy teams, and custom business software projects',
    href: '/projects'
  }
];

export const structuredDataKnowAbout = [
  'React',
  'TypeScript',
  'Django',
  'Python',
  'Odoo',
  'CRM customization',
  'Business process automation',
  'Docker',
  'PostgreSQL',
  'VPS deployment'
];

export const callToAction = {
  title: 'Need a developer who can translate business operations into working software?',
  body: 'I help service businesses and product teams ship CRM workflows, automation systems, and maintainable fullstack applications.',
  primaryLabel: 'Start a conversation',
  primaryHref: `mailto:${siteMeta.email}?subject=Let%27s%20build%20something`,
  secondaryLabel: 'See the case study',
  secondaryHref: '/case-studies/moving-company-crm'
};

export const availabilityNote =
  'Open to part-time, remote freelance, and selected full-time opportunities focused on CRM, automation, or fullstack delivery.';

export const genericLinkIcon = ArrowUpRight;
