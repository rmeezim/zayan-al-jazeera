"use client";

import { useState } from "react";
import { asset } from "@/lib/utils";

/**
 * Right-quarter hero backdrop that sits BEHIND the hero content. Uses
 * /public/images/hero.jpg when present; until then a soft warm gradient shows
 * (chat-uploaded images can't be committed from this environment — see
 * GAPS.md). Heavily faded into the cream so headline/stats stay legible and the
 * image never covers more than the right edge. Desktop only.
 */
export function HeroBackdrop() {
  const [ready, setReady] = useState(false);
  const src = asset("/images/hero.jpg");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
    >
      {ready ? (
        <img src={src} alt="" className="h-full w-full object-cover opacity-90" />
      ) : (
        <div className="h-full w-full bg-gradient-to-bl from-sand-300/70 via-sand-200/30 to-transparent" />
      )}
      {/* fade into the cream so it reads as a right-edge accent, not a panel */}
      <div className="absolute inset-0 bg-gradient-to-r from-sand-50 via-sand-50/60 to-sand-50/15" />
      {!ready && (
        <img src={src} alt="" className="hidden" onLoad={() => setReady(true)} />
      )}
    </div>
  );
}
