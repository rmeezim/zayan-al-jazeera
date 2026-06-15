import Link from "next/link";
import { site, contact, services, socials } from "@/content/site-content";
import { Wordmark } from "@/components/ui/BrandMark";
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
    <footer className="bg-ink text-sand-50" role="contentinfo">
      <div className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <Link href="/" aria-label="Zayan Al-Jazeera — home" className="inline-flex">
              <Wordmark light />
            </Link>
            <p className="mt-6 max-w-xs leading-relaxed text-muted-ondark">
              With over a decade of experience in construction, we partner with
              owners and design professionals to build — and maintain —
              high-quality projects across the Kingdom.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="accent" arrow>
                Start a project
              </Button>
            </div>
          </div>

          {/* company */}
          <nav aria-label="Footer — company">
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-muted-ondark">
              Company
            </h2>
            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sand-50/80 transition-colors hover:text-green-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* services */}
          <nav aria-label="Footer — services">
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-muted-ondark">
              Services
            </h2>
            <ul className="mt-6 space-y-3.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-sand-50/80 transition-colors hover:text-green-bright">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h2 className="text-label font-semibold uppercase tracking-[0.14em] text-muted-ondark">
              Get in touch
            </h2>
            <address className="mt-6 space-y-4 not-italic text-sand-50/80">
              <p className="leading-relaxed">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.city}, {contact.address.country}
              </p>
              <p>
                <a href={contact.phoneHref} className="transition-colors hover:text-green-bright">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="underline-grow transition-colors hover:text-green-bright">
                  {contact.email}
                </a>
              </p>
              <p className="text-sm uppercase tracking-wider text-muted-ondark">{contact.hours}</p>
            </address>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-4 text-sm">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sand-50/70 hover:text-green-bright">
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
      <div className="container-page overflow-hidden pb-6" aria-hidden="true">
        <div className="flex select-none items-end justify-between gap-6 leading-[0.74]">
          <span className="font-display text-[25vw] font-medium tracking-[-0.03em] text-sand-50 lg:text-[21vw]">
            ZAYAN
          </span>
          <span className="mb-[2.5vw] hidden text-right text-label font-semibold uppercase tracking-[0.18em] text-green-bright sm:block">
            Al-Jazeera
            <br />
            Company Ltd
          </span>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-sand-50/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted-ondark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-green-bright">
              Privacy Policy
            </Link>
            <span className="uppercase tracking-wider">
              Construction · Maintenance · Fit-Out
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
