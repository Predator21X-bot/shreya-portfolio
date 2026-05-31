# Design System — Premium Engineering Portfolio

## 1) Design Principles

This system is built for a portfolio that feels precise, calm, and highly engineered.

- **Minimal**: remove anything that does not increase clarity or perceived quality.
- **Technical**: layout, rhythm, and hierarchy should feel intentional and structured.
- **Elegant**: use restraint, spacing, and subtle contrast rather than decoration.
- **Award-worthy**: every interaction should feel considered, polished, and memorable.

The visual language should communicate:
- confidence without loudness
- sophistication without friction
- depth without clutter
- motion without distraction

---

## 2) Colors

### Core palette

#### Backgrounds
- **Ink / Base**: `#0B0F17`
- **Surface / Elevated**: `#111827`
- **Surface / Raised**: `#172033`
- **Card Border**: `rgba(255,255,255,0.08)`

#### Text
- **Primary Text**: `#F5F7FB`
- **Secondary Text**: `rgba(245,247,251,0.72)`
- **Muted Text**: `rgba(245,247,251,0.48)`
- **Disabled Text**: `rgba(245,247,251,0.28)`

#### Accent
- **Primary Accent**: `#7C8CFF`
- **Primary Accent Hover**: `#95A2FF`
- **Primary Accent Soft**: `rgba(124,140,255,0.14)`
- **Success**: `#4ADE80`
- **Warning**: `#FBBF24`
- **Danger**: `#FB7185`

### Color rules
- Use one dominant accent only.
- Prefer dark surfaces with soft contrast over pure black.
- Reserve bright colors for key actions, states, or signals.
- Avoid rainbow system colors unless the interface is presenting metrics or status data.

### Semantic usage
- **Primary CTA**: accent fill
- **Secondary CTA**: transparent with subtle border
- **Interactive highlights**: accent glow at low opacity
- **System health / reliability indicators**: success and warning, used sparingly

---

## 3) Typography

### Typeface strategy
Use a **modern grotesk** for UI and a **monospace** for technical detail.

#### Primary font
- **Inter** or **Satoshi**
- Used for headings, body, labels, and interface copy

#### Technical font
- **IBM Plex Mono** or **JetBrains Mono**
- Used for code snippets, metrics, tags, timestamps, and system labels

### Type scale

| Token | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| Display | 72px | 1.0 | 600 | Hero title |
| H1 | 56px | 1.05 | 600 | Page heading |
| H2 | 40px | 1.1 | 600 | Section heading |
| H3 | 28px | 1.2 | 500 | Subsection heading |
| H4 | 20px | 1.3 | 500 | Card titles |
| Body Large | 18px | 1.6 | 400 | Intro copy |
| Body | 16px | 1.6 | 400 | Standard content |
| Small | 14px | 1.5 | 400 | Supporting text |
| Micro | 12px | 1.4 | 500 | Meta, tags, labels |
| Mono Label | 12px | 1.4 | 500 | Technical annotations |

### Typography rules
- Keep headlines short and declarative.
- Use sentence case, not all caps, except for labels and technical annotations.
- Favor tighter line length for reading comfort.
- Use monospace only for structure and credibility, not for long passages.

---

## 4) Grid System

### Layout
- **Desktop container**: `1200px` max width
- **Content padding**: `32px` desktop, `20px` tablet, `16px` mobile
- **Grid**: 12 columns on desktop, 8 columns on tablet, 4 columns on mobile

### Spacing between columns
- Desktop gutter: `24px`
- Tablet gutter: `20px`
- Mobile gutter: `16px`

### Column behavior
- Hero sections can span full width.
- Narrative sections should use a 7/5 or 8/4 split for editorial rhythm.
- Cards should align to the grid and avoid floating irregularly.
- Technical modules can use nested grids, but nesting should be visually obvious.

### Composition rules
- Use asymmetry carefully.
- Keep vertical rhythm consistent.
- Maintain strong left alignment for editorial clarity.
- Allow occasional full-bleed moments for emotional impact.

---

## 5) Spacing Scale

Use a modular scale based on 8.

| Token | Value |
|---|---:|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |
| 32 | 128px |

### Spacing rules
- Use `16–24px` for internal card padding.
- Use `48–96px` for section separation.
- Use `64px+` for hero breathing room.
- Prefer fewer, larger spacing jumps over many small irregular ones.

---

## 6) Card Design

### Card style
Cards should feel like precision instruments: quiet, structured, and premium.

#### Base card
- Background: `#111827`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: `20px`
- Shadow: soft, diffuse, low contrast
- Padding: `24px`
- Hover lift: `translateY(-2px)` with a subtle shadow increase

#### Card content structure
1. Small mono label
2. Title
3. Supporting body
4. Optional metric / tag row
5. Optional action

### Card variants
- **Standard card**: content highlight, project summary, role summary
- **Metric card**: numbers, scale indicators, availability, latency, throughput
- **Case-study card**: longer narrative, split into problem / approach / impact
- **Quote card**: recruiter or team testimonial
- **System card**: technical stack, architecture, observability, reliability

### Card rules
- Cards should never feel crowded.
- One strong idea per card.
- Use icons sparingly and only when they improve scan speed.
- Keep all card headers aligned to a consistent baseline.

---

## 7) Button Design

### Button hierarchy

#### Primary button
- Fill: accent
- Text: dark ink or white, depending on contrast
- Radius: `14px`
- Padding: `14px 18px`
- Weight: `600`
- Shadow: subtle accent glow at low opacity

#### Secondary button
- Transparent background
- Border: `1px solid rgba(255,255,255,0.12)`
- Hover: border brightens, background gains slight tint

#### Tertiary button
- Text only
- Use for inline navigation and subtle actions

### Button states
- **Default**: stable and quiet
- **Hover**: slight rise, mild background tint, border clarity increases
- **Pressed**: scale down to `0.98`
- **Focus**: visible ring in accent color
- **Disabled**: reduced opacity, no shadow

### Button rules
- Keep copy short and action-oriented.
- Use only one primary button per section.
- Never make every button look equally important.
- Button motion should feel responsive, not playful.

---

## 8) Motion Style

Motion should suggest engineering confidence: measured, smooth, and purposeful.

### Motion principles
- **Subtle over theatrical**
- **Directional over random**
- **Function-first over decorative**
- **Fast enough to feel premium, slow enough to feel deliberate**

### Timing scale
- **Micro interactions**: `120–160ms`
- **Standard transitions**: `180–240ms`
- **Section reveals**: `280–420ms`
- **Narrative moments**: `500–700ms`

### Easing
- Use a smooth ease-out curve for entrances.
- Use a slightly sharper ease-in for exits.
- Avoid bouncy or cartoon-like easing.

### Motion patterns
- **Fade + translate** for content entrance
- **Stagger** for cards and list items
- **Parallax shift** for hero layers, very subtle
- **Progressive reveal** for metrics and achievements
- **Cursor-follow glow** only if it remains restrained
- **Scroll-linked transitions** for storytelling sections, used with precision

### Motion rules
- No animation should block comprehension.
- Motion must clarify hierarchy.
- Every transition should reinforce the feeling of control.
- Reduce motion for accessibility without degrading the experience.

---

## 9) Dark Mode Rules

This system is optimized for dark mode first.

### Dark mode foundations
- Use deep blue-black surfaces instead of pure black.
- Reserve near-white text for the highest emphasis.
- Maintain enough contrast for legibility without harshness.

### Dark mode hierarchy
- Base background: very dark, slightly cool.
- Raised surfaces: one step lighter than base.
- Borders: thin, translucent, understated.
- Highlight states: soft accent tint, never neon.

### Dark mode accessibility
- Ensure text contrast remains readable at all sizes.
- Make focus states unmistakable.
- Provide enough contrast for charts, badges, and status chips.
- Avoid relying on color alone to communicate state.

### Dark mode aesthetic rules
- The interface should feel like a premium command center, not a gaming UI.
- Glows should be rare and controlled.
- Gradients should be extremely subtle.
- Imagery, if used, should be desaturated or tightly color-managed.

---

## 10) System Tokens Summary

### Radius
- Small: `12px`
- Medium: `16px`
- Large: `20px`
- XL: `28px`

### Borders
- Hairline border: `1px solid rgba(255,255,255,0.06)`
- Default border: `1px solid rgba(255,255,255,0.08)`
- Strong border: `1px solid rgba(255,255,255,0.14)`

### Shadows
- `0 10px 30px rgba(0,0,0,0.18)`
- `0 20px 60px rgba(0,0,0,0.24)`
- Accent glow: `0 0 0 1px rgba(124,140,255,0.25), 0 12px 30px rgba(124,140,255,0.12)`

### Iconography
- 1.5px or 2px stroke
- Minimal fill
- Consistent corner treatment
- Icons should support the system, not decorate it

---

## 11) Voice of the Interface

The visual system should feel like:
- a senior engineer who knows exactly what matters
- a product team that respects the user’s time
- a portfolio that can speak to recruiters, engineering managers, and founders at once

The result should communicate:
- clarity
- scale
- trust
- technical depth
- taste
