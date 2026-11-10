import { ChallengeItem } from '../types/blog';

export const challengesData: ChallengeItem[] = [
  {
    id: 1,
    title: 'Authentication and User Management',
    category: 'Auth Architecture',
    description:
      'Handling account registration, login, saved accounts, authentication state, and navigation.',
    problem:
      'Multi-tab desynchronization where logging out in one tab left stale user credentials in another, plus modal collision between saved accounts and login screens.',
    solution:
      'Implemented centralized auth state subscriptions with reactive listeners, and structured distinct navigation states for Login, Register, Saved Accounts, and Forgot Password.',
    engineeringTakeaway:
      'Never rely on localized component state for credentials; use authoritative event emitters across browser tabs.',
  },
  {
    id: 2,
    title: 'Firebase Integration',
    category: 'Backend & Database',
    description:
      'Managing user data, posts, projects, files, and database operations.',
    problem:
      'Complex document relationships between project posts, collaboration requests, and student profiles resulting in unnecessary re-queries.',
    solution:
      'Denormalized non-sensitive display data on collaboration cards while maintaining strictly validated primary collections in Cloud Firestore.',
    engineeringTakeaway:
      'Design Firestore schemas around query access patterns rather than purely relational third-normal forms.',
  },
  {
    id: 3,
    title: 'Real-Time Collaboration',
    category: 'Distributed State',
    description:
      'Creating reliable interactions between students and handling collaboration-related data.',
    problem:
      'Simultaneous collaborator approvals risking race conditions and duplicate team member assignments.',
    solution:
      'Leveraged Firestore atomic transactions and structured state machines (Pending -> Accepted / Declined) with optimistic UI updates.',
    engineeringTakeaway:
      'Atomic transactions protect critical state transitions from concurrent network mutations.',
  },
  {
    id: 4,
    title: 'User Experience',
    category: 'Interaction Design',
    description:
      'Making sure that students can easily understand and use the platform.',
    problem:
      'New student users felt overwhelmed by cluttered forms and lost long project pitches if they accidentally navigated away.',
    solution:
      'Introduced unboxed typography, guided project composer steps, discard confirmation dialogs, and instant skeleton previews.',
    engineeringTakeaway:
      'Frictionless affordances and non-destructive drafts build lasting user trust.',
  },
  {
    id: 5,
    title: 'Debugging and Error Handling',
    category: 'System Resilience',
    description:
      'Identifying unexpected errors, missing functions, broken interactions, and application crashes.',
    problem:
      'Silent runtime exceptions when optional student profile fields were undefined, causing component crashes.',
    solution:
      'Enforced strict TypeScript compiler flags, added React Error Boundaries around major views, and implemented defensive nullish coalescing.',
    engineeringTakeaway:
      'TypeScript strict mode and error boundaries turn catastrophic crashes into polite graceful fallbacks.',
  },
  {
    id: 6,
    title: 'Deployment and Performance',
    category: 'DevOps & Latency',
    description:
      'Testing the application in browsers, addressing loading issues, and improving deployment reliability.',
    problem:
      'Initial bundle sizes slowed initial mobile page loads over campus Wi-Fi networks.',
    solution:
      'Configured code splitting in Vite, optimized image formats, reduced external script dependencies, and established automated Vercel CI previews.',
    engineeringTakeaway:
      'Aggressive chunk splitting and zero-dependency CSS keep initial page loads fast and reliable.',
  },
  {
    id: 7,
    title: 'Responsive Design',
    category: 'Cross-Device Layouts',
    description:
      'Making the experience usable on laptops, tablets, and mobile devices.',
    problem:
      'Complex 3D cards and multi-column feeds caused horizontal overflow and tiny touch targets on mobile viewports.',
    solution:
      'Adopted mobile-first CSS grid transformations, dynamic 3D perspective scaling, and ensured touch targets exceed 44px.',
    engineeringTakeaway:
      'Design for thumb reach on mobile and scale outward to desktop viewports with fluid clamp formulas.',
  },
  {
    id: 8,
    title: 'Security and Privacy',
    category: 'Data Protection',
    description:
      'Protecting user information and ensuring that private profile information is not exposed to unauthorised users.',
    problem:
      'Risk of exposing private student contact details, phone numbers, or academic records in public search queries.',
    solution:
      'Hardened Firestore security rules with granular field-level read/write permissions, isolating private profile collections from public project author cards.',
    engineeringTakeaway:
      'Never trust client-side filters for privacy; security must be enforced at the database rule layer.',
  },
];
