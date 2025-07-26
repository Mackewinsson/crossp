import React from 'react';
import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and software solutions to drive your business forward
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