"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">AI Consultancy</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <Button href="https://calendly.com/your-consultancy" size="sm">
              Get Started
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Why Us
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <Button href="https://calendly.com/your-consultancy" size="sm" className="w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}; 