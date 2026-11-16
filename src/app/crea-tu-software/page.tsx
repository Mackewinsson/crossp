import { SiteFooter } from '@/components/layout/SiteFooter';
import { Wordmark } from '@/components/layout/Wordmark';
import { CalendlyInline } from '@/components/lead/CalendlyInline';
import { ContactSplit } from '@/components/lead/ContactSplit';
import { TrackedButtonLink } from '@/components/lead/TrackedButtonLink';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepList } from '@/components/ui/StepList';
import { DEFAULT_LOCALE } from '@/lib/locales';
import {
  BOOKING_BUTTON_IDS,
  CAMPAIGN_ANCHORS,
  CAMPAIGN_COPY,
  LEAD_SOURCE,
} from './content';

const CALENDAR_HREF = `#${CAMPAIGN_ANCHORS.calendar}`;

export default function CreaTuSoftwarePage() {
  const { hero, process, calendar, contact } = CAMPAIGN_COPY;

  return (
    <div className="min-h-screen bg-bg text-ink" lang={DEFAULT_LOCALE}>
      <header className="border-b border-line bg-bg">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Wordmark href={`/${DEFAULT_LOCALE}`} />
          <ButtonLink href={CALENDAR_HREF} size="sm">
            {CAMPAIGN_COPY.headerCta}
          </ButtonLink>
        </Container>
      </header>

      <main>
        <Hero
          title={hero.title}
          titleAccent={hero.titleAccent}
          subtitle={hero.subtitle}
          proof={hero.proof}
        >
          <TrackedButtonLink id={BOOKING_BUTTON_IDS.hero} href={CALENDAR_HREF} size="lg">
            {hero.ctaPrimary}
          </TrackedButtonLink>
          <ButtonLink href={`#${CAMPAIGN_ANCHORS.contact}`} variant="secondary" size="lg">
            {hero.ctaSecondary}
          </ButtonLink>
        </Hero>

        <Section tone="alt">
          <SectionHeading title={process.title} />
          <StepList steps={process.steps} />
        </Section>

        <Section id={CAMPAIGN_ANCHORS.calendar} width="narrow">
          <SectionHeading title={calendar.title} subtitle={calendar.subtitle} />
          <div className="mb-6 sm:hidden">
            <TrackedButtonLink
              id={BOOKING_BUTTON_IDS.calendar}
              href={`#${CAMPAIGN_ANCHORS.calendarWidget}`}
              className="w-full"
            >
              {calendar.mobileCta}
            </TrackedButtonLink>
          </div>
          <CalendlyInline id={CAMPAIGN_ANCHORS.calendarWidget} fallbackLabel={calendar.fallback} />
        </Section>

        <ContactSplit
          id={CAMPAIGN_ANCHORS.contact}
          title={contact.title}
          subtitle={contact.subtitle}
          callTitle={contact.callTitle}
          callBody={contact.callBody}
          callAction={
            <TrackedButtonLink
              id={BOOKING_BUTTON_IDS.closing}
              href={CALENDAR_HREF}
              variant="secondary"
            >
              {contact.callCta}
            </TrackedButtonLink>
          }
          source={LEAD_SOURCE}
          language={DEFAULT_LOCALE}
        />
      </main>

      <SiteFooter locale={DEFAULT_LOCALE} />
    </div>
  );
}
