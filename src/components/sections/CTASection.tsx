import { ContactSplit } from '@/components/lead/ContactSplit';
import { ButtonLink } from '@/components/ui/ButtonLink';
import type { Locale } from '@/lib/locales';
import { CALENDLY_DISCOVERY_URL, HOME_ANCHORS } from '@/lib/site';
import type { Dictionary } from '@/translations/types';

type CTASectionProps = {
  copy: Dictionary['contact'];
  locale: Locale;
};

export function CTASection({ copy, locale }: CTASectionProps) {
  return (
    <ContactSplit
      id={HOME_ANCHORS.contact}
      title={copy.title}
      subtitle={copy.subtitle}
      callTitle={copy.callTitle}
      callBody={copy.callBody}
      callAction={
        <ButtonLink href={CALENDLY_DISCOVERY_URL} variant="secondary">
          {copy.callCta}
        </ButtonLink>
      }
      source={`home-${locale}`}
      language={locale}
    />
  );
}
