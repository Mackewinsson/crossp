"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href="https://calendly.com/mackewinsson/exploring-call"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100"
            >
              {t('cta.button')}
            </Button>
            
            <Button 
              href="#portfolio"
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600"
            >
              {t('portfolio.viewProject')}
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            No commitment required • 30-minute consultation • Expert insights
          </p>
        </div>
      </Container>
    </section>
  );
}; 