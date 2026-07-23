"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-[#07090e] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-14 border border-cyan-500/30 text-center relative shadow-2xl shadow-cyan-500/10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-semibold tracking-wider uppercase">GARANTÍA DE VELOCIDAD Y CALIDAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {t('cta.title')}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="https://calendly.com/mackewinsson/exploring-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 active:scale-95 transition-all duration-200 border border-cyan-400/40 w-full sm:w-auto min-h-[54px]"
            >
              <span>{t('cta.button')}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 hover:text-white rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 w-full sm:w-auto min-h-[54px]"
            >
              <span>{t('portfolio.viewProject')}</span>
            </a>
          </div>
          
          <p className="text-xs font-mono text-slate-400 mt-4">
            {t('cta.guarantee')}
          </p>
        </div>
      </Container>
    </section>
  );
};