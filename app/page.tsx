import Link from "next/link";
import type { Metadata } from "next";
import { home, stats, services } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/layout/JsonLd";
import { servicesLd } from "@/lib/jsonld";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Reveal } from "@/components/motion/Reveal";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = createMetadata({
  title:
    "Zayan Al-Jazeera | Facility Management, Construction & Fit-Out in Saudi Arabia",
  description:
    "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia — full-service construction, renovation, fit-out and building maintenance delivered end-to-end by one accountable team.",
  path: "/",
});

export default function HomePage() {
  const { hero, intro, servicesIntro } = home;

  return (
    <>
      <JsonLd data={servicesLd()} />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-sand-50 pb-14 pt-[calc(var(--header-h)+2rem)]">
        <HeroBackdrop />
        <div className="container-page relative grid w-full items-end gap-x-16 gap-y-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-7 text-display">{hero.title}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-lead text-muted">{hero.lead}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={hero.primaryCta.href} size="lg" arrow>
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* stats anchored to the bottom-right, level with the CTA baseline */}
          <Reveal delay={0.22}>
            <div className="grid w-full grid-cols-2">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    i < 2 ? "border-b border-ink/15 pb-6" : "pt-6",
                    i % 2 === 0 ? "border-r border-ink/15 pr-6" : "pl-6 text-right",
                  )}
                >
                  <div className="font-display text-4xl font-medium text-ink lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-paper py-12">
        <ClientsStrip />
      </div>

      {/* ============ INTRO / WELCOME ============ */}
      <section className="section bg-paper" aria-labelledby="intro-title">
        <div className="container-page">
          <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Reveal>
                <Eyebrow>{intro.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="intro-title" className="mt-6 text-h2">
                  {intro.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:pt-3">
              {intro.body.map((para, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className={i === 0 ? "text-lead text-ink" : "mt-6 t-body"}>
                    {para}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.24}>
                <Link href={intro.cta.href} className="link-arrow mt-9 inline-flex">
                  <span className="underline-grow">{intro.cta.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="section bg-sand" aria-labelledby="services-title">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>{servicesIntro.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="services-title" className="mt-6 text-h2">
                  {servicesIntro.title}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="t-body lg:pb-2">{servicesIntro.lead}</p>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-ink/15">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid items-baseline gap-4 border-b border-ink/15 py-9 transition-colors sm:grid-cols-[auto_1fr_auto] sm:gap-10"
                >
                  <span className="label-cap text-brand">{service.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-brand lg:text-[2rem]">
                      {service.short}
                    </h3>
                    <p className="mt-4 max-w-2xl t-body">{service.summary}</p>
                  </div>
                  <span
                    className="hidden self-center text-2xl text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CtaBand />
    </>
  );
}
