import { home } from "@/content/site-content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand() {
  const { cta } = home;
  return (
    <section className="section bg-navy text-sand-50">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-sky">
                <span className="inline-block h-4 w-1 rounded-[1px] bg-sky" aria-hidden="true" />
                {cta.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-3xl text-h2 text-sand-50">{cta.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl leading-relaxed text-sand-50/80">{cta.body}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <Button href={cta.primary.href} variant="accent" size="lg" arrow>
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="ghost-light" size="lg">
              {cta.secondary.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
