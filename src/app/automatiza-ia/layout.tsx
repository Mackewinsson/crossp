import type { Metadata } from 'next';
import { absoluteUrl, defaultOgImage } from '@/lib/seo';

const TITLE = 'Automatiza tu negocio con IA (n8n + OpenAI)';
const DESCRIPTION =
  'Taller intensivo para automatizar procesos con n8n y OpenAI sin programar. Ahorra horas cada semana con flujos listos para usar.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'automatización con IA',
    'n8n',
    'OpenAI',
    'taller IA',
    'ConaiSoft',
  ],
  alternates: {
    canonical: '/automatiza-ia',
  },
  openGraph: {
    title: 'Automatiza tu negocio con IA | ConaiSoft',
    description:
      'Aprende n8n + OpenAI en un taller intensivo y automatiza procesos clave sin programar.',
    url: absoluteUrl('/automatiza-ia'),
    locale: 'es_ES',
    images: [defaultOgImage(TITLE)],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatiza tu negocio con IA | ConaiSoft',
    description: DESCRIPTION,
    images: [absoluteUrl('/og.png')],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AutomatizaIaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
