import { home, processSteps } from "@/content/site-content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

// Color-coded cards (a light-blue accent card and a navy card) like the inspiration.
const cardStyles = [
  "bg-sand-50 text-ink",
  "bg-sky text-ink",
  "bg-navy text-sand-50",
  "bg-sand-200 text-ink",
];
const numStyles = ["text-ink/15", "text-ink/30", "text-sky/50", "text-ink/20"];
const bodyStyles = ["text-muted", "text-ink/75", "text-sand-50/75", "text-muted"];

export function ProcessSection() {
  const { process } = home;
  return (
    <section className="section bg-paper" aria-labelledby="process-title">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* sticky heading */}
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3.5rem)]">
            <Reveal>
              <Eyebrow>{process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="process-title" className="mt-6 text-h2">
                {process.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md t-body">{process.lead}</p>
            </Reveal>
          </div>

          {/* stacking cards */}
          <ol className="space-y-5">
            {processSteps.map((step, i) => (
              <li
                key={step.n}
                className="lg:sticky"
                style={{ top: `calc(var(--header-h) + ${1.5 + i * 1.25}rem)` }}
              >
                <div
                  className={cn(
                    "flex min-h-[320px] flex-col justify-between p-8 shadow-soft lg:min-h-[400px] lg:p-10",
                    cardStyles[i],
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-6xl font-medium leading-none lg:text-7xl",
                      numStyles[i],
                    )}
                  >
                    {step.n}
                  </span>
                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-medium text-inherit">
                      {step.title}
                    </h3>
                    <p className={cn("mt-3 max-w-sm leading-relaxed", bodyStyles[i])}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
