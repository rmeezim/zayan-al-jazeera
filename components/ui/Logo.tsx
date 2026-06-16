"use client";

import { useState } from "react";
import { Wordmark } from "./BrandMark";
import { asset, cn } from "@/lib/utils";

/**
 * Renders the official logo from /public/images. Falls back to the in-code
 * wordmark only if the image genuinely fails to load (onError).
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
  const [failed, setFailed] = useState(false);

  if (failed) return <Wordmark light={light} className={className} />;

  const src = asset(light ? "/images/zaj-logo-white.png" : "/images/zaj-logo.png");

  return (
    <img
      src={src}
      alt="Zayan Al-Jazeera"
      onError={() => setFailed(true)}
      className={cn("w-auto", imgClassName, className)}
    />
  );
}
