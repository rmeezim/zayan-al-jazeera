import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, type BlogPost } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = createMetadata({
  title: "Insights",
  description:
    "Practical articles on facility management, renovation, fit-out and maintenance from the Zayan Al-Jazeera team.",
  path: "/blog",
});

type Motif = "build" | "systems" | "interior" | "grounds";

/** Map an article category to a matching ArtFrame motif. */
function motifForCategory(category: string): Motif {
  switch (category) {
    case "Facility Management":
      return "systems";
    case "Renovation":
      return "interior";
    case "Maintenance":
      return "build";
    default:
      return "build";
  }
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Insights"
        title="Latest articles & news"
        lead="Practical thinking on facility management, renovation, fit-out and keeping buildings running."
        current="Insights"
      />

      {/* ============ FEATURED ============ */}
      <section className="section bg-paper" aria-labelledby="featured-title">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-label uppercase tracking-[0.16em] text-muted-light">
              Sample articles — for demonstration.
            </p>
          </Reveal>

          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal>
              <ArtFrame
                motif={motifForCategory(featured.category)}
                tone="petrol"
                label={featured.category}
                aspect="16 / 11"
                className="w-full"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <span className="font-mono text-label uppercase text-brand">
                  {featured.category}
                </span>
                <h2
                  id="featured-title"
                  className="mt-5 text-h2 transition-colors group-hover:text-brand"
                >
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-body">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em] text-muted">
                  <span>{featured.dateDisplay}</span>
                  <span aria-hidden="true" className="text-muted-light">
                    ·
                  </span>
                  <span>{featured.readingTime}</span>
                </div>
                <span className="link-arrow mt-7 inline-flex">
                  <span className="underline-grow">Read article</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Reveal>
          </Link>
        </div>
      </section>

      {/* ============ GRID ============ */}
      {rest.length > 0 && (
        <section className="section bg-sand" aria-label="More insights">
          <div className="container-page">
            <div className="hairline mb-12" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post: BlogPost, i: number) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col"
                  >
                    <ArtFrame
                      motif={motifForCategory(post.category)}
                      tone={i % 2 === 0 ? "petrol" : "deep"}
                      label={post.category}
                      aspect="16 / 10"
                      className="w-full"
                    />
                    <span className="mt-6 font-mono text-label uppercase text-brand">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium text-ink transition-colors group-hover:text-brand lg:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-body">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em] text-muted">
                      <span>{post.dateDisplay}</span>
                      <span aria-hidden="true" className="text-muted-light">
                        ·
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
