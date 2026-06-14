import Link from "next/link";
import type { Metadata } from "next";
import { home, stats, services } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { servicesLd } from "@/lib/jsonld";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroArt } from "@/components/ui/HeroArt";
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
      <section className="relative overflow-hidden bg-sand-50 pb-section pt-[calc(var(--header-h)+3.5rem)]">
        <div
          className="pointer-events-none absolute inset-0 blueprint opacity-[0.04]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-display">
                  We are a{" "}
                  <span className="border-b-[6px] border-green pb-1">
                    full-service
                  </span>{" "}
                  renovation company.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-xl text-lead text-muted">{hero.lead}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href={hero.primaryCta.href} size="lg" arrow>
                    {hero.primaryCta.label}
                  </Button>
                  <Button
                    href={hero.secondaryCta.href}
                    variant="ghost"
                    size="lg"
                  >
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <HeroArt className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]" />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-paper py-12">
        <ClientsStrip />
      </div>

      {/* ============ INTRO / WELCOME ============ */}
      <section className="section bg-paper" aria-labelledby="intro-title">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>{intro.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="intro-title" className="mt-5 text-h2">
                  {intro.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:pt-2">
              {intro.body.map((para, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p
                    className={i === 0 ? "text-lead text-ink" : "mt-5 text-body"}
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={0.24}>
                <Link
                  href={intro.cta.href}
                  className="link-arrow mt-8 inline-flex"
                >
                  <span className="underline-grow">{intro.cta.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            </div>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="h-full bg-paper p-7">
                  <div className="font-display text-4xl font-semibold text-ink lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm text-muted">{stat.label}</div>
                </div>
              </Reveal>
            ))}
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
                <h2 id="services-title" className="mt-5 text-h2">
                  {servicesIntro.title}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-body lg:pb-2">{servicesIntro.lead}</p>
            </Reveal>
          </div>

          <div className="mt-12 border-t border-ink/10">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid items-start gap-4 border-b border-ink/10 py-8 transition-colors hover:bg-paper/60 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-4"
                >
                  <span className="font-mono text-label uppercase text-brand">
                    {service.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink lg:text-3xl">
                      {service.short}
                    </h3>
                    <p className="mt-3 max-w-2xl text-body">{service.summary}</p>
                  </div>
                  <span
                    className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-green group-hover:bg-green sm:flex"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
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
