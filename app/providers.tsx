'use client'

// This file previously contained PostHog integration
// PostHog has been removed, but this file is kept for compatibility
// with any imports that might exist elsewhere in the codebase

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Simply render children without PostHog
  return <>{children}</>
}