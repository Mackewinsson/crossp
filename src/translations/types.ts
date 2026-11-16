export type ServiceId = 'new-product' | 'add-ai' | 'legacy-rebuild' | 'dedicated-team';

export type FaqId = 'cost' | 'timeline' | 'ownership' | 'idea' | 'non-technical' | 'after-launch';

type TitledText = {
  title: string;
  description: string;
};

export type Dictionary = {
  header: {
    services: string;
    process: string;
    work: string;
    blog: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  hero: {
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: TitledText[];
  };
  services: {
    title: string;
    subtitle: string;
    items: (TitledText & { id: ServiceId; linkLabel: string })[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: TitledText[];
  };
  why: {
    title: string;
    subtitle: string;
    items: TitledText[];
  };
  work: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    items: { id: FaqId; question: string; answer: string; linkLabel: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    callTitle: string;
    callBody: string;
    callCta: string;
  };
  footer: {
    rights: string;
    home: string;
    blog: string;
    bookCall: string;
    navLabel: string;
  };
};
