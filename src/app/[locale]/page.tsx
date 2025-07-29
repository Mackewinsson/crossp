import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

interface LocalePageProps {
  params: Promise<{
    locale: 'es' | 'en';
  }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  // Await params to satisfy Next.js 15 requirements
  await params;
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <CTASection />
      </main>
    </div>
  );
} 