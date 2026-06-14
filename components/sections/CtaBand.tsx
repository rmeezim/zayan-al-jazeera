import { home } from "@/content/site-content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand() {
  const { cta } = home;
  return (
    <section className="section bg-sand">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>{cta.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-3xl text-h2">{cta.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-body">{cta.body}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={cta.primary.href} size="lg" arrow>
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="ghost" size="lg">
              {cta.secondary.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
