import React from 'react';
import { heroData } from '@/data/hero';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {heroData.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {heroData.subtitle}
          </p>
          
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href={heroData.ctaLink}
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroData.ctaText}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}; 