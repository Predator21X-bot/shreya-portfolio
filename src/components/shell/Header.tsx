'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface NavLink {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  // TODO: Replace '#' with '/resume.pdf' once the file is placed in /public/
  { href: '/resume.pdf', label: 'Resume' },
]

function isLinkActive(href: string, pathname: string): boolean {
  // Anchor-only links are never "active" by route match
  if (href.startsWith('#')) return false
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll to apply backdrop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerBg = scrolled
    ? 'bg-[color:var(--color-ink)]/90 backdrop-blur-md border-b border-[color:var(--color-border)]'
    : 'bg-transparent'

  return (
    <>
      {/* ── Skip link ─────────────────────────────── */}
      <a
        href="#main-content"
        className={[
          'sr-only focus:not-sr-only',
          'focus:fixed focus:top-4 focus:left-4 focus:z-[100]',
          'focus:px-4 focus:py-2 focus:text-sm focus:font-semibold',
          'focus:rounded-[var(--radius-sm)]',
          'focus:bg-[var(--color-accent)] focus:text-[var(--color-ink)]',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2',
          'focus:ring-offset-[var(--color-ink)]',
        ].join(' ')}
      >
        Skip to main content
      </a>

      {/* ── Header bar ────────────────────────────── */}
      <header
        className={[
          'fixed top-0 inset-x-0 z-40 h-16',
          'flex items-center',
          'transition-[background-color,border-color,backdrop-filter] duration-200',
          headerBg,
        ].join(' ')}
      >
        <div className="mx-auto w-full max-w-[1200px] px-8 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Shreya — home"
            className={[
              'text-[length:var(--text-body)] font-[600] tracking-tight',
              'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]',
              'transition-colors duration-150',
              'rounded focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent)]',
            ].join(' ')}
          >
            Shreya
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isLinkActive(href, pathname)
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'relative text-[length:var(--text-small)] font-[500]',
                    'transition-colors duration-150',
                    'rounded focus-visible:outline-none focus-visible:ring-2',
                    'focus-visible:ring-[var(--color-accent)]',
                    // Active underline pseudo-element via Tailwind arbitrary
                    'after:absolute after:-bottom-[3px] after:left-0',
                    'after:h-[1.5px] after:rounded-full',
                    'after:bg-[var(--color-accent)]',
                    'after:transition-[width] after:duration-200',
                    active
                      ? 'text-[var(--color-accent)] after:w-full'
                      : [
                          'text-[var(--color-text-secondary)]',
                          'hover:text-[var(--color-text-primary)]',
                          'after:w-0 hover:after:w-full',
                        ].join(' '),
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={[
              'md:hidden flex flex-col justify-center items-center',
              'w-10 h-10 gap-[5px] rounded',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-[var(--color-accent)]',
            ].join(' ')}
          >
            <span
              className={[
                'block h-[1.5px] w-5 bg-[var(--color-text-primary)]',
                'transition-transform duration-200 origin-center',
                menuOpen ? 'translate-y-[6.5px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[1.5px] w-5 bg-[var(--color-text-primary)]',
                'transition-opacity duration-150',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[1.5px] w-5 bg-[var(--color-text-primary)]',
                'transition-transform duration-200 origin-center',
                menuOpen ? '-translate-y-[6.5px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ───────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed inset-0 z-30 md:hidden',
          'transition-opacity duration-200',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[color:var(--color-ink)]/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Nav panel */}
        <nav
          aria-label="Mobile navigation"
          className={[
            'absolute top-16 inset-x-0',
            'bg-[var(--color-surface)] border-b border-[var(--color-border)]',
            'px-8 py-6 flex flex-col gap-6',
          ].join(' ')}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active = isLinkActive(href, pathname)
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={[
                  'text-[length:var(--text-body-lg)] font-[500]',
                  'transition-colors duration-150',
                  'rounded focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[var(--color-accent)]',
                  active
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                ].join(' ')}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
