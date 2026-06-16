"use client";

import { useState } from "react";
import { asset, cn } from "@/lib/utils";

/**
 * Right-quarter hero backdrop behind the hero content. The warm gradient is
 * always present (graceful base); the photo loads on top and is heavily faded
 * into the cream so the headline/stats stay legible. Desktop only.
 */
export function HeroBackdrop({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const src = asset("/images/hero.jpg");

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block",
        className,
      )}
    >
      {/* warm gradient base (shows if the photo is missing/slow) */}
      <div className="absolute inset-0 bg-gradient-to-bl from-sand-300/70 via-sand-200/30 to-transparent" />
      {!failed && (
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
      )}
      {/* fade into the cream so it reads as a right-edge accent, not a panel */}
      <div className="absolute inset-0 bg-gradient-to-r from-sand-50 via-sand-50/60 to-sand-50/15" />
    </div>
  );
}
