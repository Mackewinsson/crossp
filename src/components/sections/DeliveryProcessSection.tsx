"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const DeliveryProcessSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: '01',
      day: t('process.steps.0.day'),
      title: t('process.steps.0.title'),
      description: t('process.steps.0.description'),
    },
    {
      step: '02',
      day: t('process.steps.1.day'),
      title: t('process.steps.1.title'),
      description: t('process.steps.1.description'),
    },
    {
      step: '03',
      day: t('process.steps.2.day'),
      title: t('process.steps.2.title'),
      description: t('process.steps.2.description'),
    },
    {
      step: '04',
      day: t('process.steps.3.day'),
      title: t('process.steps.3.title'),
      description: t('process.steps.3.description'),
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#07090e] relative overflow-hidden border-b border-slate-800/80" id="process">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <span>🚀</span>
            <span className="font-semibold tracking-wider uppercase">{t('process.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('process.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive rounded-2xl p-6 relative flex flex-col justify-between group"
            >
              {/* Step indicator top header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400/50 transition-colors">
                    {item.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                    {item.day}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom connecting bar indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <span className={`block h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 ${
                    idx === 0 ? 'w-1/4' : idx === 1 ? 'w-2/4' : idx === 2 ? 'w-3/4' : 'w-full'
                  }`}></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
