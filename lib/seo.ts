import type { Metadata } from "next";
import { site } from "@/content/site-content";

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Use "/" for home. */
  path?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;

  return {
    // Home uses an absolute title (no template suffix); inner pages get the
    // "· Zayan Al-Jazeera" template applied from the root layout.
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      locale: "en_SA",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
  };
}
