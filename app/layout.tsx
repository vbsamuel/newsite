import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: '%s | Amalgus Publication',
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    url: site.url,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Amalgus Publication',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
