"use client";

import { useState, type FormEvent } from "react";
import { contact, contactPage } from "@/content/site-content";
import { cn } from "@/lib/utils";

type Errors = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Honeypot — silently drop bots without revealing the trap.
    if ((fd.get("company_website") as string)?.trim()) {
      setSent(true);
      return;
    }

    const data = Object.fromEntries(fd) as Record<string, string>;
    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please tell us your name.";
    if (!data.email?.trim()) next.email = "We need an email to reply to.";
    else if (!emailRe.test(data.email)) next.email = "That email doesn't look right.";
    if (!data.service) next.service = "Pick the service you need.";
    if (!data.message?.trim() || data.message.trim().length < 10)
      next.message = "A sentence or two about your project helps us help you.";
    if (!data.consent) next.consent = "Please agree so we can contact you back.";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});

    // Static site has no mail server: open the visitor's email client (mailto)
    // pre-filled. This is a real action, never a faked success.
    const subject = `Project enquiry — ${data.name}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Company: ${data.company || "—"}`,
      `Service: ${data.service}`,
      "",
      "Project details:",
      data.message,
    ].join("\n");

    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-lg border border-green/40 bg-paper p-8"
        role="status"
        aria-live="polite"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-green text-ink">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-medium text-ink">
          Opening your email app…
        </h3>
        <p className="mt-3 text-body">
          Your enquiry is ready to send. If nothing opened, email us directly at{" "}
          <a href={contact.emailHref} className="text-brand underline underline-offset-4">
            {contact.email}
          </a>{" "}
          or call{" "}
          <a href={contact.phoneHref} className="text-brand underline underline-offset-4">
            {contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" className={cn("field", errors.name && "field-error")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={cn("field", errors.email && "field-error")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <input id="company" name="company" type="text" autoComplete="organization" className="field" />
        </Field>
      </div>

      <Field id="service" label="Service needed" required error={errors.service}>
        <select id="service" name="service" defaultValue="" className={cn("field", errors.service && "field-error")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined}>
          <option value="" disabled>
            Select a service…
          </option>
          {contactPage.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Project details" required error={errors.message}>
        <textarea id="message" name="message" rows={5} className={cn("field resize-y", errors.message && "field-error")} placeholder="Scope, location, timeline — whatever you have." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" value="yes" className="mt-1 h-4 w-4 shrink-0 accent-[#15749B]" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
          <span>
            I agree that Zayan Al-Jazeera may use these details to respond to my
            enquiry, per the{" "}
            <a href="/privacy" className="text-brand underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-err" className="mt-1.5 text-sm text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-lg group justify-center sm:w-fit">
        Send enquiry
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="text-green"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
