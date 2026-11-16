import { LeadForm } from '@/components/lead/LeadForm';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/lib/locales';
import { CALENDLY_DISCOVERY_URL, HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type CTASectionProps = {
  copy: Dictionary['contact'];
  locale: Locale;
};

/** Closing contact section: the project form, with a call as the alternative. */
export function CTASection({ copy, locale }: CTASectionProps) {
  return (
    <Section id={HOME_ANCHORS.contact}>
      {/* Source order is heading, form, call so the form comes first on small screens. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
        <SectionHeading title={copy.title} subtitle={copy.subtitle} flush />

        <Card className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
          <LeadForm source={`home-${locale}`} language={locale} />
        </Card>

        <div className="border-t border-line pt-8 lg:self-end">
          <h3 className="text-lg font-semibold text-ink">{copy.callTitle}</h3>
          <p className="mt-2 text-base text-ink-soft leading-relaxed">{copy.callBody}</p>
          <ButtonLink href={CALENDLY_DISCOVERY_URL} variant="secondary" className="mt-5">
            {copy.callCta}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
