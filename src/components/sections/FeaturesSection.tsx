import React from 'react';
import { features } from '@/data/features';
import { Container } from '@/components/ui/Container';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 