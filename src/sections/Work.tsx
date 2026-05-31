interface Metric {
  value: string
  label: string
}

interface ArchLayer {
  label: string
  items: string[]
}

const AIRTEL_METRICS: Metric[] = [
  { value: '10M+', label: 'Messages per day' },
  { value: '99.9%', label: 'Availability' },
  { value: '−60%', label: 'Mean time to resolve' },
  { value: '3', label: 'Core microservices' },
]

const AIRTEL_STACK: ArchLayer[] = [
  { label: 'Services', items: ['Java / Spring Boot', 'Golang', 'REST + async gRPC'] },
  { label: 'Messaging', items: ['Apache Kafka', 'Consumer groups', 'Dead-letter queues'] },
  { label: 'Observability', items: ['Grafana', 'Kibana / ELK', 'Distributed tracing'] },
  { label: 'Reliability', items: ['Circuit breakers', 'Retry + backoff', 'Fault isolation'] },
]

const AMEX_METRICS: Metric[] = [
  { value: '+18%', label: 'Onboarding conversion' },
  { value: '−40%', label: 'Query latency' },
  { value: '3×', label: 'Automation coverage' },
]

const AMEX_STACK: ArchLayer[] = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs'] },
  { label: 'Data', items: ['Query optimisation', 'Redis caching', 'DB indexing'] },
  { label: 'Automation', items: ['AI-assisted pipeline', 'Workflow automation', 'Batch processing'] },
]

// ─────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────

function MonoTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center h-6 px-2 rounded-[5px] border font-mono text-[10px] font-[500]"
      style={{
        color: 'var(--color-text-muted)',
        borderColor: 'var(--color-border)',
        backgroundColor: 'rgba(255,255,255,0.025)',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </span>
  )
}

function MetricCard({ value, label }: Metric) {
  return (
    <div
      className="flex flex-col gap-1 px-5 py-4 rounded-[var(--radius-lg)] border"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <span
        className="font-mono font-[600] tabular-nums leading-none"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-accent)' }}
      >
        {value}
      </span>
      <span
        className="font-sans font-[400]"
        style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}

function ArchGrid({ layers }: { layers: ArchLayer[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {layers.map((layer) => (
        <div
          key={layer.label}
          className="flex flex-col gap-2 px-4 py-4 rounded-[var(--radius-md)] border"
          style={{
            borderColor: 'var(--color-border-hairline)',
            backgroundColor: 'rgba(255,255,255,0.015)',
          }}
        >
          <p
            className="font-mono text-[10px] font-[600] uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.14em' }}
          >
            {layer.label}
          </p>
          <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
            {layer.items.map((item) => (
              <li
                key={item}
                className="font-sans font-[400]"
                style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

interface CaseStudyProps {
  index: string
  company: string
  role: string
  period: string
  tag: string
  problem: string
  approach: string
  metrics: Metric[]
  stack: ArchLayer[]
  flagship?: boolean
}

function CaseStudy({
  index,
  company,
  role,
  period,
  tag,
  problem,
  approach,
  metrics,
  stack,
  flagship,
}: CaseStudyProps) {
  return (
    <article
      aria-labelledby={`case-${index}-heading`}
      className="flex flex-col gap-8 px-6 py-8 sm:px-8 sm:py-10 rounded-[var(--radius-xl)] border"
      style={{
        borderColor: flagship ? 'rgba(124,140,255,0.18)' : 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        boxShadow: flagship ? 'var(--shadow-md)' : 'none',
      }}
    >
      {/* ── Header ── */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <MonoTag>{tag}</MonoTag>
          {flagship && (
            <span
              className="inline-flex items-center h-6 px-2 rounded-[5px] font-mono text-[10px] font-[600]"
              style={{
                backgroundColor: 'var(--color-accent-soft)',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
              }}
            >
              Flagship project
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3
            id={`case-${index}-heading`}
            className="font-sans font-[600]"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              letterSpacing: '-0.015em',
              color: 'var(--color-text-primary)',
            }}
          >
            {company}
          </h3>
          <span
            className="font-mono text-[11px]"
            style={{ color: 'var(--color-text-muted)', letterSpacing: '0.02em' }}
          >
            {period}
          </span>
        </div>

        <p
          className="font-sans font-[400]"
          style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}
        >
          {role}
        </p>
      </header>

      {/* ── Divider ── */}
      <hr style={{ borderColor: 'var(--color-border-hairline)', margin: 0 }} />

      {/* ── Narrative: Problem + Approach ── */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <p
            className="font-mono text-[10px] font-[600] uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.14em' }}
          >
            Problem
          </p>
          <p
            className="font-sans font-[400] leading-relaxed"
            style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}
          >
            {problem}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className="font-mono text-[10px] font-[600] uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.14em' }}
          >
            Approach
          </p>
          <p
            className="font-sans font-[400] leading-relaxed"
            style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}
          >
            {approach}
          </p>
        </div>
      </div>

      {/* ── Impact metrics ── */}
      <div className="flex flex-col gap-3">
        <p
          className="font-mono text-[10px] font-[600] uppercase"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
        >
          Impact
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </div>

      {/* ── Architecture / Stack ── */}
      <div className="flex flex-col gap-3">
        <p
          className="font-mono text-[10px] font-[600] uppercase"
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
        >
          Architecture
        </p>
        <ArchGrid layers={stack} />
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="px-6 sm:px-8 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-16">

        {/* ── Section header ── */}
        <header className="flex flex-col gap-4 max-w-[520px]">
          <p
            className="font-mono text-[11px] font-[500] uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.18em' }}
          >
            Work
          </p>
          <h2
            id="work-heading"
            className="font-sans font-[600]"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            Systems built for production scale.
          </h2>
          <p
            className="font-sans font-[400]"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
            }}
          >
            Résumé bullets converted into engineering narrative.
          </p>
        </header>

        {/* ── Case studies ── */}
        <div className="flex flex-col gap-6">

          {/* Airtel — flagship */}
          <CaseStudy
            flagship
            index="airtel"
            company="Airtel Digital"
            role="Software Development Engineer — Distributed Systems"
            period="2023 – Present"
            tag="SDE · Full-time"
            problem="A high-volume SMS and notification platform serving millions of users needed to scale from synchronous point-to-point delivery to a fault-tolerant, observable async pipeline — without downtime or message loss."
            approach="Re-architected the delivery layer around Kafka-backed event streams. Separated producer, routing, and delivery worker services into independent Java and Golang microservices. Added circuit breakers, dead-letter queues, and distributed tracing across the full pipeline."
            metrics={AIRTEL_METRICS}
            stack={AIRTEL_STACK}
          />

          {/* American Express */}
          <CaseStudy
            index="amex"
            company="American Express"
            role="Software Development Engineer Intern — Backend"
            period="2022"
            tag="SDE Intern"
            problem="Onboarding flows suffered from slow query paths and manual handoff steps, causing measurable drop-off in user conversion and high manual overhead for ops teams."
            approach="Optimised critical query paths with targeted indexing and Redis caching. Designed an AI-assisted automation pipeline to eliminate manual steps in the onboarding workflow, and refactored the backend for cleaner separation of concerns."
            metrics={AMEX_METRICS}
            stack={AMEX_STACK}
          />

        </div>
      </div>
    </section>
  )
}
