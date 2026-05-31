# component-inventory.md

# Component Inventory

## 1. Hero

### Purpose
Establish the first emotional and technical impression. Communicate identity, scale, and the core theme of message delivery immediately.

### Components
- HeroShell
- NameLockup
- RoleSubtitle
- MetricRow
- PrimaryCTA
- SecondaryCTA
- AmbientSystemVisual

### Animations
- Initial fade and vertical reveal
- Metrics count-up
- Subtle ambient motion in the background
- CTA hover lift and glow
- Title glyph stagger

### Responsive Behavior
- Desktop: split layout with text and ambient visual
- Tablet: stacked but balanced composition
- Mobile: single-column with reduced visual density

### Accessibility Requirements
- Single semantic `h1`
- Clear CTA focus states
- Contrast-compliant typography
- Reduced motion fallback for all entrance effects

### Technical Complexity
High

### Dependencies
- GSAP
- ScrollTrigger
- Next.js layout
- Tailwind tokens

---

## 2. Student

### Purpose
Introduce the origin story. Show early curiosity, learning, and the foundation that led to systems thinking.

### Components
- TimelineNode
- EducationCard
- LearningBadge
- ContextPanel
- JourneyConnector

### Animations
- Timeline draw-in
- Card reveal on scroll
- Connector line progression
- Small state changes on hover

### Responsive Behavior
- Desktop: vertical timeline with side context
- Tablet: compressed timeline with shared columns
- Mobile: stacked narrative cards

### Accessibility Requirements
- Section heading linked with `aria-labelledby`
- Logical reading order
- Keyboard-accessible cards
- Motion disabled for timeline draws when reduced motion is enabled

### Technical Complexity
Medium

### Dependencies
- MDX content
- GSAP timeline
- Tailwind grid utilities

---

## 3. Hackathons

### Purpose
Show proof of speed, experimentation, collaboration, and execution under pressure.

### Components
- ChallengeCard
- OutcomeStat
- EventRibbon
- ProjectThumbnail
- RecognitionStrip

### Animations
- Staggered card entrance
- Counter animation for results
- Hover expansion on recognition items
- Quick snap transitions between projects

### Responsive Behavior
- Desktop: masonry-style grid
- Tablet: two-column grid
- Mobile: single-column stack with compact cards

### Accessibility Requirements
- Descriptive labels for achievement metrics
- Focus-visible states on cards and links
- Non-motion fallback for counter values
- Sufficient spacing for touch targets

### Technical Complexity
Medium

### Dependencies
- MDX
- Card component system
- Icon set
- GSAP stagger utilities

---

## 4. American Express

### Purpose
Turn the internship into a clear product and engineering case study centered on performance, automation, and workflow design.

### Components
- CaseStudyHeader
- ProblemPanel
- ApproachPanel
- ImpactPanel
- WorkflowDiagram
- KPIList

### Animations
- Problem → approach → impact reveal sequence
- Diagram line tracing
- KPI count-up
- Card transitions synced to scroll position

### Responsive Behavior
- Desktop: three-panel case study layout
- Tablet: two-panel layout with stacked support content
- Mobile: sequential sections with simplified diagram

### Accessibility Requirements
- Headings in correct hierarchy
- Diagram must have accessible text alternatives
- KPI values must remain readable without animation
- Focus order must follow narrative order

### Technical Complexity
High

### Dependencies
- MDX
- ScrollTrigger
- Data-driven KPI component
- SVG or CSS diagram layer

---

## 5. Airtel

### Purpose
Present the flagship production-scale distributed systems story. This is the strongest proof of reliability, observability, and scale.

### Components
- FlagshipCaseStudy
- SystemMetricBanner
- ArchitectureMap
- MessageFlowVisual
- ObservabilityTiles
- ReliabilityHighlights

### Animations
- Streaming data effect
- Message packets moving through a pipeline
- Architecture map node activation
- Metrics increment on reveal
- Subtle pulse states for observability components

### Responsive Behavior
- Desktop: immersive split layout with visual system map
- Tablet: stacked architecture and metrics
- Mobile: compact narrative with simplified live system visual

### Accessibility Requirements
- Clear semantic structure for the case study
- Static text alternative for all animated system visuals
- Avoid motion dependence for understanding the story
- High contrast for metric values and labels

### Technical Complexity
Very High

### Dependencies
- GSAP
- ScrollTrigger
- SVG/CSS visual system
- MDX
- performance-aware animation budget

---

## 6. Future

### Purpose
Communicate ambition, direction, and the type of problems the engineer wants to solve next.

### Components
- FutureStatement
- InterestTags
- AspirationCard
- ContactPrompt
- FinalCTA

### Animations
- Soft reveal with slower pacing
- Gentle parallax or background drift
- CTA emphasis on hover
- Closing fade-out to leave a strong afterimage

### Responsive Behavior
- Desktop: centered closing composition
- Tablet: compact manifesto style
- Mobile: vertical stack with large touch targets

### Accessibility Requirements
- CTA labels must be explicit
- Text must remain readable at all breakpoints
- Motion reduced to static fade for users who prefer less motion
- Clear keyboard navigation to final actions

### Technical Complexity
Low to Medium

### Dependencies
- Tailwind
- CTA components
- Contact section
- Final motion tokens

---

## 7. Global Shell

### Purpose
Provide a consistent frame across the entire experience.

### Components
- Header
- Navigation
- ScrollProgress
- Footer
- BackgroundSystem
- ThemeLayer

### Animations
- Progress indicator updates
- Nav underline motion
- Background drift
- Footer reveal

### Responsive Behavior
- Desktop: persistent navigation and progress state
- Tablet: condensed navigation
- Mobile: minimal nav with accessible menu behavior

### Accessibility Requirements
- Skip link
- Keyboard navigable menu
- Visible focus ring
- Color contrast compliance
- No motion-only cues for navigation state

### Technical Complexity
High

### Dependencies
- Next.js App Router
- Theme tokens
- Shared layout components
- GSAP for controlled ambient motion
