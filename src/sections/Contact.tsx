const LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:psbksshreya@gmail.com',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreya',
    href: 'https://linkedin.com/in/shreya24',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/shreya',
    href: 'https://github.com/predator21x-bot',
    external: true,
  },
  {
    id: 'resume',
    label: 'Résumé',
    value: 'Download PDF',
    href: '/resume.pdf',
    external: false,
    download: 'Shreya_Resume.pdf',
  },
]

const INTERESTS = [
  'Backend Engineering',
  'Platform Engineering',
  'Distributed Systems',
  'Reliability Engineering',
]

// ─────────────────────────────────────────────────────────
// Arrow icon
// ─────────────────────────────────────────────────────────

function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// Link row
// ─────────────────────────────────────────────────────────

function ContactLink({
  label,
  value,
  href,
  external,
  download,
}: (typeof LINKS)[number]) {
  const rel = external ? 'noopener noreferrer' : undefined
  const target = external ? '_blank' : undefined

  return (
    <a
      href={href}
      rel={rel}
      target={target}
      download={download ?? undefined}
      className="group flex items-center justify-between gap-4 px-0 py-4 border-b transition-colors"
      style={{ borderColor: 'var(--color-border-hairline)' }}
    >
      <div className="flex flex-col gap-0.5">
        <span
          className="font-mono text-[10px] font-[500] uppercase"
          style={{ color: 'var(--color-text-disabled)', letterSpacing: '0.12em' }}
        >
          {label}
        </span>
        <span
          className="font-sans font-[400]"
          style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}
        >
          {value}
        </span>
      </div>
      <span
        className="flex items-center justify-center w-7 h-7 rounded-[7px] border transition-colors flex-shrink-0"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
        aria-hidden="true"
      >
        <ArrowUpRight />
      </span>
    </a>
  )
}

// ─────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 sm:px-8 py-24 sm:py-28 lg:py-32"
      style={{ borderTop: '1px solid var(--color-border-hairline)' }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid lg:grid-cols-2 lg:gap-24 xl:gap-32 gap-16">

          {/* ── Left: headline + copy ── */}
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-5">
              <p
                className="font-mono text-[11px] font-[500] uppercase"
                style={{ color: 'var(--color-accent)', letterSpacing: '0.18em' }}
              >
                Contact
              </p>
              <h2
                id="contact-heading"
                className="font-sans font-[600]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                }}
              >
                Let&rsquo;s build systems<br />that scale.
              </h2>
              <p
                className="font-sans font-[400] leading-relaxed"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '420px',
                }}
              >
                I&rsquo;m interested in backend engineering, distributed systems, platform engineering, and reliability-focused teams.
              </p>
            </header>

            {/* ── Primary CTA ── */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center h-11 px-6 rounded-[var(--radius-btn-primary)] font-sans font-[500] text-[14px] transition-colors"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#fff',
                  letterSpacing: '-0.005em',
                  boxShadow: '0 0 0 1px rgba(124,140,255,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/shreya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-5 rounded-[var(--radius-btn-primary)] font-sans font-[500] text-[14px] border transition-colors gap-1.5"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '-0.005em',
                }}
              >
                LinkedIn
                <ArrowUpRight />
              </a>
              <a
                href="https://github.com/shreya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-5 rounded-[var(--radius-btn-primary)] font-sans font-[500] text-[14px] border transition-colors gap-1.5"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '-0.005em',
                }}
              >
                GitHub
                <ArrowUpRight />
              </a>
            </div>

            {/* ── Currently interested in ── */}
            <div className="flex flex-col gap-3 pt-2">
              <p
                className="font-mono text-[10px] font-[600] uppercase"
                style={{ color: 'var(--color-text-muted)', letterSpacing: '0.14em' }}
              >
                Currently interested in
              </p>
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {INTERESTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-[5px] h-[5px] rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)', opacity: 0.55 }}
                    />
                    <span
                      className="font-sans font-[400]"
                      style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: link list ── */}
          <div className="flex flex-col justify-start">
            {/* Opening rule */}
            <div
              className="h-px w-full"
              style={{ backgroundColor: 'var(--color-border-hairline)' }}
              aria-hidden="true"
            />

            <nav aria-label="Contact links">
              {LINKS.map((link) => (
                <ContactLink key={link.id} {...link} />
              ))}
            </nav>

            {/* ── Footer note ── */}
            <p
              className="font-mono text-[11px] pt-6 leading-relaxed"
              style={{ color: 'var(--color-text-disabled)' }}
            >
              Based in India &mdash; open to remote and hybrid roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
