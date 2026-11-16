import { JsonLd } from '@/components/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import { FAQ_LINKS, resolveHomeLink } from '@/data/home-links';
import type { Locale } from '@/lib/locales';
import { HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type FaqSectionProps = {
  copy: Dictionary['faq'];
  locale: Locale;
};

function buildFaqJsonLd(items: Dictionary['faq']['items']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function FaqSection({ copy, locale }: FaqSectionProps) {
  return (
    <Section id={HOME_ANCHORS.faq} tone="alt">
      <JsonLd data={buildFaqJsonLd(copy.items)} />
      <SectionHeading title={copy.title} />
      <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {copy.items.map((item) => (
          <div key={item.id}>
            <dt className="text-lg font-semibold text-ink">{item.question}</dt>
            <dd className="mt-2">
              <p className="text-base text-ink-soft leading-relaxed">{item.answer}</p>
              <TextLink href={resolveHomeLink(FAQ_LINKS[item.id], locale)} className="mt-3">
                {item.linkLabel}
              </TextLink>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
