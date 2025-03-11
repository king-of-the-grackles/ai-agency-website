import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.buildnative.ai';
  
  // Get the current date in the required format for the sitemap
  const date = new Date().toISOString();
  
  // Define your site URLs
  const urls = [
    {
      url: '/',
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/#why-us',
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: '/#services',
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: '/#journey',
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: '/#about',
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7
    },
  ];

  // Generate the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
  <url>
    <loc>${baseUrl}${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}