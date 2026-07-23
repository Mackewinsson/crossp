import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Automatiza tu negocio con IA (n8n + OpenAI)',
  description:
    'Taller intensivo para automatizar procesos con n8n y OpenAI sin programar. Ahorra horas cada semana con flujos listos para usar.',
  alternates: {
    canonical: '/automatiza-ia',
  },
  openGraph: {
    title: 'Automatiza tu negocio con IA | ConaiSoft',
    description:
      'Aprende n8n + OpenAI en un taller intensivo y automatiza procesos clave sin programar.',
    url: absoluteUrl('/automatiza-ia'),
    locale: 'es_ES',
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
