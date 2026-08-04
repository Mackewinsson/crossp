import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import LeadEmailForm from '@/components/LeadEmailForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import {
  CALENDLY_DISCOVERY_URL,
  buildLandingJsonLd,
  getLandingPath,
  type LandingLocale,
  type SeoLandingDefinition,
} from '@/data/seo-landings';

type SeoServiceLandingProps = {
  landing: SeoLandingDefinition;
  locale: LandingLocale;
};

export function SeoServiceLanding({ landing, locale }: SeoServiceLandingProps) {
  const content = landing.content[locale];
  const alternateLocale: LandingLocale = locale === 'es' ? 'en' : 'es';
  const blogHref = `/${locale}/blog/${content.relatedBlogSlug}`;
  const homeHref = `/${locale}`;
  const jsonLd = buildLandingJsonLd(landing, locale);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100">
      <JsonLd data={jsonLd} />
      <Header />

      <main>
        <section className="relative border-b border-slate-800/80 overflow-hidden">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <Container className="relative py-16 sm:py-20 max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-wider text-cyan-400/90 mb-4">
              ConaiSoft · {locale === 'es' ? 'Servicio' : 'Service'}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 text-balance">
              {content.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {content.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={CALENDLY_DISCOVERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold px-6 py-3 transition-colors"
              >
                {content.ctaLabel}
              </a>
              <Link
                href={blogHref}
                className="inline-flex justify-center items-center rounded-xl border border-slate-700 hover:border-cyan-500/50 text-slate-200 px-6 py-3 text-sm transition-colors"
              >
                {content.ctaSecondaryLabel}
              </Link>
            </div>
          </Container>
        </section>

        {content.sections.map((section) => (
          <section
            key={section.heading}
            className="border-b border-slate-800/80 py-12 sm:py-16"
          >
            <Container className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">{section.body}</p>
              {section.bullets ? (
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Container>
          </section>
        ))}

        <section className="border-b border-slate-800/80 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
              FAQ
            </h2>
            <div className="space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-slate-800/80 py-12 sm:py-16 bg-[#080b12]">
          <Container className="max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              {content.finalCtaHeading}
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{content.finalCtaBody}</p>
            <a
              href={CALENDLY_DISCOVERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold px-6 py-3 transition-colors"
            >
              {content.ctaLabel}
            </a>
            <p className="mt-6 text-sm text-slate-500">
              <Link href={blogHref} className="text-cyan-500/90 hover:text-cyan-400">
                {content.relatedBlogLabel} →
              </Link>
            </p>
          </Container>
        </section>

        <LeadEmailForm source={`seo-${landing.id}-${locale}`} />
      </main>

      <footer className="py-8 px-4 bg-[#05070a] border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        <p className="leading-relaxed text-balance mb-3">© 2026 ConaiSoft. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-cyan-500/80">
          <Link href={homeHref} className="hover:text-cyan-400">
            Home
          </Link>
          <Link href={`/${locale}/blog`} className="hover:text-cyan-400">
            Blog
          </Link>
          <Link
            href={getLandingPath(landing, alternateLocale)}
            className="hover:text-cyan-400"
            hrefLang={alternateLocale}
          >
            {alternateLocale === 'en' ? 'English' : 'Español'}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
