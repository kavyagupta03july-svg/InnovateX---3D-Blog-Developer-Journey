import { TimelineMilestone } from '../types/blog';

export const timelineMilestones: TimelineMilestone[] = [
  {
    day: 'Day 1–16',
    phaseTitle: 'Early Development Phase',
    isPhaseRange: true,
    title: 'Building the Foundation',
    description:
      'The early development phase focused on establishing the InnovateX platform, building its core structure, working on its interface, and developing the essential features required for a student-focused collaboration experience.',
    highlights: [
      'Established the core application architecture with React and TypeScript.',
      'Designed the initial database schema for student profiles, ideas, and projects.',
      'Created early wireframes and responsive UI components.',
      'Implemented initial Firebase authentication and real-time data sync.',
      'Built basic project discovery and student idea sharing feeds.',
    ],
    lessonsLearned:
      'Building the foundation required prioritizing core student workflows before adding visual complexity.',
    technicalDetails: [
      'Vite build configuration & TypeScript strict type-checking.',
      'Firestore collections structuring: users, ideas, projects, collaborationRequests.',
      'Responsive baseline using Tailwind CSS utility system.',
    ],
    status: 'completed',
  },
  {
    day: 'Day 17',
    phaseTitle: 'Stability & UX Sprints',
    title: 'Improving Platform Stability and User Experience',
    description:
      'Focused on refining composer ergonomics, adding safeguard prompts to prevent accidental data loss, and polishing navigation across devices.',
    highlights: [
      'Improved idea and project composer behaviour.',
      'Added discard confirmation when users have unsaved changes.',
      'Improved edit and delete functionality for ideas and projects.',
      'Worked on group photo upload functionality.',
      'Improved loading indicators and skeleton states.',
      'Worked on landing page and authentication experience.',
      'Improved search and navigation.',
      'Focused on responsive layouts and better interface consistency.',
    ],
    lessonsLearned:
      'Adding unsaved change guards prevented students from losing lengthy project descriptions when clicking away.',
    technicalDetails: [
      'Reactive draft dirty-state detection.',
      'Shimmer skeleton loaders for asynchronous feeds.',
      'Debounced search queries across ideas and projects.',
    ],
    status: 'completed',
  },
  {
    day: 'Day 18',
    phaseTitle: 'Collaboration Architecture',
    title: 'Making Student Collaboration More Meaningful',
    description:
      'Engineered structured collaboration actions, peer identification protocols, and seamless multi-tab state resilience.',
    highlights: [
      'Improved project collaboration request workflows.',
      'Worked on accept and decline collaboration actions.',
      'Improved project ownership and collaboration handling.',
      'Improved chat date separators.',
      'Worked on saved ideas and projects.',
      'Improved unique student identification.',
      'Improved dynamic page titles and routing.',
      'Worked on browser Back and Forward navigation.',
      'Focused on multi-tab authentication and notification behaviour.',
    ],
    lessonsLearned:
      'Explicit role-based collaboration requests build stronger team accountability than simple follow requests.',
    technicalDetails: [
      'Optimistic UI updates for request approval states.',
      'HTML5 History API sync with dynamic document.title.',
      'BroadcastChannel API exploration for tab synchronization.',
    ],
    status: 'completed',
  },
  {
    day: 'Day 19',
    phaseTitle: 'Hardening & Privacy',
    title: 'Fixing Errors and Strengthening the Platform',
    description:
      'Deep system debugging, profile privacy enforcement, and comprehensive responsiveness auditing across mobile and desktop.',
    highlights: [
      'Investigated missing components and undefined functions.',
      'Worked on authentication and Firebase-related issues.',
      'Improved profile privacy requirements.',
      'Worked on project and idea editing behaviour.',
      'Improved navigation and interface elements.',
      'Focused on responsive design for mobile, tablet, and desktop.',
      'Reviewed React errors and application stability.',
      'Focused on Firebase integration and deployment readiness.',
    ],
    lessonsLearned:
      'Strict Firestore security rule audits ensured private student contact information is never exposed publicly.',
    technicalDetails: [
      'Error Boundary boundaries surrounding heavy component subtrees.',
      'Audit of undefined prop handlers in modal overlays.',
      'Mobile viewport touch-target accessibility reviews.',
    ],
    status: 'completed',
  },
  {
    day: 'Day 20',
    phaseTitle: 'Production Polish',
    title: 'Improving Authentication and Preparing for Deployment',
    description:
      'Refining authentication views, perfecting layout centering, creating dedicated branding assets, and preparing for Vercel production.',
    highlights: [
      'Worked on a dedicated web icon for InnovateX.',
      'Applied visual improvements to selected interface elements.',
      'Improved navigation between login, account creation, and forgot password.',
      'Worked on preventing the saved accounts section from appearing where the login page should be displayed.',
      'Improved spacing between saved account elements.',
      'Worked on centring the Forgot Password section.',
      'Prepared the application for browser testing and Vercel deployment.',
    ],
    lessonsLearned:
      'Small visual alignment improvements in authentication screens dramatically raise student trust and platform adoption.',
    technicalDetails: [
      'SVG favicon and brand iconography generation.',
      'Conditional rendering state cleanup in the AuthModal controller.',
      'Vercel build optimization and production bundle analysis.',
    ],
    status: 'deployed',
  },
];
