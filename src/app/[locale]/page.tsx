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
  const { locale } = await params;
  
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
        <p className="leading-relaxed text-balance mb-2">© 2026 ConaiSoft. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-3xl mx-auto">
          <a href={`/${locale}/blog`} className="text-cyan-500/80 hover:text-cyan-400">
            Blog
          </a>
          <a
            href={`/${locale}/${locale === 'es' ? 'equipo-desarrollo-dedicado' : 'dedicated-development-team'}`}
            className="text-cyan-500/80 hover:text-cyan-400"
          >
            {locale === 'es' ? 'Equipo dedicado' : 'Dedicated team'}
          </a>
          <a
            href={`/${locale}/${locale === 'es' ? 'reconstruir-software-legacy' : 'legacy-software-rebuild'}`}
            className="text-cyan-500/80 hover:text-cyan-400"
          >
            {locale === 'es' ? 'Software legacy' : 'Legacy rebuild'}
          </a>
          <a
            href={`/${locale}/${locale === 'es' ? 'agregar-ia-a-software-existente' : 'add-ai-to-existing-software'}`}
            className="text-cyan-500/80 hover:text-cyan-400"
          >
            {locale === 'es' ? 'IA en software existente' : 'Add AI'}
          </a>
        </nav>
      </footer>
    </div>
  );
}