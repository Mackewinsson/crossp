'use client';

import { useId, useState } from 'react';
import { LEAD_FORM_COPY } from '@/components/lead/leadFormCopy';
import { buttonClassName } from '@/components/ui/buttonStyles';
import { trackLeadConversion } from '@/lib/analytics';
import type { Locale } from '@/lib/locales';

const LEADS_ENDPOINT = '/api/leads';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 2000;

const FIELD_CLASS =
  'w-full rounded-lg border border-line-strong bg-bg px-4 py-3 text-base text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60';
const LABEL_CLASS = 'block text-sm font-medium text-ink mb-2';

type LeadFormProps = {
  source?: string;
  language?: Locale;
  /** @deprecated Prefer /api/leads. Kept for temporary backwards compatibility. */
  webhookUrl?: string;
};

type Status = 'idle' | 'submitting' | 'success';

export function LeadForm({ source = 'website', language = 'es', webhookUrl }: LeadFormProps) {
  const copy = LEAD_FORM_COPY[language];
  const fieldId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const isSubmitting = status === 'submitting';

  const validate = (): string | null => {
    if (!name.trim()) return copy.errorName;
    if (!email.trim()) return copy.errorEmail;
    if (!EMAIL_PATTERN.test(email.trim())) return copy.errorEmailInvalid;
    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError(null);

    const trimmedMessage = message.trim();
    const payload = webhookUrl
      ? { nombre: name.trim(), email: email.trim(), message: trimmedMessage }
      : {
          name: name.trim(),
          email: email.trim(),
          message: trimmedMessage,
          source,
          language,
        };

    try {
      const response = await fetch(webhookUrl || LEADS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Lead request failed with ${response.status}`);
      }

      trackLeadConversion();
      setStatus('success');
    } catch (submitError) {
      console.error('Error submitting lead:', submitError);
      setError(copy.errorGeneric);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <p
        role="status"
        className="rounded-lg border border-success/40 bg-success/10 p-4 text-base text-ink"
      >
        {copy.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${fieldId}-name`} className={LABEL_CLASS}>
            {copy.nameLabel}
          </label>
          <input
            id={`${fieldId}-name`}
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={copy.namePlaceholder}
            className={FIELD_CLASS}
            disabled={isSubmitting}
            required
          />
        </div>
        <div>
          <label htmlFor={`${fieldId}-email`} className={LABEL_CLASS}>
            {copy.emailLabel}
          </label>
          <input
            id={`${fieldId}-email`}
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.emailPlaceholder}
            className={FIELD_CLASS}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${fieldId}-message`} className={LABEL_CLASS}>
          {copy.messageLabel}{' '}
          <span className="font-normal text-ink-muted">({copy.messageOptional})</span>
        </label>
        <textarea
          id={`${fieldId}-message`}
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX_LENGTH}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={copy.messagePlaceholder}
          className={`${FIELD_CLASS} resize-y`}
          disabled={isSubmitting}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-lg border border-danger/40 bg-danger/10 p-3 text-sm text-ink"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClassName({ className: 'w-full sm:w-auto' })}
      >
        {isSubmitting ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}
