export const es = {
  // Header
  header: {
    services: 'Soluciones',
    painPoints: 'Pain Points',
    velocity: 'Calculadora ROI',
    process: 'Metodología',
    portfolio: 'Casos de Éxito',
    testimonials: 'Testimonios',
    getStarted: 'Agendar Consulta',
    status: '🟢 Motor de IA Operativo • Sprints de Alta Velocidad',
  },

  // Hero Section
  hero: {
    statusBadge: 'INGENIERÍA DE SOFTWARE Y METODOLOGÍA IA',
    title: 'Desarrollamos Software e IA para Empresas a Alta Velocidad',
    titleHighlight: 'Rápido, Confiable y Escalable',
    subtitle: 'Transforma tus ideas en plataformas web, apps y motores de IA listos para producción. Combinamos arquitectura de software senior con flujos acelerados de IA para lanzar tu producto sin fricción.',
    ctaPrimary: 'Agendar Sesión de Arquitectura',
    ctaSecondary: 'Ver Comparación y ROI',
    scrollDown: 'Explorar Soluciones',
    metrics: {
      delivery: '10x',
      deliveryLabel: 'Velocidad de Desarrollo',
      uptime: '99.9%',
      uptimeLabel: 'Disponibilidad y Confiabilidad',
      codeOwnership: '100%',
      codeOwnershipLabel: 'Propiedad del Código Fuente',
    },
    terminal: {
      title: 'conaisoft-ai-engine ~ v4.2',
      prompt: 'scaffold_enterprise_app --ai-agents --ci-cd --security-audit',
      output1: '✔ Analizando especificaciones y arquitectura...',
      output2: '✔ Generando backend TypeScript, RAG vector DB & Next.js 15...',
      output3: '✔ Ejecutando 142 pruebas unitarias y de integración [100% PASSED]',
      output4: '🚀 Desplegado en producción en Vercel & AWS con éxito.',
    }
  },

  // Pain Points Section
  painPoints: {
    badge: 'DESAFÍOS DEL DESARROLLO TRADICIONAL',
    title: '¿Por qué se frenan los proyectos de software?',
    subtitle: 'Desarrollar productos digitales con esquemas tradicionales genera fricción, retrasos y sobrecostos. Resolvemos los 4 problemas principales:',
    cards: [
      {
        id: 'agencies',
        icon: '⏳',
        painTitle: 'Agencias Tradicionales Lentísimas',
        painDesc: 'Procesos de 6 a 12 meses con presupuestos rígidos e inflados que ralentizan la salida al mercado.',
        solutionTitle: 'Nuestra Solución: Sprints Iterativos',
        solutionDesc: 'Desarrollo en ciclos semanales con entregables funcionales desde la primera semana.',
      },
      {
        id: 'hiring',
        icon: '💸',
        painTitle: 'Alta Fricción al Contratar',
        painDesc: 'Meses de reclutamiento y altos costos fijos antes de validar si el producto funciona.',
        solutionTitle: 'Nuestra Solución: Equipo Senior Inmediato',
        solutionDesc: 'Acceso instantáneo a arquitectura senior e ingeniería sin cargas operativas.',
      },
      {
        id: 'freelancers',
        icon: '⚠️',
        painTitle: 'Código Inconstante y Sin Pruebas',
        painDesc: 'Falta de estándares de arquitectura, ausencia de testing y deuda técnica inmediata.',
        solutionTitle: 'Nuestra Solución: Calidad y Pruebas Automatizadas',
        solutionDesc: 'Pruebas automatizadas, código limpio, documentación y entrega total del repositorio.',
      },
      {
        id: 'nocode',
        icon: '🧱',
        painTitle: 'Límites Técnicos de No-Code',
        painDesc: 'Útil para maquetas iniciales, pero colapsa ante lógica compleja, IA personalizada o escala.',
        solutionTitle: 'Nuestra Solución: Arquitectura Full-Stack',
        solutionDesc: 'Construido en Next.js, Node/Python y bases de datos preparadas para escalar.',
      },
    ],
    comparisonTitle: 'Matriz Comparativa de Modelos de Desarrollo',
    tableHeaders: {
      feature: 'Característica / Enfoque',
      agency: 'Agencias Tradicionales',
      inHouse: 'Equipo In-House',
      freelance: 'Freelancers',
      conaiSoft: 'ConaiSoft AI Engine',
    },
    tableRows: [
      { feature: 'Ritmo de Entrega', agency: 'Lotes de 6 a 12 Meses', inHouse: '4 a 8 Meses', freelance: 'Variable / Incierto', conaiSoft: 'Sprints Semanales Continuos ⚡' },
      { feature: 'Modelo de Inversión', agency: 'Presupuesto Fijo Inflado', inHouse: 'Salarios Fijos Elevados', freelance: 'Por hora / proyecto', conaiSoft: 'Sprints Flexibles por Etapa' },
      { feature: 'Capacidades de IA Nativa', agency: 'Limitada o Ad-Hoc', inHouse: 'Requiere Especialistas', freelance: 'Superficial', conaiSoft: 'Nativa (LLMs, RAG, Agentes) 🤖' },
      { feature: 'Calidad y Pruebas CI/CD', agency: 'Opcional / Cobro extra', inHouse: 'Variable', freelance: 'Rara vez incluido', conaiSoft: 'Integrado por Defecto' },
      { feature: 'Propiedad del Código', agency: 'Depende del contrato', inHouse: '100%', freelance: 'A menudo ambiguo', conaiSoft: '100% Propiedad del Cliente' },
    ]
  },

  // Velocity Calculator Section
  calculator: {
    badge: 'ESTIMADOR DE VELOCIDAD Y ESTIMACIÓN',
    title: 'Compara el ritmo de desarrollo frente al modelo tradicional',
    subtitle: 'Selecciona la categoría de tu producto para observar el impacto de desarrollar con aceleración de IA y arquitectura senior.',
    projectTypes: [
      { id: 'saas', name: 'SaaS / Plataforma Web', tradTime: '16 Semanas', tradCost: 'Alto', aiTime: '2 - 4 Semanas', aiCost: 'Optimizado', savings: 'Velocidad 5x' },
      { id: 'ai-app', name: 'Sistema de IA & RAG', tradTime: '24 Semanas', tradCost: 'Muy Alto', aiTime: '3 - 5 Semanas', aiCost: 'Optimizado', savings: 'Velocidad 6x' },
      { id: 'mobile', name: 'App Móvil iOS / Android', tradTime: '20 Semanas', tradCost: 'Alto', aiTime: '3 - 4 Semanas', aiCost: 'Optimizado', savings: 'Velocidad 5x' },
      { id: 'workflow', name: 'Automatizaciones & APIs', tradTime: '12 Semanas', tradCost: 'Medio', aiTime: '1 - 2 Semanas', aiCost: 'Optimizado', savings: 'Velocidad 6x' },
    ],
    labels: {
      traditional: 'Desarrollo Tradicional',
      conaiSoft: 'ConaiSoft AI Engine',
      timeSaved: 'Semanas Ahorradas',
      costSaved: 'Ahorro Estimado',
      guarantee: 'Transparencia y Control Total',
      guaranteeDesc: 'Revisiones periódicas al final de cada sprint con entregables funcionales y visibilidad completa del código.',
    }
  },

  // Services Section
  services: {
    badge: 'SOLUCIONES DE INGENIERÍA E IA',
    title: 'Software Diseñado para Crecer y Durar',
    subtitle: 'Entregamos arquitecturas de software robustas, mantenibles y preparadas para resolver necesidades reales.',
    aiIntegration: {
      title: 'Agentes Autónomos e Integración de IA',
      popupTitle: 'Integración Avanzada de Inteligencia Artificial',
      description: 'Implementamos agentes de IA, pipelines de RAG (Retrieval-Augmented Generation) y modelos adaptados para automatizar operaciones de negocio.',
      features: [
        'Orquestación de Agentes LLM autónomos',
        'Bases de datos vectoriales y arquitectura RAG',
        'Procesamiento inteligente de documentos y flujos',
        'Integración segura de IA con tus sistemas e APIs',
      ],
    },
    customSoftware: {
      title: 'Plataformas Web y SaaS Full-Stack',
      popupTitle: 'Desarrollo de Software Web',
      description: 'Construimos aplicaciones web rápidas y escalables utilizando Next.js, React, TypeScript y arquitecturas modernas en la nube.',
      features: [
        'Frontend React responsivo y de alto rendimiento',
        'APIs REST y GraphQL escalables en TypeScript',
        'Integración de pagos, autenticación y gestión de usuarios',
      ],
    },
    mobileApps: {
      title: 'Aplicaciones Móviles React Native',
      popupTitle: 'Desarrollo de Apps Móviles',
      description: 'Apps móviles para iOS y Android con rendimiento fluido, diseño limpio y soporte para trabajo sin conexión.',
      features: [
        'Desarrollo multiplataforma eficiente en React Native',
        'Sincronización en tiempo real y soporte offline',
        'Notificaciones push y almacenamiento seguro',
      ],
    },
    cloudAutomation: {
      title: 'Infraestructura Cloud y DevOps',
      popupTitle: 'Arquitectura Cloud y DevOps',
      description: 'Despliegue ordenado, buenas prácticas de seguridad y monitoreo en plataformas cloud como AWS, GCP o Vercel.',
      features: [
        'Infraestructura como Código (Docker / Cloud)',
        'Pipelines de integración y despliegue continuo (CI/CD)',
        'Auditorías de estabilidad y monitoreo de rendimiento',
      ],
    },
  },

  // Delivery Protocol Section
  process: {
    badge: 'NUESTRA METODOLOGÍA',
    title: 'De la Idea a Producción en 4 Fases Continuas',
    subtitle: 'Un proceso estructurado y ágil para avanzar con claridad en cada etapa del desarrollo.',
    steps: [
      {
        step: '01',
        day: 'Fase 1',
        title: 'Descubrimiento & Arquitectura',
        description: 'Definimos los requerimientos clave, modelo de datos, arquitectura de seguridad y especificamos las APIs.',
      },
      {
        step: '02',
        day: 'Fase 2',
        title: 'Desarrollo & Aceleración con IA',
        description: 'Construimos la estructura del sistema, lógica de negocio y componentes UI con ayuda de herramientas avanzadas.',
      },
      {
        step: '03',
        day: 'Fase 3',
        title: 'Pruebas & Seguridad',
        description: 'Verificamos el funcionamiento con pruebas automatizadas y ajustes de seguridad para asegurar estabilidad.',
      },
      {
        step: '04',
        day: 'Fase 4',
        title: 'Despliegue & Transferencia',
        description: 'Desplegamos en tu entorno de producción y te entregamos el repositorio con 100% de propiedad del código.',
      },
    ]
  },

  // Features Section
  features: {
    title: '¿Por Qué Trabajar con ConaiSoft?',
    subtitle: 'Principios orientados a la velocidad, la calidad del código y la transparencia',
    expertise: {
      title: 'Arquitectura Senior',
      description: 'Ingenieros experimentados guiando cada decisión técnica',
    },
    innovation: {
      title: 'Aceleración por IA',
      description: 'Aprovechamos herramientas de IA de última generación para avanzar rápido',
    },
    quality: {
      title: 'Pruebas y Calidad',
      description: 'Verificación continua para mantener estabilidad y código limpio',
    },
    support: {
      title: 'Propiedad Total',
      description: 'Tu código, tus credenciales y tu infraestructura desde el primer día',
    },
  },

  // Portfolio Section
  portfolio: {
    title: 'Experiencia y Proyectos',
    subtitle: 'Proyectos y soluciones desarrolladas para diferentes sectores e industrias',
    viewProject: 'Ver Detalles del Proyecto',
    technologies: 'Tecnologías',
    client: 'Cliente',
    duration: 'Alcance',
  },

  // Testimonials Section
  testimonials: {
    title: 'Lo Que Opinan Quienes Han Trabajado Con Nosotros',
    subtitle: 'Feedback sobre nuestro enfoque en velocidad, calidad y comunicación',
  },

  // CTA Section
  cta: {
    title: '¿Tienes un proyecto de software o IA en mente?',
    subtitle: 'Reserva una sesión corta de 15 minutos para revisar tus necesidades, evaluar la factibilidad técnica y definir el mejor plan de desarrollo.',
    button: 'Agendar Llamada de 15 Minutos',
    guarantee: 'Sin compromiso • Enfoque técnico y transparente • Respuesta en menos de 24 horas',
  },

  // Footer
  footer: {
    copyright: '© 2026 ConaiSoft AI Engine. Todos los derechos reservados.',
    madeWith: 'Desarrollado con precisión por ConaiSoft',
  },

  // Common
  common: {
    learnMore: 'Saber Más',
    contactUs: 'Contáctanos',
    readMore: 'Leer Más',
    close: 'Cerrar',
    next: 'Siguiente',
    previous: 'Anterior',
  },
};