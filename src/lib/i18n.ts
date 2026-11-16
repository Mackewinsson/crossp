import type { Locale } from '@/lib/locales';
import { en } from '@/translations/en';
import { es } from '@/translations/es';
import type { Dictionary } from '@/translations/types';

const DICTIONARIES: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
