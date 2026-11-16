"use client";

import { useState } from 'react';
import { Wordmark } from '@/components/layout/Wordmark';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useTranslation } from '@/contexts/TranslationContext';
import { HOME_ANCHORS } from '@/lib/site';

type HeaderProps = {
  /** Path of this page in the other language, for pages whose slug differs per locale. */
  alternatePath?: string;
  /** Where the header button leads. Defaults to the homepage contact form. */
  contactHref?: string;
};

export function Header({ alternatePath, contactHref }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale } = useTranslation();
  const home = `/${locale}`;
  const ctaHref = contactHref ?? `${home}#${HOME_ANCHORS.contact}`;

  const navLinks = [
    { href: `${home}#${HOME_ANCHORS.services}`, label: t('header.services') },
    { href: `${home}#${HOME_ANCHORS.process}`, label: t('header.process') },
    { href: `${home}#${HOME_ANCHORS.work}`, label: t('header.work') },
    { href: `${home}/blog`, label: t('header.blog') },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Wordmark href={home} />

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-soft hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher alternatePath={alternatePath} />
            <div className="hidden sm:block">
              <ButtonLink href={ctaHref} size="sm">
                {t('header.cta')}
              </ButtonLink>
            </div>
            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="lg:hidden flex flex-col gap-1 border-t border-line py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink-soft hover:text-accent"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 sm:hidden">
              <ButtonLink href={ctaHref} className="w-full" onClick={closeMenu}>
                {t('header.cta')}
              </ButtonLink>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
