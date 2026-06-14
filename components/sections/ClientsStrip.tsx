import { clients } from "@/content/site-content";
import { Marquee } from "@/components/ui/Marquee";

export function ClientsStrip({ className }: { className?: string }) {
  return (
    <section className={className} aria-label="Clients we work with">
      <div className="container-page">
        <p className="mb-8 text-center font-mono text-label uppercase tracking-[0.16em] text-muted">
          Trusted by leading organisations across the Kingdom
        </p>
      </div>
      <Marquee speed="42s" className="mask-fade-r">
        {clients.map((name) => (
          <span
            key={name}
            className="mx-8 inline-flex items-center gap-8 font-display text-xl font-medium text-ink/70 sm:text-2xl"
          >
            {name}
            <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
