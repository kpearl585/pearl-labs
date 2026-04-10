/**
 * Simple A/B Testing Utility for Pearl Labs
 *
 * Usage:
 * const variant = useABTest('hero-headline', ['control', 'variant'])
 *
 * Features:
 * - Consistent variant per user (localStorage)
 * - Simple 50/50 split
 * - Analytics tracking ready
 */

'use client'

import { useEffect, useState } from 'react'

export type ABTestVariant = string

export interface ABTestConfig {
  testId: string
  variants: string[]
  weights?: number[] // Optional: [0.5, 0.5] for 50/50
}

/**
 * Get AB test variant for a user
 * Stores in localStorage to maintain consistency
 */
export function getVariant(testId: string, variants: string[]): string {
  if (typeof window === 'undefined') {
    return variants[0] // SSR: return control
  }

  const storageKey = `ab-test-${testId}`

  // Check if user already has a variant assigned
  const stored = localStorage.getItem(storageKey)
  if (stored && variants.includes(stored)) {
    return stored
  }

  // Assign new variant (simple 50/50 split)
  const randomVariant = variants[Math.floor(Math.random() * variants.length)]
  localStorage.setItem(storageKey, randomVariant)

  // Track variant assignment (ready for analytics)
  trackABTestView(testId, randomVariant)

  return randomVariant
}

/**
 * React hook for A/B testing
 */
export function useABTest(testId: string, variants: string[]): string {
  const [variant, setVariant] = useState<string>(variants[0]) // Default to control

  useEffect(() => {
    const assignedVariant = getVariant(testId, variants)
    setVariant(assignedVariant)
  }, [testId, variants])

  return variant
}

/**
 * Track A/B test view (ready for analytics integration)
 */
function trackABTestView(testId: string, variant: string) {
  // Track with your analytics service
  // Example: analytics.track('AB Test View', { testId, variant })

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ab_test_view', {
      test_id: testId,
      variant: variant,
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[A/B Test] ${testId} → ${variant}`)
  }
}

/**
 * Track A/B test conversion (call when user converts)
 */
export function trackABTestConversion(testId: string) {
  if (typeof window === 'undefined') return

  const storageKey = `ab-test-${testId}`
  const variant = localStorage.getItem(storageKey)

  if (!variant) return

  // Track conversion with your analytics service
  if ((window as any).gtag) {
    (window as any).gtag('event', 'ab_test_conversion', {
      test_id: testId,
      variant: variant,
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[A/B Test] Conversion: ${testId} (${variant})`)
  }
}

/**
 * Force a specific variant (for testing/debugging)
 */
export function forceVariant(testId: string, variant: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`ab-test-${testId}`, variant)
  console.log(`[A/B Test] Forced ${testId} to ${variant}`)
}

/**
 * Clear all A/B test data (for testing)
 */
export function clearABTests() {
  if (typeof window === 'undefined') return
  Object.keys(localStorage)
    .filter(key => key.startsWith('ab-test-'))
    .forEach(key => localStorage.removeItem(key))
  console.log('[A/B Test] Cleared all test data')
}
