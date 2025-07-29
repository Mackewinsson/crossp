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
        'Custom AI model development and training',
        'API integration with existing systems',
        'Workflow automation and optimization',
        'Real-time data processing and analytics',
        'Natural language processing implementation',
      ],
    },
    {
      id: "custom-software",
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      icon: "💻",
      features: [
        'Full-stack web applications',
        'Mobile app development', 
        'API design and integration',
        'Legacy system modernization'
      ],
    },
    {
      id: "cloud-migration",
      title: t('services.cloudMigration.title'),
      description: t('services.cloudMigration.description'),
      icon: "☁️",
      features: [
        'Cloud strategy and planning',
        'Infrastructure as Code',
        'CI/CD pipeline setup',
        'Performance optimization'
      ],
    },
    {
      id: "digital-transformation",
      title: t('services.digitalTransformation.title'),
      description: t('services.digitalTransformation.description'),
      icon: "🚀",
      features: [
        'Process automation',
        'Digital workflow optimization',
        'Change management',
        'Technology training and adoption'
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white" id="services">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 