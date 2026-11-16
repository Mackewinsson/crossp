import type { ReactNode } from 'react';
import { LeadForm } from '@/components/lead/LeadForm';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/lib/locales';

type ContactSplitProps = {
  id: string;
  title: string;
  subtitle: string;
  callTitle: string;
  callBody: string;
  /** Button that books a call, the alternative to the form. */
  callAction: ReactNode;
  source: string;
  language: Locale;
};

/** Closing contact section: the project form, with a call as the alternative. */
export function ContactSplit({
  id,
  title,
  subtitle,
  callTitle,
  callBody,
  callAction,
  source,
  language,
}: ContactSplitProps) {
  return (
    <Section id={id}>
      {/* Source order is heading, form, call so the form comes first on small screens. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
        <SectionHeading title={title} subtitle={subtitle} flush />

        <Card className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
          <LeadForm source={source} language={language} />
        </Card>

        <div className="border-t border-line pt-8 lg:self-end">
          <h3 className="text-lg font-semibold text-ink">{callTitle}</h3>
          <p className="mt-2 text-base text-ink-soft leading-relaxed">{callBody}</p>
          <div className="mt-5">{callAction}</div>
        </div>
      </div>
    </Section>
  );
}
