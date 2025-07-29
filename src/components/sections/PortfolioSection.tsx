"use client";

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/ui/Container';
import { PortfolioModal } from '@/components/ui/PortfolioModal';
import { PortfolioProject } from '@/data/portfolio';
import { useTranslation } from '@/contexts/TranslationContext';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 lg:py-32 overflow-hidden" id="portfolio">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 border border-gray-100"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.portfolioImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.meta}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    {project.clientName}
                  </span>
                  
                  {/* External Link Icon */}
                  <div className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      
      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
      
      {/* Decorative elements */}
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}; 