"use client";

import React, { useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const { locale } = useTranslation();

  useEffect(() => {
    // Set the html lang attribute based on the current locale
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}; 