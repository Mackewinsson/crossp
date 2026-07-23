export const en = {
  // Header
  header: {
    services: 'Solutions',
    painPoints: 'Pain Points',
    velocity: 'ROI Calculator',
    process: 'Methodology',
    portfolio: 'Case Studies',
    testimonials: 'Testimonials',
    getStarted: 'Book Call',
    status: '🟢 AI Engine Operational • High-Velocity Sprints',
  },

  // Hero Section
  hero: {
    statusBadge: 'SOFTWARE ENGINEERING & AI METHODOLOGY',
    title: 'We Build Enterprise Software & AI Products at High Velocity',
    titleHighlight: 'Fast, Reliable & Built to Scale',
    subtitle: 'Transform your ideas into production-ready web platforms, mobile apps, and custom AI engines. We combine senior software architecture with AI acceleration to ship without unnecessary delays.',
    ctaPrimary: 'Book Architecture Sprint Call',
    ctaSecondary: 'View Comparison & ROI',
    scrollDown: 'Explore Solutions',
    metrics: {
      delivery: '10x',
      deliveryLabel: 'Development Velocity',
      uptime: '99.9%',
      uptimeLabel: 'Uptime & Reliability Focus',
      codeOwnership: '100%',
      codeOwnershipLabel: 'Source Code IP Ownership',
    },
    terminal: {
      title: 'conaisoft-ai-engine ~ v4.2',
      prompt: 'scaffold_enterprise_app --ai-agents --ci-cd --security-audit',
      output1: '✔ Analyzing specs & system architecture...',
      output2: '✔ Generating TypeScript backend, RAG vector DB & Next.js 15...',
      output3: '✔ Running 142 unit & integration test suites [100% PASSED]',
      output4: '🚀 Successfully deployed to production environment.',
    }
  },

  // Pain Points Section
  painPoints: {
    badge: 'TRADITIONAL DEVELOPMENT CHALLENGES',
    title: 'Why Do Traditional Software Projects Slow Down?',
    subtitle: 'Building digital products with legacy models creates friction, delays, and cost overruns. We address the 4 primary challenges:',
    cards: [
      {
        id: 'agencies',
        icon: '⏳',
        painTitle: 'Slow Agency Process',
        painDesc: '6 to 12-month development cycles with rigid, inflated budgets that delay time to market.',
        solutionTitle: 'Our Solution: Iterative Weekly Sprints',
        solutionDesc: 'Development in short cycles with functional deliverables from the very first week.',
      },
      {
        id: 'hiring',
        icon: '💸',
        painTitle: 'Hiring Friction & Overhead',
        painDesc: 'Months of recruiting and high fixed overhead before validating if the product fits the market.',
        solutionTitle: 'Our Solution: Immediate Senior Team',
        solutionDesc: 'Instant access to senior architecture and engineering without operational burdens.',
      },
      {
        id: 'freelancers',
        icon: '⚠️',
        painTitle: 'Inconsistent Code & Zero Testing',
        painDesc: 'Lack of architectural standards, missing test suites, and instant technical debt.',
        solutionTitle: 'Our Solution: Automated Testing & Quality',
        solutionDesc: 'Automated test suites, clean code, documentation, and full repository handover.',
      },
      {
        id: 'nocode',
        icon: '🧱',
        painTitle: 'No-Code Tool Limits',
        painDesc: 'Great for basic prototypes, but breaks down under complex business logic, custom AI, or scale.',
        solutionTitle: 'Our Solution: Scalable Full-Stack Stack',
        solutionDesc: 'Engineered on Next.js, Node/Python, and databases designed to scale smoothly.',
      },
    ],
    comparisonTitle: 'Development Model Comparison Matrix',
    tableHeaders: {
      feature: 'Feature / Approach',
      agency: 'Traditional Agency',
      inHouse: 'In-House Team',
      freelance: 'Freelancers',
      conaiSoft: 'ConaiSoft AI Engine',
    },
    tableRows: [
      { feature: 'Delivery Rhythm', agency: '6 - 12 Month Batches', inHouse: '4 - 8 Months', freelance: 'Variable / Uncertain', conaiSoft: 'Continuous Weekly Sprints ⚡' },
      { feature: 'Investment Model', agency: 'Inflated Fixed Quote', inHouse: 'High Fixed Salaries', freelance: 'Hourly / Project', conaiSoft: 'Flexible Sprint Pricing' },
      { feature: 'Native AI Capabilities', agency: 'Limited / Ad-Hoc', inHouse: 'Requires Specialists', freelance: 'Surface Level', conaiSoft: 'Native (LLMs, RAG, Agents) 🤖' },
      { feature: 'Testing & CI/CD Quality', agency: 'Optional / Charged Extra', inHouse: 'Variable', freelance: 'Rarely Included', conaiSoft: 'Integrated by Default' },
      { feature: 'Code IP Ownership', agency: 'Contract Dependent', inHouse: '100%', freelance: 'Often Ambiguous', conaiSoft: '100% Client Property' },
    ]
  },

  // Velocity Calculator Section
  calculator: {
    badge: 'VELOCITY ESTIMATOR & SAVINGS',
    title: 'Compare development pace against traditional models',
    subtitle: 'Select your product category to view the velocity impact of AI-assisted engineering and senior architecture.',
    projectTypes: [
      { id: 'saas', name: 'SaaS / Web Platform', tradTime: '16 Weeks', tradCost: 'High', aiTime: '2 - 4 Weeks', aiCost: 'Optimized', savings: '5x Speed' },
      { id: 'ai-app', name: 'AI & RAG Engine', tradTime: '24 Weeks', tradCost: 'Very High', aiTime: '3 - 5 Weeks', aiCost: 'Optimized', savings: '6x Speed' },
      { id: 'mobile', name: 'iOS / Android Mobile App', tradTime: '20 Weeks', tradCost: 'High', aiTime: '3 - 4 Weeks', aiCost: 'Optimized', savings: '5x Speed' },
      { id: 'workflow', name: 'API Integrations', tradTime: '12 Weeks', tradCost: 'Medium', aiTime: '1 - 2 Weeks', aiCost: 'Optimized', savings: '6x Speed' },
    ],
    labels: {
      traditional: 'Traditional Dev',
      conaiSoft: 'ConaiSoft AI Engine',
      timeSaved: 'Weeks Saved',
      costSaved: 'Estimated Cost Savings',
      guarantee: 'Transparency & Total Control',
      guaranteeDesc: 'Regular reviews at the end of each sprint with working deliverables and full code visibility.',
    }
  },

  // Services Section
  services: {
    badge: 'ENGINEERING & AI SOLUTIONS',
    title: 'Software Built to Scale and Last',
    subtitle: 'We deliver robust, maintainable software architectures engineered for real business needs.',
    aiIntegration: {
      title: 'Autonomous AI Agents & RAG Integration',
      popupTitle: 'Advanced Artificial Intelligence Integration',
      description: 'We implement custom AI agents, Retrieval-Augmented Generation (RAG) pipelines, and tailored models to automate business operations.',
      features: [
        'Autonomous LLM Agent Orchestration',
        'Vector DBs & RAG Document Intelligence Architecture',
        'Intelligent Document & Workflow Processing',
        'Secure AI Integration with Internal APIs & Systems',
      ],
    },
    customSoftware: {
      title: 'Full-Stack Web & SaaS Platforms',
      popupTitle: 'High-Scale Web Software Development',
      description: 'We build fast, responsive web platforms built on Next.js, React, TypeScript, and modern cloud architectures.',
      features: [
        'Responsive, high-performance React frontend',
        'Scalable REST & GraphQL APIs built in TypeScript',
        'Payment integration, authentication, and user roles',
      ],
    },
    mobileApps: {
      title: 'React Native Mobile Apps',
      popupTitle: 'Mobile App Engineering',
      description: 'Cross-platform mobile applications for iOS and Android with smooth UI performance and offline capability.',
      features: [
        'Efficient React Native cross-platform app development',
        'Real-time data synchronization & offline support',
        'Push notifications & secure authentication',
      ],
    },
    cloudAutomation: {
      title: 'Cloud Infrastructure & DevOps',
      popupTitle: 'DevOps & Cloud Architecture',
      description: 'Clean deployment pipelines, security best practices, and monitoring on cloud platforms like AWS, GCP, or Vercel.',
      features: [
        'Infrastructure as Code (Docker / Cloud)',
        'Continuous integration & deployment pipelines (CI/CD)',
        'Stability audits & real-time monitoring',
      ],
    },
  },

  // Delivery Protocol Section
  process: {
    badge: 'OUR METHODOLOGY',
    title: 'From Concept to Production in 4 Clear Phases',
    subtitle: 'A structured, agile workflow designed to progress with total clarity at every stage.',
    steps: [
      {
        step: '01',
        day: 'Phase 1',
        title: 'Discovery & Architecture',
        description: 'We define the key specs, data models, security posture, and API contracts.',
      },
      {
        step: '02',
        day: 'Phase 2',
        title: 'Development & AI Acceleration',
        description: 'We build system structure, business logic, and UI components using advanced AI tooling.',
      },
      {
        step: '03',
        day: 'Phase 3',
        title: 'Testing & Security',
        description: 'We verify functionality with automated test suites and security hardening to ensure stability.',
      },
      {
        step: '04',
        day: 'Phase 4',
        title: 'Deployment & Handover',
        description: 'We deploy to your production cloud environment and hand over 100% repository ownership.',
      },
    ]
  },

  // Features Section
  features: {
    title: 'Why Work With ConaiSoft?',
    subtitle: 'Principles focused on velocity, clean code quality, and transparency',
    expertise: {
      title: 'Senior Architecture',
      description: 'Experienced engineers guiding every technical decision',
    },
    innovation: {
      title: 'AI Acceleration',
      description: 'Leveraging state-of-the-art AI tools to move quickly',
    },
    quality: {
      title: 'Testing & Quality',
      description: 'Continuous validation to maintain stability and clean code',
    },
    support: {
      title: 'Complete Ownership',
      description: 'Your code, credentials, and infrastructure from Day 1',
    },
  },

  // Portfolio Section
  portfolio: {
    title: 'Experience & Past Work',
    subtitle: 'Projects and software solutions built across diverse industries',
    viewProject: 'View Project Details',
    technologies: 'Tech Stack',
    client: 'Client',
    duration: 'Scope',
  },

  // Testimonials Section
  testimonials: {
    title: 'What Product Leaders Say',
    subtitle: 'Feedback on our focus on velocity, quality, and communication',
  },

  // CTA Section
  cta: {
    title: 'Have a software or AI project in mind?',
    subtitle: 'Book a short 15-minute call to review your requirements, evaluate technical feasibility, and define the best development plan.',
    button: 'Book 15-Min Call',
    guarantee: 'No commitment • Technical & transparent focus • Response within 24 hours',
  },

  // Footer
  footer: {
    copyright: '© 2026 ConaiSoft AI Engine. All rights reserved.',
    madeWith: 'Engineered with precision by ConaiSoft',
  },

  // Common
  common: {
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    readMore: 'Read More',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
  },
};