export const en = {
  // Header
  header: {
    services: 'Solutions',
    painPoints: 'Challenges',
    velocity: 'Timeline Estimator',
    process: 'How We Work',
    portfolio: 'Work',
    testimonials: 'Clients',
    getStarted: 'Book a Call',
    status: 'Senior engineering • Weekly deliverables • Full code ownership',
  },

  // Hero Section
  hero: {
    statusBadge: 'SOFTWARE & AI ENGINEERING PARTNER',
    title: 'Ship production software without the usual delays',
    titleHighlight: 'Senior team. Clear process. You own everything.',
    subtitle: 'We help founders and product teams build web platforms, mobile apps, and AI features with senior architecture, weekly working deliverables, and full transparency — so you move faster without agency lock-in or hiring overhead.',
    ctaPrimary: 'Book a Discovery Call',
    ctaSecondary: 'Compare Delivery Models',
    scrollDown: 'See how we solve common blockers',
    metrics: {
      delivery: 'Weekly',
      deliveryLabel: 'Working Deliverables',
      uptime: 'Senior',
      uptimeLabel: 'Architecture-Led Delivery',
      codeOwnership: '100%',
      codeOwnershipLabel: 'Source Code Ownership',
    },
    terminal: {
      title: 'conaisoft delivery ~ sprint',
      prompt: 'plan_sprint --architecture --tests --handover',
      output1: '✔ Clarifying requirements and system boundaries...',
      output2: '✔ Building production-ready TypeScript, APIs & Next.js...',
      output3: '✔ Adding automated tests, CI checks & documentation...',
      output4: '✔ Sprint review ready — code and access handed over.',
    }
  },

  // Pain Points Section
  painPoints: {
    badge: 'COMMON DEVELOPMENT BLOCKERS',
    title: 'Stuck between slow agencies, risky freelancers, and costly hiring?',
    subtitle: 'Most teams lose months to the wrong delivery model. We remove the friction that delays products and inflates cost:',
    cards: [
      {
        id: 'agencies',
        icon: '⏳',
        painTitle: 'Agency timelines drag on',
        painDesc: 'Long discovery phases, rigid scopes, and 6–12 month cycles that push your launch further out — often with little working software along the way.',
        solutionTitle: 'Solution: Weekly sprint delivery',
        solutionDesc: 'Short cycles with working software every week, visible progress, and scope you can adjust as priorities change.',
      },
      {
        id: 'hiring',
        icon: '💸',
        painTitle: 'Hiring is slow and expensive',
        painDesc: 'Recruiting senior engineers takes months and creates fixed overhead before you know if the product fits the market.',
        solutionTitle: 'Solution: Senior team on demand',
        solutionDesc: 'Immediate access to architecture and engineering capacity — without payroll, management burden, or a long hiring cycle.',
      },
      {
        id: 'freelancers',
        icon: '⚠️',
        painTitle: 'Inconsistent quality and no tests',
        painDesc: 'Fragmented codebases, missing standards, weak documentation, and technical debt that shows up right when you need to scale.',
        solutionTitle: 'Solution: Quality built into every sprint',
        solutionDesc: 'Clear architecture, automated tests, documentation, and a full repository handover so your team can take over with confidence.',
      },
      {
        id: 'nocode',
        icon: '🧱',
        painTitle: 'No-code hits a ceiling',
        painDesc: 'Fine for early prototypes — but custom workflows, AI features, integrations, and scale quickly outgrow drag-and-drop tools.',
        solutionTitle: 'Solution: Real full-stack architecture',
        solutionDesc: 'Built on Next.js, Node/Python, and databases designed to grow with your product — without rebuilding from scratch later.',
      },
    ],
    comparisonTitle: 'How delivery models compare',
    tableHeaders: {
      feature: 'What matters',
      agency: 'Traditional Agency',
      inHouse: 'In-House Team',
      freelance: 'Freelancers',
      conaiSoft: 'ConaiSoft',
    },
    tableRows: [
      { feature: 'Delivery rhythm', agency: '6–12 month batches', inHouse: '4–8 months typical', freelance: 'Variable / uncertain', conaiSoft: 'Continuous weekly sprints' },
      { feature: 'Investment model', agency: 'Rigid fixed quotes', inHouse: 'High fixed salaries', freelance: 'Hourly / project', conaiSoft: 'Flexible sprint pricing' },
      { feature: 'AI capability', agency: 'Limited / ad-hoc', inHouse: 'Needs specialists', freelance: 'Often surface-level', conaiSoft: 'Native (LLMs, RAG, agents)' },
      { feature: 'Testing & CI/CD', agency: 'Often optional / extra', inHouse: 'Depends on team', freelance: 'Rarely included', conaiSoft: 'Included by default' },
      { feature: 'Code ownership', agency: 'Contract-dependent', inHouse: '100%', freelance: 'Often unclear', conaiSoft: '100% yours' },
    ]
  },

  // Velocity Calculator Section
  calculator: {
    badge: 'TIMELINE ESTIMATOR',
    title: 'See how sprint-based delivery compares',
    subtitle: 'Pick a product type for a realistic MVP-scope estimate. Exact timelines depend on complexity — we refine them together on a discovery call.',
    projectTypes: [
      { id: 'saas', name: 'SaaS / Web Platform', tradTime: '16 Weeks', tradCost: 'High', aiTime: '6 – 10 Weeks', aiCost: 'Scoped sprints', savings: 'Faster to MVP' },
      { id: 'ai-app', name: 'AI & RAG Product', tradTime: '24 Weeks', tradCost: 'Very High', aiTime: '8 – 12 Weeks', aiCost: 'Scoped sprints', savings: 'Faster validation' },
      { id: 'mobile', name: 'iOS / Android App', tradTime: '20 Weeks', tradCost: 'High', aiTime: '6 – 10 Weeks', aiCost: 'Scoped sprints', savings: 'Faster to market' },
      { id: 'workflow', name: 'API Integrations', tradTime: '12 Weeks', tradCost: 'Medium', aiTime: '2 – 4 Weeks', aiCost: 'Scoped sprints', savings: 'Less waiting' },
    ],
    labels: {
      traditional: 'Typical traditional path',
      conaiSoft: 'ConaiSoft sprint model',
      timeSaved: 'Weeks recovered',
      costSaved: 'Cost control',
      guarantee: 'Transparency you can verify',
      guaranteeDesc: 'End-of-sprint reviews with working deliverables, open communication, and full visibility into the codebase.',
    }
  },

  // Services Section
  services: {
    badge: 'WHAT WE BUILD',
    title: 'Software designed for real business constraints',
    subtitle: 'Practical architectures that ship, scale, and stay maintainable — not demos that fall apart in production.',
    aiIntegration: {
      title: 'AI Agents & RAG Systems',
      popupTitle: 'Custom AI Integration',
      description: 'We design AI agents, retrieval pipelines, and document intelligence that fit your workflows — with security and maintainability in mind.',
      features: [
        'LLM agent orchestration for real operations',
        'Vector databases & RAG document search',
        'Intelligent document and workflow processing',
        'Secure connections to your APIs and internal systems',
      ],
    },
    customSoftware: {
      title: 'Web & SaaS Platforms',
      popupTitle: 'Full-Stack Web Development',
      description: 'We build fast, reliable web products on Next.js, React, TypeScript, and modern cloud infrastructure.',
      features: [
        'Responsive, high-performance React frontends',
        'Scalable REST & GraphQL APIs in TypeScript',
        'Payments, authentication, and role-based access',
      ],
    },
    mobileApps: {
      title: 'React Native Mobile Apps',
      popupTitle: 'Mobile App Engineering',
      description: 'Cross-platform iOS and Android apps with solid UX, offline support, and production-ready foundations.',
      features: [
        'Efficient React Native cross-platform delivery',
        'Real-time sync and offline-friendly design',
        'Push notifications and secure authentication',
      ],
    },
    cloudAutomation: {
      title: 'Cloud Infrastructure & DevOps',
      popupTitle: 'DevOps & Cloud Architecture',
      description: 'Clean deployment pipelines, security practices, and monitoring on AWS, GCP, or Vercel — so releases stay predictable.',
      features: [
        'Infrastructure as Code (Docker / cloud)',
        'CI/CD pipelines for safer releases',
        'Stability checks and performance monitoring',
      ],
    },
  },

  // Delivery Protocol Section
  process: {
    badge: 'HOW WE WORK',
    title: 'From idea to production in four clear phases',
    subtitle: 'A transparent workflow so you always know what is being built, why, and what comes next.',
    steps: [
      {
        step: '01',
        day: 'Phase 1',
        title: 'Discovery & Architecture',
        description: 'We align on goals, constraints, data models, security needs, and API boundaries before writing production code.',
      },
      {
        step: '02',
        day: 'Phase 2',
        title: 'Build in Weekly Sprints',
        description: 'We implement core structure, business logic, and UI — reviewing working software with you every sprint.',
      },
      {
        step: '03',
        day: 'Phase 3',
        title: 'Testing & Hardening',
        description: 'We add automated tests and tighten security so the product stays stable as features grow.',
      },
      {
        step: '04',
        day: 'Phase 4',
        title: 'Deploy & Hand Over',
        description: 'We deploy to your environment and transfer 100% of the repository, credentials, and documentation.',
      },
    ]
  },

  // Features Section
  features: {
    title: 'Why teams choose ConaiSoft',
    subtitle: 'Trust comes from clarity: senior judgment, measurable progress, and ownership that stays with you.',
    expertise: {
      title: 'Senior architecture',
      description: 'Experienced engineers making the technical decisions that protect your roadmap',
    },
    innovation: {
      title: 'Practical AI acceleration',
      description: 'We use modern AI tooling to move faster — without sacrificing architecture or quality',
    },
    quality: {
      title: 'Testing & maintainability',
      description: 'Automated checks and clean structure so your product stays easy to extend',
    },
    support: {
      title: 'Complete ownership',
      description: 'Your code, credentials, and infrastructure from day one — no lock-in',
    },
  },

  // Portfolio Section
  portfolio: {
    title: 'Selected work',
    subtitle: 'Software shipped across products, industries, and stages of growth',
    viewProject: 'View project details',
    technologies: 'Tech stack',
    client: 'Client',
    duration: 'Scope',
  },

  // Testimonials Section
  testimonials: {
    title: 'What clients value most',
    subtitle: 'Clear communication, reliable delivery, and software their teams can actually own',
  },

  // CTA Section
  cta: {
    badge: 'FREE DISCOVERY CALL',
    title: 'Ready to unblock your product roadmap?',
    subtitle: 'Book a free 15-minute call. We will review your goals, flag technical risks early, and outline a realistic delivery plan — with no pressure to commit.',
    button: 'Book a 15-Min Call',
    guarantee: 'No commitment • Straight technical advice • Reply within 24 hours',
  },

  // Footer
  footer: {
    copyright: '© 2026 ConaiSoft. All rights reserved.',
    madeWith: 'Built with care by ConaiSoft',
  },

  // Common
  common: {
    learnMore: 'Learn more',
    contactUs: 'Contact us',
    readMore: 'Read more',
    close: 'Close',
    next: 'Next',
    previous: 'Previous',
  },
};
