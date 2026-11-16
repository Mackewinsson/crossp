import type { Locale } from '@/lib/locales';

const DATE_LOCALES: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-ES',
};

/** Formats an ISO date for display, e.g. "Mar 4, 2026" (short) or "March 4, 2026" (long). */
export function formatDate(iso: string, locale: Locale, month: 'short' | 'long' = 'long') {
  return new Date(iso).toLocaleDateString(DATE_LOCALES[locale], {
    year: 'numeric',
    month,
    day: 'numeric',
  });
}
