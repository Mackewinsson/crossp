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
import { getDictionary } from '@/lib/i18n';
import { LOCALES, isLocale } from '@/lib/locales';

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

  return (
    <div className="min-h-screen bg-bg text-ink">
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
