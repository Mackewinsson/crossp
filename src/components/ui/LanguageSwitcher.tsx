"use client";

import React, { useState } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

export const LanguageSwitcher: React.FC = () => {
  const { setLocale, isSpanish, isEnglish } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: 'es' | 'en') => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40"
        aria-label="Switch language"
      >
        <span className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
          {isSpanish ? (
            <span className="block w-full h-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold">
              ES
            </span>
          ) : (
            <span className="block w-full h-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center text-[10px] font-bold">
              EN
            </span>
          )}
        </span>
        <span className="hidden sm:inline text-xs font-semibold">
          {isSpanish ? 'Español' : 'English'}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-800 ring-1 ring-white/10 z-50 overflow-hidden">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                isSpanish ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[9px] font-bold">
                  ES
                </span>
                <span>Español</span>
              </div>
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                isEnglish ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center text-[9px] font-bold">
                  EN
                </span>
                <span>English</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};