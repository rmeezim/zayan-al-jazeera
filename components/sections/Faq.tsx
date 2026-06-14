import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

interface FaqProps {
  faqs: readonly { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

/** Accessible accordion using native <details> — no JS, keyboard-friendly. */
export function Faq({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  className,
}: FaqProps) {
  return (
    <section className={className ?? "section bg-paper"} aria-labelledby="faq-title">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="faq-title" className="mt-5 text-h2">
                {title}
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-ink/10">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <details className="group border-b border-ink/10 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <span className="flex gap-4">
                      <span className="mt-1 font-mono text-label text-brand">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg font-medium text-ink">
                        {faq.q}
                      </span>
                    </span>
                    <span
                      className="mt-1 shrink-0 text-2xl leading-none text-muted transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl ps-8 text-body">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
