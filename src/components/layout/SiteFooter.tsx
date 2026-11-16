import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SEO_LANDINGS, getLandingPath } from '@/data/seo-landings';
import { getDictionary } from '@/lib/i18n';
import { alternateLocale, type Locale } from '@/lib/locales';
import { SITE_NAME } from '@/lib/seo';
import { CALENDLY_DISCOVERY_URL } from '@/lib/site';

const LANGUAGE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

const LINK_CLASS = 'text-ink-muted hover:text-accent transition-colors';

type SiteFooterProps = {
  locale: Locale;
  /** Path of this page in the other language. Adds a cross-language link when set. */
  alternatePath?: string;
};

export function SiteFooter({ locale, alternatePath }: SiteFooterProps) {
  const { footer } = getDictionary(locale);
  const otherLocale = alternateLocale(locale);

  const links = [
    { href: `/${locale}`, label: footer.home },
    { href: `/${locale}/blog`, label: footer.blog },
    ...SEO_LANDINGS.map((landing) => ({
      href: getLandingPath(landing, locale),
      label: landing.serviceName[locale],
    })),
  ];

  return (
    <footer className="bg-bg py-10">
      <Container className="flex flex-col gap-6 text-sm lg:flex-row lg:items-center lg:justify-between">
        <p className="text-ink-muted">
          © {new Date().getFullYear()} {SITE_NAME}. {footer.rights}
        </p>
        <nav aria-label={footer.navLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CALENDLY_DISCOVERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                {footer.bookCall}
              </a>
            </li>
            {alternatePath ? (
              <li>
                <Link href={alternatePath} hrefLang={otherLocale} className={LINK_CLASS}>
                  {LANGUAGE_NAMES[otherLocale]}
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
