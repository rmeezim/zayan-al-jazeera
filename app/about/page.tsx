import type { Metadata } from "next";
import { about, values, stats } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia, with over a decade of experience in construction, renovation, fit-out and maintenance. Read our vision and mission.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        lead={about.hero.lead}
        current="About"
        aside={
          <ArtFrame motif="build" tone="petrol" figure="ZAJ" label="Est. in construction" aspect="4 / 3" />
        }
      />

      {/* who we are */}
      <section className="section bg-paper" aria-labelledby="who-title">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>{about.intro.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="who-title" className="mt-5 text-h2">
                  {about.intro.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:pt-2">
              {about.intro.body.map((para, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className={i === 0 ? "text-lead text-ink" : "mt-5 text-body"}>
                    {para}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  {about.competencies.map((c) => (
                    <span
                      key={c}
                      className="flex items-center gap-2.5 font-display text-lg font-medium text-ink"
                    >
                      <span className="h-2 w-2 bg-green" aria-hidden="true" />
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* vision + mission */}
      <section className="section bg-sand" aria-label="Vision and mission">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-lg border border-ink/10 bg-paper p-8 lg:p-12">
              <Eyebrow>{about.vision.title}</Eyebrow>
              <p className="mt-6 text-lead leading-relaxed text-ink">
                {about.vision.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-ink p-8 text-paper grain lg:p-12">
              <div className="absolute inset-0 blueprint-light opacity-[0.05]" aria-hidden="true" />
              <span className="eyebrow eyebrow-light relative">{about.mission.title}</span>
              <p className="relative mt-6 text-lead leading-relaxed text-paper/90">
                {about.mission.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="section bg-paper" aria-labelledby="values-title">
        <div className="container-page">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="values-title" className="mt-5 max-w-2xl text-h2">
              The principles behind every project.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="flex h-full flex-col bg-paper p-7">
                  <span className="font-mono text-label text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* verified figures */}
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="h-full bg-sand-50 p-7">
                  <div className="font-display text-4xl font-semibold text-ink">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm text-muted">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-ink/10 bg-paper py-14">
        <ClientsStrip />
      </div>

      <CtaBand />
    </>
  );
}
