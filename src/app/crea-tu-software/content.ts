export const CAMPAIGN_ANCHORS = {
  calendar: 'calendly-section',
  calendarWidget: 'calendly-widget',
  contact: 'contact',
} as const;

/**
 * Ids of the booking buttons. Ad conversion tracking is keyed on these, so
 * they must not change.
 */
export const BOOKING_BUTTON_IDS = {
  hero: 'reservar-consultoria',
  calendar: 'reservar-consultoria-mobile',
  closing: 'reservar-consultoria-final',
} as const;

export const LEAD_SOURCE = 'crea-tu-software';

export const CAMPAIGN_COPY = {
  headerCta: 'Reservar llamada',
  hero: {
    title: 'Crea tu software a medida.',
    titleAccent: 'En semanas, no en meses.',
    subtitle:
      '¿Tienes una idea o un proceso que quieres automatizar? En una llamada gratuita te decimos si es viable, cuánto costaría y cómo lanzarlo.',
    ctaPrimary: 'Reservar llamada gratuita',
    ctaSecondary: 'Prefiero escribir',
    proof: [
      {
        title: '+10 años creando software',
        description: 'Para empresas y startups.',
      },
      {
        title: 'Diagnóstico sin compromiso',
        description: 'Sales de la llamada sabiendo si tu proyecto es viable.',
      },
      {
        title: 'El código es tuyo',
        description: 'Te entregamos el código, los accesos y la documentación.',
      },
    ],
  },
  process: {
    title: 'Cómo funciona',
    steps: [
      {
        title: 'Agenda tu llamada gratuita',
        description: 'Elige en el calendario el horario que mejor te venga.',
      },
      {
        title: 'Revisamos tu idea y objetivos',
        description: 'Analizamos la viabilidad técnica y comercial de lo que quieres construir.',
      },
      {
        title: 'Te presentamos plan y presupuesto',
        description: 'Recibes un plan técnico y un presupuesto base para la primera versión.',
      },
    ],
  },
  calendar: {
    title: 'Reserva tu llamada gratuita',
    subtitle: 'Elige un horario y cuéntanos qué quieres construir. Sin compromiso.',
    mobileCta: 'Ver horarios',
    fallback: '¿No ves el calendario? Ábrelo en Calendly.',
  },
  contact: {
    title: '¿Prefieres escribir?',
    subtitle:
      'Describe tu idea en unas líneas. Un ingeniero te responde en menos de 24 horas con una opinión honesta y los siguientes pasos.',
    callTitle: '¿Listo para lanzar tu software?',
    callBody: 'Reserva una llamada y sal con un plan claro para tu primera versión.',
    callCta: 'Reservar ahora',
  },
};
