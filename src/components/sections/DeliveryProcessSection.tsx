import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type DeliveryProcessSectionProps = {
  copy: Dictionary['process'];
};

export function DeliveryProcessSection({ copy }: DeliveryProcessSectionProps) {
  return (
    <Section id={HOME_ANCHORS.process}>
      <SectionHeading title={copy.title} subtitle={copy.subtitle} />
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {copy.steps.map((step, index) => (
          <li key={step.title} className="border-t border-line-strong pt-6">
            <span className="font-mono text-sm font-semibold text-accent" aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-base text-ink-soft leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
