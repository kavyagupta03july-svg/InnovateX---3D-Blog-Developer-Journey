export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'DevOps & Tooling';
  roleInInnovateX: string;
  tagline: string;
  verifiedInCodebase: boolean;
}

export const techStackData: TechItem[] = [
  {
    name: 'React.js',
    category: 'Frontend',
    roleInInnovateX: 'Core component UI hierarchy, reactive hooks, and dynamic route rendering.',
    tagline: 'Modern declarative frontend architecture',
    verifiedInCodebase: true,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    roleInInnovateX: 'Strict type safety across collaboration requests, blog articles, and auth payloads.',
    tagline: 'End-to-end type safety & IDE confidence',
    verifiedInCodebase: true,
  },
  {
    name: 'JavaScript (ESNext)',
    category: 'Frontend',
    roleInInnovateX: 'Modern web standards, asynchronous promises, and browser API integrations.',
    tagline: 'Native web platform execution',
    verifiedInCodebase: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    roleInInnovateX: 'Utility-first 3D perspectives, glassmorphism surfaces, and responsive breakpoints.',
    tagline: 'High-performance zero-runtime design system',
    verifiedInCodebase: true,
  },
  {
    name: 'Firebase Authentication',
    category: 'Backend & Cloud',
    roleInInnovateX: 'Secure student credential handling, session persistence, and multi-tab sync.',
    tagline: 'Robust client auth & token management',
    verifiedInCodebase: true,
  },
  {
    name: 'Firebase Firestore',
    category: 'Backend & Cloud',
    roleInInnovateX: 'Real-time NoSQL database for student ideas, projects, and collaboration state.',
    tagline: 'Low-latency real-time document synchronization',
    verifiedInCodebase: true,
  },
  {
    name: 'Firebase Storage',
    category: 'Backend & Cloud',
    roleInInnovateX: 'Secure cloud object storage for project screenshots, demo diagrams, and profile assets.',
    tagline: 'Cloud asset storage with access controls',
    verifiedInCodebase: true,
  },
  {
    name: 'Vercel',
    category: 'DevOps & Tooling',
    roleInInnovateX: 'Global edge deployment, automated CI/CD branch previews, and fast CDN delivery.',
    tagline: 'Continuous deployment & edge network',
    verifiedInCodebase: true,
  },
  {
    name: 'Git',
    category: 'DevOps & Tooling',
    roleInInnovateX: 'Granular version control, daily milestone commits, and feature branches.',
    tagline: 'Distributed version control foundation',
    verifiedInCodebase: true,
  },
  {
    name: 'GitHub',
    category: 'DevOps & Tooling',
    roleInInnovateX: 'Code collaboration, issue triage, milestone tracking, and pull request workflows.',
    tagline: 'Open collaboration and release management',
    verifiedInCodebase: true,
  },
];
