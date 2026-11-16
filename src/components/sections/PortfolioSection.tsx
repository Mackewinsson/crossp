import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/lib/locales';
import { HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type PortfolioSectionProps = {
  copy: Dictionary['work'];
  locale: Locale;
};

export function PortfolioSection({ copy, locale }: PortfolioSectionProps) {
  return (
    <Section id={HOME_ANCHORS.work}>
      <SectionHeading title={copy.title} subtitle={copy.subtitle} />
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioData.map((project) => (
          <li key={project.id} className="border-t border-line-strong pt-6">
            <h3 className="text-lg font-semibold text-ink">{project.company}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{project.product[locale]}</p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{project.summary[locale]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
