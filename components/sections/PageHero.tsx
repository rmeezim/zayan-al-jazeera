import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  current: string;
  aside?: ReactNode;
}

export function PageHero({ eyebrow, title, lead, current, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-sand-50 pb-section-sm pt-[calc(var(--header-h)+3rem)]">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider text-muted">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-ink">{current}</li>
          </ol>
        </nav>

        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-4xl text-h1">{title}</h1>
            </Reveal>
            {lead && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-lead text-muted">{lead}</p>
              </Reveal>
            )}
          </div>
          {aside && (
            <Reveal delay={0.15} className="hidden lg:block">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
