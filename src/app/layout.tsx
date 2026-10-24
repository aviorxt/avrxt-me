import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import './me.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://me.avrxt.dev'),
  title: 'AVRXT — Profile',
  description: 'Official public profile and links for AVRXT.',
  alternates: { canonical: '/' },
  icons: { icon: '/brand/avrxt-selected/favicon.ico' },
};

export const viewport: Viewport = { themeColor: '#050505', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>{children}</body></html>;
}
