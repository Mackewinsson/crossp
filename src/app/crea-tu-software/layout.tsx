import type { Metadata } from 'next';
import { absoluteUrl, defaultOgImage } from '@/lib/seo';

const TITLE = 'Crea tu software a medida';
const DESCRIPTION =
  'Desarrollamos software a medida, apps y plataformas web con arquitectura senior, sprints semanales y entrega total del código. Agenda una llamada.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'software a medida',
    'desarrollo de software',
    'apps a medida',
    'ConaiSoft',
  ],
  alternates: {
    canonical: '/crea-tu-software',
  },
  openGraph: {
    title: `${TITLE} | ConaiSoft`,
    description:
      'Software a medida, apps y plataformas web con arquitectura senior y entregas semanales.',
    url: absoluteUrl('/crea-tu-software'),
    locale: 'es_ES',
    images: [defaultOgImage(TITLE)],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ConaiSoft`,
    description: DESCRIPTION,
    images: [absoluteUrl('/og.png')],
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
