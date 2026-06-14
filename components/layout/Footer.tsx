import Link from "next/link";
import { site, contact, services, socials } from "@/content/site-content";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative" role="contentinfo">
      {/* venetian-blind transition into the dark footer (signature) */}
      <div className="bg-paper" aria-hidden="true">
        <div className="venetian h-24 sm:h-32" />
      </div>

      <div className="bg-ink text-paper">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
            {/* brand */}
            <div>
              <Link href="/" aria-label="Zayan Al-Jazeera — home" className="inline-flex">
                <BrandMark className="h-11 w-11" />
              </Link>
              <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted-ondark">
                With over a decade of experience in construction, we partner with
                owners and design professionals to build — and maintain —
                high-quality projects across the Kingdom.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="accent" arrow>
                  Start a project
                </Button>
              </div>
            </div>

            {/* company */}
            <nav aria-label="Footer — company">
              <h2 className="font-mono text-label uppercase text-muted-ondark">
                Company
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-paper/80 transition-colors hover:text-green"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* services */}
            <nav aria-label="Footer — services">
              <h2 className="font-mono text-label uppercase text-muted-ondark">
                Services
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-paper/80 transition-colors hover:text-green"
                    >
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* contact */}
            <div>
              <h2 className="font-mono text-label uppercase text-muted-ondark">
                Get in touch
              </h2>
              <address className="mt-5 space-y-4 text-[0.95rem] not-italic text-paper/80">
                <p className="leading-relaxed">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.city}, {contact.address.country}
                </p>
                <p>
                  <a
                    href={contact.phoneHref}
                    className="transition-colors hover:text-green"
                  >
                    {contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={contact.emailHref}
                    className="underline-grow transition-colors hover:text-green"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="font-mono text-[0.8rem] uppercase tracking-wider text-muted-ondark">
                  {contact.hours}
                </p>
              </address>
              {socials.length > 0 && (
                <ul className="mt-5 flex gap-4 text-[0.85rem]">
                  {socials.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-paper/70 hover:text-green"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="container-page overflow-hidden" aria-hidden="true">
          <div className="flex select-none items-end justify-between leading-[0.78]">
            <span className="font-display text-[24vw] font-semibold tracking-tight text-paper lg:text-[20vw]">
              ZAYAN
            </span>
            <span className="mb-[2vw] hidden font-mono text-[0.7rem] uppercase tracking-[0.2em] text-green sm:block">
              Al-Jazeera
              <br />
              Company Ltd
            </span>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-paper/10">
          <div className="container-page flex flex-col gap-3 py-6 text-[0.82rem] text-muted-ondark sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-green">
                Privacy Policy
              </Link>
              <span className="font-mono uppercase tracking-wider">
                Construction · Maintenance · Fit-Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
