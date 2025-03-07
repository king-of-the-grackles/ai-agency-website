import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

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