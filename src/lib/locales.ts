export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/** Routes outside `/es` and `/en` (campaign pages, admin) use the default locale. */
export function localeFromPathname(pathname: string | null): Locale {
  const segment = pathname?.split('/')[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** The same path under another locale. Only valid where both locales share slugs. */
export function swapPathLocale(pathname: string | null, target: Locale): string {
  const rest = (pathname ?? '').replace(/^\/(es|en)(?=\/|$)/, '');
  return `/${target}${rest === '/' ? '' : rest}`;
}
