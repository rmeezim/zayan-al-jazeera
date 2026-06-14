import { cn } from "@/lib/utils";

/** Inline brand mark (the Z lettermark) — no external file, so it is
 *  immune to base-path issues and always crisp. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-10 w-10", className)}
      role="img"
      aria-label="Zayan Al-Jazeera"
    >
      <defs>
        <linearGradient id="zaj-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3cb2e7" />
          <stop offset="1" stopColor="#1480b6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="11" fill="url(#zaj-mark)" />
      <path
        d="M11 10 H37 V16.5 L24.5 30 H37 V38 H11 V31.5 L23.2 18 H11 Z"
        fill="#ffffff"
      />
      <path d="M30 30 H38 L31 38 H23 Z" fill="#84c13e" />
    </svg>
  );
}

export function Wordmark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-display font-semibold tracking-tight",
        className,
      )}
    >
      <BrandMark className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className={cn("text-[1.05rem]", light ? "text-paper" : "text-ink")}>
          ZAYAN
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-medium tracking-[0.22em]",
            light ? "text-muted-ondark" : "text-muted",
          )}
        >
          AL-JAZEERA
        </span>
      </span>
    </span>
  );
}
