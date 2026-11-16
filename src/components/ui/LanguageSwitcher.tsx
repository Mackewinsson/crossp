"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/contexts/TranslationContext';
import { LOCALES, swapPathLocale } from '@/lib/locales';

type LanguageSwitcherProps = {
  /** Path of this page in the other language, for pages whose slug differs per locale. */
  alternatePath?: string;
};

export function LanguageSwitcher({ alternatePath }: LanguageSwitcherProps) {
  const { locale, t } = useTranslation();
  const pathname = usePathname();

  return (
    <div className="flex items-center text-sm font-medium" aria-label={t('header.switchLanguage')} role="group">
      {LOCALES.map((option, index) => {
        const isCurrent = option === locale;
        return (
          <span key={option} className="flex items-center">
            {index > 0 ? <span className="text-line-strong" aria-hidden>/</span> : null}
            {isCurrent ? (
              <span className="px-2 py-2 text-ink" aria-current="true">
                {option.toUpperCase()}
              </span>
            ) : (
              <Link
                href={alternatePath ?? swapPathLocale(pathname, option)}
                hrefLang={option}
                className="px-2 py-2 text-ink-muted hover:text-accent transition-colors"
              >
                {option.toUpperCase()}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
