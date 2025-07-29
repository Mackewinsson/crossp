import { useTranslation } from '@/contexts/TranslationContext';

// Predefined translation keys to avoid magic strings
export const TRANSLATION_KEYS = {
  // Header
  HEADER_SERVICES: 'header.services',
  HEADER_WHY_US: 'header.whyUs',
  HEADER_TESTIMONIALS: 'header.testimonials',
  HEADER_GET_STARTED: 'header.getStarted',
  
  // Hero
  HERO_TITLE: 'hero.title',
  HERO_SUBTITLE: 'hero.subtitle',
  HERO_CTA: 'hero.cta',
  
  // Common
  COMMON_LEARN_MORE: 'common.learnMore',
  
  // Portfolio
  PORTFOLIO_TITLE: 'portfolio.title',
  PORTFOLIO_SUBTITLE: 'portfolio.subtitle',
  PORTFOLIO_VIEW_PROJECT: 'portfolio.viewProject',
  
  // Services
  SERVICES_TITLE: 'services.title',
  SERVICES_SUBTITLE: 'services.subtitle',
  
  // Features
  FEATURES_TITLE: 'features.title',
  FEATURES_SUBTITLE: 'features.subtitle',
  
  // Testimonials
  TESTIMONIALS_TITLE: 'testimonials.title',
  TESTIMONIALS_SUBTITLE: 'testimonials.subtitle',
  
  // CTA
  CTA_TITLE: 'cta.title',
  CTA_SUBTITLE: 'cta.subtitle',
  CTA_BUTTON: 'cta.button',
} as const;

export const useTranslations = () => {
  const { t, locale, setLocale, isSpanish, isEnglish } = useTranslation();
  
  // Memoized translation functions for common sections
  const header = {
    services: () => t(TRANSLATION_KEYS.HEADER_SERVICES),
    whyUs: () => t(TRANSLATION_KEYS.HEADER_WHY_US),
    testimonials: () => t(TRANSLATION_KEYS.HEADER_TESTIMONIALS),
    getStarted: () => t(TRANSLATION_KEYS.HEADER_GET_STARTED),
  };
  
  const hero = {
    title: () => t(TRANSLATION_KEYS.HERO_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.HERO_SUBTITLE),
    cta: () => t(TRANSLATION_KEYS.HERO_CTA),
  };
  
  const common = {
    learnMore: () => t(TRANSLATION_KEYS.COMMON_LEARN_MORE),
  };
  
  const portfolio = {
    title: () => t(TRANSLATION_KEYS.PORTFOLIO_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.PORTFOLIO_SUBTITLE),
    viewProject: () => t(TRANSLATION_KEYS.PORTFOLIO_VIEW_PROJECT),
  };
  
  const services = {
    title: () => t(TRANSLATION_KEYS.SERVICES_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.SERVICES_SUBTITLE),
  };
  
  const features = {
    title: () => t(TRANSLATION_KEYS.FEATURES_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.FEATURES_SUBTITLE),
  };
  
  const testimonials = {
    title: () => t(TRANSLATION_KEYS.TESTIMONIALS_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.TESTIMONIALS_SUBTITLE),
  };
  
  const cta = {
    title: () => t(TRANSLATION_KEYS.CTA_TITLE),
    subtitle: () => t(TRANSLATION_KEYS.CTA_SUBTITLE),
    button: () => t(TRANSLATION_KEYS.CTA_BUTTON),
  };
  
  return {
    t,
    locale,
    setLocale,
    isSpanish,
    isEnglish,
    header,
    hero,
    common,
    portfolio,
    services,
    features,
    testimonials,
    cta,
  };
}; 