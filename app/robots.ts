import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://battlexclash.online/sitemap.xml',
    host: 'https://battlexclash.online',
  }
}
