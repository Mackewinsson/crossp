import type { BlogLocale } from '@/lib/blog';

type BlogCopy = {
  indexTitle: string;
  indexIntro: string;
  readArticle: string;
  minutesRead: string;
  allArticles: string;
  relatedService: string;
  ctaTitle: string;
  ctaBody: string;
};

export const BLOG_COPY: Record<BlogLocale, BlogCopy> = {
  en: {
    indexTitle: 'Answers for business people who hire development',
    indexIntro:
      'Clear guidance on agencies, freelancers, in-house hiring, no-code limits, and how to choose a partner without getting locked in.',
    readArticle: 'Read article',
    minutesRead: 'min read',
    allArticles: 'All articles',
    relatedService: 'Related service',
    ctaTitle: 'Have a product you want built?',
    ctaBody:
      'Tell us about it. We will review your goals, flag technical risks early, and outline a realistic delivery plan.',
  },
  es: {
    indexTitle: 'Respuestas para negocios que contratan desarrollo',
    indexIntro:
      'Guía clara sobre agencias, freelancers, contratación in-house, límites del no-code y cómo elegir un partner sin quedar atrapado.',
    readArticle: 'Leer artículo',
    minutesRead: 'min de lectura',
    allArticles: 'Todos los artículos',
    relatedService: 'Servicio relacionado',
    ctaTitle: '¿Tienes un producto que quieres construir?',
    ctaBody:
      'Cuéntanos. Revisamos tus objetivos, señalamos los riesgos técnicos desde el inicio y te proponemos un plan de entrega realista.',
  },
};
