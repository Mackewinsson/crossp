import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_TAGLINE,
    start_url: '/es',
    display: 'standalone',
    background_color: '#fbfaf7',
    theme_color: '#fbfaf7',
    lang: 'es',
    icons: [
      {
        src: '/img/logo/light.png',
        sizes: '500x500',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
