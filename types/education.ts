export interface Education {
  id: number;
  degree: string;
  specialization?: string;
  institution: string;
  university?: string;
  board?: string;

  location: string;

  startYear: string;
  endYear: string;

  score?: string;
  percentage?: string;
  cgpa?: string;
  grade?: string;

  description?: string;

  subjects?: string[];

  achievements?: string[];

  certificateUrl?: string;

  logo?: string;

  current?: boolean;
}

export interface Certification {
  id: number;

  title: string;

  issuer: string;

  issueDate: string;

  expiryDate?: string;

  credentialId?: string;

  credentialUrl?: string;

  logo?: string;

  skills?: string[];
}

export interface Course {
  id: number;

  title: string;

  provider: string;

  instructor?: string;

  duration: string;

  completedDate: string;

  description?: string;

  technologies?: string[];

  certificate?: string;

  certificateUrl?: string;
}

export interface AcademicProject {
  id: number;

  title: string;

  description: string;

  technologies: string[];

  githubUrl?: string;

  liveUrl?: string;

  startDate?: string;

  endDate?: string;
}

export interface EducationTimeline {
  education: Education[];

  certifications: Certification[];

  courses: Course[];

  projects: AcademicProject[];
}