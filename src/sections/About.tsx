const PRINCIPLES = [
  {
    number: '01',
    title: 'Reliability by design.',
    body: 'Failure modes are requirements, not afterthoughts. Every system I build starts with the assumption that dependencies will degrade, traffic will spike, and the network will lie. Fault tolerance is not bolted on — it is structural.',
  },
  {
    number: '02',
    title: 'Observability first.',
    body: 'A system you cannot see is a system you cannot trust. Tracing, structured logging, and alert thresholds are part of the definition of done — not cleanup work. Reduced MTTR is a design outcome, not an incident retrospective.',
  },
  {
    number: '03',
    title: 'Scale through simplicity.',
    body: 'Complexity compounds. The systems that hold under pressure are the ones with clear boundaries, minimal coupling, and obvious ownership. Adding capacity should be a deployment event, not an architectural crisis.',
  },
]

function Principle({
  number,
  title,
  body,
}: (typeof PRINCIPLES)[number]) {
  return (
    <article className="flex flex-col gap-4">
      {/* ── Rule ── */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: 'var(--color-border-hairline)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 pt-1">
        {/* Number */}
        <p
          className="font-mono font-[600] tabular-nums"
          style={{
            fontSize: '11px',
            color: 'var(--color-accent)',
            letterSpacing: '0.1em',
            paddingTop: '3px',
          }}
          aria-hidden="true"
        >
          {number}
        </p>

        {/* Body */}
        <div className="flex flex-col gap-2.5">
          <h3
            className="font-sans font-[600]"
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.1875rem)',
              letterSpacing: '-0.012em',
              lineHeight: '1.25',
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </h3>
          <p
            className="font-sans font-[400] leading-relaxed"
            style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
            }}
          >
            {body}
          </p>
        </div>
      </div>
    </article>
  )
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 sm:px-8 py-24 sm:py-28 lg:py-32"
      style={{ borderTop: '1px solid var(--color-border-hairline)' }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24 xl:gap-32 gap-16">

          {/* ── Left: heading + philosophy ── */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <header className="flex flex-col gap-4">
              <p
                className="font-mono text-[11px] font-[500] uppercase"
                style={{ color: 'var(--color-accent)', letterSpacing: '0.18em' }}
              >
                About
              </p>
              <h2
                id="about-heading"
                className="font-sans font-[600]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                }}
              >
                Most applications work.
              </h2>
            </header>

            <div className="flex flex-col gap-4">
              <p
                className="font-sans font-[400] leading-relaxed"
                style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}
              >
                Few continue working when traffic spikes, dependencies fail, and millions of events compete for attention.
              </p>
              <p
                className="font-sans font-[400] leading-relaxed"
                style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}
              >
                My work focuses on designing distributed systems that remain reliable under pressure — event-driven architectures, observable microservices, and messaging infrastructure that holds at scale.
              </p>
            </div>

            {/* ── Signal bar ── */}
            <div className="flex flex-col gap-2 pt-2">
              {[
                { label: 'Reliability', width: '92%' },
                { label: 'Observability', width: '88%' },
                { label: 'Distributed systems', width: '95%' },
                { label: 'Ownership', width: '100%' },
              ].map(({ label, width }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span
                      className="font-mono text-[10px] font-[500]"
                      style={{ color: 'var(--color-text-muted)', letterSpacing: '0.04em' }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: 'var(--color-text-disabled)' }}
                    >
                      {width}
                    </span>
                  </div>
                  <div
                    className="h-[2px] w-full rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--color-border-hairline)' }}
                    role="presentation"
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width,
                        backgroundColor: 'var(--color-accent)',
                        opacity: 0.55,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: principles ── */}
          <div className="flex flex-col gap-8">
            <p
              className="font-mono text-[10px] font-[600] uppercase"
              style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
            >
              Engineering principles
            </p>

            <div className="flex flex-col gap-8">
              {PRINCIPLES.map((p) => (
                <Principle key={p.number} {...p} />
              ))}

              {/* ── Closing rule ── */}
              <div
                className="h-px w-full"
                style={{ backgroundColor: 'var(--color-border-hairline)' }}
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
