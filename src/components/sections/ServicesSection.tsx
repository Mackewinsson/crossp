import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import { SERVICE_LINKS, resolveHomeLink } from '@/data/home-links';
import type { Locale } from '@/lib/locales';
import { HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type ServicesSectionProps = {
  copy: Dictionary['services'];
  locale: Locale;
};

export function ServicesSection({ copy, locale }: ServicesSectionProps) {
  return (
    <Section id={HOME_ANCHORS.services} tone="alt">
      <SectionHeading title={copy.title} subtitle={copy.subtitle} />
      <ul className="grid gap-6 md:grid-cols-2">
        {copy.items.map((item) => (
          <Card as="li" key={item.id} className="flex flex-col">
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 flex-grow text-base text-ink-soft leading-relaxed">
              {item.description}
            </p>
            <TextLink href={resolveHomeLink(SERVICE_LINKS[item.id], locale)} className="mt-6">
              {item.linkLabel}
            </TextLink>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
