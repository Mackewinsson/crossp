import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Crea tu software a medida',
  description:
    'Desarrollamos software a medida, apps y plataformas web con arquitectura senior, sprints semanales y entrega total del código. Agenda una llamada.',
  alternates: {
    canonical: '/crea-tu-software',
  },
  openGraph: {
    title: 'Crea tu software a medida | ConaiSoft',
    description:
      'Software a medida, apps y plataformas web con arquitectura senior y entregas semanales.',
    url: absoluteUrl('/crea-tu-software'),
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreaTuSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
