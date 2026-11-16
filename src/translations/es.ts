import type { Dictionary } from '@/translations/types';

export const es: Dictionary = {
  header: {
    services: 'Servicios',
    process: 'Cómo funciona',
    work: 'Proyectos',
    blog: 'Blog',
    cta: 'Empezar un proyecto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLanguage: 'View in English',
  },

  hero: {
    title: 'Construimos tu producto de software.',
    titleAccent: 'En semanas, no en meses.',
    subtitle:
      'ConaiSoft es un equipo pequeño y senior que usa IA para construir aplicaciones web, apps móviles y funciones de IA más rápido que una agencia tradicional. Ves software funcionando cada semana y todo el código es tuyo.',
    ctaPrimary: 'Cuéntanos qué quieres construir',
    ctaSecondary: 'Agendar llamada de 15 min',
    proof: [
      {
        title: 'Una demo funcionando cada semana',
        description: 'Ves avances reales, no informes de estado.',
      },
      {
        title: 'El código es 100% tuyo',
        description: 'Código, cuentas y credenciales a tu nombre desde el primer día.',
      },
      {
        title: 'Respuesta en menos de 24 horas',
        description: 'Un ingeniero lee tu mensaje y te responde.',
      },
    ],
  },

  services: {
    title: 'Qué podemos construir para ti',
    subtitle: 'Elige la situación que más se parece a la tuya.',
    items: [
      {
        id: 'new-product',
        title: 'Lanzar un producto nuevo',
        description:
          'Tienes una idea para una aplicación web o móvil. La convertimos en una primera versión que usuarios reales pueden probar y la mejoramos con lo que aprendas.',
        linkLabel: 'Cómo construir un MVP',
      },
      {
        id: 'add-ai',
        title: 'Agregar IA a tu producto u operación',
        description:
          'Asistentes, búsqueda en documentos y automatizaciones conectadas a los sistemas que ya usas, sin tener que rehacerlos.',
        linkLabel: 'Agregar IA a software existente',
      },
      {
        id: 'legacy-rebuild',
        title: 'Reconstruir el software que te frena',
        description:
          'Software antiguo, lento y riesgoso de cambiar. Reemplazamos primero las partes que más duelen y conservamos lo que todavía funciona.',
        linkLabel: 'Reconstruir software legacy',
      },
      {
        id: 'dedicated-team',
        title: 'Tener un equipo dedicado',
        description:
          'Tu producto ya está en producción y la lista de pendientes no deja de crecer. Un equipo senior estable trabaja en tu roadmap cada semana.',
        linkLabel: 'Equipo de desarrollo dedicado',
      },
    ],
  },

  process: {
    title: 'Cómo funciona',
    subtitle: 'Cuatro pasos. Siempre sabes qué se está construyendo y qué sigue.',
    steps: [
      {
        title: 'Cuéntanos tu idea',
        description:
          'Envía el formulario o agenda una llamada gratuita de 15 minutos. Te decimos con honestidad si podemos ayudarte y cómo lo haríamos.',
      },
      {
        title: 'Acordamos un plan',
        description:
          'Definimos juntos la primera versión: qué incluye, qué puede esperar, cuánto tarda y cuánto cuesta. Tú decides antes de que se escriba una línea de código.',
      },
      {
        title: 'Lo ves funcionando cada semana',
        description:
          'Construimos en sprints cortos y te mostramos software funcionando cada semana. Puedes cambiar prioridades a medida que aprendes.',
      },
      {
        title: 'Lanzamiento y entrega',
        description:
          'Lanzamos en tus propias cuentas y te entregamos el código, los accesos y la documentación. Sigue construyendo con nosotros o llévalo a tu propio equipo.',
      },
    ],
  },

  why: {
    title: 'Por qué un equipo pequeño en la era de la IA',
    subtitle:
      'La IA cambió la velocidad a la que se puede construir software. No cambió quién debe tomar las decisiones.',
    items: [
      {
        title: 'Lo construyen ingenieros senior',
        description:
          'Ingenieros con experiencia diseñan y construyen tu producto, y toman las decisiones técnicas que protegen tu roadmap.',
      },
      {
        title: 'IA donde ahorra tiempo',
        description:
          'Usamos herramientas modernas de IA para avanzar más rápido en el trabajo rutinario. La arquitectura y la calidad siguen en manos de los ingenieros.',
      },
      {
        title: 'Sin sorpresas',
        description:
          'Una demo funcionando cada semana te permite detectar un error de rumbo en la semana dos y no en la semana nueve. Las pruebas automatizadas y la documentación están incluidas.',
      },
      {
        title: 'Sin ataduras',
        description:
          'Tu código, tus cuentas cloud y tus credenciales desde el primer día. Tu equipo puede tomar el control cuando quieras.',
      },
    ],
  },

  work: {
    title: 'Productos en los que han trabajado nuestros ingenieros',
    subtitle:
      'Nuestros ingenieros ayudaron a construir estos productos como parte de los equipos que los desarrollaron.',
  },

  faq: {
    title: 'Preguntas frecuentes antes de llamar',
    items: [
      {
        id: 'cost',
        question: '¿Cuánto cuesta?',
        answer:
          'Depende de lo que tenga que hacer la primera versión, por eso no publicamos un precio único. Trabajamos en sprints cortos con un alcance acordado, así pagas por trabajo que puedes ver y revisar. Después de una llamada corta y gratuita recibes un rango realista para tu idea.',
        linkLabel: 'Cuánto cuesta el software a medida en 2026',
      },
      {
        id: 'timeline',
        question: '¿Cuánto tarda?',
        answer:
          'Una primera versión bien acotada suele tardar de 4 a 8 semanas. Una muy pequeña puede tardar de 2 a 4. Los pagos, varios roles de usuario, las funciones de IA o las integraciones con sistemas antiguos pueden llevarla a 8 o 12 semanas, o más. Normalmente ves una primera demo en la primera o segunda semana.',
        linkLabel: 'Cuánto tarda un MVP',
      },
      {
        id: 'ownership',
        question: '¿De quién es el código?',
        answer:
          'Tuyo. El 100% del código, las cuentas cloud y las credenciales están a nombre de tu empresa desde el primer día.',
        linkLabel: 'De quién es el código cuando contratas desarrollo',
      },
      {
        id: 'idea',
        question: 'Solo tengo una idea. ¿Es suficiente?',
        answer:
          'Sí. En la primera llamada te ayudamos a decidir cuál es la versión más pequeña que ya es útil y qué puede esperar. Si conviene validar la idea antes de construirla, te lo decimos.',
        linkLabel: 'Cómo validar una idea antes de construirla',
      },
      {
        id: 'non-technical',
        question: 'No soy técnico. ¿Puedo trabajar con ustedes?',
        answer:
          'Sí. No necesitas leer código. Cada semana ves y pruebas el producto funcionando, y te explicamos las alternativas en lenguaje claro para que puedas decidir.',
        linkLabel: 'Cómo gestionar un equipo de desarrollo externo',
      },
      {
        id: 'after-launch',
        question: '¿Qué pasa después del lanzamiento?',
        answer:
          'Tú eliges. Podemos seguir construyendo contigo como equipo dedicado o entregar todo a tus propios desarrolladores. En ambos casos, el código y las cuentas ya son tuyos.',
        linkLabel: 'Cómo funciona un equipo dedicado',
      },
    ],
  },

  contact: {
    title: 'Cuéntanos qué quieres construir',
    subtitle:
      'Describe tu idea en pocas líneas. Un ingeniero te responde en menos de 24 horas con una opinión honesta y los siguientes pasos. Sin compromiso.',
    callTitle: '¿Prefieres hablar?',
    callBody: 'Agenda una llamada gratuita de 15 minutos y cuéntanos tu proyecto.',
    callCta: 'Agendar llamada de 15 min',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    home: 'Inicio',
    blog: 'Blog',
    bookCall: 'Agendar llamada',
    navLabel: 'Pie de página',
  },
};
