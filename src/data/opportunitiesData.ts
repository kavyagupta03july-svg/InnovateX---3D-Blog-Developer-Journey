import { OpportunityItem } from '../types/blog';

export const opportunityCategories = [
  {
    type: 'internship' as const,
    title: 'Internships 2026',
    subtitle: 'Paid & Practical Learning',
    description:
      'Discover paid and unpaid internships, remote opportunities, and practical learning experiences.',
    cta: 'Explore Internships',
    accentColor: '#635BFF',
  },
  {
    type: 'hackathon' as const,
    title: 'Hackathons 2026',
    subtitle: 'Competitions & Innovation',
    description:
      'Find upcoming hackathons, team-building opportunities, innovation challenges, and technical competitions.',
    cta: 'Explore Hackathons',
    accentColor: '#00D4FF',
  },
  {
    type: 'job' as const,
    title: 'Job Opportunities 2026',
    subtitle: 'Graduate & Early Career',
    description:
      'Explore entry-level software engineering roles, graduate hiring programmes, and opportunities for aspiring developers.',
    cta: 'Explore Jobs',
    accentColor: '#A78BFA',
  },
];

export const sampleOpportunities: OpportunityItem[] = [
  {
    id: 'opp-1',
    type: 'internship',
    title: 'Full-Stack Software Engineering Intern',
    organization: 'CloudScale Labs',
    mode: 'Remote',
    targetYear: 'Summer 2026',
    description:
      'Work alongside senior engineers building scalable React frontends and cloud microservices. Ideal for 3rd and 4th-year B.Tech / CSE students.',
    eligibility: 'B.Tech / B.E. (CSE, IT, ECE) — Penultimate or Final Year',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stipend Included'],
    deadlineOrDate: 'Apply by April 15, 2026',
  },
  {
    id: 'opp-2',
    type: 'internship',
    title: 'Frontend & UI Engineering Intern',
    organization: 'Nova Mobility',
    mode: 'Hybrid',
    targetYear: 'Summer 2026',
    description:
      'Build performant, accessible web components with TypeScript and Tailwind CSS for electric vehicle fleet telematics.',
    eligibility: 'Undergraduate Engineering Students with portfolio projects',
    tags: ['TypeScript', 'Tailwind CSS', 'Web Vitals'],
    deadlineOrDate: 'Apply by April 30, 2026',
  },
  {
    id: 'opp-3',
    type: 'hackathon',
    title: 'InnovateX Student Innovation Hackathon 2026',
    organization: 'InnovateX Community & Campus Partners',
    mode: 'Remote',
    targetYear: 'May 2026',
    description:
      'A 36-hour collegiate hackathon uniting student engineers to tackle campus challenges, sustainability tech, and collaborative software tools.',
    eligibility: 'All Engineering & Computer Science undergraduates',
    tags: ['₹1,50,000 Prize Pool', 'Mentorship', 'Team Matching'],
    deadlineOrDate: 'May 16–18, 2026',
  },
  {
    id: 'opp-4',
    type: 'hackathon',
    title: 'AI Systems Collegiate Challenge',
    organization: 'OpenTech University Alliance',
    mode: 'Hybrid',
    targetYear: 'June 2026',
    description:
      'Design practical AI and data systems that solve real problems in education, healthcare, and rural infrastructure.',
    eligibility: 'Student teams of 2 to 4 members',
    tags: ['GenAI', 'Python', 'Cloud Credits', 'Hardware Lab Access'],
    deadlineOrDate: 'June 6–8, 2026',
  },
  {
    id: 'opp-5',
    type: 'job',
    title: 'Junior Software Engineer (Graduate 2026)',
    organization: 'Apex Software Systems',
    mode: 'Hybrid',
    targetYear: 'Batch of 2026',
    description:
      'Direct graduate intake for graduating B.Tech students. Comprehensive mentorship, code reviews, and full-stack rotation program.',
    eligibility: '2026 Graduates in Computer Science, IT, or related fields',
    tags: ['Full-Time', 'Health Benefits', 'Tech Allowance'],
    deadlineOrDate: 'Rolling Applications for 2026 Batch',
  },
  {
    id: 'opp-6',
    type: 'job',
    title: 'Associate Cloud & DevOps Engineer',
    organization: 'Stratosphere Technologies',
    mode: 'Remote',
    targetYear: 'Batch of 2026',
    description:
      'Manage CI/CD pipelines, container orchestration, and multi-region cloud infrastructure for modern enterprise SaaS.',
    eligibility: 'B.Tech graduates with Docker, Linux, and Git experience',
    tags: ['Docker', 'AWS/GCP', 'Terraform', 'Graduate Role'],
    deadlineOrDate: 'Applications Open for Q3 2026',
  },
];
