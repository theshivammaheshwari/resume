export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string;
}

export interface Certification {
  title: string;
  period: string;
  description: string;
}

export interface Volunteering {
  title: string;
  period: string;
  role: string;
  responsibilities: string[];
}