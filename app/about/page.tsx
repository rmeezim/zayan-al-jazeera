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
        aside={<ArtFrame tone="petrol" figure="ZAJ" label="Building & maintaining the Kingdom" aspect="4 / 3" />}
      />

      {/* who we are */}
      <section className="section bg-paper" aria-labelledby="who-title">
        <div className="container-page">
          <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Reveal>
                <Eyebrow>{about.intro.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="who-title" className="mt-6 text-h2">
                  {about.intro.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:pt-3">
              {about.intro.body.map((para, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className={i === 0 ? "text-lead text-ink" : "mt-6 t-body"}>{para}</p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
                  {about.competencies.map((c) => (
                    <span key={c} className="flex items-center gap-3 font-display text-lg font-medium text-ink">
                      <span className="h-1.5 w-1.5 bg-green" aria-hidden="true" />
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
              <p className="mt-7 text-lead leading-relaxed text-ink">{about.vision.body}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-lg bg-ink p-8 text-sand-50 lg:p-12">
              <span className="eyebrow eyebrow-light">{about.mission.title}</span>
              <p className="mt-7 text-lead leading-relaxed text-sand-50/90">{about.mission.body}</p>
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
            <h2 id="values-title" className="mt-6 max-w-2xl text-h2">
              The principles behind every project.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="border-t border-ink/15 pt-6">
                  <span className="label-cap text-brand">0{i + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* verified figures — airy row */}
          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-ink/10 pt-14 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div>
                  <div className="font-display text-5xl font-medium text-ink lg:text-6xl">{stat.value}</div>
                  <div className="mt-3 max-w-[18ch] text-sm leading-relaxed text-muted">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-ink/10 bg-sand-50 py-16">
        <ClientsStrip />
      </div>

      <CtaBand />
    </>
  );
}
