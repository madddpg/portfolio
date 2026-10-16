import iconstructImg from '../assets/iConstruct-Logo.png'
import nutradeImg from '../assets/NUTrade.png'
import cupsImg from '../assets/Cups.png'

/**
 * Centralized project portfolio data and development journey entries.
 * Update `repoUrl` or `liveUrl` fields when repositories are made public or redeployed.
 */
export const projects = [
  {
    id: 'iconstruct',
    index: '01',
    name: 'iConstruct',
    fullTitle:
      'iConstruct — A Smart Material Estimator and Bidding Process Support System for Builders',
    category: 'Construction Technology / Web & Mobile Application / Backend Systems',
    role: 'Backend Developer',
    status: 'Live Web App · Active Capstone',
    image: iconstructImg,
    imageAlt: 'iConstruct project logo',
    imageFit: 'contain',
    summary:
      'A construction renovation-planning application designed to help homeowners organize renovation requirements and material estimates, then share project requirements with participating hardware shops for quotations.',
    architectureNote:
      'Engineered serverless backend workflows, Firestore data models, AI-assisted estimation endpoints, and multi-party quotation notifications.',
    technologies: [
      'Flutter',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Cloud Functions',
      'Node.js',
      'Firebase Cloud Messaging',
      'Gemini API',
    ],
    features: [
      'User authentication and role-based account workflows for homeowners and hardware shops',
      'Structured project, room parameter, and construction material data management in Cloud Firestore',
      'AI-assisted Bill of Materials (BOM) generation integrated with the Gemini API',
      'Project posting and competitive quotation workflows connecting builders with participating shops',
      'Event-driven push notifications via Firebase Cloud Functions and Firebase Cloud Messaging',
    ],
    implementationScope:
      'Focused on backend architecture, Cloud Functions business logic, Firestore security rules and schema design, and API integration. Deployed on Firebase Hosting.',
    visualSpec: {
      code: 'SYS // BOM-ESTIMATOR',
      architectureLabel:
        'Flutter Client → Cloud Functions (Node.js) → Firestore & Gemini API',
      metrics: [
        { label: 'Core Layer', value: 'Serverless Backend' },
        { label: 'Data Store', value: 'Cloud Firestore' },
        { label: 'AI Integration', value: 'Gemini BOM Engine' },
      ],
    },
    links: {
      repoUrl: null,
      liveUrl: 'https://iconstruct-builder-app.web.app',
      liveLabel: 'Launch Web App',
      statusNote: 'Hosted on Firebase (iconstruct-builder-app.web.app)',
    },
  },
  {
    id: 'nutrade',
    index: '02',
    name: 'NUTrade',
    fullTitle: 'NUTrade — University-Focused Community Marketplace Application',
    category: 'Marketplace / Mobile Application',
    role: 'Mobile & Backend Developer',
    status: 'Project Implementation',
    image: nutradeImg,
    imageAlt: 'NUTrade marketplace application logo',
    imageFit: 'contain',
    summary:
      'A university-focused marketplace application designed to connect members of the National University community through a dedicated peer-to-peer trading platform.',
    architectureNote:
      'Built cross-platform mobile views in .NET MAUI backed by Firebase services, TypeScript Cloud Functions, and PayMongo API checkout integration.',
    technologies: [
      '.NET MAUI',
      'C#',
      'Firebase',
      'Firebase Cloud Functions',
      'TypeScript',
      'PayMongo API',
    ],
    features: [
      'University email domain restriction workflows to verify National University community members',
      'Marketplace item listings with category filtering, seller profiles, and item status tracking',
      'In-app buyer-to-seller chat and inquiry coordination backed by Firebase',
      'PayMongo API integration via TypeScript Cloud Functions for digital payment link generation (sandbox/integration implementation)',
    ],
    implementationScope:
      'Implemented mobile client data bindings in .NET MAUI, Firebase backend integration, and PayMongo API checkout workflows in test mode.',
    visualSpec: {
      code: 'APP // CAMPUS-MARKET',
      architectureLabel:
        '.NET MAUI Client → TypeScript Cloud Functions → Firebase & PayMongo API',
      metrics: [
        { label: 'Client Stack', value: '.NET MAUI (C#)' },
        { label: 'Access Control', value: 'NU Domain Auth' },
        { label: 'Payment API', value: 'PayMongo Sandbox' },
      ],
    },
    links: {
      repoUrl: null,
      liveUrl: null,
      statusNote: 'Local / Academic repository',
    },
  },
  {
    id: 'cups-and-cuddles',
    index: '03',
    name: 'Cups & Cuddles',
    fullTitle: 'Cups & Cuddles — Coffee Shop Website & Ordering System',
    category: 'Coffee Shop / Web Application',
    role: 'Full-Stack Web Developer',
    status: 'Completed Project (Live domain currently offline)',
    image: cupsImg,
    imageAlt: 'Cups & Cuddles coffee shop emblem',
    imageFit: 'cover',
    summary:
      'A coffee shop website and ordering system that supports customer menu browsing, asynchronous cart and order processing, customer engagement, and administrative order management.',
    architectureNote:
      'Developed with a relational MySQL database and PHP backend, using AJAX for seamless asynchronous updates and PHPMailer for transactional email OTPs.',
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript',
      'AJAX',
      'PHPMailer',
      'HTML',
      'CSS',
    ],
    features: [
      'Email OTP authentication and account verification powered by PHPMailer',
      'Asynchronous cart operations and live order status updates using AJAX and vanilla JavaScript',
      'Relational MySQL database schema for menu items, customer accounts, orders, and feed posts',
      'Customer inspiration feed for community interaction inside the coffee shop platform',
      'Admin order management dashboard with status workflow controls and notifications',
    ],
    implementationScope:
      'Previously deployed at cupsandcuddles.online (currently offline). Built the PHP backend endpoints, MySQL relational queries, PHPMailer OTP workflow, and AJAX frontend interactions.',
    visualSpec: {
      code: 'WEB // ORDER-SYSTEM',
      architectureLabel:
        'JS + AJAX Frontend → PHP Controllers → MySQL & PHPMailer SMTP',
      metrics: [
        { label: 'Backend & DB', value: 'PHP + MySQL' },
        { label: 'Async Layer', value: 'AJAX + Vanilla JS' },
        { label: 'Auth Service', value: 'PHPMailer Email OTP' },
      ],
    },
    links: {
      repoUrl: null,
      liveUrl: null,
      formerDomain: 'cupsandcuddles.online (currently offline)',
    },
  },
]

export const experienceEntries = [
  {
    id: 'exp-iconstruct',
    index: '01',
    role: 'Backend Developer',
    project: 'iConstruct — Smart Material Estimator & Bidding Support System',
    type: 'Academic Capstone Project · Live Web App',
    context: 'Mobile/Web Application & Serverless Backend Architecture',
    summary:
      'Designed and implemented the backend infrastructure supporting homeowner renovation planning, AI-assisted material estimation, and multi-shop quotation workflows.',
    highlights: [
      'Structured Cloud Firestore collections and document relationships for user profiles, renovation projects, bills of materials, and hardware shop bids.',
      'Developed Node.js Firebase Cloud Functions to coordinate backend state transitions, quotation updates, and automated push notifications via Firebase Cloud Messaging.',
      'Integrated the Gemini API into backend estimation workflows to assist users in generating structured material estimates from project parameters.',
      'Configured Firebase Authentication workflows and deployed the web application via Firebase Hosting (iconstruct-builder-app.web.app).',
    ],
    technologies: [
      'Node.js',
      'Firebase Cloud Functions',
      'Cloud Firestore',
      'Firebase Auth',
      'FCM',
      'Gemini API',
      'Flutter',
    ],
  },
  {
    id: 'exp-nutrade',
    index: '02',
    role: 'Mobile & Backend Developer',
    project: 'NUTrade — National University Community Marketplace',
    type: 'Academic & Project-Based Development',
    context: 'Cross-Platform Mobile App & API Integration',
    summary:
      'Built core marketplace workflows and backend service integrations for a campus-exclusive buying and selling application targeting the National University community.',
    highlights: [
      'Implemented cross-platform mobile interfaces and data binding workflows using .NET MAUI and C#.',
      'Enforced university-specific authentication constraints to restrict platform access to verified institutional accounts.',
      'Wrote TypeScript Firebase Cloud Functions to handle backend marketplace operations and external API communication.',
      'Integrated the PayMongo API in sandbox mode to model checkout sessions and payment status webhooks alongside in-app messaging.',
    ],
    technologies: [
      '.NET MAUI',
      'C#',
      'TypeScript',
      'Firebase Cloud Functions',
      'Firebase',
      'PayMongo API',
    ],
  },
  {
    id: 'exp-cups-and-cuddles',
    index: '03',
    role: 'Full-Stack Web Developer',
    project: 'Cups & Cuddles — Coffee Shop Website & Ordering System',
    type: 'Web Application Project',
    context: 'Relational Database Design & Asynchronous Web Workflows',
    summary:
      'Developed a custom PHP and MySQL web ordering system featuring asynchronous client-server communication, transactional email verification, and order lifecycle tracking.',
    highlights: [
      'Designed the MySQL relational schema to store menu catalogs, customer orders, OTP verification tokens, and community inspiration feed submissions.',
      'Implemented Email OTP registration and login verification using PHPMailer over SMTP.',
      'Used AJAX and JavaScript to submit orders, update shopping carts, and refresh order statuses without full-page reloads.',
      'Built administrative order management views with real-time status notifications for staff fulfillment workflows.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'PHPMailer', 'HTML', 'CSS'],
  },
]
