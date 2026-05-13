export interface ExperienceSpecialtyEntry {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceSpecialtySection {
  id: string;
  navLabel: string;
  title: string;
  emphasis?: 'primary' | 'standard' | 'compact';
  entries: ExperienceSpecialtyEntry[];
}

export interface ProjectAction {
  kind: 'github' | 'youtube' | 'docs' | 'unityWebgl';
  href: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
  actions?: ProjectAction[];
  videoUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ContactLink {
  id: 'email' | 'linkedin' | 'github';
  href: string;
  value: string;
  external?: boolean;
}
