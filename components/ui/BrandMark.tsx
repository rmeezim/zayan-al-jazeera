import { cn } from "@/lib/utils";

// Brand colours from the official Zayan Al-Jazeera logo.
const LOGO_NAVY = "#003152";
const LOGO_BLUE = "#29ABE2";
const LOGO_GREY = "#808285";

/**
 * Brand mark (the Z lettermark). Interim SVG recreation — the official artwork
 * couldn't be read from the chat upload in this environment; drop the real file
 * in to public/brand/ to swap it (see GAPS.md). `white` renders the footer
 * variant.
 */
export function BrandMark({
  className,
  white = false,
}: {
  className?: string;
  white?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-10 w-10", className)}
      role="img"
      aria-label="Zayan Al-Jazeera"
    >
      {white ? (
        <>
          <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M11 10 H37 V16.5 L24.5 30 H37 V38 H11 V31.5 L23.2 18 H11 Z" fill="#fff" />
          <path d="M30 30 H38 L31 38 H23 Z" fill="#fff" />
        </>
      ) : (
        <>
          <defs>
            <linearGradient id="zaj-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3cb6ec" />
              <stop offset="1" stopColor="#1f93cf" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="46" height="46" rx="11" fill="url(#zaj-mark)" />
          <path d="M11 10 H37 V16.5 L24.5 30 H37 V38 H11 V31.5 L23.2 18 H11 Z" fill="#ffffff" />
          <path d="M30 30 H38 L31 38 H23 Z" fill={LOGO_NAVY} />
        </>
      )}
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
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark className="h-9 w-9 shrink-0" white={light} />
      <span className="flex flex-col leading-[1.06]">
        <span className="flex items-baseline gap-1.5 text-[1.02rem] font-bold tracking-tight">
          <span style={{ color: light ? "#fff" : LOGO_NAVY }}>ZAYAN</span>
          <span style={{ color: light ? "#fff" : LOGO_BLUE }}>AL-JAZEERA</span>
        </span>
        <span
          className="text-[0.56rem] font-semibold uppercase tracking-[0.24em]"
          style={{ color: light ? "rgba(255,255,255,0.7)" : LOGO_GREY }}
        >
          Company Ltd
        </span>
      </span>
    </span>
  );
}
