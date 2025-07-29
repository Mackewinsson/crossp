"use client";

import React, { createContext, useContext, ReactNode, useEffect, useState, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { es } from '@/translations/es';
import { en } from '@/translations/en';

type Locale = 'es' | 'en';

interface TranslationContextType {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isSpanish: boolean;
  isEnglish: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>('es');
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark as hydrated after first render
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Extract locale from pathname
  useEffect(() => {
    if (!isHydrated) return; // Wait for hydration
    
    const pathParts = pathname.split('/');
    const pathLocale = pathParts[1] as Locale;
    
    if (pathLocale === 'es' || pathLocale === 'en') {
      setLocaleState(pathLocale);
    } else {
      setLocaleState('es'); // Default to Spanish
    }
  }, [pathname, isHydrated]);

  // Memoize translations to avoid repeated lookups
  const translations = useMemo(() => ({
    es,
    en,
  }), []);

  // Memoize the translation function to prevent unnecessary re-renders
  const t = useMemo(() => {
    return (key: string): string => {
      const keys = key.split('.');
      let value: unknown = translations[locale];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key; // Return the key if translation not found
        }
      }

      return typeof value === 'string' ? value : key;
    };
  }, [translations, locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    const currentPath = pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  }, [pathname, router]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo<TranslationContextType>(() => ({
    t,
    locale,
    setLocale,
    isSpanish: locale === 'es',
    isEnglish: locale === 'en',
  }), [t, locale, setLocale]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}; 