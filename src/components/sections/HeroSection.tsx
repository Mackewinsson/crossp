"use client";

import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';

export const HeroSection: React.FC = () => {
  const { hero, common } = useTranslations();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight select-text">
            {hero.title()}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed select-text">
            {hero.subtitle()}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://calendly.com/mackewinsson/exploring-call"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl active:bg-blue-800 px-8 py-4 text-lg min-h-[52px] w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.cta()}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100 px-8 py-4 text-lg min-h-[52px] w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {common.learnMore()}
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}; 