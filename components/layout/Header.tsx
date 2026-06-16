"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, contact } from "@/content/site-content";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        scrolled || open
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0",
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="Zayan Al-Jazeera — home" className="shrink-0">
          <Logo imgClassName="h-12" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
                isActive(item.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" arrow className="hidden sm:inline-flex">
            Get a quote
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded border border-ink/15 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-full bg-ink transition-transform duration-300",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-full bg-ink transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-full bg-ink transition-transform duration-300",
                  open && "top-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[var(--header-h)] z-40 origin-top bg-paper transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col gap-1 pt-6"
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-display text-2xl font-medium text-ink"
            >
              <span className="font-mono text-sm text-brand">
                0{i + 1}
              </span>
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-2">
            <Button href="/contact" arrow size="lg">
              Get a quote
            </Button>
            <a
              href={contact.phoneHref}
              className="py-2 text-center font-mono text-sm text-muted"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
