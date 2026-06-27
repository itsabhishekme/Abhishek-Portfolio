export interface Experience {
  id: number;

  company: string;

  role: string;

  duration: string;

  startDate: string;

  endDate: string;

  location: string;

  employmentType:
    | "Full Time"
    | "Part Time"
    | "Internship"
    | "Contract"
    | "Freelance";

  description: string;

  responsibilities: string[];

  achievements: string[];

  technologies: string[];

  companyLogo?: string;

  companyWebsite?: string;

  current: boolean;
}

export interface TimelineExperience {
  id: number;

  year: string;

  title: string;

  company: string;

  location: string;

  employmentType?: string;

  description: string;

  technologies?: string[];

  achievements?: string[];

  isLeft?: boolean;
}

export interface CompanyCardProps {
  company: string;

  role: string;

  duration: string;

  location: string;

  employmentType?: string;

  description: string;

  technologies: string[];

  achievements?: string[];

  companyUrl?: string;
}

export interface ExperienceCardProps {
  company: string;

  role: string;

  duration: string;

  location: string;

  employmentType?: string;

  description: string;

  technologies: string[];

  responsibilities: string[];

  achievements?: string[];
}

export interface ExperienceSectionProps {
  experiences: Experience[];
}

export interface SkillBadge {
  id: number;

  name: string;

  icon?: string;

  color?: string;
}

export interface Company {
  id: number;

  name: string;

  logo?: string;

  website?: string;

  location: string;
}