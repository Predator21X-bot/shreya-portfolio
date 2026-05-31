/**
 * BackgroundSystem — fixed, full-viewport ambient background layer.
 * Pure CSS: no JavaScript, no interactivity.
 * aria-hidden so screen readers skip it entirely.
 */
export function BackgroundSystem() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(245,247,251,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top accent glow */}
      <div
        className="absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(124,140,255,0.07), transparent)',
        }}
      />

      {/* Bottom vignette to ground the page */}
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            'linear-gradient(to top, rgba(11,15,23,0.6), transparent)',
        }}
      />
    </div>
  )
}
