import type { Metadata } from "next";
import { services, faqs } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { servicesLd, breadcrumbLd, faqLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Services — Construction, Maintenance & Soft Services",
  description:
    "Three integrated divisions across Saudi Arabia: construction, refurbishment & fit-out; building maintenance, PPM & MEP; and specialized soft services including cleaning, landscaping and pest control.",
  path: "/services",
});

const motifs = ["build", "systems", "grounds"] as const;
const tones = ["petrol", "deep", "sand"] as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...servicesLd(),
          faqLd(faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="What we do"
        title="Three divisions. One accountable team."
        lead="Build it, maintain it, keep it running. Our construction, maintenance and soft-services teams are fully coordinated — so there are no gaps and no finger-pointing between trades."
        current="Services"
      />

      {services.map((service, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={cn(
              "section scroll-mt-24",
              i % 2 === 0 ? "bg-paper" : "bg-sand-50",
            )}
            aria-labelledby={`${service.slug}-title`}
          >
            <div className="container-page">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn(reversed && "lg:order-2")}>
                  <ArtFrame
                    motif={motifs[i]}
                    tone={tones[i]}
                    figure={service.n}
                    label={service.short}
                    aspect="5 / 4"
                  />
                </Reveal>

                <div className={cn(reversed && "lg:order-1")}>
                  <Reveal>
                    <span className="font-mono text-label uppercase text-brand">
                      Division {service.n}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2
                      id={`${service.slug}-title`}
                      className="mt-4 text-h2"
                    >
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 text-body">{service.summary}</p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 border-b border-ink/10 py-3 text-[0.95rem] text-ink"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 bg-navy"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <Button
                      href="/contact"
                      variant="ghost"
                      arrow
                      className="mt-8"
                    >
                      Discuss your project
                    </Button>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <ProcessSection />

      <Faq faqs={faqs} className="section bg-sand" />

      <CtaBand />
    </>
  );
}
