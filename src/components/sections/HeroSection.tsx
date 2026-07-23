"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useTranslations } from '@/hooks/useTranslations';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { hero } = useTranslations();
  
  // Interactive Terminal state
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    t('hero.terminal.output1'),
    t('hero.terminal.output2'),
    t('hero.terminal.output3'),
    t('hero.terminal.output4'),
  ];

  useEffect(() => {
    if (terminalLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalLineIndex(prev => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [terminalLineIndex, terminalLines.length]);

  const handleRestartTerminal = () => {
    setTerminalLineIndex(0);
    setIsTyping(true);
  };

  return (
    <section className="relative bg-[#07090e] py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-slate-800/80">
      {/* Background cyber grid and ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-semibold tracking-wider uppercase">{hero.badge()}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 select-text">
              {hero.title()}{' '}
              <span className="gradient-text-cyan block mt-2">
                {hero.titleHighlight()}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl select-text">
              {hero.subtitle()}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://calendly.com/mackewinsson/exploring-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all duration-200 border border-cyan-400/40 min-h-[54px]"
              >
                <span>{hero.ctaPrimary()}</span>
                <svg className="w-5 h-5 ml-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#velocity"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 hover:text-white rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 min-h-[54px]"
              >
                <span>{hero.ctaSecondary()}</span>
                <svg className="w-5 h-5 ml-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Key Trust Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">{t('hero.metrics.delivery')}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{t('hero.metrics.deliveryLabel')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">99.9%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{t('hero.metrics.uptimeLabel')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{t('hero.metrics.codeOwnershipLabel')}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive AI Terminal Code Simulator */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative group">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center space-x-1.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>{t('hero.terminal.title')}</span>
                </div>
                <button
                  onClick={handleRestartTerminal}
                  className="text-xs text-slate-400 hover:text-cyan-400 font-mono transition-colors focus:outline-none"
                  title="Re-run terminal preview"
                >
                  ↻ run
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-[#090d16] text-slate-200 min-h-[310px]">
                {/* Command Prompt */}
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span>❯</span>
                  <span className="text-emerald-400 font-semibold">{t('hero.terminal.prompt')}</span>
                </div>

                {/* Simulated Log Output Lines */}
                <div className="space-y-2 pt-2">
                  {terminalLines.slice(0, terminalLineIndex).map((line, idx) => (
                    <div
                      key={idx}
                      className={`leading-relaxed transition-all duration-300 ${
                        idx === terminalLines.length - 1
                          ? 'text-cyan-300 font-bold bg-cyan-950/40 p-2 rounded border border-cyan-500/30'
                          : 'text-slate-300'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center text-slate-400">
                      <span className="w-2 h-4 bg-cyan-400 inline-block animate-blink"></span>
                    </div>
                  )}
                </div>

                {/* Terminal Footer Badge */}
                {!isTyping && (
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                      Build Verified & Deployed
                    </span>
                    <span className="font-mono text-slate-500">Node v22 • Next.js 15</span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};