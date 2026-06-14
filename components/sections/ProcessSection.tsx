import { home, processSteps } from "@/content/site-content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { process } = home;
  return (
    <section className="section bg-paper" aria-labelledby="process-title">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="process-title" className="mt-5 text-h2">
                {process.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-body lg:pb-2">{process.lead}</p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const highlight = i === 1; // one bold accent moment
            return (
              <Reveal key={step.n} delay={i * 0.08}>
                <li
                  className={cn(
                    "flex h-full flex-col rounded-md border p-7 transition-all duration-300",
                    highlight
                      ? "border-transparent bg-green text-ink"
                      : "border-ink/10 bg-paper hover:border-ink/20 hover:shadow-soft",
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-4xl font-semibold",
                      highlight ? "text-ink" : "text-ink/15",
                    )}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-[0.95rem] leading-relaxed",
                      highlight ? "text-ink/80" : "text-muted",
                    )}
                  >
                    {step.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
