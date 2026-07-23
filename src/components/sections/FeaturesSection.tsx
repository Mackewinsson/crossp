"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: "expertise",
      title: t('features.expertise.title'),
      description: t('features.expertise.description'),
      icon: "🎯",
    },
    {
      id: "innovation",
      title: t('features.innovation.title'),
      description: t('features.innovation.description'),
      icon: "⚡",
    },
    {
      id: "quality",
      title: t('features.quality.title'),
      description: t('features.quality.description'),
      icon: "🛡️",
    },
    {
      id: "support",
      title: t('features.support.title'),
      description: t('features.support.description'),
      icon: "🔐",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80" id="features">
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};