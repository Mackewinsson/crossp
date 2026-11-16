import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Dictionary } from '@/translations/types';

type WhyUsSectionProps = {
  copy: Dictionary['why'];
};

export function WhyUsSection({ copy }: WhyUsSectionProps) {
  return (
    <Section tone="alt">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <SectionHeading
          title={copy.title}
          subtitle={copy.subtitle}
          flush
          className="lg:col-span-2"
        />
        <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
          {copy.items.map((item) => (
            <div key={item.title}>
              <dt className="text-lg font-semibold text-ink">{item.title}</dt>
              <dd className="mt-2 text-base text-ink-soft leading-relaxed">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
