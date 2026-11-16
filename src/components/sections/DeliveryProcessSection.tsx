import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepList } from '@/components/ui/StepList';
import { HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type DeliveryProcessSectionProps = {
  copy: Dictionary['process'];
};

export function DeliveryProcessSection({ copy }: DeliveryProcessSectionProps) {
  return (
    <Section id={HOME_ANCHORS.process}>
      <SectionHeading title={copy.title} subtitle={copy.subtitle} />
      <StepList steps={copy.steps} />
    </Section>
  );
}
