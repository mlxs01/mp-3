export interface Education {
  school: string;
  degree: string;
  description: string;
  graduation: string;
  gpa: number;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string[];
}

export interface Certification {
  title: string;
  credentialCode?: string;
  credentialId?: string;
  certificationProvider?: string;
  obtained: string;
  expires?: string;
}