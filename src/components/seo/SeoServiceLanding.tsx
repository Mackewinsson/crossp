import { Header } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/SiteFooter';
import LeadEmailForm from '@/components/LeadEmailForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import {
  buildLandingJsonLd,
  getLandingPath,
  type LandingLocale,
  type SeoLandingDefinition,
} from '@/data/seo-landings';
import { alternateLocale } from '@/lib/locales';
import { CALENDLY_DISCOVERY_URL, HOME_ANCHORS } from '@/lib/site';

type SeoServiceLandingProps = {
  landing: SeoLandingDefinition;
  locale: LandingLocale;
};

const FAQ_HEADING: Record<LandingLocale, string> = {
  es: 'Preguntas frecuentes',
  en: 'Frequently asked questions',
};

export function SeoServiceLanding({ landing, locale }: SeoServiceLandingProps) {
  const content = landing.content[locale];
  const alternatePath = getLandingPath(landing, alternateLocale(locale));
  const blogHref = `/${locale}/blog/${content.relatedBlogSlug}`;

  return (
    <div className="min-h-screen bg-bg text-ink">
      <JsonLd data={buildLandingJsonLd(landing, locale)} />
      <Header alternatePath={alternatePath} contactHref={`#${HOME_ANCHORS.contact}`} />

      <main>
        <PageHero title={content.h1} intro={content.intro} width="narrow">
          <ButtonLink href={CALENDLY_DISCOVERY_URL} size="lg">
            {content.ctaLabel}
          </ButtonLink>
          <ButtonLink href={blogHref} variant="secondary" size="lg">
            {content.ctaSecondaryLabel}
          </ButtonLink>
        </PageHero>

        {content.sections.map((section) => (
          <Section key={section.heading} width="narrow">
            <SectionHeading title={section.heading} flush />
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">{section.body}</p>
            {section.bullets ? (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-base text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </Section>
        ))}

        <Section width="narrow" tone="alt">
          <SectionHeading title={FAQ_HEADING[locale]} />
          <dl className="space-y-8">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg font-semibold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-base text-ink-soft leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section width="narrow">
          <SectionHeading title={content.finalCtaHeading} subtitle={content.finalCtaBody} flush />
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href={CALENDLY_DISCOVERY_URL}>{content.ctaLabel}</ButtonLink>
            <TextLink href={blogHref}>{content.relatedBlogLabel}</TextLink>
          </div>
        </Section>

        <LeadEmailForm
          id={HOME_ANCHORS.contact}
          source={`seo-${landing.id}-${locale}`}
          language={locale}
        />
      </main>

      <SiteFooter locale={locale} alternatePath={alternatePath} />
    </div>
  );
}
