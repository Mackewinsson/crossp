"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useTranslations } from '@/hooks/useTranslations';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-200">
      {/* Top operational status banner */}
      <div className="bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border-b border-blue-500/20 py-1.5 px-4 text-center text-xs font-mono text-cyan-300 flex items-center justify-center space-x-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <span className="tracking-wide">{header.status()}</span>
      </div>

      <Container>
        <div className="flex items-center justify-between py-3.5">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-cyan-400 font-extrabold text-lg tracking-tighter">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center">
                Conai<span className="text-cyan-400">Soft</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-1">AI Software Engine</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <a href="#pain-points" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.painPoints()}
            </a>
            <a href="#velocity" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.velocity()}
            </a>
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.services()}
            </a>
            <a href="#process" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.process()}
            </a>
            <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.portfolio()}
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors">
              {header.testimonials()}
            </a>
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="https://calendly.com/mackewinsson/exploring-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 active:scale-95 border border-cyan-400/30"
            >
              {header.getStarted()}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
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
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 bg-[#07090e]/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-3 px-2">
              <a
                href="#pain-points"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.painPoints()}
              </a>
              <a
                href="#velocity"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.velocity()}
              </a>
              <a
                href="#services"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.services()}
              </a>
              <a
                href="#process"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.process()}
              </a>
              <a
                href="#portfolio"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.portfolio()}
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.testimonials()}
              </a>
              <div className="pt-2">
                <a
                  href="https://calendly.com/mackewinsson/exploring-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-cyan-500/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {header.getStarted()}
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};