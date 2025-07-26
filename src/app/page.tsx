import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
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
