import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://pearllab.io',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://pearllab.io/for-small-business',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://pearllab.io/estimate',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pearllab.io/work/fenceestimatepro',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pearllab.io/work/contractordocuments',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pearllab.io/work/ocala-elite-breed',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pearllab.io/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://pearllab.io/blog/why-not-wordpress',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://pearllab.io/blog/website-roi-for-small-business',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://pearllab.io/blog/how-to-get-more-clients-as-a-contractor',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
