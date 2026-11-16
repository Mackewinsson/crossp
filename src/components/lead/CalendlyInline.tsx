'use client';

import Script from 'next/script';
import { useRef } from 'react';
import { CALENDLY_DISCOVERY_URL } from '@/lib/site';

const WIDGET_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';

const EMBED_PARAMS = new URLSearchParams({
  hide_event_type_details: '1',
  hide_gdpr_banner: '1',
});
const EMBED_URL = `${CALENDLY_DISCOVERY_URL}?${EMBED_PARAMS.toString()}`;

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
};

type CalendlyInlineProps = {
  id?: string;
  /** Shown under the calendar for visitors whose browser blocks the embed. */
  fallbackLabel: string;
};

export function CalendlyInline({ id, fallbackLabel }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mountWidget = () => {
    const container = containerRef.current;
    const calendly = (window as unknown as { Calendly?: CalendlyApi }).Calendly;
    if (!container || !calendly || container.childElementCount > 0) return;
    calendly.initInlineWidget({ url: EMBED_URL, parentElement: container });
  };

  return (
    <>
      {/* Calendly renders on white, so the frame is white too and does not flash while loading. */}
      <div
        ref={containerRef}
        id={id}
        className="h-[700px] min-w-[320px] overflow-hidden rounded-2xl bg-white"
      />
      <p className="mt-4 text-sm text-ink-muted">
        <a
          href={CALENDLY_DISCOVERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-accent"
        >
          {fallbackLabel}
        </a>
      </p>
      <Script src={WIDGET_SCRIPT_URL} onReady={mountWidget} />
    </>
  );
}
