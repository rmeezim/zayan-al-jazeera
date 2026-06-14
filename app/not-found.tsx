import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-sand-50 pt-[calc(var(--header-h)+2rem)]">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Error 404</Eyebrow>
          <p className="mt-6 font-display text-display font-semibold leading-none text-ink/15">
            404
          </p>
          <h1 className="mt-6 text-h1">Page not found</h1>
          <p className="mt-6 text-lead text-muted">
            The page you were looking for has moved or no longer exists. Let&rsquo;s
            get you back on track.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg" arrow>
              Back home
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
