import type { Metadata } from "next";
import { contact, site } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Zayan Al-Jazeera collects, uses and protects personal data submitted through this website.",
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we handle the personal data you share with us."
        current="Privacy"
      />

      <section className="section">
        <div className="container-narrow">
          <div className="mx-auto max-w-prose prose-rich">
            <p className="font-mono text-label uppercase tracking-[0.16em] text-muted-light">
              Last updated June 2026
            </p>

            <p>
              This Privacy Policy explains how {site.legalName} handles personal
              data you provide through this website. We keep this site simple and
              we collect as little information as possible — only what we need to
              respond to you.
            </p>

            <h2>Who we are</h2>
            <p>
              {site.legalName} is a facility management, construction and
              renovation company based in Jeddah, Saudi Arabia. If you have any
              questions about this policy or about how your data is handled, you
              can reach us at{" "}
              <a href={contact.emailHref}>{contact.email}</a>.
            </p>

            <h2>What we collect</h2>
            <p>
              When you get in touch through our contact form, we collect the
              details you choose to enter:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your company name</li>
              <li>The service you are interested in</li>
              <li>The message and any other information you choose to include</li>
            </ul>
            <p>
              We do not ask for sensitive personal data, and you should not send
              us any through this website.
            </p>

            <h2>Why we collect it</h2>
            <p>
              We use the information you provide solely to respond to your
              enquiry — for example, to answer your questions, prepare a quote,
              or arrange and deliver the services you ask about. We do not sell
              your data, and we do not use it for advertising.
            </p>

            <h2>How your data is handled</h2>
            <p>
              This is a static website. The contact form works by opening your
              email application and sending a message to{" "}
              <a href={contact.emailHref}>{contact.email}</a>, so your enquiry
              reaches us as an ordinary email. By default, the site does not set
              analytics or advertising cookies and does not track your activity.
              If we add analytics in the future, we will update this policy and,
              where required, ask for your consent first.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep the information you send us only for as long as we need it
              to handle your enquiry and, where it leads to working together, to
              manage our relationship with you. When it is no longer needed, we
              delete it.
            </p>

            <h2>Your rights</h2>
            <p>
              Under Saudi Arabia&rsquo;s Personal Data Protection Law (PDPL), you
              have rights over your personal data, including the right to request
              access to it, to have it corrected, or to have it deleted. To
              exercise any of these rights, contact us at{" "}
              <a href={contact.emailHref}>{contact.email}</a> and we will respond
              within a reasonable time.
            </p>

            <h2>Contact</h2>
            <p>
              For any questions about this Privacy Policy or your personal data,
              please contact us:
            </p>
            <ul>
              <li>
                Email: <a href={contact.emailHref}>{contact.email}</a>
              </li>
              <li>
                Phone:{" "}
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </li>
              <li>Address: {contact.address.full}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
