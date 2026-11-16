import { LeadForm } from '@/components/lead/LeadForm';
import { LEAD_SECTION_COPY } from '@/components/lead/leadFormCopy';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/lib/locales';

interface LeadEmailFormProps {
  className?: string;
  id?: string;
  source?: string;
  language?: Locale;
  title?: string;
  subtitle?: string;
  /** @deprecated Prefer /api/leads. Kept for temporary backwards compatibility. */
  webhookUrl?: string;
}

/** Standalone "contact us" band: a heading plus the lead form. */
export default function LeadEmailForm({
  className,
  id,
  source = 'website',
  language = 'es',
  title,
  subtitle,
  webhookUrl,
}: LeadEmailFormProps) {
  const copy = LEAD_SECTION_COPY[language];

  return (
    <Section id={id} tone="alt" width="narrow" className={className}>
      <SectionHeading title={title ?? copy.title} subtitle={subtitle ?? copy.subtitle} />
      <Card>
        <LeadForm source={source} language={language} webhookUrl={webhookUrl} />
      </Card>
    </Section>
  );
}
