import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogs';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  // Reflect the site-wide phone, SEO, URL and image update.
  const defaultDate = new Date('2026-08-31T00:00:00Z');

  const blogUrls = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: defaultDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: defaultDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...blogUrls,
  ];
}
