import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost" | "ghost-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  "aria-label"?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  "ghost-light": "btn-ghost-light",
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...rest
}: ButtonProps) {
  const cls = cn(
    "btn group",
    variantClass[variant],
    size === "lg" && "btn-lg",
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    const external = href.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={cls} {...external} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
