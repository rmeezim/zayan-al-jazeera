"use client";

import { useState } from "react";
import { asset, cn } from "@/lib/utils";
import { ArtFrame } from "./ArtFrame";

/**
 * Hero visual slot. Uses /public/images/hero.jpg when present; until then it
 * shows an editorial plate fallback (chat-uploaded images can't be committed
 * from this environment — see GAPS.md). A hidden preloader swaps the photo in
 * only once it loads, so there's never a broken-image flash.
 */
export function HeroImage({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const src = asset("/images/hero.jpg");

  return (
    <div className={cn("relative", className)}>
      {ready ? (
        <img
          src={src}
          alt="Contemporary architecture and construction by Zayan Al-Jazeera"
          className="h-full w-full rounded-lg object-cover"
        />
      ) : (
        <ArtFrame
          tone="petrol"
          label="Building the Kingdom"
          aspect="auto"
          className="h-full min-h-[360px]"
        />
      )}
      {!ready && (
        <img src={src} alt="" aria-hidden="true" className="hidden" onLoad={() => setReady(true)} />
      )}
    </div>
  );
}
