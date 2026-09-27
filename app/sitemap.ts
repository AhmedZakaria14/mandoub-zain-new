import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogPosts';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  // Reflect the site-wide content, metadata and banner update.
  const defaultDate = new Date('2026-09-27T08:54:12Z');

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
