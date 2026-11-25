import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CTASection } from '@/components/sections/CTASection';
import { DeliveryProcessSection } from '@/components/sections/DeliveryProcessSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getDictionary } from '@/lib/i18n';
import { LOCALES, isLocale } from '@/lib/locales';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_DESCRIPTION_ES,
  SITE_NAME,
  absoluteUrl,
} from '@/lib/seo';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = getDictionary(locale);
  const path = `/${locale}`;
  const isSpanish = locale !== 'en';

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: isSpanish
      ? `${SITE_NAME} — Partner de Ingeniería de Software e IA`
      : `${SITE_NAME} — Software & AI Engineering Partner`,
    description: isSpanish ? DEFAULT_DESCRIPTION_ES : DEFAULT_DESCRIPTION,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    about: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      <JsonLd data={webPageLd} />
      <Header />
      <main>
        <HeroSection copy={copy.hero} />
        <ServicesSection copy={copy.services} locale={locale} />
        <DeliveryProcessSection copy={copy.process} />
        <WhyUsSection copy={copy.why} />
        <PortfolioSection copy={copy.work} locale={locale} />
        <FaqSection copy={copy.faq} locale={locale} />
        <CTASection copy={copy.contact} locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
