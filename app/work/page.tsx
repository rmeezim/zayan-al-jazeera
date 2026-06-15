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
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Our Work",
  description:
    "From retail fit-out to whole-building maintenance — the sectors Zayan Al-Jazeera delivers across Saudi Arabia, for clients including IKEA, P&G, King Abdullah Port and Saudi Air Navigation Services.",
  path: "/work",
});

const tones = ["petrol", "deep", "sand", "petrol"] as const;

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

      {/* sectors — editorial list */}
      <section className="section bg-paper" aria-labelledby="sectors-title">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 id="sectors-title" className="max-w-xl text-h2">
                What we deliver
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="label-cap">Across the Kingdom</span>
            </Reveal>
          </div>

          <div className="mt-16 space-y-16 lg:space-y-24">
            {work.sectors.map((sector, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={sector.title} delay={0.04}>
                  <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className={cn(reversed && "lg:order-2")}>
                      <ArtFrame
                        tone={tones[i]}
                        figure={sector.n}
                        label={sector.title}
                        aspect="3 / 2"
                      />
                    </div>
                    <div className={cn(reversed && "lg:order-1")}>
                      <span className="label-cap text-brand">Sector {sector.n}</span>
                      <h3 className="mt-4 text-h3 lg:text-[2rem]">{sector.title}</h3>
                      <p className="mt-5 max-w-md t-body">{sector.desc}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* honest note about case studies */}
          <Reveal>
            <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-lg border border-ink/10 bg-sand-50 p-8 sm:flex-row sm:items-center lg:p-10">
              <p className="max-w-xl t-body">
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

      {/* clients — airy */}
      <section className="section bg-sand" aria-labelledby="clients-title">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Selected clients</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="clients-title" className="mt-6 max-w-2xl text-h2">
              Trusted by leading operators across Saudi Arabia.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10 border-t border-ink/15 pt-12 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((name) => (
              <div key={name} className="font-display text-xl font-medium text-ink/75 lg:text-2xl">
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
