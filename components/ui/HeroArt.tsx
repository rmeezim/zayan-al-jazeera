import { cn } from "@/lib/utils";

/**
 * Signature hero visual — an architectural blueprint composition in the brand
 * palette. Self-contained SVG (no external image), so it is crisp, fast and
 * never broken. The animated datum line is handled by the hero section.
 */
export function HeroArt({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 grain",
        className,
      )}
    >
      <div className="absolute inset-0 blueprint-light opacity-40" aria-hidden="true" />
      {/* warm glow */}
      <div
        className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-bright/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-green/15 blur-3xl"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 600 620"
        className="relative h-full w-full"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* main tower */}
        <g stroke="#9bd3f0" strokeOpacity="0.55" strokeWidth="1.3">
          <rect x="300" y="150" width="170" height="380" />
          <g strokeOpacity="0.32">
            <path d="M300 200h170M300 250h170M300 300h170M300 350h170M300 400h170M300 450h170M300 500h170" />
            <path d="M342 150v380M385 150v380M428 150v380" />
          </g>
        </g>
        {/* secondary block */}
        <g stroke="#9bd3f0" strokeOpacity="0.5" strokeWidth="1.3">
          <rect x="470" y="270" width="100" height="260" />
          <g strokeOpacity="0.28">
            <path d="M470 320h100M470 370h100M470 420h100M470 470h100M520 270v260" />
          </g>
        </g>
        {/* podium with scaffold (green) */}
        <g stroke="#84c13e" strokeOpacity="0.6" strokeWidth="1.3">
          <rect x="190" y="360" width="110" height="170" />
          <g strokeOpacity="0.45">
            <path d="M190 400h110M190 440h110M190 480h110M227 360v170M263 360v170" />
          </g>
        </g>
        {/* tower crane */}
        <g stroke="#c7e9fa" strokeOpacity="0.6" strokeWidth="1.2">
          <path d="M385 150V40M210 80h350M210 80l175-40M560 80l-175-40M250 80v26M250 106h34" />
          <circle cx="385" cy="40" r="4" fill="#84c13e" stroke="none" />
        </g>
        {/* ground + dimension line */}
        <g stroke="#84c13e" strokeOpacity="0.75" strokeWidth="1.3">
          <path d="M150 560h420M150 550v20M385 550v20M570 550v20" />
        </g>
        <g stroke="#9bd3f0" strokeOpacity="0.25" strokeWidth="1">
          <path d="M40 590h520" strokeDasharray="2 9" />
        </g>
      </svg>

      {/* technical labels */}
      <span className="absolute left-5 top-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/55">
        Fig. 01 — Built environment
      </span>
      <span className="absolute bottom-5 right-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-green/80">
        Scale 1:200
      </span>
    </div>
  );
}
