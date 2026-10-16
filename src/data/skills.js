/**
 * Centralized skills and technology stack grouped by functional category.
 * Reflects verified tools from Ahmad D. Paguta's 2026 CV and software projects.
 */
export const skillCategories = [
  {
    id: 'languages',
    index: '01',
    title: 'Programming Languages',
    description:
      'Core languages used for server-side logic, database querying, client interactivity, and cross-platform mobile development.',
    items: [
      { name: 'JavaScript & TypeScript', context: 'ES6+, Node.js & typed Cloud Functions' },
      { name: 'PHP', context: 'Server-side web controllers & Laravel backend' },
      { name: 'Java & C#', context: 'Object-oriented programming & .NET MAUI apps' },
      { name: 'Dart', context: 'Flutter cross-platform application logic' },
      { name: 'SQL', context: 'Relational schema design & queries (MySQL)' },
      { name: 'HTML5 & CSS3', context: 'Semantic markup & responsive layout systems' },
    ],
  },
  {
    id: 'backend-services',
    index: '02',
    title: 'Backend, Databases & Cloud',
    description:
      'Serverless functions, relational and NoSQL databases, authentication pipelines, and third-party API integrations.',
    items: [
      { name: 'Node.js & Laravel', context: 'Backend runtimes & web application frameworks' },
      { name: 'Firebase Cloud Functions', context: 'Event-driven backend logic & webhooks' },
      { name: 'MySQL', context: 'Relational database management for web apps' },
      { name: 'Firebase & Cloud Firestore', context: 'NoSQL document modeling, Auth & FCM' },
      { name: 'Supabase', context: 'Backend-as-a-Service & Postgres workflows' },
      { name: 'REST APIs, Webhooks & AJAX', context: 'PayMongo QR Ph API, Gemini API & PHPMailer' },
    ],
  },
  {
    id: 'application-development',
    index: '03',
    title: 'Frontend & Application Development',
    description:
      'Frameworks and toolkits used to build responsive web interfaces and cross-platform mobile applications.',
    items: [
      { name: 'React', context: 'Component-based web interfaces & Vite apps' },
      { name: 'Flutter', context: 'Cross-platform mobile & web client development' },
      { name: '.NET MAUI', context: 'Multi-platform mobile apps with C# & XAML' },
      { name: 'Tailwind CSS & Bootstrap', context: 'Utility-first & responsive UI styling' },
    ],
  },
  {
    id: 'tools-workflow',
    index: '04',
    title: 'Developer Tools, DevOps & Design',
    description:
      'Development environments, version control, deployment pipelines, and prototyping tools.',
    items: [
      { name: 'Git, GitHub & GitHub Actions', context: 'Version control & CI/CD workflows' },
      { name: 'VS Code, Visual Studio, Cursor & Antigravity', context: 'IDEs & AI-assisted engineering environments' },
      { name: 'Postman, Vercel & Firebase Hosting', context: 'API testing & cloud web deployment' },
      { name: 'Figma & Canva', context: 'UI wireframing & visual prototyping' },
    ],
  },
]
