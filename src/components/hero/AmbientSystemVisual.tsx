/**
 * AmbientSystemVisual
 * Pure SVG topology map — no JS, no animations, aria-hidden.
 * Shows: API Gateway → Kafka Event Bus → Notification Worker / SMS Delivery / Analytics
 * Plus an observability strip at the bottom.
 */
export function AmbientSystemVisual() {
  const mono = 'IBM Plex Mono, JetBrains Mono, monospace'

  return (
    <div aria-hidden="true" className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[480px]"
      >
        <defs>
          {/* Dot-grid pattern */}
          <pattern id="asv-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.65" fill="rgba(245,247,251,0.07)" />
          </pattern>

          {/* Radial mask — fade grid toward edges */}
          <radialGradient id="asv-vignette" cx="50%" cy="45%" r="52%">
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="asv-grid-mask">
            <rect width="480" height="490" fill="url(#asv-vignette)" />
          </mask>

          {/* Connection line gradient — accent fade along the path */}
          <linearGradient id="asv-line-tl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C8CFF" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#7C8CFF" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#7C8CFF" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {/* ── Background grid ─────────────────────────── */}
        <rect width="480" height="490" fill="url(#asv-grid)" mask="url(#asv-grid-mask)" />

        {/* ── Connection paths ─────────────────────────
            Routing: node bottom-center → Kafka top-corner
                     Kafka bottom-corner → node top-center
        ─────────────────────────────────────────────── */}

        {/* API Gateway (bottom cx=79, y=94) → Kafka top-left (164, 196) */}
        <path
          d="M 79 94 C 79 144 152 196 164 196"
          stroke="rgba(124,140,255,0.22)"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* SMS Delivery (bottom cx=401, y=94) → Kafka top-right (316, 196) */}
        <path
          d="M 401 94 C 401 144 328 196 316 196"
          stroke="rgba(124,140,255,0.22)"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* Kafka bottom-left (164, 250) → Notif Worker (top cx=79, y=362) */}
        <path
          d="M 164 250 C 152 250 79 330 79 362"
          stroke="rgba(124,140,255,0.22)"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* Kafka bottom-right (316, 250) → Analytics (top cx=401, y=362) */}
        <path
          d="M 316 250 C 328 250 401 330 401 362"
          stroke="rgba(124,140,255,0.22)"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />

        {/* ── Message-packet dots (one per line at ~midpoint) ── */}
        <circle cx="115" cy="152" r="2.5" fill="#7C8CFF" opacity="0.55" />
        <circle cx="365" cy="152" r="2.5" fill="#7C8CFF" opacity="0.55" />
        <circle cx="115" cy="308" r="2.5" fill="#7C8CFF" opacity="0.55" />
        <circle cx="365" cy="308" r="2.5" fill="#7C8CFF" opacity="0.55" />

        {/* ══════════════════════════════════════════════
            SERVICE NODES
        ══════════════════════════════════════════════ */}

        {/* ── API Gateway (top-left) ── */}
        {/* x=14 y=50 w=130 h=44 */}
        <rect x="14" y="50" width="130" height="44" rx="9"
          fill="#0F1623" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        {/* status dot */}
        <circle cx="30" cy="70" r="3.5" fill="#4ADE80" />
        <circle cx="30" cy="70" r="6" fill="#4ADE80" opacity="0.12" />
        {/* label */}
        <text x="43" y="67" fontFamily={mono} fontSize="10" fontWeight="500"
          fill="rgba(245,247,251,0.88)">api-gateway</text>
        <text x="43" y="82" fontFamily={mono} fontSize="9"
          fill="rgba(245,247,251,0.38)">12.4k req/s</text>

        {/* ── SMS Delivery (top-right) ── */}
        {/* x=336 y=50 w=130 h=44 */}
        <rect x="336" y="50" width="130" height="44" rx="9"
          fill="#0F1623" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <circle cx="352" cy="70" r="3.5" fill="#4ADE80" />
        <circle cx="352" cy="70" r="6" fill="#4ADE80" opacity="0.12" />
        <text x="365" y="67" fontFamily={mono} fontSize="10" fontWeight="500"
          fill="rgba(245,247,251,0.88)">sms-delivery</text>
        <text x="365" y="82" fontFamily={mono} fontSize="9"
          fill="rgba(245,247,251,0.38)">99.9% uptime</text>

        {/* ── Kafka Event Bus (center) ── */}
        {/* x=130 y=196 w=220 h=54 */}
        <rect x="130" y="196" width="220" height="54" rx="10"
          fill="#0C1222" stroke="rgba(124,140,255,0.28)" strokeWidth="1" />
        {/* accent glow behind Kafka border */}
        <rect x="130" y="196" width="220" height="54" rx="10"
          fill="none" stroke="rgba(124,140,255,0.06)" strokeWidth="8" />

        {/* KAFKA eyebrow */}
        <text x="146" y="215" fontFamily={mono} fontSize="8" fontWeight="600"
          fill="rgba(124,140,255,0.75)" letterSpacing="0.14em">KAFKA</text>
        {/* Event Bus title */}
        <text x="146" y="233" fontFamily={mono} fontSize="11" fontWeight="600"
          fill="rgba(245,247,251,0.80)">Event Bus</text>

        {/* Stream bars (throughput waveform) */}
        {/* center_y = 196+27 = 223 */}
        <rect x="292" y="219" width="5" height="8"  rx="1.5" fill="#7C8CFF" opacity="0.32" />
        <rect x="300" y="216" width="5" height="14" rx="1.5" fill="#7C8CFF" opacity="0.52" />
        <rect x="308" y="218" width="5" height="10" rx="1.5" fill="#7C8CFF" opacity="0.40" />
        <rect x="316" y="214" width="5" height="18" rx="1.5" fill="#7C8CFF" opacity="0.68" />
        <rect x="324" y="217" width="5" height="12" rx="1.5" fill="#7C8CFF" opacity="0.44" />
        <rect x="332" y="215" width="5" height="16" rx="1.5" fill="#7C8CFF" opacity="0.58" />
        <rect x="340" y="219" width="5" height="8"  rx="1.5" fill="#7C8CFF" opacity="0.30" />

        {/* ── Notification Worker (bottom-left) ── */}
        {/* x=14 y=362 w=130 h=44 */}
        <rect x="14" y="362" width="130" height="44" rx="9"
          fill="#0F1623" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <circle cx="30" cy="382" r="3.5" fill="#4ADE80" />
        <circle cx="30" cy="382" r="6" fill="#4ADE80" opacity="0.12" />
        <text x="43" y="379" fontFamily={mono} fontSize="10" fontWeight="500"
          fill="rgba(245,247,251,0.88)">notif-worker</text>
        <text x="43" y="394" fontFamily={mono} fontSize="9"
          fill="rgba(245,247,251,0.38)">10M msg/day</text>

        {/* ── Analytics (bottom-right) ── */}
        {/* x=336 y=362 w=130 h=44 */}
        <rect x="336" y="362" width="130" height="44" rx="9"
          fill="#0F1623" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        {/* warning/active status */}
        <circle cx="352" cy="382" r="3.5" fill="#FBBF24" />
        <circle cx="352" cy="382" r="6" fill="#FBBF24" opacity="0.10" />
        <text x="365" y="379" fontFamily={mono} fontSize="10" fontWeight="500"
          fill="rgba(245,247,251,0.88)">analytics</text>
        <text x="365" y="394" fontFamily={mono} fontSize="9"
          fill="rgba(245,247,251,0.38)">tracing ON</text>

        {/* ══════════════════════════════════════════════
            OBSERVABILITY PANEL
        ══════════════════════════════════════════════ */}
        {/* x=14 y=424 w=452 h=54 */}
        <rect x="14" y="424" width="452" height="54" rx="9"
          fill="#080D18" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

        {/* Panel section-divider lines */}
        <line x1="148" y1="432" x2="148" y2="470" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="282" y1="432" x2="282" y2="470" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="386" y1="432" x2="386" y2="470" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* OBSERVABILITY label */}
        <text x="26" y="438" fontFamily={mono} fontSize="8" fontWeight="500"
          fill="rgba(245,247,251,0.28)" letterSpacing="0.14em">OBSERVABILITY</text>

        {/* ─ Col 1: Throughput ─ */}
        <text x="26" y="458" fontFamily={mono} fontSize="12" fontWeight="600"
          fill="rgba(245,247,251,0.82)">10.4M</text>
        <text x="26" y="471" fontFamily={mono} fontSize="8"
          fill="rgba(245,247,251,0.35)">msg / day</text>

        {/* ─ Col 2: Availability ─ */}
        <text x="160" y="458" fontFamily={mono} fontSize="12" fontWeight="600"
          fill="#4ADE80">99.9%</text>
        <text x="160" y="471" fontFamily={mono} fontSize="8"
          fill="rgba(245,247,251,0.35)">availability</text>

        {/* ─ Col 3: MTTR ─ */}
        <text x="294" y="458" fontFamily={mono} fontSize="12" fontWeight="600"
          fill="rgba(245,247,251,0.82)">−60%</text>
        <text x="294" y="471" fontFamily={mono} fontSize="8"
          fill="rgba(245,247,251,0.35)">mttr</text>

        {/* ─ Status indicators ─ */}
        {/* healthy */}
        <circle cx="396" cy="444" r="3" fill="#4ADE80" />
        <text x="405" y="448" fontFamily={mono} fontSize="8.5"
          fill="rgba(245,247,251,0.42)">healthy</text>
        {/* tracing */}
        <circle cx="396" cy="462" r="3" fill="#7C8CFF" />
        <text x="405" y="466" fontFamily={mono} fontSize="8.5"
          fill="rgba(245,247,251,0.42)">tracing</text>
      </svg>
    </div>
  )
}
