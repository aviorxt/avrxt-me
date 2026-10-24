import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://me.avrxt.dev',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }];
}
