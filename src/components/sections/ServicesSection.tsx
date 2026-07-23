"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "ai-integration",
      title: t('services.aiIntegration.title'),
      description: t('services.aiIntegration.description'),
      icon: "🤖",
      features: [
        t('services.aiIntegration.features.0'),
        t('services.aiIntegration.features.1'),
        t('services.aiIntegration.features.2'),
        t('services.aiIntegration.features.3'),
      ],
    },
    {
      id: "custom-software",
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      icon: "⚡",
      features: [
        t('services.customSoftware.features.0'),
        t('services.customSoftware.features.1'),
        t('services.customSoftware.features.2'),
      ],
    },
    {
      id: "mobile-apps",
      title: t('services.mobileApps.title'),
      description: t('services.mobileApps.description'),
      icon: "📱",
      features: [
        t('services.mobileApps.features.0'),
        t('services.mobileApps.features.1'),
        t('services.mobileApps.features.2'),
      ],
    },
    {
      id: "cloud-automation",
      title: t('services.cloudAutomation.title'),
      description: t('services.cloudAutomation.description'),
      icon: "☁️",
      features: [
        t('services.cloudAutomation.features.0'),
        t('services.cloudAutomation.features.1'),
        t('services.cloudAutomation.features.2'),
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80" id="services">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span>🛠️</span>
            <span className="font-semibold tracking-wider uppercase">{t('services.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('services.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start gap-3 sm:gap-4 mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 mb-3 font-semibold uppercase tracking-wider">CAPACIDADES ENTREGADAS</div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2.5 flex-shrink-0 mt-2"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};