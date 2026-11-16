'use client';

import type { ComponentProps } from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { trackLeadConversion } from '@/lib/analytics';

type TrackedButtonLinkProps = Omit<ComponentProps<typeof ButtonLink>, 'onClick'>;

/** A button link that reports a lead conversion to the ad platforms when clicked. */
export function TrackedButtonLink(props: TrackedButtonLinkProps) {
  return <ButtonLink {...props} onClick={trackLeadConversion} />;
}
