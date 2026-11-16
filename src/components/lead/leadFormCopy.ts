import type { Locale } from '@/lib/locales';

export type LeadFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messageOptional: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  errorName: string;
  errorEmail: string;
  errorEmailInvalid: string;
  errorGeneric: string;
};

export type LeadSectionCopy = {
  title: string;
  subtitle: string;
};

export const LEAD_FORM_COPY: Record<Locale, LeadFormCopy> = {
  en: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    messageLabel: 'What do you want to build?',
    messageOptional: 'optional',
    messagePlaceholder:
      'For example: a booking app for my clinics, with online payments and reminders.',
    submit: 'Send my project',
    submitting: 'Sending…',
    success: 'Thank you. We received your message and will reply within 24 hours.',
    errorName: 'Please enter your name.',
    errorEmail: 'Please enter your email.',
    errorEmailInvalid: 'Please enter a valid email address.',
    errorGeneric: 'Something went wrong and your message was not sent. Please try again.',
  },
  es: {
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@empresa.com',
    messageLabel: '¿Qué quieres construir?',
    messageOptional: 'opcional',
    messagePlaceholder:
      'Por ejemplo: una app de reservas para mis clínicas, con pagos en línea y recordatorios.',
    submit: 'Enviar mi proyecto',
    submitting: 'Enviando…',
    success: 'Gracias. Recibimos tu mensaje y te responderemos en menos de 24 horas.',
    errorName: 'Por favor ingresa tu nombre.',
    errorEmail: 'Por favor ingresa tu correo electrónico.',
    errorEmailInvalid: 'Por favor ingresa un correo electrónico válido.',
    errorGeneric: 'Hubo un error y tu mensaje no se envió. Por favor intenta nuevamente.',
  },
};

export const LEAD_SECTION_COPY: Record<Locale, LeadSectionCopy> = {
  en: {
    title: 'Tell us about your project',
    subtitle: 'Leave your details and an engineer will reply within 24 hours.',
  },
  es: {
    title: 'Cuéntanos sobre tu proyecto',
    subtitle: 'Deja tus datos y un ingeniero te responderá en menos de 24 horas.',
  },
};
