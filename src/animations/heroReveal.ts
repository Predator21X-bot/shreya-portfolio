import gsap from 'gsap'

/**
 * Builds a one-shot hero reveal timeline.
 * Call this inside a useGSAP callback scoped to the hero container.
 *
 * Elements are targeted via data attributes:
 *   data-hero-eyebrow   — role label
 *   data-hero-headline  — h1
 *   data-hero-paragraph — supporting copy
 *   data-hero-chip      — metric chips (multiple)
 *   data-hero-cta       — CTA buttons (multiple)
 *   data-hero-visual    — topology visual wrapper
 *
 * Total sequence: ~850ms
 */
export function buildHeroReveal(): gsap.core.Timeline {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', force3D: true } })

  if (reduced) {
    // Instantly surface everything — no motion
    tl.set(
      '[data-hero-eyebrow],[data-hero-headline],[data-hero-paragraph],[data-hero-chip],[data-hero-cta],[data-hero-visual]',
      { opacity: 1, y: 0 },
    )
    return tl
  }

  // ── 1. Set initial hidden state before first paint ──────────────────────
  tl.set(
    '[data-hero-eyebrow],[data-hero-headline],[data-hero-paragraph],[data-hero-chip],[data-hero-cta],[data-hero-visual]',
    { opacity: 0 },
  )
  tl.set('[data-hero-eyebrow]', { y: 8 })
  tl.set('[data-hero-headline],[data-hero-paragraph]', { y: 18 })
  tl.set('[data-hero-chip],[data-hero-cta]', { y: 8 })
  // visual: opacity only, no y shift

  // ── 2. Reveal sequence ───────────────────────────────────────────────────
  tl
    // Eyebrow: t=0
    .to('[data-hero-eyebrow]', { opacity: 1, y: 0, duration: 0.38 }, 0)
    // Headline: t=80ms
    .to('[data-hero-headline]', { opacity: 1, y: 0, duration: 0.55 }, 0.08)
    // Paragraph: t=280ms
    .to('[data-hero-paragraph]', { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.28)
    // Metric chips staggered: t=490ms
    .to('[data-hero-chip]', { opacity: 1, y: 0, duration: 0.32, stagger: 0.055 }, 0.49)
    // CTAs staggered: t=660ms
    .to('[data-hero-cta]', { opacity: 1, y: 0, duration: 0.28, stagger: 0.08 }, 0.66)
    // Topology visual: t=720ms
    .to('[data-hero-visual]', { opacity: 1, duration: 0.38, ease: 'power2.out' }, 0.72)

  return tl
}
