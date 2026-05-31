# Motion Specification — Premium Distributed Systems Portfolio

**Theme:** Distributed Systems Engineer  
**Motion references:** Stripe-level polish, Linear-level restraint, DontBoardMe-style narrative energy  
**Motion goal:** make the portfolio feel alive, credible, and quietly premium without ever becoming flashy

---

## 1) Motion Principles

Motion should behave like an observability layer: always useful, never decorative for its own sake.

### Principles
- **Purpose first** — every motion must clarify hierarchy, state, or story.
- **Calm confidence** — transitions should feel smooth, controlled, and technically precise.
- **Asynchronous feel** — not everything should animate at once; staggered reveals should suggest distributed work being processed.
- **Premium restraint** — subtle transforms, soft easing, and short durations create polish.
- **Narrative continuity** — scrolling should feel like advancing through a system, not jumping between sections.

### Emotional target
The interface should feel:
- reliable
- intelligent
- responsive
- engineered
- memorable

---

## 2) Global Motion Language

### Default behavior
Use motion sparingly, but with high fidelity.

- Prefer **opacity + y-transform** for entrance animations.
- Use **scale** only for micro-interactions, not for large layout movements.
- Avoid excessive rotation, bounce, or elastic effects.
- Let movement suggest **flow**, **state changes**, and **cause/effect**.

### Motion hierarchy
1. **Page load / hero reveal** — strongest motion moment.
2. **Section entry** — guided scroll-based reveals.
3. **Component state changes** — cards, buttons, tags, and metrics.
4. **Ambient motion** — background grids, traces, and subtle data pulses.
5. **Microinteractions** — hover, focus, and press feedback.

### Character
- **Stripe-inspired**: fluid, modern, elegant
- **Linear-inspired**: crisp, minimal, efficient
- **DontBoardMe-inspired**: storytelling-led with a high emotional ceiling

---

## 3) Hero Animations

The hero should feel like the system is booting into a live state.

### Sequence
1. **Background wake-up**
   - Soft gradient or grid fades in first.
   - Ambient lines or nodes begin moving at low opacity.

2. **Title reveal**
   - Main headline enters with a gentle upward motion.
   - Use staggered line-by-line reveal if the title is multiline.
   - Keep the title reveal confident, not theatrical.

3. **Support copy and metric chips**
   - Secondary text and proof points appear after the headline with a short stagger.
   - Metrics should settle into place with subtle motion that implies precision.

4. **CTA reveal**
   - Primary and secondary buttons arrive last.
   - Buttons should feel like they are ready to be acted on, not popping into view.

### Recommended hero timings
- Background fade: `600–900ms`
- Headline reveal: `700–900ms`
- Supporting copy: `500–700ms`
- Metric chips: `450–650ms`
- CTA entry: `350–500ms`

### Hero motion notes
- Use opacity from `0 → 1`
- Use y from `16 → 0`
- Use scale from `0.98 → 1` only for small elements
- Delay between staggered items: `80–120ms`

---

## 4) Scroll Animations

Scroll motion should feel like moving through layers of a distributed system.

### Section reveal
Each section should enter with one of three patterns:
- **Fade + lift** for editorial blocks
- **Slide + mask** for case studies and narratives
- **Staggered children** for stats, cards, and lists

### Recommended scroll behavior
- Use `ScrollTrigger` to pin only where it improves story clarity.
- Avoid over-pinning; the page should remain breathable.
- Trigger reveals as sections hit `70–80%` of viewport height.
- Keep reveal durations short so scrolling never feels delayed.

### Scroll choreography
- Headings appear first.
- Supporting text follows.
- Cards and metrics animate in staggered waves.
- Diagrams or architecture visuals can animate last, as the “system becoming visible.”

### Suggested timings
- Section fade in: `500–700ms`
- Staggered content entry: `40–90ms` between items
- Visual diagrams: `700–1200ms`
- Parallax drift: extremely subtle, `8–24px` over an entire viewport

### Scroll rules
- Never make the user wait for motion to finish before continuing.
- Motion should complement the scroll, not compete with it.
- Use fewer, stronger moments rather than constant movement.

---

## 5) Timeline Animations

The timeline is one of the best places to express distributed systems thinking.

### Visual idea
A timeline should feel like an event stream:
- events are emitted
- processed
- acknowledged
- resolved

### Interaction pattern
As the user scrolls through experience or project history:
- the vertical line draws itself progressively
- nodes activate one by one
- each card expands with a soft reveal
- side details slide in asynchronously

### Timeline states
- **Inactive** — subdued node, minimal contrast
- **Current** — active node with glow or pulse
- **Completed** — stable node with a faint trace line
- **Expandable** — hover or click reveals deeper detail

### Timeline timings
- Line draw: `900–1400ms`
- Node activation: `200–350ms`
- Card reveal: `500–700ms`
- Detail expansion: `250–400ms`

### Timeline motion notes
- Use motion to communicate order and causality.
- Make the current node visibly alive.
- Keep completed items calm and settled.

---

## 6) Project Animations

Project sections should feel like product demos, not portfolio tiles.

### Entry behavior
Each project should animate as a small system reveal:
1. project title enters
2. supporting description appears
3. tech stack chips follow
4. metrics animate in
5. supporting visual or diagram fades in last

### Project card interactions
- Hover should slightly raise the card and increase border clarity.
- A subtle spotlight or glow can track the cursor at low intensity.
- Expanding a project should animate the content height smoothly.
- Images, diagrams, or architecture blocks should crossfade rather than swap abruptly.

### Recommended timings
- Card hover lift: `180–240ms`
- Card expand/collapse: `280–420ms`
- Image crossfade: `250–400ms`
- Metric count-up: `700–1000ms`

### Project storytelling motion
Use motion to distinguish:
- **problem**
- **approach**
- **impact**

Each step should reveal in sequence so the user feels the structure of the work.

---

## 7) Hover Interactions

Hover states should feel responsive and exact, like an engineering tool reacting to input.

### Buttons
- Slight rise: `translateY(-1px to -2px)`
- Border becomes clearer
- Background tint deepens softly
- Press state compresses gently to `scale(0.98)`

### Cards
- Border brightens a little
- Shadow becomes a touch more visible
- Inner content does not shift
- Optional sheen or cursor-follow glow should remain subtle

### Links and text actions
- Underlines or strokes can animate in from left to right
- Arrow icons can move `2–4px` on hover
- Hover should confirm interactivity, not announce it loudly

### Chips / tags
- Small lift or color shift
- No bounce
- Keep the timing short and crisp

### Hover timing
- Default hover response: `120–180ms`
- Return to rest state: `160–220ms`

---

## 8) Page Transitions

Page transitions should feel like moving between states in one system, not navigating to a different site.

### Principles
- Keep transitions lightweight.
- Preserve spatial memory.
- Avoid full-screen wipes unless used once as a deliberate signature moment.
- Maintain continuity of background and grid whenever possible.

### Recommended transition patterns
#### A. Shared background continuity
The background persists while content crossfades and shifts slightly.

#### B. Soft route fade
- Outgoing page fades to `0`
- Incoming page fades from `0`
- Minimal vertical movement keeps continuity

#### C. Directional slide for section jumps
Use only when jumping between major sections or anchored states.

### Transition timings
- Route fade out: `180–240ms`
- Route fade in: `220–320ms`
- Shared element transform: `300–500ms`

### Transition rules
- Never leave the user in a blank state.
- Keep the transition shorter than the user expects.
- Maintain the same rhythm across desktop and mobile.

---

## 9) GSAP Recommendations

GSAP should be the primary motion engine for this site.

### Recommended stack
- **GSAP** for core animation sequencing
- **ScrollTrigger** for reveal and pin-based storytelling
- **SplitText** or a manual splitter for headline line/word animation
- **Observer** only if using controlled gesture-driven moments
- **Flip** if layout transitions involve rearranging cards or grid states

### Best uses for GSAP
- hero sequencing
- scroll-triggered reveal
- timeline drawing
- card state transitions
- route-level shared element motion
- count-up metrics
- staggered list reveals

### Implementation guidance
- Use timelines for choreography, not isolated tweens.
- Prefer declarative animation groups for maintainability.
- Store duration and easing tokens centrally.
- Reduce animation complexity on lower-end devices.

### Suggested GSAP structure
- `introTimeline`
- `sectionRevealTimeline`
- `timelineTimeline`
- `projectCardTimeline`
- `routeTransitionTimeline`

### Motion debugging rules
- Ensure only one major scroll sequence runs per section.
- Prevent overlapping triggers from fighting each other.
- Clean up scroll triggers on route changes.

---

## 10) Durations

Use a tight, system-like duration scale.

| Token | Duration | Use |
|---|---:|---|
| Instant | 0ms | No-motion states, reduced motion fallback |
| XS | 120ms | Hover, focus, small toggles |
| SM | 180ms | Buttons, badges, icon motion |
| MD | 240ms | Card hover, small UI state changes |
| LG | 360ms | Expand/collapse, project details |
| XL | 520ms | Section reveals |
| 2XL | 700ms | Hero and major storytelling moments |
| 3XL | 1000ms+ | Ambient intro visuals, line drawing, count-up moments |

### Timing rule
No motion should feel slow unless it is intentionally narrating a large system change.

---

## 11) Easing

Use easing to communicate control.

### Primary easings
- **Standard entrance:** `power3.out`
- **Fast interactive motion:** `power2.out`
- **Soft editorial reveal:** `expo.out` or a gentle custom curve
- **Exit motion:** `power2.inOut`
- **Line drawing / progressive reveal:** `power1.out` or `power2.inOut`

### Suggested easing behavior by component
- **Hero text:** smooth and confident
- **Cards:** crisp and short
- **Page transitions:** calm and unobtrusive
- **Ambient motion:** very soft, almost floating
- **Metric counters:** linear or gently eased, never bouncy

### Avoid
- overly elastic curves
- exaggerated overshoot
- bouncy ease on professional content
- long ease-out tails that make the UI feel sluggish

---

## 12) Accessibility

Accessibility is not a fallback; it is part of the motion design.

### Reduced motion
Support `prefers-reduced-motion` with a meaningful experience:
- remove parallax
- disable large transforms
- replace staggered movement with opacity fades
- avoid pinned scroll sequences
- keep state changes immediate and readable

### Minimum requirements
- All animations must preserve content readability.
- Motion must never be the only cue for state or meaning.
- Focus states must be visible and distinct.
- Interactive motion should never cause layout shifts.
- Respect user preference on motion intensity.

### Accessibility rules
- Keep durations short enough to avoid vestibular strain.
- Never use flashing or rapid repetition.
- Avoid motion on essential copy if it interferes with reading.
- Ensure contrast remains stable throughout transitions.

### Reduced motion mapping
- Hero sequence → instant reveal or a single fade
- Scroll reveals → static presentation
- Timeline draw → simple opacity state
- Hover effects → minimal color/border change only
- Page transitions → crossfade only

---

## 13) Motion Do / Don’t

### Do
- choreograph sections like a system trace
- animate in a strict hierarchy
- make motion feel useful
- keep the experience quiet and premium
- use the fewest possible moving parts

### Don’t
- overuse parallax
- bounce everything
- stack too many simultaneous animations
- animate for novelty
- make motion slower than the user’s intent

---

## 14) Final Motion Personality

This site should move like a production system with excellent instrumentation:
- fast where it should be fast
- steady where trust matters
- expressive where story matters
- invisible where clarity matters

The result should feel premium, technical, and alive.
