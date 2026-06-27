export interface ProjectLink {
  github: string;
  live?: string;
  documentation?: string;
}

export interface ProjectFeature {
  id: number;
  title: string;
  description: string;
}

export interface ProjectTechnology {
  name: string;
  icon?: string;
  color?: string;
}

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProjectStat {
  label: string;
  value: string | number;
}

export interface Project {
  id: number;

  title: string;

  slug: string;

  subtitle?: string;

  description: string;

  longDescription?: string;

  image: string;

  gallery?: ProjectImage[];

  category:
    | "DevOps"
    | "Automation"
    | "Web Development"
    | "Cloud"
    | "Open Source"
    | "Personal";

  status:
    | "Completed"
    | "In Progress"
    | "Planned";

  technologies: string[];

  techStack?: ProjectTechnology[];

  features?: ProjectFeature[];

  stats?: ProjectStat[];

  links: ProjectLink;

  featured: boolean;

  openSource: boolean;

  startDate?: string;

  endDate?: string;

  duration?: string;

  teamSize?: number;

  role?: string;

  client?: string;

  challenges?: string[];

  learnings?: string[];

  achievements?: string[];

  order?: number;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectGridProps {
  projects: Project[];
}

export interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export interface GithubButtonProps {
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  showStats?: boolean;
}

export type ProjectCategory =
  | "All"
  | "DevOps"
  | "Automation"
  | "Web Development"
  | "Cloud"
  | "Open Source"
  | "Personal";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned";