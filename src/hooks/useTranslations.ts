import { useTranslation } from '@/contexts/TranslationContext';

export const useTranslations = () => {
  const { t, locale, setLocale, isSpanish, isEnglish } = useTranslation();
  
  const header = {
    services: () => t('header.services'),
    painPoints: () => t('header.painPoints'),
    velocity: () => t('header.velocity'),
    process: () => t('header.process'),
    portfolio: () => t('header.portfolio'),
    testimonials: () => t('header.testimonials'),
    getStarted: () => t('header.getStarted'),
    status: () => t('header.status'),
  };
  
  const hero = {
    badge: () => t('hero.statusBadge'),
    title: () => t('hero.title'),
    titleHighlight: () => t('hero.titleHighlight'),
    subtitle: () => t('hero.subtitle'),
    ctaPrimary: () => t('hero.ctaPrimary'),
    ctaSecondary: () => t('hero.ctaSecondary'),
    scrollDown: () => t('hero.scrollDown'),
  };
  
  const common = {
    learnMore: () => t('common.learnMore'),
  };
  
  const portfolio = {
    title: () => t('portfolio.title'),
    subtitle: () => t('portfolio.subtitle'),
    viewProject: () => t('portfolio.viewProject'),
  };
  
  const services = {
    title: () => t('services.title'),
    subtitle: () => t('services.subtitle'),
  };
  
  const features = {
    title: () => t('features.title'),
    subtitle: () => t('features.subtitle'),
  };
  
  const testimonials = {
    title: () => t('testimonials.title'),
    subtitle: () => t('testimonials.subtitle'),
  };
  
  const cta = {
    title: () => t('cta.title'),
    subtitle: () => t('cta.subtitle'),
    button: () => t('cta.button'),
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