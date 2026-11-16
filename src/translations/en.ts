import type { Dictionary } from '@/translations/types';

export const en: Dictionary = {
  header: {
    services: 'Services',
    process: 'How it works',
    work: 'Work',
    blog: 'Blog',
    cta: 'Start a project',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Ver en español',
  },

  hero: {
    title: 'We build your software product.',
    titleAccent: 'In weeks, not months.',
    subtitle:
      'ConaiSoft is a small senior team that uses AI to build web apps, mobile apps and AI features faster than a traditional agency. You see working software every week, and you own all the code.',
    ctaPrimary: 'Tell us what you want to build',
    ctaSecondary: 'Book a free call',
    proof: [
      {
        title: 'A working demo every week',
        description: 'You see real progress, not status reports.',
      },
      {
        title: '100% code ownership',
        description: 'Code, accounts and credentials in your name from day one.',
      },
      {
        title: 'Reply within 24 hours',
        description: 'An engineer reads your message and answers it.',
      },
    ],
  },

  services: {
    title: 'What we can build for you',
    subtitle: 'Pick the situation closest to yours.',
    items: [
      {
        id: 'new-product',
        title: 'Launch a new product',
        description:
          'You have an idea for a web or mobile app. We turn it into a first version that real users can try, then improve it with what you learn.',
        linkLabel: 'How to build an MVP',
      },
      {
        id: 'add-ai',
        title: 'Add AI to your product or operations',
        description:
          'Assistants, document search and automations connected to the systems you already use, without rebuilding them.',
        linkLabel: 'Adding AI to existing software',
      },
      {
        id: 'legacy-rebuild',
        title: 'Rebuild software that holds you back',
        description:
          'Old software that is slow and risky to change. We replace the parts that hurt first and keep what still works.',
        linkLabel: 'Legacy software rebuild',
      },
      {
        id: 'dedicated-team',
        title: 'Get a dedicated team',
        description:
          'Your product is live and the backlog keeps growing. A stable senior team works on your roadmap every week.',
        linkLabel: 'Dedicated development team',
      },
    ],
  },

  process: {
    title: 'How it works',
    subtitle: 'Four steps. You always know what is being built and what comes next.',
    steps: [
      {
        title: 'Tell us your idea',
        description:
          'Send the form or book a free call. We tell you honestly whether we can help and how we would approach it.',
      },
      {
        title: 'We agree on a plan',
        description:
          'Together we define the first version: what it includes, what can wait, how long it takes and what it costs. You decide before any code is written.',
      },
      {
        title: 'You see it working every week',
        description:
          'We build in short sprints and show you working software every week. You can change priorities as you learn.',
      },
      {
        title: 'Launch and handover',
        description:
          'We launch on your own accounts and hand over the code, access and documentation. Keep building with us or take it to your own team.',
      },
    ],
  },

  why: {
    title: 'Why a small team in the AI era',
    subtitle:
      'AI changed how fast software can be built. It did not change who should make the decisions.',
    items: [
      {
        title: 'Senior engineers build it',
        description:
          'Experienced engineers design and build your product, and make the technical decisions that protect your roadmap.',
      },
      {
        title: 'AI where it saves time',
        description:
          'We use modern AI tools to move faster on routine work. Architecture and quality stay with the engineers.',
      },
      {
        title: 'No surprises',
        description:
          'A working demo every week lets you catch a wrong turn in week two instead of week nine. Automated tests and documentation are included.',
      },
      {
        title: 'No lock-in',
        description:
          'Your code, your cloud accounts and your credentials from day one. Your team can take over whenever you want.',
      },
    ],
  },

  work: {
    title: 'Products our engineers have worked on',
    subtitle:
      'Our engineers helped build these products as members of the teams behind them.',
  },

  faq: {
    title: 'Questions people ask before they call',
    items: [
      {
        id: 'cost',
        question: 'How much does it cost?',
        answer:
          'It depends on what the first version has to do, so we do not publish a single price. We work in short sprints with an agreed scope, so you pay for work you can see and review. After a short free call you get a realistic range for your idea.',
        linkLabel: 'How much custom software costs in 2026',
      },
      {
        id: 'timeline',
        question: 'How long does it take?',
        answer:
          'A focused first version usually takes 4 to 8 weeks. A very narrow one can take 2 to 4. Payments, several user roles, AI features or integrations with older systems can push it to 8 to 12 weeks or more. You usually see a first demo within the first week or two.',
        linkLabel: 'How long an MVP takes',
      },
      {
        id: 'ownership',
        question: 'Who owns the code?',
        answer:
          'You do. 100% of the code, the cloud accounts and the credentials are in your company’s name from day one.',
        linkLabel: 'Who owns the code when you hire developers',
      },
      {
        id: 'idea',
        question: 'I only have an idea. Is that enough?',
        answer:
          'Yes. On the first call we help you decide what the smallest useful version is and what can wait. If the idea should be tested before it is built, we will tell you.',
        linkLabel: 'How to validate an idea before building',
      },
      {
        id: 'non-technical',
        question: 'I am not technical. Can I work with you?',
        answer:
          'Yes. You do not need to read code. Every week you see and try the working product, and we explain the trade-offs in plain language so you can decide.',
        linkLabel: 'How to manage an outsourced development team',
      },
      {
        id: 'after-launch',
        question: 'What happens after launch?',
        answer:
          'You choose. We can keep building with you as a dedicated team, or hand everything over to your own developers. Either way, the code and the accounts are already yours.',
        linkLabel: 'How a dedicated team works',
      },
    ],
  },

  contact: {
    title: 'Tell us what you want to build',
    subtitle:
      'Describe your idea in a few lines. An engineer replies within 24 hours with honest feedback and next steps. No commitment.',
    callTitle: 'Prefer to talk?',
    callBody: 'Book a free call and walk us through your project.',
    callCta: 'Book a free call',
  },

  footer: {
    rights: 'All rights reserved.',
    home: 'Home',
    blog: 'Blog',
    bookCall: 'Book a call',
    navLabel: 'Footer',
  },
};
