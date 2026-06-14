import { cn } from "@/lib/utils";

type Tone = "petrol" | "sand" | "deep";
type Motif = "build" | "systems" | "interior" | "grounds";

const toneClass: Record<Tone, string> = {
  petrol: "bg-gradient-to-br from-ink-700 to-ink-900 text-paper",
  deep: "bg-gradient-to-br from-ink-600 to-ink-800 text-paper",
  sand: "bg-gradient-to-br from-sand-50 to-sand-200 text-ink",
};

function Motif({ motif }: { motif: Motif }) {
  const common = "absolute inset-0 h-full w-full";
  switch (motif) {
    case "build":
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1">
            <rect x="210" y="70" width="110" height="180" />
            <path d="M210 100h110M210 130h110M210 160h110M210 190h110M210 220h110M247 70v180M283 70v180" strokeOpacity="0.3" />
            <rect x="320" y="130" width="60" height="120" />
            <path d="M320 160h60M320 190h60M320 220h60M350 130v120" strokeOpacity="0.3" />
            <rect x="150" y="160" width="60" height="90" />
            <path d="M150 190h60M150 220h60M180 160v90" strokeOpacity="0.3" />
          </g>
          <g stroke="#84c13e" strokeOpacity="0.8" strokeWidth="1.1">
            <path d="M265 70V28M150 50h230M150 50l115-22M380 50l-115-22M170 50v18M170 68h26" />
            <circle cx="265" cy="28" r="3" fill="#84c13e" />
          </g>
          <g stroke="#84c13e" strokeOpacity="0.7" strokeWidth="1">
            <path d="M150 268h230M150 260v16M265 260v16M380 260v16" />
          </g>
        </svg>
      );
    case "systems":
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.1">
            <rect x="60" y="70" width="80" height="46" rx="4" />
            <rect x="250" y="70" width="80" height="46" rx="4" />
            <rect x="155" y="200" width="90" height="50" rx="4" />
            <path d="M100 116v52h100M300 116v52H200M200 168v32" />
            <path d="M140 93h110" strokeDasharray="5 6" />
          </g>
          <g fill="#84c13e" fillOpacity="0.85">
            <circle cx="100" cy="168" r="3.5" />
            <circle cx="300" cy="168" r="3.5" />
            <circle cx="200" cy="200" r="3.5" />
          </g>
          <g stroke="#1E90C9" strokeOpacity="0.7" strokeWidth="1.2">
            <path d="M40 140h360" strokeDasharray="2 8" />
          </g>
        </svg>
      );
    case "interior":
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.1">
            <rect x="70" y="60" width="260" height="180" />
            <path d="M70 150h120M190 60v90" />
            <rect x="92" y="170" width="70" height="46" rx="2" />
            <rect x="220" y="92" width="80" height="34" rx="2" />
            <path d="M190 240a40 40 0 0 0 40-40" strokeOpacity="0.4" />
          </g>
          <g stroke="#84c13e" strokeOpacity="0.8" strokeWidth="1.1">
            <path d="M70 268h120M70 260v16M190 260v16" />
            <circle cx="300" cy="200" r="14" strokeOpacity="0.6" />
          </g>
        </svg>
      );
    case "grounds":
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1">
            <path d="M0 210C90 180 150 230 210 200s130-40 190-10" />
            <path d="M0 240C90 210 150 260 210 230s130-40 190-10" strokeOpacity="0.3" />
            <path d="M0 180C90 150 150 200 210 170s130-40 190-10" strokeOpacity="0.25" />
          </g>
          <g stroke="#84c13e" strokeOpacity="0.85" strokeWidth="1.2">
            <path d="M120 200v-46M120 165l16-12M120 175l-16-12" />
            <path d="M285 178v-40M285 150l14-10M285 160l-14-10" />
            <circle cx="120" cy="150" r="3" fill="#84c13e" />
            <circle cx="285" cy="135" r="3" fill="#84c13e" />
          </g>
        </svg>
      );
  }
}

interface ArtFrameProps {
  motif?: Motif;
  tone?: Tone;
  figure?: string;
  label?: string;
  aspect?: string;
  className?: string;
}

/**
 * Art-directed visual placeholder used in image slots. Designed to look
 * intentional (editorial blueprint), not "missing image". Real client
 * photography drops into these slots later (tracked in GAPS.md).
 */
export function ArtFrame({
  motif = "build",
  tone = "petrol",
  figure,
  label,
  aspect = "4 / 3",
  className,
}: ArtFrameProps) {
  const isDark = tone !== "sand";
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-lg",
        toneClass[tone],
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-[0.5]",
          isDark ? "blueprint-light" : "blueprint",
        )}
        aria-hidden="true"
      />
      <Motif motif={motif} />
      {figure && (
        <span
          className="absolute bottom-4 left-5 font-display text-6xl font-semibold leading-none opacity-15"
          aria-hidden="true"
        >
          {figure}
        </span>
      )}
      {label && (
        <span
          className={cn(
            "absolute right-5 top-4 font-mono text-[0.65rem] uppercase tracking-[0.16em]",
            isDark ? "text-paper/60" : "text-ink/50",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
