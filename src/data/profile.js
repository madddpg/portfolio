import profileImg from '../assets/profile.png'

/**
 * Centralized profile and personal metadata.
 * Edit this file to update your name, contact details, social links, and bio.
 */
export const profile = {
  name: 'Ahmad Paguta',
  initials: 'AP',
  handle: 'madddpg',
  avatar: profileImg,
  avatarAlt: 'Portrait of Ahmad Paguta',
  role: '',
  // Place your resume PDF in the `public/` folder as `public/resume.pdf` (or update the path/URL here)
  resumeUrl: '/resume.pdf',
  headline:
    'Building reliable backend architectures, database workflows, and connected web & mobile applications.',
  shortBio:
    'Information Technology student and software developer focused on backend systems, relational and NoSQL data modeling, API integrations, and cross-platform application development.',
  location: 'Lipa City, Batangas, Philippines',
  institution: 'National University — Lipa',
  status: {
    available: true,
    label: 'Looking for Internship',
  },
  email: 'pagutaad@gmail.com',
  socials: {
    github: 'https://github.com/madddpg',
    githubLabel: 'github.com/madddpg',
    linkedin: 'https://www.linkedin.com/in/ahmad-paguta-bb58ab382/',
    linkedinLabel: 'linkedin.com/in/ahmad-paguta',
  },
  heroTechSummary: [
    'Node.js & Cloud Functions',
    'PHP & MySQL',
    'Firebase & Firestore',
    'Flutter & .NET MAUI',
    'REST APIs',
  ],
  about: {
    lead: 'I am an Information Technology student and software developer who builds practical web and mobile applications—with a primary focus on how data, backend logic, and external services work together behind the scenes.',
    paragraphs: [
      'Across academic and project-based software builds, my work centers on designing database schemas, writing server-side functions, integrating third-party APIs, and connecting client interfaces to dependable backend workflows.',
      'Whether implementing serverless Cloud Functions and AI-assisted material estimation for a mobile renovation platform, integrating payment and messaging workflows in a .NET MAUI student marketplace, or building a PHP and MySQL ordering system with AJAX and PHPMailer, I focus on writing clean, traceable code that solves concrete problems.',
    ],
    principles: [
      {
        id: 'functional-solutions',
        number: '01',
        title: 'Building functional solutions to real problems',
        description:
          'Starting from real user and operational requirements—such as quotation bidding, campus trading, or order fulfillment—before choosing tools or abstractions.',
      },
      {
        id: 'maintainable-code',
        number: '02',
        title: 'Keeping code organized and maintainable',
        description:
          'Structuring backend logic, database queries, and UI components with clear separation of concerns so features remain easy to debug and extend.',
      },
      {
        id: 'practical-projects',
        number: '03',
        title: 'Learning through practical projects',
        description:
          'Developing hands-on software systems end to end—working through authentication edge cases, asynchronous state, and third-party API constraints.',
      },
      {
        id: 'system-integration',
        number: '04',
        title: 'Understanding how frontend and backend systems connect',
        description:
          'Bridging client applications (React, Flutter, .NET MAUI, vanilla JS) with backend services, databases, and notification pipelines.',
      },
    ],
  },
  navigation: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
}
