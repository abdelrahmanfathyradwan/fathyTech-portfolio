export type ProjectCategory =
  | "All"
  | "Web Applications"
  | "Dashboards"
  | "E-commerce"
  | "SEO"
  | "Automation"
  | "Education";

export interface CaseStudyData {
  problem: string;
  problemAr: string;
  objective: string;
  objectiveAr: string;
  contribution: string;
  contributionAr: string;
  solution: string[];
  solutionAr: string[];
  result?: string;
  resultAr?: string;
  verificationNote?: string;
  verificationNoteAr?: string;
}

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  category: Exclude<ProjectCategory, "All">;
  technologies: string[];
  featured: boolean;
  status: "published" | "draft" | "pending-verification";
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudyData;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  readingTime: number;
  status: "published" | "draft";
  publishedDate?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  deliverables: string[];
  deliverablesAr: string[];
}

export interface ExperienceItem {
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  type: "Full-time" | "Training" | "Freelance" | "Education";
  typeAr: string;
  verificationStatus?: "confirmed" | "draft-verification-needed";
  highlights: string[];
  highlightsAr: string[];
}

