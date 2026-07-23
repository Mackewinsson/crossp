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
    <section className="relative bg-[#07090e] py-20 lg:py-32 overflow-hidden border-b border-slate-800/80" id="portfolio">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span>🏆</span>
            <span className="font-semibold tracking-wider uppercase">CASOS DE ÉXITO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={project.portfolioImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.meta}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-cyan-300">
                      {project.clientName}
                    </span>
                    
                    <div className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <span className="inline-block px-2.5 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-full text-[11px] font-mono">
                      {project.category}
                    </span>
                  </div>
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
    </section>
  );
};