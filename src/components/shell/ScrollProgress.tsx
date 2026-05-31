'use client'

import { useScrollProgress } from '@/src/hooks/useScrollProgress'

/**
 * Thin accent-colored bar fixed at the very top of the viewport.
 * Uses scaleX (transform-origin: left) for GPU-composited animation.
 */
export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 will-change-transform"
      style={{
        transform: `scaleX(${progress})`,
        backgroundColor: 'var(--color-accent)',
        boxShadow: '0 0 8px rgba(124,140,255,0.5)',
      }}
    />
  )
}
