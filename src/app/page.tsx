import type { Metadata } from 'next';
import { getPublicProfileConfig } from '@/lib/profile-config';
import MeClient from './MeClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Profile & Links',
  description: 'Official public profile and links for AVRXT.',
  keywords: ['avrxt', 'aviorxt', 'profile', 'links'],
};

export default async function HomePage() {
  const config = await getPublicProfileConfig();
  return <MeClient config={config} />;
}
