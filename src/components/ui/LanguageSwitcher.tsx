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
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
        aria-label="Switch language"
      >
        <span className="w-5 h-5 rounded-full overflow-hidden">
          {isSpanish ? (
            <span className="block w-full h-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
              ES
            </span>
          ) : (
            <span className="block w-full h-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              EN
            </span>
          )}
        </span>
        <span className="hidden sm:inline">
          {isSpanish ? 'Español' : 'English'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                isSpanish ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                  ES
                </span>
                <span>Español</span>
              </div>
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                isEnglish ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
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