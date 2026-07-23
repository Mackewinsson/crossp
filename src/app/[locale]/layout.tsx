import type { Metadata } from 'next';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_DESCRIPTION_ES,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
} from '@/lib/seo';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: 'es' | 'en' }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'es' | 'en' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale !== 'en';
  const title = isSpanish
    ? `${SITE_NAME} — Partner de Ingeniería de Software e IA`
    : `${SITE_NAME} — ${SITE_TAGLINE}`;
  const description = isSpanish ? DEFAULT_DESCRIPTION_ES : DEFAULT_DESCRIPTION;
  const path = `/${isSpanish ? 'es' : 'en'}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: '/es',
        en: '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      locale: isSpanish ? 'es_ES' : 'en_US',
      alternateLocale: isSpanish ? ['en_US'] : ['es_ES'],
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'es';

  return <div lang={lang}>{children}</div>;
}
