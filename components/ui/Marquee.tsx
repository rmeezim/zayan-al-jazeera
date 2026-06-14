import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Pure-CSS infinite marquee; the track is duplicated for a seamless loop. */
export function Marquee({
  children,
  speed = "40s",
  className,
}: {
  children: ReactNode;
  speed?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-marquee items-center motion-reduce:animate-none"
        style={{ ["--mq" as string]: speed }}
      >
        <div className="flex shrink-0 items-center" aria-hidden="false">
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
