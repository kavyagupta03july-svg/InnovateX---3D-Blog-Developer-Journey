import { BlogArticle } from '../types/blog';

export const blogArticles: BlogArticle[] = [
  {
    id: 'art-building-innovatex',
    slug: 'building-innovatex-idea-to-student-platform',
    title: 'Building InnovateX: From an Idea to a Student Collaboration Platform',
    category: 'Founder Stories',
    shortDescription:
      'Every meaningful product begins with a problem worth solving. Discover why InnovateX was created, the challenges behind its development, and the vision of building a productive digital community for students.',
    coverImage: '/src/assets/images/article_building_innovatex_1794321529136.jpg',
    coverAlt: 'Software engineering workstation showing InnovateX architecture',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-03-01',
    readingTime: '6 min read',
    tags: ['founder-journey', 'engineering', 'react', 'collaboration', 'vision'],
    publicationStatus: 'published',
    isFeatured: true,
    tableOfContents: [
      { id: 'origin-spark', title: '1. The Origin & The Problem' },
      { id: 'why-innovatex', title: '2. Why Traditional Social Platforms Fail Students' },
      { id: 'technical-stack', title: '3. Architectural Decisions & Tech Stack' },
      { id: 'journey-lessons', title: '4. Lessons from 20 Days of Intensive Building' },
      { id: 'looking-ahead', title: '5. What Lies Ahead for the Student Community' },
    ],
    fullContent: `
### 1. The Origin & The Problem {#origin-spark}

As an engineering student pursuing my B.Tech in Computer Science and Engineering, I noticed a frustrating disconnect on college campuses. Everywhere around me, classmates had inventive ideas—autonomous bots, campus marketplaces, distributed file tools, and AI agents. Yet so many of these concepts never left a rough notebook page or a private repo.

Why? Because building software in isolation is hard. Students struggled to find teammates with complementary skill sets (for instance, a backend Python programmer needing a React designer), struggled to locate credible internship openings before application windows closed, and lacked a dedicated place to showcase engineering milestones without noise.

This realization led directly to **InnovateX**—a dedicated hub where student ideas transform into real-world projects and career opportunities.

---

### 2. Why Traditional Social Platforms Fail Students {#why-innovatex}

Modern students spend several hours a day on entertainment-oriented social platforms. While these apps excel at quick dopamine loops, they were never designed to foster technical collaboration:

- **Algorithmic Distraction**: Feeds prioritize viral video clips over thoughtful project architecture breakdowns.
- **Transience**: Good technical inquiries get buried in group chats within hours without searchable indexing.
- **Lack of Professional Context**: There is no natural mechanism to invite collaborators based on verified tech skills, branch, or target hackathons.

InnovateX shifts the paradigm toward **productive digital interaction**:
- **Idea Publishing**: Write structured proposals and specify needed roles (Frontend, Backend, ML, Design).
- **Project Showcase**: Link repositories, live demos, and technical challenges overcome.
- **Curated Opportunities**: Real-time listings for hackathons, paid internships, and entry-level engineering roles.

---

### 3. Architectural Decisions & Tech Stack {#technical-stack}

From Day 1, the goal was to build a clean, responsive, and resilient web application that any student could load instantly on their mobile phone or laptop.

\`\`\`typescript
// InnovateX Core Tech Stack Definition
export const InnovateXArchitecture = {
  client: 'React.js with TypeScript & Vite',
  styling: 'Tailwind CSS for responsive design',
  backendAuth: 'Firebase Authentication (Multi-tab state synchronization)',
  database: 'Cloud Firestore (Real-time collaboration documents)',
  storage: 'Firebase Storage (Project visual assets & avatars)',
  hosting: 'Vercel Continuous Deployment',
  versionControl: 'Git & GitHub workflows'
};
\`\`\`

Choosing TypeScript ensured type safety across complex data structures like collaboration requests and post drafts. Using Firebase allowed fast real-time synchronization so students could see incoming teammate applications without manual refreshing.

---

### 4. Lessons from 20 Days of Intensive Building {#journey-lessons}

Building InnovateX has been the most demanding and rewarding learning journey of my engineering degree. Every single day exposed real engineering challenges:

- **State Management & Unsaved Changes**: Users often lose carefully written project descriptions if they accidentally navigate away. Adding confirmation dialogs and reactive draft caches solved this friction.
- **Multi-Tab Authentication**: When students open multiple tabs to review opportunities while chatting, keeping auth tokens in sync without causing logout loops required careful lifecycle listeners.
- **Responsive Layouts**: Engineering students use everything from widescreen 4K monitors in computer labs to compact smartphones on the campus bus. Designing with a fluid 3D grid and clean typography was essential.

---

### 5. What Lies Ahead for the Student Community {#looking-ahead}

InnovateX is continuously evolving. As a student founder and developer, I view every bug report and user suggestion as an opportunity to sharpen my software engineering craft.

Our roadmap focuses on deep team-matching algorithms, direct hackathon team formation rooms, and verified portfolio exports that students can attach directly to their job and internship applications.
    `,
  },
  {
    id: 'art-day20-milestone',
    slug: 'day-20-authentication-refinements-deployment-prep',
    title: 'Day 20 Milestone: UI Refinements, Auth Polish, and Deployment Readiness',
    category: 'Product Updates',
    shortDescription:
      'A deep dive into our latest Day 20 updates: perfecting authentication navigation, centering recovery flows, and prepping InnovateX for Vercel production.',
    coverImage: '/src/assets/images/hero_innovatex_platform_1794321529268.jpg',
    coverAlt: 'InnovateX 3D holographic platform interface',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-03-04',
    readingTime: '4 min read',
    tags: ['product-update', 'auth', 'ui-ux', 'vercel', 'deployment'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Perfecting the First Touchpoint

On Day 20 of InnovateX development, the primary objective was turning raw functional features into a polished, production-ready student experience.

#### Key Engineering Deliverables on Day 20:

1. **Dedicated InnovateX Web Icon**: Crafted an SVG-based geometric brand mark representing ideas converging into reality.
2. **Auth Route Segregation**: Resolved an edge case where the "Saved Accounts" drawer accidentally overlapped with the primary login modal when users had active credentials.
3. **Centered Forgot Password Experience**: Redesigned the password reset view with centered layout geometry, explicit validation, and reassuring delivery feedback.
4. **Spacing & Visual Hierarchy**: Audited margin and padding scales across account switcher items to prevent tap-target collisions on mobile screens.
5. **Vercel Build Verification**: Validated Vite production bundling, dynamic chunk splitting, and asset caching rules for low-latency delivery.
    `,
  },
  {
    id: 'art-student-collaboration-workflows',
    slug: 'making-student-collaboration-meaningful',
    title: 'Making Student Collaboration Meaningful: Workflows, Ownership & Teammates',
    category: 'Development Journey',
    shortDescription:
      'How we architected project collaboration requests, accept/decline workflows, and chat date separators to foster real engineering partnerships.',
    coverImage: '/src/assets/images/article_student_collaboration_1794321528469.jpg',
    coverAlt: 'Students collaborating in an engineering lab',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-03-03',
    readingTime: '5 min read',
    tags: ['collaboration', 'workflow', 'architecture', 'students'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Beyond Mere Connections: Active Collaboration

Most social platforms settle for a binary "Friend" or "Follow" model. For students building technical projects, however, this model is insufficient. When someone asks to collaborate on an autonomous drone project or a full-stack web app, both parties need clear expectations:

- **What role are you applying for?** (Frontend, AI/ML, DevOps, UI/UX)
- **What is your availability?** (Weekend sprint, hackathon week, semester project)
- **What is your code repository or portfolio?**

#### The Collaboration State Machine:
We built a deterministic state flow for project requests:
1. \`PENDING_REVIEW\`: Student submits collaboration proposal.
2. \`ACCEPTED\`: Project owner welcomes the collaborator; access granted to project internal board.
3. \`DECLINED\`: Respectful notice with option for creator to provide quick feedback.
4. \`WITHDRAWN\`: Submitter can retract if their availability changed.
    `,
  },
  {
    id: 'art-tech-stack-decisions',
    slug: 'architecting-student-projects-hackathons-to-cloud',
    title: 'Architecting Student Projects: From Hackathon Prototypes to Scalable Deployments',
    category: 'Technology',
    shortDescription:
      'Best practices for computer science and engineering students transitioning weekend hackathon repos into production-grade software platforms.',
    coverImage: '/src/assets/images/article_future_roadmap_1794321529253.jpg',
    coverAlt: 'Isometric technological roadmap with illuminated nodes',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-03-02',
    readingTime: '5 min read',
    tags: ['react', 'typescript', 'architecture', 'cloud'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Escaping "Tutorial Hell" & Hackathon Spagetti Code

A common rite of passage in B.Tech engineering is building a project during a 36-hour hackathon. While the adrenaline gets a demo working, the resulting codebase often suffers from tight coupling, hardcoded API secrets, and fragile state.

#### Recommended Upgrades for Student Repos:
- **Adopt TypeScript early**: Avoid runtime undefined crashes during faculty reviews or judge evaluations.
- **Component Decoupling**: Keep API callers and calculation logic in dedicated helper modules, independent of React UI components.
- **Environment Variable Discipline**: Never commit API keys or private tokens to public GitHub repositories. Use \`.env.example\` templates.
- **Structured Error Boundaries**: Present clean fallback states instead of blank white screens when external APIs timeout.
    `,
  },
  {
    id: 'art-internships-2026-guide',
    slug: 'internships-2026-what-tech-recruiters-seek',
    title: 'Internships 2026: What Technical Recruiters & Startups Actually Look For',
    category: 'Internships',
    shortDescription:
      'Discover how B.Tech students can stand out for 2026 software engineering internships through real project evidence and peer collaboration.',
    coverImage: '/src/assets/images/article_student_collaboration_1794321528469.jpg',
    coverAlt: 'Students reviewing software architecture together',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-02-28',
    readingTime: '4 min read',
    tags: ['internships', 'career', 'btech', 'recruiting'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### The New Bar for Student Interns

With automated resume parsing and thousands of applicants submitting generic todo-list apps, the differentiator in 2026 is **collaborative complexity**.

Recruiters want to see:
1. **Real User Feedback**: Did people actually click buttons on your app?
2. **Git Collaboration**: PR reviews, merge conflict resolutions, and feature branches with teammates.
3. **Resilience to Failure**: Handling network offline states, rate limits, and authentication errors gracefully.

InnovateX makes these project signals visible so recruiters and founders can discover talented student builders directly.
    `,
  },
  {
    id: 'art-hackathons-2026-playbook',
    slug: 'hackathons-2026-team-formation-ideation-playbook',
    title: 'The 2026 Hackathon Playbook: Team Formation, Ideation, and Git Workflows',
    category: 'Hackathons',
    shortDescription:
      'A practical guide to forming balanced student teams, scoping feasible MVPs in 36 hours, and delivering winning technical demos.',
    coverImage: '/src/assets/images/article_future_roadmap_1794321529253.jpg',
    coverAlt: 'Isometric engineering roadmap nodes',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-02-26',
    readingTime: '5 min read',
    tags: ['hackathons', 'teamwork', 'git', 'prototyping'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Maximizing the 36-Hour Hackathon Window

Winning a college hackathon is rarely about who types the fastest—it is about **scoping discipline** and **clear role separation**.

- **Hour 0–4**: Lock the core user story. If you cannot explain the problem in one sentence, keep simplifying.
- **Hour 4–12**: Implement the core data contract and backend mocks so the frontend and backend teammates can code in parallel.
- **Hour 12–28**: Build the single golden path user journey.
- **Hour 28–34**: Freeze features. Polish UI responsiveness, error handling, and test on actual devices.
- **Hour 34–36**: Rehearse the live 3-minute pitch.
    `,
  },
  {
    id: 'art-job-opportunities-2026',
    slug: 'navigating-entry-level-software-engineering-2026',
    title: 'Navigating Entry-Level Software Engineering in 2026: B.Tech to Industry',
    category: 'Job Opportunities',
    shortDescription:
      'Practical strategies for engineering graduates preparing for software roles, campus placements, and off-campus tech hiring drives.',
    coverImage: '/src/assets/images/hero_innovatex_platform_1794321529268.jpg',
    coverAlt: 'Modern tech workspace and monitors',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-02-24',
    readingTime: '4 min read',
    tags: ['jobs', 'careers', 'cse', 'software-engineer'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Transitioning from Student to Software Engineer

Campus engineering courses teach fundamental data structures, algorithms, operating systems, and database theory. However, the modern software industry requires applying these foundations to distributed systems, CI/CD pipelines, and asynchronous APIs.

#### Three Areas to Solidify Before Graduation:
1. **System Design Fundamentals**: Understanding client-server communication, latency budgets, and database indexing.
2. **Clean Code & Review Habits**: Writing self-documenting code, meaningful commit messages, and modular functions.
3. **Continuous Curiosity**: Demonstrating independent initiative through open-source contributions or dedicated projects like InnovateX.
    `,
  },
  {
    id: 'art-student-projects-spotlight',
    slug: 'student-project-spotlight-campus-innovation',
    title: 'Student Project Spotlight: Innovations Emerging from B.Tech Classrooms',
    category: 'Student Projects',
    shortDescription:
      'Highlighting ambitious student projects shared on InnovateX: from smart campus resource schedulers to low-bandwidth peer study networks.',
    coverImage: '/src/assets/images/article_student_collaboration_1794321528469.jpg',
    coverAlt: 'Engineering students collaborating on code',
    author: {
      name: 'Kavya Gupta',
      role: 'Founder and Developer of InnovateX',
      education: 'B.Tech – Computer Science and Engineering',
    },
    publicationDate: '2026-02-22',
    readingTime: '4 min read',
    tags: ['student-projects', 'showcase', 'innovation', 'campus'],
    publicationStatus: 'published',
    isFeatured: false,
    fullContent: `
### Real Solutions to Real Student Challenges

The most inspiring aspect of building InnovateX has been seeing what fellow engineering students build when given a platform to connect:

- **Campus Shuttle Telemetry**: A low-cost IoT project built by 3rd-year students providing live bus tracking without expensive GPS units.
- **Lab Resource Booker**: Solving equipment conflicts across university computer labs using optimistic locking.
- **Peer Code Review Ring**: Groups of students reviewing each other’s pull requests before faculty project submissions.
    `,
  },
];
