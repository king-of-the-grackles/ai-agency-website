import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export const metadata = {
  title: "Page Not Found | Native AI",
  description: "We couldn't find the page you're looking for. Navigate back to continue your AI journey with Native AI.",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Page Not Found | Native AI",
    description: "We couldn't find the page you're looking for. Navigate back to continue your AI journey with Native AI.",
    url: "https://www.buildnative.ai/404",
    images: [{
      url: "https://www.buildnative.ai/api/og-image",
      width: 1200,
      height: 630,
      alt: "Native AI - Page Not Found"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Native AI",
    description: "We couldn't find the page you're looking for. Navigate back to continue your AI journey with Native AI.",
    images: ["https://www.buildnative.ai/api/og-image"]
  }
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-6 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="flex items-center gap-2">
        <Link href="/">
          <Home className="h-4 w-4" />
          Return to home
        </Link>
      </Button>
    </div>
  )
}