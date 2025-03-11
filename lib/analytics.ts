import posthog from 'posthog-js';

/**
 * Track a custom event with PostHog
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  // Only track if PostHog is available (client-side)
  if (typeof window !== 'undefined' && posthog.isFeatureEnabled?.('capture-events') !== false) {
    posthog.capture(eventName, properties);
  }
}

/**
 * Identify a user with PostHog
 * @param id The user's ID
 * @param properties Optional properties to include with the identification
 */
export function identifyUser(id: string, properties?: Record<string, any>): void {
  if (typeof window !== 'undefined') {
    posthog.identify(id, properties);
  }
}

/**
 * Reset the current user's identity and create a new anonymous one
 */
export function resetUser(): void {
  if (typeof window !== 'undefined') {
    posthog.reset();
  }
}