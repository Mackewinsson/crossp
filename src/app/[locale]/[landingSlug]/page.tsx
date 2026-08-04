import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SeoServiceLanding } from '@/components/seo/SeoServiceLanding';
import {
  getAllLandingStaticParams,
  getLandingBySlug,
  getLandingPath,
  type LandingLocale,
} from '@/data/seo-landings';
import { absoluteUrl } from '@/lib/seo';

type LandingPageProps = {
  params: Promise<{ locale: string; landingSlug: string }>;
};

function normalizeLocale(raw: string): LandingLocale | null {
  if (raw === 'es' || raw === 'en') return raw;
  return null;
}

export function generateStaticParams() {
  return getAllLandingStaticParams();
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { locale: rawLocale, landingSlug } = await params;
  const locale = normalizeLocale(rawLocale);
  if (!locale) return {};

  const landing = getLandingBySlug(locale, landingSlug);
  if (!landing) return {};

  const content = landing.content[locale];
  const path = getLandingPath(landing, locale);
  const alternateLocale: LandingLocale = locale === 'es' ? 'en' : 'es';

  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        es: getLandingPath(landing, 'es'),
        en: getLandingPath(landing, 'en'),
        'x-default': getLandingPath(landing, 'es'),
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: absoluteUrl(path),
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: [alternateLocale === 'es' ? 'es_ES' : 'en_US'],
    },
    twitter: {
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function SeoLandingPage({ params }: LandingPageProps) {
  const { locale: rawLocale, landingSlug } = await params;
  const locale = normalizeLocale(rawLocale);
  if (!locale) notFound();

  const landing = getLandingBySlug(locale, landingSlug);
  if (!landing) notFound();

  return <SeoServiceLanding landing={landing} locale={locale} />;
}
