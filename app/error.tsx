'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-6 text-center max-w-md">
        We apologize for the inconvenience. Please try refreshing the page.
      </p>
      <Button onClick={reset} variant="default" className="flex items-center gap-2">
        <RefreshCcw className="h-4 w-4" />
        Try again
      </Button>
    </div>
  )
}