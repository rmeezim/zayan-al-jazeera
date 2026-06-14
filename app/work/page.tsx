import type { Metadata } from "next";
import { work, clients } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = createMetadata({
  title: "Our Work",
  description:
    "From retail fit-out to whole-building maintenance — the sectors Zayan Al-Jazeera delivers across Saudi Arabia, for clients including IKEA, P&G, King Abdullah Port and Saudi Air Navigation Services.",
  path: "/work",
});

const sectorVisuals = [
  { a: "interior", b: "build" },
  { a: "systems", b: "grounds" },
  { a: "systems", b: "build" },
  { a: "interior", b: "grounds" },
] as const;

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ])}
      />

      <PageHero
        eyebrow={work.hero.eyebrow}
        title={work.hero.title}
        lead={work.hero.lead}
        current="Our Work"
      />

      {/* sectors — editorial portfolio list */}
      <section className="section bg-paper" aria-labelledby="sectors-title">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <h2 id="sectors-title" className="max-w-xl text-h2">
                What we deliver
              </h2>
            </Reveal>
            <Reveal delay={0.05} className="hidden sm:block">
              <span className="font-mono text-label uppercase text-muted">
                Across the Kingdom
              </span>
            </Reveal>
          </div>

          <div className="mt-12 border-t border-ink/10">
            {work.sectors.map((sector, i) => (
              <Reveal key={sector.title} delay={i * 0.05}>
                <article className="grid gap-8 border-b border-ink/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                  <div>
                    <span className="font-mono text-label uppercase text-brand">
                      {sector.n}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-medium text-ink lg:text-3xl">
                      {sector.title}
                    </h3>
                    <p className="mt-4 max-w-md text-body">{sector.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <ArtFrame
                      motif={sectorVisuals[i].a}
                      tone={i % 2 === 0 ? "petrol" : "deep"}
                      aspect="4 / 3"
                    />
                    <ArtFrame
                      motif={sectorVisuals[i].b}
                      tone="sand"
                      aspect="4 / 3"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* honest note about case studies */}
          <Reveal>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg border border-ink/10 bg-sand-50 p-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-body">
                Detailed project case studies and on-site photography are
                available on request — tell us about your sector and we&apos;ll
                share the most relevant work.
              </p>
              <Button href="/contact" arrow>
                Request case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* clients */}
      <section className="section bg-sand" aria-labelledby="clients-title">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Selected clients</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="clients-title" className="mt-5 max-w-2xl text-h2">
              Trusted by leading operators across Saudi Arabia.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 md:grid-cols-3 lg:grid-cols-5">
            {clients.map((name) => (
              <div
                key={name}
                className="flex min-h-28 items-center justify-center bg-paper p-6 text-center font-display text-lg font-medium text-ink/80"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
