export const es = {
  // Header
  header: {
    services: 'Soluciones',
    painPoints: 'Desafíos',
    velocity: 'Estimador de Plazos',
    process: 'Cómo Trabajamos',
    portfolio: 'Proyectos',
    testimonials: 'Clientes',
    blog: 'Blog',
    getStarted: 'Agendar Llamada',
    status: 'Ingeniería senior • Entregas semanales • Propiedad total del código',
  },

  // Hero Section
  hero: {
    statusBadge: 'PARTNER DE INGENIERÍA DE SOFTWARE E IA',
    title: 'Lanza software en producción sin los retrasos de siempre',
    titleHighlight: 'Equipo senior. Proceso claro. Tú eres dueño de todo.',
    subtitle: 'Ayudamos a founders y equipos de producto a construir plataformas web, apps móviles y capacidades de IA con arquitectura senior, entregables semanales y transparencia total — para avanzar más rápido sin atarte a una agencia ni asumir el costo de contratar.',
    ctaPrimary: 'Agendar Llamada de Descubrimiento',
    ctaSecondary: 'Comparar Modelos de Entrega',
    scrollDown: 'Ver cómo resolvemos los bloqueos habituales',
    metrics: {
      delivery: 'Semanal',
      deliveryLabel: 'Entregables Funcionales',
      uptime: 'Senior',
      uptimeLabel: 'Entrega Guiada por Arquitectura',
      codeOwnership: '100%',
      codeOwnershipLabel: 'Propiedad del Código Fuente',
    },
    terminal: {
      title: 'conaisoft delivery ~ sprint',
      prompt: 'plan_sprint --architecture --tests --handover',
      output1: '✔ Aclarando requerimientos y límites del sistema...',
      output2: '✔ Construyendo TypeScript, APIs y Next.js listos para producción...',
      output3: '✔ Agregando pruebas automatizadas, CI y documentación...',
      output4: '✔ Sprint listo para revisión — código y accesos entregados.',
    }
  },

  // Pain Points Section
  painPoints: {
    badge: 'BLOQUEOS HABITUALES EN DESARROLLO',
    title: '¿Entre agencias lentas, freelancers riesgosos y contratación costosa?',
    subtitle: 'La mayoría de los equipos pierde meses con el modelo de entrega equivocado. Eliminamos la fricción que retrasa productos y dispara costos:',
    viewCards: 'Dolores',
    viewMatrix: 'Comparar',
    scrollHint: 'Desliza hacia el lado para comparar todos los modelos →',
    cards: [
      {
        id: 'agencies',
        icon: '⏳',
        painTitle: 'Las agencias alargan los plazos',
        painDesc: 'Descubrimiento eterno, alcances rígidos y ciclos de 6 a 12 meses que retrasan el lanzamiento — a menudo sin software usable en el camino.',
        solutionTitle: 'Solución: Entrega por sprints semanales',
        solutionDesc: 'Ciclos cortos con software funcionando cada semana, progreso visible y alcance que puedes ajustar cuando cambien las prioridades.',
      },
      {
        id: 'hiring',
        icon: '💸',
        painTitle: 'Contratar es lento y caro',
        painDesc: 'Reclutar ingenieros senior toma meses y genera costos fijos antes de validar si el producto encaja en el mercado.',
        solutionTitle: 'Solución: Equipo senior bajo demanda',
        solutionDesc: 'Acceso inmediato a arquitectura e ingeniería — sin nómina, sin carga de gestión y sin un proceso de contratación largo.',
      },
      {
        id: 'freelancers',
        icon: '⚠️',
        painTitle: 'Calidad inconsistente y sin pruebas',
        painDesc: 'Código fragmentado, sin estándares, poca documentación y deuda técnica que aparece justo cuando necesitas escalar.',
        solutionTitle: 'Solución: Calidad en cada sprint',
        solutionDesc: 'Arquitectura clara, pruebas automatizadas, documentación y entrega total del repositorio para que tu equipo pueda continuar con seguridad.',
      },
      {
        id: 'nocode',
        icon: '🧱',
        painTitle: 'El no-code se queda corto',
        painDesc: 'Sirve para prototipos tempranos — pero flujos a medida, IA, integraciones y escala superan rápido las herramientas visuales.',
        solutionTitle: 'Solución: Arquitectura full-stack real',
        solutionDesc: 'Construido en Next.js, Node/Python y bases de datos pensadas para crecer con tu producto — sin tener que rehacerlo después.',
      },
    ],
    comparisonTitle: 'Cómo se comparan los modelos de entrega',
    tableHeaders: {
      feature: 'Lo que importa',
      agency: 'Agencia Tradicional',
      inHouse: 'Equipo In-House',
      freelance: 'Freelancers',
      conaiSoft: 'ConaiSoft',
    },
    tableRows: [
      { feature: 'Ritmo de entrega', agency: 'Lotes de 6 a 12 meses', inHouse: '4 a 8 meses típico', freelance: 'Variable / incierto', conaiSoft: 'Sprints semanales continuos' },
      { feature: 'Modelo de inversión', agency: 'Presupuestos fijos rígidos', inHouse: 'Salarios fijos altos', freelance: 'Por hora / proyecto', conaiSoft: 'Sprints flexibles por etapa' },
      { feature: 'Capacidad de IA', agency: 'Limitada / ad-hoc', inHouse: 'Requiere especialistas', freelance: 'A menudo superficial', conaiSoft: 'Nativa (LLMs, RAG, agentes)' },
      { feature: 'Pruebas y CI/CD', agency: 'A menudo opcional / extra', inHouse: 'Depende del equipo', freelance: 'Rara vez incluido', conaiSoft: 'Incluido por defecto' },
      { feature: 'Propiedad del código', agency: 'Depende del contrato', inHouse: '100%', freelance: 'A menudo ambiguo', conaiSoft: '100% tuyo' },
    ]
  },

  // Velocity Calculator Section
  calculator: {
    badge: 'ESTIMADOR DE PLAZOS',
    title: 'Compara la entrega por sprints con el modelo tradicional',
    subtitle: 'Elige un tipo de producto para una estimación realista de alcance MVP. Los plazos exactos dependen de la complejidad — los afinamos juntos en la llamada de descubrimiento.',
    projectTypes: [
      { id: 'saas', name: 'SaaS / Plataforma Web', tradTime: '16 Semanas', tradCost: 'Alto', aiTime: '6 – 10 Semanas', aiCost: 'Sprints definidos', savings: 'Más rápido al MVP' },
      { id: 'ai-app', name: 'Producto de IA & RAG', tradTime: '24 Semanas', tradCost: 'Muy Alto', aiTime: '8 – 12 Semanas', aiCost: 'Sprints definidos', savings: 'Validación más rápida' },
      { id: 'mobile', name: 'App iOS / Android', tradTime: '20 Semanas', tradCost: 'Alto', aiTime: '6 – 10 Semanas', aiCost: 'Sprints definidos', savings: 'Más rápido al mercado' },
      { id: 'workflow', name: 'Integraciones API', tradTime: '12 Semanas', tradCost: 'Medio', aiTime: '2 – 4 Semanas', aiCost: 'Sprints definidos', savings: 'Menos espera' },
    ],
    labels: {
      traditional: 'Camino tradicional típico',
      conaiSoft: 'Modelo de sprints ConaiSoft',
      timeSaved: 'Semanas recuperadas',
      costSaved: 'Control de costo',
      guarantee: 'Transparencia verificable',
      guaranteeDesc: 'Revisiones al final de cada sprint con entregables funcionales, comunicación abierta y visibilidad total del código.',
    }
  },

  // Services Section
  services: {
    badge: 'LO QUE CONSTRUIMOS',
    title: 'Software pensado para restricciones reales de negocio',
    subtitle: 'Arquitecturas prácticas que se lanzan, escalan y se mantienen — no demos que se rompen en producción.',
    aiIntegration: {
      title: 'Agentes de IA y Sistemas RAG',
      popupTitle: 'Integración de IA a Medida',
      description: 'Diseñamos agentes de IA, pipelines de recuperación e inteligencia documental alineados a tus flujos — con seguridad y mantenibilidad en mente.',
      features: [
        'Orquestación de agentes LLM para operaciones reales',
        'Bases de datos vectoriales y búsqueda RAG',
        'Procesamiento inteligente de documentos y flujos',
        'Conexiones seguras a tus APIs y sistemas internos',
      ],
    },
    customSoftware: {
      title: 'Plataformas Web y SaaS',
      popupTitle: 'Desarrollo Web Full-Stack',
      description: 'Construimos productos web rápidos y confiables con Next.js, React, TypeScript e infraestructura cloud moderna.',
      features: [
        'Frontends React responsivos y de alto rendimiento',
        'APIs REST y GraphQL escalables en TypeScript',
        'Pagos, autenticación y control de acceso por roles',
      ],
    },
    mobileApps: {
      title: 'Apps Móviles con React Native',
      popupTitle: 'Ingeniería de Apps Móviles',
      description: 'Apps multiplataforma para iOS y Android con buena UX, soporte offline y bases listas para producción.',
      features: [
        'Entrega eficiente multiplataforma con React Native',
        'Sincronización en tiempo real y diseño offline-friendly',
        'Notificaciones push y autenticación segura',
      ],
    },
    cloudAutomation: {
      title: 'Infraestructura Cloud y DevOps',
      popupTitle: 'Arquitectura Cloud y DevOps',
      description: 'Pipelines de despliegue limpios, prácticas de seguridad y monitoreo en AWS, GCP o Vercel — para que los releases sean predecibles.',
      features: [
        'Infraestructura como Código (Docker / cloud)',
        'Pipelines CI/CD para releases más seguros',
        'Chequeos de estabilidad y monitoreo de rendimiento',
      ],
    },
  },

  // Delivery Protocol Section
  process: {
    badge: 'CÓMO TRABAJAMOS',
    title: 'De la idea a producción en cuatro fases claras',
    subtitle: 'Un flujo transparente para que siempre sepas qué se está construyendo, por qué, y qué sigue.',
    steps: [
      {
        step: '01',
        day: 'Fase 1',
        title: 'Descubrimiento y Arquitectura',
        description: 'Alineamos objetivos, restricciones, modelos de datos, seguridad y límites de API antes de escribir código de producción.',
      },
      {
        step: '02',
        day: 'Fase 2',
        title: 'Construcción en Sprints Semanales',
        description: 'Implementamos la estructura central, la lógica de negocio y la UI — revisando software funcional contigo en cada sprint.',
      },
      {
        step: '03',
        day: 'Fase 3',
        title: 'Pruebas y Endurecimiento',
        description: 'Agregamos pruebas automatizadas y reforzamos seguridad para que el producto se mantenga estable al crecer.',
      },
      {
        step: '04',
        day: 'Fase 4',
        title: 'Despliegue y Entrega',
        description: 'Desplegamos en tu entorno y transferimos el 100% del repositorio, credenciales y documentación.',
      },
    ]
  },

  // Features Section
  features: {
    title: 'Por qué eligen ConaiSoft',
    subtitle: 'La confianza nace de la claridad: criterio senior, progreso medible y propiedad que se queda contigo.',
    expertise: {
      title: 'Arquitectura senior',
      description: 'Ingenieros experimentados tomando decisiones técnicas que protegen tu roadmap',
    },
    innovation: {
      title: 'Aceleración práctica con IA',
      description: 'Usamos herramientas modernas de IA para avanzar más rápido — sin sacrificar arquitectura ni calidad',
    },
    quality: {
      title: 'Pruebas y mantenibilidad',
      description: 'Chequeos automatizados y estructura limpia para que el producto sea fácil de extender',
    },
    support: {
      title: 'Propiedad total',
      description: 'Tu código, credenciales e infraestructura desde el día uno — sin lock-in',
    },
  },

  // Portfolio Section
  portfolio: {
    title: 'Trabajo seleccionado',
    subtitle: 'Software entregado en distintos productos, industrias y etapas de crecimiento',
    viewProject: 'Ver detalles del proyecto',
    technologies: 'Stack tecnológico',
    client: 'Cliente',
    duration: 'Alcance',
  },

  // Testimonials Section
  testimonials: {
    title: 'Lo que más valoran los clientes',
    subtitle: 'Comunicación clara, entrega confiable y software que sus equipos pueden realmente poseer',
  },

  // CTA Section
  cta: {
    badge: 'LLAMADA DE DESCUBRIMIENTO GRATUITA',
    title: '¿Listo para desbloquear tu roadmap?',
    subtitle: 'Agenda una llamada gratuita de 15 minutos. Revisamos tus objetivos, detectamos riesgos técnicos temprano y armamos un plan de entrega realista — sin presión para comprometerte.',
    button: 'Agendar Llamada de 15 Min',
    guarantee: 'Sin compromiso • Consejo técnico directo • Respuesta en menos de 24 horas',
  },

  // Footer
  footer: {
    copyright: '© 2026 ConaiSoft. Todos los derechos reservados.',
    madeWith: 'Construido con cuidado por ConaiSoft',
  },

  // Common
  common: {
    learnMore: 'Saber más',
    contactUs: 'Contáctanos',
    readMore: 'Leer más',
    close: 'Cerrar',
    next: 'Siguiente',
    previous: 'Anterior',
  },
};
