import React from 'react';
import { heroData } from '@/data/hero';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight select-text">
            {heroData.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed select-text">
            {heroData.subtitle}
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto select-text">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              href={heroData.ctaLink}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroData.ctaText}
            </Button>
            
            <Button 
              href="https://calendly.com/mackewinsson/exploring-call"
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Decorative elements - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}; 