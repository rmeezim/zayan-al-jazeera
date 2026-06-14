import type { Metadata } from "next";
import { contact, contactPage } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get a quote from Zayan Al-Jazeera. Call +966 50 123 0859, email info@zayanaljazeera.com, or send your project brief. Based in Jeddah, serving across Saudi Arabia.",
  path: "/contact",
});

const infoBlocks = [
  {
    label: "Address",
    value: (
      <>
        {contact.address.line1}
        <br />
        {contact.address.line2}
        <br />
        {contact.address.city}, {contact.address.country}
      </>
    ),
  },
  {
    label: "Phone",
    value: (
      <a href={contact.phoneHref} className="transition-colors hover:text-brand">
        {contact.phoneDisplay}
      </a>
    ),
  },
  {
    label: "WhatsApp",
    value: (
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-brand"
      >
        Chat with us
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a href={contact.emailHref} className="transition-colors hover:text-brand">
        {contact.email}
      </a>
    ),
  },
  { label: "Hours", value: contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        lead={contactPage.hero.lead}
        current="Contact"
      />

      <section className="section bg-paper">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* info */}
            <div>
              <Reveal>
                <span className="font-mono text-label uppercase text-brand">
                  Get in touch
                </span>
                <p className="mt-5 max-w-sm text-lead text-ink">
                  Tell us about your project and we&apos;ll come back with next
                  steps and an estimate.
                </p>
              </Reveal>

              <dl className="mt-10 border-t border-ink/10">
                {infoBlocks.map((block, i) => (
                  <Reveal key={block.label} delay={i * 0.05}>
                    <div className="flex flex-col gap-1 border-b border-ink/10 py-5 sm:flex-row sm:gap-8">
                      <dt className="w-28 shrink-0 font-mono text-label uppercase text-muted">
                        {block.label}
                      </dt>
                      <dd className="text-[1.0625rem] leading-relaxed text-ink">
                        {block.value}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>

            {/* form */}
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-ink/10 bg-sand-50 p-7 sm:p-9">
                <h2 className="font-display text-2xl font-medium text-ink">
                  Request a quote
                </h2>
                <p className="mt-2 text-[0.95rem] text-muted">
                  Fields marked <span className="text-green">*</span> are required.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* map */}
      <section aria-label="Our location" className="bg-paper pb-section">
        <div className="container-page">
          <div className="overflow-hidden rounded-lg border border-ink/10">
            <iframe
              title="Map showing the Zayan Al-Jazeera office area in Jeddah"
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
