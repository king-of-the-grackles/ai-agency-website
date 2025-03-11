import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
# robots.txt file for buildnative.ai
User-agent: *
Allow: /

# Disallow specific routes
Disallow: /api/
Disallow: /_next/
Disallow: /error/

# Sitemap location
Sitemap: https://www.buildnative.ai/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}