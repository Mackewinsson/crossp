import type { Locale } from '@/lib/locales';

export interface PortfolioProject {
  id: string;
  company: string;
  product: Record<Locale, string>;
  summary: Record<Locale, string>;
}

/**
 * Products ConaiSoft engineers worked on as members of each company's team.
 * Keep summaries factual: what the product does and the stack, nothing more.
 */
export const portfolioData: PortfolioProject[] = [
  {
    id: 'latam',
    company: 'LATAM Airlines',
    product: { en: 'Airline mobile app', es: 'App móvil de aerolínea' },
    summary: {
      en: 'Flight booking, real-time travel information, LATAM Pass account management and an offline mode. Built with React Native.',
      es: 'Compra de vuelos, información de viaje en tiempo real, gestión de la cuenta LATAM Pass y modo sin conexión. Hecha con React Native.',
    },
  },
  {
    id: 'keller-williams',
    company: 'Keller Williams',
    product: { en: 'Real estate mobile app', es: 'App móvil inmobiliaria' },
    summary: {
      en: 'Property search, interactive listings with video and real-time notifications for new listings. Built with React Native and Firebase.',
      es: 'Búsqueda de propiedades, fichas interactivas con video y notificaciones en tiempo real de nuevas propiedades. Hecha con React Native y Firebase.',
    },
  },
  {
    id: 'disney',
    company: 'Disney',
    product: { en: 'Internal web tool', es: 'Herramienta web interna' },
    summary: {
      en: 'Front-end lead on an internal tool that manages queries across Disney networks such as ABC, ESPN and National Geographic. Built with React and Next.js.',
      es: 'Liderazgo de front-end en una herramienta interna que gestiona consultas de las cadenas de Disney, como ABC, ESPN y National Geographic. Hecha con React y Next.js.',
    },
  },
  {
    id: 'itau',
    company: 'Banco Itaú Chile',
    product: { en: 'Digital banking app', es: 'App de banca digital' },
    summary: {
      en: 'itu, a 100% digital checking account: account management, secure transactions and transfers. Built with React Native.',
      es: 'itu, una cuenta corriente 100% digital: gestión de la cuenta, transacciones seguras y transferencias. Hecha con React Native.',
    },
  },
  {
    id: 'achieve',
    company: 'Achieve',
    product: { en: 'Personal finance app', es: 'App de finanzas personales' },
    summary: {
      en: 'MoLO, a free app to budget and manage debt that connects and tracks the user’s financial accounts. Built with React Native.',
      es: 'MoLO, una app gratuita para presupuestar y manejar deudas que conecta y sigue las cuentas financieras del usuario. Hecha con React Native.',
    },
  },
  {
    id: 'blue-express',
    company: 'Blue Express',
    product: { en: 'Logistics app', es: 'App de logística' },
    summary: {
      en: 'PickUp, an app for package admission, delivery tracking and returns management. Built with React Native and Firebase.',
      es: 'PickUp, una app para admisión de paquetes, seguimiento de entregas y gestión de devoluciones. Hecha con React Native y Firebase.',
    },
  },
  {
    id: 'aptos',
    company: 'Aptos',
    product: { en: 'Retail store app', es: 'App para tiendas' },
    summary: {
      en: 'Store Unified Flow brings the Aptos Store workflow to mobile devices, so retailers can serve shoppers and complete sales on the shop floor. Built with React Native.',
      es: 'Store Unified Flow lleva el flujo de Aptos Store a dispositivos móviles, para que las tiendas atiendan y cierren ventas junto al cliente. Hecha con React Native.',
    },
  },
  {
    id: 'series',
    company: 'Series',
    product: { en: 'Business services platform', es: 'Plataforma de servicios empresariales' },
    summary: {
      en: 'A web platform that brings together legal, financial and operational services for companies. Built with React and Next.js.',
      es: 'Una plataforma web que reúne servicios legales, financieros y operativos para empresas. Hecha con React y Next.js.',
    },
  },
];
