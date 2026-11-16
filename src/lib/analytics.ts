type Tracker = (...args: unknown[]) => void;

// The gtag and fbq snippets are injected by the root layout. Either may be
// missing (ad blockers, unset env), so every call goes through this lookup.
function getTracker(name: 'gtag' | 'fbq'): Tracker | undefined {
  if (typeof window === 'undefined') return undefined;
  const candidate = (window as unknown as Record<string, unknown>)[name];
  return typeof candidate === 'function' ? (candidate as Tracker) : undefined;
}

/** Reports a lead to Google Ads and Meta. Safe to call when neither is loaded. */
export function trackLeadConversion() {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (conversionId && conversionLabel) {
    getTracker('gtag')?.('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }

  getTracker('fbq')?.('track', 'Lead');
}
