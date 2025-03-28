'use client'

import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            We apologize for the inconvenience. A critical error has occurred.
          </p>
          <Button onClick={reset} variant="default" className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4" />
            Try again
          </Button>
        </div>
      </body>
    </html>
  )
}