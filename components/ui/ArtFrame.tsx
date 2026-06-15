import { cn } from "@/lib/utils";

type Tone = "petrol" | "sand" | "deep";
// `motif` kept for API compatibility; it nudges the accent placement only.
type Motif = "build" | "systems" | "interior" | "grounds";

const toneClass: Record<Tone, string> = {
  petrol: "bg-ink text-sand-50",
  deep: "bg-ink-700 text-sand-50",
  sand: "bg-sand-100 text-ink",
};

interface ArtFrameProps {
  motif?: Motif;
  tone?: Tone;
  figure?: string;
  label?: string;
  aspect?: string;
  className?: string;
}

/**
 * Editorial color plate used where a visual anchors the layout. Type-led and
 * warm — no grid, no texture. Real client photography drops into these slots
 * later (tracked in GAPS.md); until then the typographic plate reads as design,
 * not a missing image.
 */
export function ArtFrame({
  tone = "petrol",
  figure,
  label,
  aspect = "4 / 3",
  className,
}: ArtFrameProps) {
  const dark = tone !== "sand";
  const focal = figure ?? label ?? "";
  const caption = figure ? label : undefined;

  return (
    <div
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden rounded-lg p-7 sm:p-9",
        toneClass[tone],
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {/* single soft accent — one arc, no grid */}
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke={dark ? "#84C13E" : "#6FA12E"}
          strokeOpacity={dark ? "0.28" : "0.35"}
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="100"
          r="64"
          stroke={dark ? "#FAF6EE" : "#1F1A13"}
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
      </svg>

      {caption && (
        <span
          className={cn(
            "absolute left-7 top-7 text-label font-semibold uppercase tracking-[0.14em] sm:left-9 sm:top-9",
            dark ? "text-sand-50/55" : "text-ink/45",
          )}
        >
          {caption}
        </span>
      )}

      <div className="relative">
        <div
          className={cn(
            "font-display font-semibold leading-[0.95]",
            figure ? "text-[clamp(3.5rem,9vw,6rem)]" : "text-[clamp(1.6rem,3vw,2.4rem)]",
            dark ? "text-sand-50" : "text-ink",
          )}
        >
          {focal}
        </div>
        <span className="mt-5 block h-px w-12 bg-green" aria-hidden="true" />
      </div>
    </div>
  );
}
