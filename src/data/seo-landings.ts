import { absoluteUrl } from '@/lib/seo';

export type LandingLocale = 'es' | 'en';

export type SeoLandingFaq = {
  question: string;
  answer: string;
};

export type SeoLandingContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  ctaLabel: string;
  ctaSecondaryLabel: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: SeoLandingFaq[];
  relatedBlogSlug: string;
  relatedBlogLabel: string;
  finalCtaHeading: string;
  finalCtaBody: string;
};

export type SeoLandingDefinition = {
  id: 'dedicated-team' | 'legacy-rebuild' | 'add-ai';
  slugs: Record<LandingLocale, string>;
  serviceName: Record<LandingLocale, string>;
  serviceType: string[];
  content: Record<LandingLocale, SeoLandingContent>;
};

export const CALENDLY_DISCOVERY_URL =
  'https://calendly.com/mackewinsson/exploring-call';

export const SEO_LANDINGS: SeoLandingDefinition[] = [
  {
    id: 'dedicated-team',
    slugs: {
      es: 'equipo-desarrollo-dedicado',
      en: 'dedicated-development-team',
    },
    serviceName: {
      es: 'Equipo de desarrollo dedicado',
      en: 'Dedicated development team',
    },
    serviceType: [
      'Dedicated software development team',
      'Staff augmentation',
      'Nearshore engineering',
    ],
    content: {
      es: {
        metaTitle: 'Equipo de Desarrollo Dedicado Senior | Demo en 7 Días',
        metaDescription:
          'Ingenieros senior 100% dedicados a tu roadmap: demos cada semana, código y cuentas cloud a tu nombre desde el día 1. Sin lock-in. Agenda tu discovery call.',
        h1: 'Equipo de desarrollo dedicado',
        intro:
          'Un pod estable de ingenieros senior asignado a tu roadmap — no un proyecto de alcance fijo ni freelancers rotativos. Diriges el backlog cada sprint; nosotros entregamos software usable cada semana.',
        ctaLabel: 'Agendar discovery call',
        ctaSecondaryLabel: 'Leer la guía completa',
        sections: [
          {
            heading: 'Qué incluye un equipo dedicado de verdad',
            body: 'Capacidad continua, no un SOW rígido. Las mismas personas sprint tras sprint, con un lead responsable y acceso permanente a repo y staging.',
            bullets: [
              'Pod estable (frontend, backend/API, y lead) alineado a tu producto',
              'Demos semanales de software funcionando, no slides de status',
              'Propiedad 100% del código, cuentas cloud y dominios a tu nombre',
              'Arquitectura senior para APIs, SaaS e integraciones desde el día uno',
            ],
          },
          {
            heading: 'Equipo dedicado vs agencia por proyecto',
            body: 'Si tu roadmap va a cambiar después de los primeros usuarios, la capacidad dedicada suele rendir más que un proyecto fijo con change orders.',
            bullets: [
              'Proyecto fijo: alcance anclado, fecha artificial, change orders',
              'Equipo dedicado: capacidad anclada, alcance que evoluciona contigo',
              'Ideal post-MVP con backlog continuo y presión de time-to-market',
            ],
          },
          {
            heading: 'Cómo empezamos',
            body: 'Discovery corto → pod propuesto → primer sprint con entregable clickeable. Sin lock-in de plataforma propietaria.',
          },
        ],
        faqs: [
          {
            question: '¿Qué es un equipo de desarrollo dedicado?',
            answer:
              'Un grupo estable de ingenieros asignados a tu producto de forma continua. Tú priorizas el backlog; ellos entregan software cada semana, con continuidad de conocimiento.',
          },
          {
            question: '¿Cuándo conviene frente a una agencia por proyecto?',
            answer:
              'Cuando tienes roadmap continuo después del MVP y necesitas velocidad senior sin armar aún un equipo interno completo.',
          },
          {
            question: '¿El código es nuestro?',
            answer:
              'Sí. 100% del código, CI y cuentas cloud quedan a nombre de tu empresa desde el día uno.',
          },
          {
            question: '¿Cuánto tarda en arrancar un equipo dedicado?',
            answer:
              'Después del discovery, el pod suele empezar a la semana y verás la primera demo funcionando dentro de los primeros 7 días de sprint uno.',
          },
        ],
        relatedBlogSlug: 'dedicated-development-team-explained',
        relatedBlogLabel: 'Qué es realmente un equipo de desarrollo dedicado',
        finalCtaHeading: '¿Listo para un pod senior en tu roadmap?',
        finalCtaBody:
          'En 20 minutos vemos si el modelo de equipo dedicado encaja con tu etapa y presupuesto.',
      },
      en: {
        metaTitle: 'Dedicated Development Team | Senior Pod, Live in 7 Days',
        metaDescription:
          'Get a stable senior engineering pod on your roadmap: weekly demos, 100% code ownership, zero lock-in. Book a free discovery call today.',
        h1: 'Dedicated development team',
        intro:
          'A stable senior engineering pod on your roadmap — not a fixed-scope agency project or rotating freelancers. You steer the backlog each sprint; we ship working software every week.',
        ctaLabel: 'Book a discovery call',
        ctaSecondaryLabel: 'Read the full guide',
        sections: [
          {
            heading: 'What a real dedicated team includes',
            body: 'Continuous capacity, not a rigid SOW. The same people sprint after sprint, with a named lead and permanent repo + staging access.',
            bullets: [
              'Stable pod (frontend, backend/API, and lead) aligned to your product',
              'Weekly demos of working software — not status slide decks',
              '100% code ownership; cloud accounts and domains under your company',
              'Senior architecture for APIs, SaaS, and integrations from day one',
            ],
          },
          {
            heading: 'Dedicated team vs project agency',
            body: 'If your roadmap will look different after your first users, dedicated capacity usually beats a fixed project full of change orders.',
            bullets: [
              'Fixed project: scope-anchored, artificial deadline, change orders',
              'Dedicated team: capacity-anchored, scope that evolves with learning',
              'Best fit post-MVP with continuous backlog and time-to-market pressure',
            ],
          },
          {
            heading: 'How we start',
            body: 'Short discovery → proposed pod → first sprint with a clickable deliverable. No proprietary platform lock-in.',
          },
        ],
        faqs: [
          {
            question: 'What is a dedicated development team?',
            answer:
              'A stable group of engineers assigned to your product continuously. You prioritize the backlog; they ship software every week with institutional knowledge that compounds.',
          },
          {
            question: 'When is it better than a project agency?',
            answer:
              'When you have a continuous roadmap after MVP and need senior velocity before you are ready to hire a full in-house team.',
          },
          {
            question: 'Do we own the code?',
            answer:
              'Yes. 100% of the code, CI, and cloud accounts are under your company from day one.',
          },
          {
            question: 'How fast can a dedicated team start?',
            answer:
              'After discovery, the pod typically starts within a week, and you will see a working demo inside the first 7 days of sprint one.',
          },
        ],
        relatedBlogSlug: 'dedicated-development-team-explained',
        relatedBlogLabel: 'What a dedicated development team actually is',
        finalCtaHeading: 'Ready for a senior pod on your roadmap?',
        finalCtaBody:
          'In 20 minutes we will see if the dedicated-team model fits your stage and budget.',
      },
    },
  },
  {
    id: 'legacy-rebuild',
    slugs: {
      es: 'reconstruir-software-legacy',
      en: 'legacy-software-rebuild',
    },
    serviceName: {
      es: 'Reconstruir software legacy',
      en: 'Legacy software rebuild',
    },
    serviceType: [
      'Legacy software rebuild',
      'Software modernization',
      'System migration',
    ],
    content: {
      es: {
        metaTitle: 'Reconstruir Software Legacy: Guía 2026 (Cuándo Sí/No)',
        metaDescription:
          '4 señales reales para saber si necesitas un rebuild o solo modernizar módulos críticos. Sin rewrite suicida. Agenda tu assessment gratuito.',
        h1: 'Reconstruir software legacy',
        intro:
          'Los rewrites completos fallan más de lo que admiten. Modernizamos las superficies de alto riesgo primero — APIs, módulos críticos, datos — y dejamos en paz lo que todavía genera dinero.',
        ctaLabel: 'Agendar assessment',
        ctaSecondaryLabel: 'Leer cuándo reconstruir',
        sections: [
          {
            heading: 'Cuándo sí conviene un rebuild (o reemplazo modular)',
            body: 'No por pantallas antiguas: por riesgo de negocio medible.',
            bullets: [
              'Riesgo de seguridad o compliance inaceptable',
              'Bus factor peligroso: una o dos personas entienden el sistema',
              'Features que deberían tomar días tardan meses',
              'Stack muerto: no encuentras ingenieros a ningún precio',
            ],
          },
          {
            heading: 'Cómo evitamos el rewrite big-bang',
            body: 'Strangler por módulos, contratos de API claros, y valor en producción en semanas — no un big reveal a los 12 meses.',
            bullets: [
              'Mapa de riesgo: seguridad, velocidad de cambio, dependencia de personas',
              'Aislar módulos candidatos a migración',
              'Entregar incrementos con tests y APIs; apagar lo viejo por etapas',
            ],
          },
          {
            heading: 'Qué entregamos',
            body: 'Assessment accionable, plan de modernización priorizado, y un equipo que puede ejecutar la primera rebanada sin lock-in.',
          },
        ],
        faqs: [
          {
            question: '¿Siempre hay que reescribir el software legacy?',
            answer:
              'No. Muchos sistemas viejos solo necesitan modernizar módulos de alto riesgo. Un rewrite total suele ser la opción más cara y peligrosa.',
          },
          {
            question: '¿Cuánto tarda un assessment?',
            answer:
              'Una discovery enfocada suele bastar para decidir rebuild vs modernización modular y estimar la primera rebanada.',
          },
          {
            question: '¿Pueden integrar APIs nuevas sobre el sistema actual?',
            answer:
              'Sí. A menudo el primer paso es una capa de API/antiseptic alrededor del core legacy mientras se migran piezas.',
          },
          {
            question: '¿Cómo saben qué módulo migrar primero?',
            answer:
              'Priorizamos por riesgo de negocio medible: seguridad, velocidad de cambio y dependencia de personas clave — no por qué pantalla se ve más vieja.',
          },
        ],
        relatedBlogSlug: 'when-to-rebuild-legacy-software',
        relatedBlogLabel: 'Cuándo reconstruir software legacy',
        finalCtaHeading: '¿Presión por “modernizar” el legacy?',
        finalCtaBody:
          'Te ayudamos a decidir rebuild vs strangler con criterios de negocio — no de moda tecnológica.',
      },
      en: {
        metaTitle: 'Legacy Software Rebuild: When to Modernize (2026 Guide)',
        metaDescription:
          "4 warning signs it's time to rebuild legacy software, and when a full rewrite is the wrong call. Free assessment, zero lock-in. Book a call.",
        h1: 'Legacy software rebuild',
        intro:
          'Full rewrites fail more often than vendors admit. We modernize high-risk surfaces first — APIs, critical modules, data — and leave alone whatever is still quietly making money.',
        ctaLabel: 'Book an assessment',
        ctaSecondaryLabel: 'Read when to rebuild',
        sections: [
          {
            heading: 'When a rebuild (or modular replace) makes sense',
            body: 'Not because screens look old — because business risk is measurable.',
            bullets: [
              'Unacceptable security or compliance exposure',
              'Dangerous bus factor: one or two people understand the system',
              'Features that should take days take months',
              'Dead stack: you cannot hire engineers at any price',
            ],
          },
          {
            heading: 'How we avoid the big-bang rewrite',
            body: 'Strangler by module, clear API contracts, and production value in weeks — not a 12-month big reveal.',
            bullets: [
              'Risk map: security, change velocity, people dependency',
              'Isolate migration-candidate modules',
              'Ship increments with tests and APIs; retire the old path in stages',
            ],
          },
          {
            heading: 'What you get',
            body: 'An actionable assessment, a prioritized modernization plan, and a team that can execute the first slice without lock-in.',
          },
        ],
        faqs: [
          {
            question: 'Do we always need to rewrite legacy software?',
            answer:
              'No. Many older systems only need high-risk modules modernized. A full rewrite is often the most expensive and dangerous option.',
          },
          {
            question: 'How long does an assessment take?',
            answer:
              'A focused discovery is usually enough to choose rebuild vs modular modernization and estimate the first slice.',
          },
          {
            question: 'Can you add new APIs on top of the current system?',
            answer:
              'Yes. Often the first step is an API/antiseptic layer around the legacy core while pieces migrate.',
          },
          {
            question: 'How do you decide which module to migrate first?',
            answer:
              'We prioritize by measurable business risk — security, change velocity, and key-person dependency — not by which screen looks the oldest.',
          },
        ],
        relatedBlogSlug: 'when-to-rebuild-legacy-software',
        relatedBlogLabel: 'When to rebuild legacy software',
        finalCtaHeading: 'Under pressure to “modernize” legacy?',
        finalCtaBody:
          'We help you choose rebuild vs strangler with business criteria — not technology fashion.',
      },
    },
  },
  {
    id: 'add-ai',
    slugs: {
      es: 'agregar-ia-a-software-existente',
      en: 'add-ai-to-existing-software',
    },
    serviceName: {
      es: 'Agregar IA a software existente',
      en: 'Add AI to existing software',
    },
    serviceType: [
      'AI integration',
      'RAG systems',
      'API automation',
    ],
    content: {
      es: {
        metaTitle: 'Agregar IA a software existente sin reescribirlo | ConaiSoft',
        metaDescription:
          'Integra RAG, agentes y automatización sobre tus sistemas actuales vía APIs. Un flujo, ROI medible, sin rewrite. Agenda discovery.',
        h1: 'Agregar IA a software existente',
        intro:
          'Casi nunca necesitas un rebuild greenfield para sacar valor de IA. Elegimos un flujo de alto apalancamiento, conectamos datos y APIs con permisos claros, y medimos ROI antes de escalar.',
        ctaLabel: 'Agendar discovery de IA',
        ctaSecondaryLabel: 'Leer el enfoque paso a paso',
        sections: [
          {
            heading: 'Elige el flujo primero, no el modelo',
            body: 'Empezar por el vendor o el LLM suele terminar en un demo impresionante sin dueño operativo. Empezamos por el workflow.',
            bullets: [
              'Búsqueda interna (políticas, propuestas, specs) con permisos',
              'Borradores desde formularios estructurados con revisión humana',
              'Clasificación y ruteo de tickets o leads',
              'Extracción desde PDFs/emails hacia tu sistema de registro',
            ],
          },
          {
            heading: 'Integración vía APIs, sin reescribir todo',
            body: 'Capa de integración, staging para calidad, ownership de prompts/logs, y human-in-the-loop donde el riesgo es alto.',
            bullets: [
              'Acceso a datos “suficientemente limpio” para el caso de uso',
              'Contratos de API / webhooks hacia tu software actual',
              'RAG o agentes acotados al workflow elegido',
              'Evaluación en staging antes de producción',
            ],
          },
          {
            heading: 'Diferencia con el taller Automatiza IA',
            body: 'Si buscas un taller hands-on con n8n + OpenAI, ve a Automatiza IA. Esta página es el servicio B2B de integración de IA en producto o sistemas internos.',
          },
        ],
        faqs: [
          {
            question: '¿Necesito reescribir mi software para agregar IA?',
            answer:
              'Casi nunca. Empieza con un workflow de alto impacto, acceso a datos suficiente y una capa de API o integración; luego expande.',
          },
          {
            question: '¿Trabajan con APIs y sistemas legacy?',
            answer:
              'Sí. La mayoría de proyectos reales son conectores, permisos y calidad de datos — no un modelo desde cero.',
          },
          {
            question: '¿Esto es lo mismo que Automatiza IA?',
            answer:
              'No. Automatiza IA es un taller. Aquí integramos IA en tu software o stack interno con arquitectura y ownership claros.',
          },
        ],
        relatedBlogSlug: 'add-ai-to-existing-software',
        relatedBlogLabel: 'Cómo agregar IA a software existente',
        finalCtaHeading: '¿Quieres IA en el sistema que ya usas?',
        finalCtaBody:
          'Identificamos el primer workflow con ROI y el camino de integración sin rewrite.',
      },
      en: {
        metaTitle: 'Add AI to Existing Software (No Full Rewrite) | ConaiSoft',
        metaDescription:
          'Ship real AI on systems you already run—RAG, agents, APIs. Pick one workflow, measure ROI, skip the greenfield rebuild. Book a call.',
        h1: 'Add AI to existing software',
        intro:
          'You almost never need a greenfield rebuild to get AI value. We pick one high-leverage workflow, connect data and APIs with clear permissions, and measure ROI before scaling.',
        ctaLabel: 'Book an AI discovery call',
        ctaSecondaryLabel: 'Read the step-by-step approach',
        sections: [
          {
            heading: 'Pick the workflow first, not the model',
            body: 'Starting with a vendor or LLM often ends in an impressive demo with no operational owner. We start with the workflow.',
            bullets: [
              'Internal search (policies, proposals, specs) with permissions',
              'Draft generation from structured forms with human review',
              'Ticket or lead classification and routing',
              'Extraction from PDFs/emails into your system of record',
            ],
          },
          {
            heading: 'Integrate via APIs — no full rewrite',
            body: 'Integration layer, staging for quality, ownership of prompts/logs, and human-in-the-loop where stakes are high.',
            bullets: [
              'Data access clean enough for the use case',
              'API / webhook contracts into your current software',
              'RAG or agents scoped to the chosen workflow',
              'Staging evaluation before production',
            ],
          },
          {
            heading: 'Different from the Automatiza IA workshop',
            body: 'If you want a hands-on n8n + OpenAI workshop, use Automatiza IA. This page is the B2B service for AI integration into product or internal systems.',
          },
        ],
        faqs: [
          {
            question: 'Do I need to rewrite my software to add AI?',
            answer:
              'Usually no. Start with one high-impact workflow, clean-enough data access, and an API or integration layer — then expand.',
          },
          {
            question: 'Do you work with APIs and legacy systems?',
            answer:
              'Yes. Most real projects are connectors, permissions, and data quality — not a model from scratch.',
          },
          {
            question: 'Is this the same as Automatiza IA?',
            answer:
              'No. Automatiza IA is a workshop. Here we integrate AI into your software or internal stack with clear architecture and ownership.',
          },
        ],
        relatedBlogSlug: 'add-ai-to-existing-software',
        relatedBlogLabel: 'How to add AI to existing software',
        finalCtaHeading: 'Want AI on the system you already run?',
        finalCtaBody:
          'We identify the first ROI workflow and the integration path — without a rewrite.',
      },
    },
  },
];

export function getLandingBySlug(
  locale: LandingLocale,
  slug: string
): SeoLandingDefinition | undefined {
  return SEO_LANDINGS.find((landing) => landing.slugs[locale] === slug);
}

export function getLandingPath(landing: SeoLandingDefinition, locale: LandingLocale) {
  return `/${locale}/${landing.slugs[locale]}`;
}

export function getAllLandingStaticParams() {
  return SEO_LANDINGS.flatMap((landing) =>
    (['es', 'en'] as LandingLocale[]).map((locale) => ({
      locale,
      landingSlug: landing.slugs[locale],
    }))
  );
}

export function buildLandingJsonLd(
  landing: SeoLandingDefinition,
  locale: LandingLocale
) {
  const content = landing.content[locale];
  const path = getLandingPath(landing, locale);
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: landing.serviceName[locale],
        serviceType: landing.serviceType,
        description: content.intro,
        url,
        provider: {
          '@type': 'Organization',
          name: 'ConaiSoft',
          url: absoluteUrl('/'),
        },
        areaServed: 'Worldwide',
        offers: {
          '@type': 'Offer',
          url: CALENDLY_DISCOVERY_URL,
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ConaiSoft',
            item: absoluteUrl(`/${locale}`),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.h1,
            item: url,
          },
        ],
      },
    ],
  };
}
