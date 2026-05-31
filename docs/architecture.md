# architecture.md

# Portfolio Architecture

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- GSAP
- MDX

## Folder Structure

```txt
src/
├── app/
├── components/
├── content/
├── lib/
├── hooks/
├── providers/
├── styles/
└── types/
```

## Routing

- /
- /projects
- /projects/[slug]
- /resume

## Animation Layer

- GSAP timelines
- ScrollTrigger
- Lazy-loaded motion modules
- Transform/opacity-only animations

## Content Layer

- MDX driven
- Content separated from UI
- Version-controlled content

## SEO Layer

- Metadata API
- Open Graph
- JSON-LD Person schema
- Sitemap
- Robots

## Performance Layer

- Static rendering
- Dynamic GSAP imports
- next/image
- AVIF/WebP
- Self-hosted fonts

## Accessibility Layer

- WCAG AA+
- Keyboard navigation
- Visible focus states
- Reduced motion support
- Semantic HTML

## Philosophy

Reliable. Observable. Fast. Scalable. Simple.
