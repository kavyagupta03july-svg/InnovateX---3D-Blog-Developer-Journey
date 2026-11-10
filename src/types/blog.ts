export type BlogCategory = 
  | 'All Articles'
  | 'Development Journey'
  | 'Technology'
  | 'Internships'
  | 'Hackathons'
  | 'Job Opportunities'
  | 'Student Projects'
  | 'Founder Stories'
  | 'Product Updates';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  shortDescription: string;
  coverImage: string;
  coverAlt: string;
  fullContent: string;
  author: {
    name: string;
    role: string;
    education: string;
  };
  publicationDate: string;
  readingTime: string;
  tags: string[];
  publicationStatus: 'published' | 'draft';
  isFeatured: boolean;
  tableOfContents?: { id: string; title: string }[];
}

export interface TimelineMilestone {
  day: string;
  phaseTitle: string;
  isPhaseRange?: boolean;
  title: string;
  description: string;
  highlights: string[];
  lessonsLearned?: string;
  technicalDetails?: string[];
  status: 'completed' | 'in_progress' | 'deployed';
}

export interface ChallengeItem {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  engineeringTakeaway: string;
}

export interface OpportunityItem {
  id: string;
  type: 'internship' | 'hackathon' | 'job';
  title: string;
  organization: string;
  mode: 'Remote' | 'Hybrid' | 'On-site';
  targetYear: string;
  description: string;
  eligibility: string;
  tags: string[];
  deadlineOrDate: string;
  applyUrl?: string;
}

export type FeedbackCategory =
  | 'Website loading and performance'
  | 'Server errors'
  | 'Login and registration'
  | 'User interface and design'
  | 'Navigation'
  | 'Internship and job opportunities'
  | 'Project collaboration'
  | 'Missing features'
  | 'General suggestions';

export interface FeedbackSubmission {
  id?: string;
  category: FeedbackCategory;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  browserInfo?: string;
}
