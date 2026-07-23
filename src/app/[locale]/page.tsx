import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { VelocityCalculatorSection } from '@/components/sections/VelocityCalculatorSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { DeliveryProcessSection } from '@/components/sections/DeliveryProcessSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

interface LocalePageProps {
  params: Promise<{
    locale: 'es' | 'en';
  }>;
}

export default async function LocalePage({ params }: LocalePageProps) {
  await params;
  
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <VelocityCalculatorSection />
        <ServicesSection />
        <DeliveryProcessSection />
        <FeaturesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <footer className="py-8 px-4 bg-[#05070a] border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        <p className="leading-relaxed text-balance">© 2026 ConaiSoft. All rights reserved.</p>
      </footer>
    </div>
  );
}