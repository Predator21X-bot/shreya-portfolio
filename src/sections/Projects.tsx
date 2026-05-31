import React from 'react'

interface Project {
  index: string
  title: string
  summary: string
  stack: string[]
  highlights: string[]
  githubHref: string
  tag: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'MudraKosh',
    tag: 'Full-stack · AI-enabled',
    summary:
      'A production-minded personal finance platform with an AI-assisted workflow for automated categorisation, budget forecasting, and spending analysis. Hackathon finalist.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'REST'],
    highlights: [
      'AI categorisation pipeline reduces manual tagging to near zero',
      'Forecasting engine trained on rolling transaction windows',
      'Finalist recognition — shipped under 36-hour hackathon constraint',
    ],
    githubHref: '#',
  },
  {
    index: '02',
    title: 'CoWorkNet',
    tag: 'Distributed · Real-time',
    summary:
      'A scalable collaboration platform supporting real-time presence, channel-based messaging, and concurrent document editing. Designed for horizontal scaling from day one.',
    stack: ['Java', 'Spring Boot', 'WebSockets', 'Redis Pub/Sub', 'PostgreSQL'],
    highlights: [
      'WebSocket gateway handles concurrent sessions without shared state',
      'Redis Pub/Sub fan-out decouples presence from message delivery',
      'Stateless service design allows linear horizontal scaling',
    ],
    githubHref: '#',
  },
  {
    index: '03',
    title: 'Admission Smart Bot',
    tag: 'NLP · Automation',
    summary:
      'An NLP-driven conversational assistant that automates admissions enquiry handling — intent classification, entity extraction, and structured response generation — reducing manual response load.',
    stack: ['Python', 'spaCy', 'FastAPI', 'NLTK', 'SQLite'],
    highlights: [
      'Intent classifier handles 15+ admission query categories',
      'Entity extraction surfaces course, date, and eligibility signals',
      'REST API backend plugs into existing institutional web infrastructure',
    ],
    githubHref: '#',
  },
]

// ─────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────

function StackChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center h-6 px-2 rounded-[5px] border font-mono text-[10px] font-[500]"
      style={{
        color: 'var(--color-text-muted)',
        borderColor: 'var(--color-border)',
        backgroundColor: 'rgba(255,255,255,0.025)',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ index, title, tag, summary, stack, highlights, githubHref }: Project) {
  return (
    <article
      aria-labelledby={`project-${index}-heading`}
      className="flex flex-col gap-5 px-5 py-6 rounded-[var(--radius-lg)] border"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      {/* ── Header ── */}
      <header className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span
              className="font-mono text-[10px] font-[500]"
              style={{ color: 'var(--color-text-disabled)', letterSpacing: '0.06em' }}
              aria-hidden="true"
            >
              {index}
            </span>
            <h3
              id={`project-${index}-heading`}
              className="font-sans font-[600]"
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
                letterSpacing: '-0.012em',
                lineHeight: '1.2',
                color: 'var(--color-text-primary)',
              }}
            >
              {title}
            </h3>
          </div>

          {/* GitHub link */}
          <a
            href={githubHref}
            aria-label={`View ${title} on GitHub`}
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[8px] border transition-colors"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
          >
            {/* GitHub icon */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>

        <span
          className="inline-flex self-start items-center h-5 px-2 rounded-[4px] font-mono text-[10px] font-[500]"
          style={{
            backgroundColor: 'rgba(124,140,255,0.08)',
            color: 'var(--color-accent)',
            letterSpacing: '0.04em',
          }}
        >
          {tag}
        </span>
      </header>

      {/* ── Summary ── */}
      <p
        className="font-sans font-[400] leading-relaxed"
        style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}
      >
        {summary}
      </p>

      {/* ── Highlights ── */}
      <ul className="flex flex-col gap-2 list-none m-0 p-0">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="flex-shrink-0 mt-[5px] w-[5px] h-[5px] rounded-full"
              style={{ backgroundColor: 'var(--color-accent)', opacity: 0.55 }}
            />
            <span
              className="font-sans font-[400]"
              style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}
            >
              {h}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Stack chips ── */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {stack.map((s) => (
          <StackChip key={s} label={s} />
        ))}
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 sm:px-8 py-20 sm:py-24 lg:py-28"
      style={{ borderTop: '1px solid var(--color-border-hairline)' }}
    >
      <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-12">

        {/* ── Section header ── */}
        <header className="flex flex-col gap-3 max-w-[480px]">
          <p
            className="font-mono text-[11px] font-[500] uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.18em' }}
          >
            Projects
          </p>
          <h2
            id="projects-heading"
            className="font-sans font-[600]"
            style={{
              fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.018em',
              color: 'var(--color-text-primary)',
            }}
          >
            Labs, experiments, and shipped things.
          </h2>
          <p
            className="font-sans font-[400]"
            style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}
          >
            Proof-of-range beyond enterprise work — full-stack, distributed, and applied AI.
          </p>
        </header>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.index} {...p} />
          ))}
        </div>

      </div>
    </section>
  )
}
