'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { AmbientSystemVisual } from '@/src/components/hero/AmbientSystemVisual'
import { buildHeroReveal } from '@/src/animations/heroReveal'

interface MetricItem {
  value: string
  label: string
  mono?: boolean
}

const METRICS: MetricItem[] = [
  { value: '10M+', label: 'Messages Daily' },
  { value: '99.9%', label: 'Availability' },
  { value: 'Kafka • Golang • Java • Reliability Engineering', label: '', mono: true },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    buildHeroReveal()
  }, { scope: containerRef, dependencies: [] })

  return (
    <section
      ref={containerRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex flex-col min-h-[calc(100svh-4rem)] px-6 sm:px-8"
    >
      {/* Constrained inner row — text left, visual right */}
      <div className="mx-auto w-full max-w-[1200px] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 xl:gap-24 lg:items-center">

        {/* ── Left: full vertical stack ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <p
            data-hero-eyebrow
            className="font-mono text-[11px] font-[500] uppercase mb-8 sm:mb-10"
            style={{
              color: 'var(--color-accent)',
              letterSpacing: '0.18em',
            }}
          >
            Distributed Systems Engineer
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            data-hero-headline
            className="font-sans font-[600]"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
              lineHeight: '1.02',
              letterSpacing: '-0.025em',
              color: 'var(--color-text-primary)',
              maxWidth: '560px',
            }}
          >
            I build systems that continue to perform when scale stops being theoretical.
          </h1>

          {/* Supporting paragraph */}
          <p
            data-hero-paragraph
            className="font-sans font-[400] mt-7 sm:mt-8"
            style={{
              fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
              maxWidth: '480px',
            }}
          >
            Designing event-driven architectures, reliable messaging platforms, and observable
            microservices that process millions of events every day.
          </p>

          {/* ── Metric row ── */}
          <div
            className="mt-14 sm:mt-16 flex flex-wrap items-center gap-2"
            aria-label="Key metrics"
          >
            {METRICS.map((metric) =>
              metric.mono ? (
                /* Stack chip */
                <span
                  key={metric.value}
                  data-hero-chip
                  className="inline-flex items-center h-7 px-2.5 rounded-md border"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-text-muted)',
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {metric.value}
                </span>
              ) : (
                /* Stat chip */
                <span
                  key={metric.value}
                  data-hero-chip
                  className="inline-flex items-center gap-2 h-7 px-2.5 rounded-md border"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span
                    className="font-mono font-[500] tabular-nums"
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-accent)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {metric.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="block h-3 w-px"
                    style={{ backgroundColor: 'var(--color-border-strong)' }}
                  />
                  <span
                    className="font-sans font-[400]"
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {metric.label}
                  </span>
                </span>
              )
            )}
          </div>

          {/* ── CTAs ── */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* Primary */}
            <Link
              data-hero-cta
              href="/#work"
              className="inline-flex items-center justify-center h-11 px-5 font-sans font-[600] text-[14px] tracking-[-0.005em] rounded-[10px] transition-colors duration-150 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-ink)] shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_8px_24px_-8px_rgba(124,140,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)] focus-visible:ring-[var(--color-accent)]"
            >
              View Work
            </Link>

            {/* Secondary */}
            <a
              data-hero-cta
              href="/resume.pdf"
              download="Shreya_Resume.pdf"
              className="inline-flex items-center justify-center h-11 px-5 font-sans font-[500] text-[14px] tracking-[-0.005em] rounded-[10px] border border-white/[0.10] hover:border-white/[0.22] transition-colors duration-150 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-transparent hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)] focus-visible:ring-[var(--color-accent)]"
            >
              Download Résumé
            </a>
          </div>

        </div>

        {/* ── Right: ambient system visual (desktop only) ── */}
        <div data-hero-visual className="hidden lg:block">
          <AmbientSystemVisual />
        </div>

      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--color-ink))',
        }}
      />
    </section>
  )
}

