"use client";

import { useState } from "react";
import { Wordmark } from "./BrandMark";
import { asset, cn } from "@/lib/utils";

/**
 * Uses the official logo artwork from /public/brand when present, and falls
 * back to the in-code wordmark until those files exist (chat-uploaded images
 * can't be committed from this environment — see GAPS.md). A hidden preloader
 * swaps in the real image only once it actually loads, so there's never a
 * broken-image flash.
 */
export function Logo({
  light = false,
  imgClassName = "h-10",
  className,
}: {
  light?: boolean;
  imgClassName?: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  const src = asset(light ? "/brand/logo-white.png" : "/brand/logo.png");

  return (
    <span className={cn("inline-flex items-center", className)}>
      {ready ? (
        <img src={src} alt="Zayan Al-Jazeera" className={cn("w-auto", imgClassName)} />
      ) : (
        <Wordmark light={light} />
      )}
      {!ready && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="hidden"
          onLoad={() => setReady(true)}
        />
      )}
    </span>
  );
}
