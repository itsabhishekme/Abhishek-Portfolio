import { ReactNode } from "react";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Cloud"
  | "Automation"
  | "Testing"
  | "Programming"
  | "Database"
  | "Tools"
  | "Version Control"
  | "Operating System"
  | "CI/CD"
  | "Monitoring"
  | "Other";

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export interface Skill {
  id: number;

  name: string;

  category: SkillCategory;

  level: SkillLevel;

  percentage: number;

  experience?: string;

  description?: string;

  color?: string;

  icon?: ReactNode;

  featured?: boolean;
}

export interface SkillGroup {
  title: string;

  description?: string;

  skills: Skill[];
}

export interface SkillSection {
  heading: string;

  subHeading?: string;

  groups: SkillGroup[];
}

export interface TechStack {
  frontend: Skill[];

  backend: Skill[];

  devops: Skill[];

  cloud: Skill[];

  automation: Skill[];

  testing: Skill[];

  database: Skill[];

  tools: Skill[];
}

export interface SkillCardProps {
  skill: Skill;
}

export interface SkillGridProps {
  title?: string;

  skills: Skill[];
}

export interface ProgressBarProps {
  percentage: number;

  label?: string;

  color?: string;

  animated?: boolean;

  showPercentage?: boolean;
}

export interface TechStackProps {
  title?: string;

  skills: Skill[];
}

export interface SkillFilter {
  category: SkillCategory | "All";

  search?: string;
}

export interface SkillStatistics {
  totalSkills: number;

  expert: number;

  advanced: number;

  intermediate: number;

  beginner: number;
}