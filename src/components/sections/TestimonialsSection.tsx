"use client";

import React from 'react';
import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/contexts/TranslationContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80" id="testimonials">
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span>💬</span>
            <span className="font-semibold tracking-wider uppercase">TESTIMONIOS Y MÉTRICAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <svg className="w-8 h-8 text-cyan-400 mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              
              <div className="border-t border-slate-800/80 pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="font-bold text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {testimonial.position}
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20 w-fit max-w-full truncate">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};