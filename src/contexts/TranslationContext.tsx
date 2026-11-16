"use client";

import React, { createContext, useContext, ReactNode, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import { localeFromPathname, swapPathLocale, type Locale } from '@/lib/locales';

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

  // Derived during render (not in an effect) so the server-rendered HTML is
  // already in the route's language instead of flipping after hydration.
  const locale = localeFromPathname(pathname);

  const t = useCallback(
    (key: string): string => {
      let value: unknown = getDictionary(locale);

      for (const k of key.split('.')) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [locale]
  );

  const setLocale = useCallback(
    (newLocale: Locale) => {
      router.push(swapPathLocale(pathname, newLocale));
    },
    [pathname, router]
  );

  const value = useMemo<TranslationContextType>(
    () => ({
      t,
      locale,
      setLocale,
      isSpanish: locale === 'es',
      isEnglish: locale === 'en',
    }),
    [t, locale, setLocale]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
