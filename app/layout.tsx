import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site-content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/layout/JsonLd";
import { organizationLd, websiteLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Zayan Al-Jazeera | Facility Management, Construction & Fit-Out in Saudi Arabia",
    template: "%s · Zayan Al-Jazeera",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "facility management Saudi Arabia",
    "renovation company",
    "commercial fit-out",
    "building maintenance",
    "MEP services",
    "construction Jeddah",
    "Zayan Al-Jazeera",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_SA",
    url: site.url,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={cn(display.variable, sans.variable)}>
      <body className="min-h-screen bg-sand-50">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
