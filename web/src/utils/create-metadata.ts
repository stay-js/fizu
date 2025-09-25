import type { Metadata } from 'next';

export const createMetadata = ({
  path,
  title,
  absoluteTitle,
  description,
  noIndex,
}: {
  path: string;
  title: string;
  absoluteTitle?: string;
  description?: string;
  noIndex?: boolean;
}): Metadata => ({
  metadataBase: new URL('https://job-keeper.znagy.hu'),

  authors: [
    { name: 'Zétény Nagy', url: 'https://znagy.hu' },
    { name: 'Panna Polyák' },
    { name: 'Benjámin K. Papp' },
  ],
  creator: 'Zétény Nagy, Panna Polyák, Benjámin K. Papp',

  keywords: ['job', 'hourly-wage', 'statistics', 'income', 'job-keeper'].join(', '),

  title: absoluteTitle ?? `${title} - JobKeeper`,
  description,

  applicationName: 'JobKeeper',

  robots: noIndex
    ? {
        index: false,
        follow: false,
        'max-video-preview': -1,
        'max-image-preview': 'none',
        'max-snippet': -1,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

  openGraph: {
    type: 'website',
    url: `url${path}`,
    title: absoluteTitle ?? `${title} - JobKeeper`,
    description,
    siteName: 'JobKeeper',
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title: absoluteTitle ?? `${title} - JobKeeper`,
    description,
  },

  icons: {
    icon: '/favicon.ico',
  },
});
