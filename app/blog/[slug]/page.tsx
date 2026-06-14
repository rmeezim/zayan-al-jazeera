import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, type BlogPost } from "@/content/site-content";
import { createMetadata } from "@/lib/seo";
import { articleLd, breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/layout/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { Reveal } from "@/components/motion/Reveal";

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

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleLd(post),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* ============ ARTICLE HERO ============ */}
      <section className="border-b border-ink/10 bg-sand-50 pb-section-sm pt-[calc(var(--header-h)+3rem)]">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider text-muted">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="hover:text-ink">
                  Insights
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-ink">{post.title}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-prose">
            <Reveal>
              <span className="font-mono text-label uppercase text-brand">
                {post.category}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-h1">{post.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em] text-muted">
                <span>{post.dateDisplay}</span>
                <span aria-hidden="true" className="text-muted-light">
                  ·
                </span>
                <span>{post.readingTime}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ LEAD VISUAL ============ */}
      <div className="bg-paper pt-section-sm">
        <div className="container-page">
          <Reveal>
            <ArtFrame
              motif={motifForCategory(post.category)}
              tone="petrol"
              label={post.category}
              aspect="16 / 7"
              className="w-full"
            />
          </Reveal>
        </div>
      </div>

      {/* ============ BODY ============ */}
      <article className="container-narrow section">
        <div className="mx-auto max-w-prose">
          {post.sample && (
            <p className="mb-10 font-mono text-label uppercase tracking-[0.16em] text-muted-light">
              Sample article — illustrative content.
            </p>
          )}

          <div className="prose-rich">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return <h2 key={i}>{block.text}</h2>;
                case "quote":
                  return <blockquote key={i}>{block.text}</blockquote>;
                case "ul":
                  return (
                    <ul key={i}>
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                case "p":
                default:
                  return <p key={i}>{block.text}</p>;
              }
            })}
          </div>

          <div className="mt-12">
            <Link href="/blog" className="link-arrow">
              <span aria-hidden="true">←</span>
              <span className="underline-grow">All insights</span>
            </Link>
          </div>
        </div>
      </article>

      {/* ============ MORE INSIGHTS ============ */}
      {more.length > 0 && (
        <section className="section bg-sand" aria-labelledby="more-title">
          <div className="container-page">
            <h2 id="more-title" className="text-h3 text-ink">
              More insights
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {more.map((p: BlogPost, i: number) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col">
                    <ArtFrame
                      motif={motifForCategory(p.category)}
                      tone={i % 2 === 0 ? "petrol" : "deep"}
                      aspect="16 / 9"
                      className="w-full"
                    />
                    <span className="mt-6 font-mono text-label uppercase text-brand">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium text-ink transition-colors group-hover:text-brand">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em] text-muted">
                      <span>{p.dateDisplay}</span>
                      <span aria-hidden="true" className="text-muted-light">
                        ·
                      </span>
                      <span>{p.readingTime}</span>
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
