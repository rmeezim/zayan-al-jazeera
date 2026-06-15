import { clients } from "@/content/site-content";

export function ClientsStrip({ className }: { className?: string }) {
  return (
    <section className={className} aria-label="Clients we work with">
      <div className="container-page">
        <p className="text-center text-label font-semibold uppercase tracking-[0.14em] text-muted">
          Trusted by leading organisations across the Kingdom
        </p>
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-16">
          {clients.map((name) => (
            <li
              key={name}
              className="font-display text-xl font-medium text-ink/65 transition-colors hover:text-ink sm:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
