import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  light = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow", light && "eyebrow-light", className)}>
      {children}
    </span>
  );
}
