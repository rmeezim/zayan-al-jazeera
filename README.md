# Zayan Al-Jazeera — Website

A premium marketing site for **Zayan Al-Jazeera Company Ltd** — a leading facility
management company in Saudi Arabia delivering integrated construction, renovation,
fit-out and building maintenance.

Built with **Next.js (App Router) + TypeScript + Tailwind**, statically exported so it
can be hosted anywhere (GitHub Pages, Vercel, Netlify, any static host). Editorial art
direction inspired by the "Urbis" reference, rendered in Zayan's own brand palette.

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), TypeScript (strict), static export (`output: "export"`) |
| Styling | Tailwind CSS 3 with a token layer in `tailwind.config.ts` + `app/globals.css` |
| Fonts | `next/font` — Schibsted Grotesk (display), Geist (body), Geist Mono (labels) |
| Animation | Motion (`motion/react`) — light scroll reveals, reduced-motion aware |
| SEO | Metadata API, JSON-LD, `sitemap.ts`, `robots.ts`, OG/Twitter, canonical URLs |

## Pages

`/` Home · `/about` · `/services` · `/work` (Our Work) · `/blog` (Insights) +
`/blog/[slug]` · `/contact` · `/privacy` · `404`.

## Project structure

```
app/            layout.tsx (fonts, metadata, JSON-LD), page.tsx (home),
                about/ services/ work/ blog/ blog/[slug]/ contact/ privacy/,
                not-found.tsx, sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
components/      layout/ (Header, Footer, FloatingActions, JsonLd)
                sections/ (PageHero, ProcessSection, ClientsStrip, CtaBand, Faq, ContactForm)
                ui/ (Button, Eyebrow, BrandMark, Marquee, ArtFrame, HeroArt)
                motion/ (Reveal)
content/        site-content.ts   ← ALL copy lives here (typed, single source of truth)
lib/            seo.ts, jsonld.ts, utils.ts
public/         og.jpg, icons, brand mark
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run lint
npm run typecheck
```

## Content

**All copy is in `content/site-content.ts`** — edit there, not in components. Content is
verified from the client's live site/footer or supplied directly; see `GAPS.md` for
what still needs client input (real projects, photography, social URLs, testimonials).

## Design tokens

- **Palette** (brand-derived): deep petrol-blue `ink` (#0B2530), warm `sand` neutrals,
  brand **green** (#84C13E) as the signature accent, brand **blue** (#15749B) for links.
  All text/background pairings meet WCAG AA.
- **Type**: Schibsted Grotesk display + Geist body + Geist Mono labels. Section labels
  are mono with a green datum mark (no pills).
- **Signature**: the architectural blueprint hero, plus the venetian-blind transition
  into the giant footer wordmark. One signature moment per page; restraint elsewhere.

## Environment variables

| Var | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Base path for a GitHub Pages **project** site (e.g. `/zayan-al-jazeera`). Leave empty for a custom domain at root. | `""` |

## Deploy

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the static export and
publishes `./out` to **GitHub Pages** on push.

- **Project-site preview** (`<user>.github.io/zayan-al-jazeera/`): the workflow sets
  `NEXT_PUBLIC_BASE_PATH=/zayan-al-jazeera` so assets resolve under the subpath.
- **Custom domain** (`zayanaljazeera.com`): set `NEXT_PUBLIC_BASE_PATH=""` in the
  workflow and add a `CNAME` file containing `zayanaljazeera.com`. Canonical URLs,
  `sitemap.xml`, `robots.txt` and OG tags already point to `https://zayanaljazeera.com`.

Alternatively deploy to **Vercel** (recommended in the build standards) for a real
contact-form Route Handler — see `GAPS.md`.

## Forms

The contact form validates client-side and falls back to a pre-filled `mailto:` to
`info@zayanaljazeera.com` (a static export has no mail server; no Resend key configured).
It includes a honeypot and accessible inline validation. To capture leads server-side,
host on Node + add a Route Handler with Resend (tracked in `GAPS.md`).

## Accessibility & performance

Semantic landmarks + skip link, keyboard operable with visible focus, AA contrast,
`prefers-reduced-motion` respected, one `h1` per page. Animations are transform/opacity
only (no layout shift); heavy work is avoided to keep Core Web Vitals strong.
