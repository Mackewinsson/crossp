"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useTranslations } from '@/hooks/useTranslations';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = useTranslations();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">conAIsoft</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              {header.services()}
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              {header.whyUs()}
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              {header.testimonials()}
            </a>
            <LanguageSwitcher />
            <Button href="https://calendly.com/mackewinsson/exploring-call" size="sm">
              {header.getStarted()}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.services()}
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.whyUs()}
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.testimonials()}
              </a>
              <div className="px-4">
                <LanguageSwitcher />
              </div>
              <Button 
                href="https://calendly.com/mackewinsson/exploring-call" 
                size="sm" 
                className="w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.getStarted()}
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}; 