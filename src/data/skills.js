/**
 * Centralized skills and technology stack grouped by functional category.
 * Reflects verified tools used across iConstruct, NUTrade, Cups & Cuddles, and web projects.
 */
export const skillCategories = [
  {
    id: 'languages',
    index: '01',
    title: 'Programming Languages',
    description:
      'Core languages used for server-side logic, database querying, client interactivity, and cross-platform mobile development.',
    items: [
      { name: 'PHP', context: 'Server-side web controllers & session workflows' },
      { name: 'JavaScript', context: 'ES6+, asynchronous client & server scripting' },
      { name: 'TypeScript', context: 'Typed Cloud Functions & API payloads' },
      { name: 'C#', context: '.NET MAUI mobile application logic' },
      { name: 'SQL', context: 'Relational schema design & queries (MySQL)' },
      { name: 'HTML5 & CSS3', context: 'Semantic markup & responsive layout systems' },
    ],
  },
  {
    id: 'backend-services',
    index: '02',
    title: 'Backend & Services',
    description:
      'Serverless functions, relational and NoSQL databases, authentication pipelines, and third-party API integrations.',
    items: [
      { name: 'Node.js', context: 'Backend runtime for serverless functions' },
      { name: 'MySQL', context: 'Relational database management for web apps' },
      { name: 'Firebase Cloud Functions', context: 'Event-driven backend logic & webhooks' },
      { name: 'Cloud Firestore', context: 'NoSQL document modeling & real-time sync' },
      { name: 'Firebase Authentication', context: 'Role-based & domain-restricted auth' },
      { name: 'Firebase Cloud Messaging', context: 'Push notification delivery pipelines' },
      { name: 'PHPMailer', context: 'Transactional SMTP & Email OTP verification' },
      { name: 'REST API & AJAX Integration', context: 'PayMongo API, Gemini API & async HTTP' },
    ],
  },
  {
    id: 'application-development',
    index: '03',
    title: 'Application Development',
    description:
      'Frameworks and toolkits used to build responsive web interfaces and cross-platform mobile applications.',
    items: [
      { name: 'React', context: 'Component-based web interfaces & Vite apps' },
      { name: 'Flutter', context: 'Cross-platform mobile client integration' },
      { name: '.NET MAUI', context: 'Multi-platform mobile apps with C# & XAML' },
      { name: 'Tailwind CSS', context: 'Utility-first styling & responsive design' },
    ],
  },
  {
    id: 'tools-workflow',
    index: '04',
    title: 'Tools & Workflow',
    description:
      'Development environments, version control, and build tooling used in daily software engineering.',
    items: [
      { name: 'Git & GitHub', context: 'Version control & collaborative repositories' },
      { name: 'Visual Studio Code', context: 'Web, Node.js, PHP & Flutter development' },
      { name: 'Visual Studio', context: '.NET MAUI & C# mobile debugging' },
      { name: 'Vite', context: 'Frontend build tooling & development server' },
    ],
  },
]
