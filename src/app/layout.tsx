import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import './me.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://me.avrxt.dev'),
  applicationName: 'AVRXT Profile',
  title: { default: 'AVRXT — Profile', template: '%s | AVRXT' },
  description: 'Official public profile and links for AVRXT.',
  creator: 'AVRXT',
  publisher: 'AVRXT',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: 'AVRXT',
    title: 'AVRXT — Profile',
    description: 'Official public profile and links for AVRXT.',
    images: [{ url: 'https://cdn.avrxt.dev/logo/avrxt-vector-slash-Photoroom.png', width: 1200, height: 630, alt: 'AVRXT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVRXT — Profile',
    description: 'Official public profile and links for AVRXT.',
    images: ['https://cdn.avrxt.dev/logo/avrxt-vector-slash-Photoroom.png'],
  },
  icons: { icon: '/brand/avrxt-selected/favicon.ico' },
};

export const viewport: Viewport = { themeColor: '#050505', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>{children}</body></html>;
}
