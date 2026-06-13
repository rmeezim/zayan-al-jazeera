# Zayan Al-Jazeera — Website

A complete, premium redesign of the Zayan Al-Jazeera marketing website — a full-service
renovation, construction and commercial fit-out company. Built as a fast, hand-crafted,
**zero-dependency static site** with a bespoke editorial/blueprint aesthetic and a custom
animation engine (smooth scroll, scroll reveals, split-text, parallax, counters, stacking
process cards, marquees, custom cursor, and a signature "venetian-blind" footer reveal).

No build step. No framework. No npm install. Just open the files or drop them on any static host.

---

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services (with FAQ) |
| `work.html` | Our Work (projects) |
| `blog.html` | Insights (blog listing + newsletter capture) |
| `blog-modern-retail-fit-out.html` | Sample article (showcase) |
| `contact.html` | Contact (ERP/CRM-ready enquiry form) |
| `404.html` | Not-found page |

## Project structure

```
.
├── index.html · about.html · services.html · work.html
├── blog.html · blog-modern-retail-fit-out.html · contact.html · 404.html
├── assets/
│   ├── css/style.css        # full design system (tokens, components, animations)
│   ├── js/main.js           # vanilla animation + interaction engine
│   └── img/                 # logo mark, favicon, app icons, OG image, hero SVG
├── site.webmanifest         # PWA manifest
├── robots.txt · sitemap.xml # SEO
└── .nojekyll                # serve /assets untouched on GitHub Pages
```

---

## Local preview

Any static server works. For example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

(Opening the HTML files directly via `file://` also works, but a server is recommended so
relative paths, the web manifest and the `<object>` hero illustration all resolve.)

---

## Deployment

The site is a plain static bundle and can be hosted anywhere (GitHub Pages, Netlify,
Vercel, Cloudflare Pages, S3, or any web server).

**GitHub Pages:** in the repo settings → Pages, set the source to this branch (root). To
serve it on the production domain `zayanaljazeera.com`, point the DNS at GitHub Pages and add
a `CNAME` file containing `zayanaljazeera.com` (left out of the repo so it can't misconfigure
Pages before DNS is ready). Canonical URLs, `sitemap.xml`, `robots.txt` and the Open Graph
tags already use `https://zayanaljazeera.com/`.

---

## ERP / CRM integration (forms are wired and ready)

Every lead form (`contact.html` enquiry form and the `blog.html` newsletter signup) is built
for back-office integration. Forms are marked with `data-lead-form` and handled by
`assets/js/main.js`.

**To go live, set one attribute** — the destination endpoint — on the form:

```html
<form data-lead-form data-endpoint="https://your-erp.example.com/api/leads">
```

The form then `POST`s a JSON body to that URL with this schema:

```json
{
  "full_name": "...", "email": "...", "phone": "...", "company": "...",
  "service": "...", "budget": "...", "location": "...", "message": "...",
  "consent": "yes",
  "source_page": "/contact.html", "page_url": "https://...", "referrer": "...",
  "utm_source": "...", "utm_medium": "...", "utm_campaign": "...",
  "utm_term": "...", "utm_content": "...",
  "submitted_at": "2026-06-13T12:00:00.000Z"
}
```

Built-in features for clean lead capture:

- **Lead attribution** — UTM parameters, referrer and source page are captured automatically
  into hidden fields, so marketing can attribute every lead.
- **Spam protection** — a hidden honeypot field (`company_website`) silently drops bots.
- **Validation** — required fields, email/phone types and a consent checkbox, with native
  validation messages and accessible success/error states (`aria-live`).
- **Graceful demo mode** — until `data-endpoint` is set, the form validates, logs the exact
  payload to the browser console (`[Zayan lead capture] …`) and shows the success state, so
  you can see precisely what the ERP will receive.

The endpoint can be your ERP's REST intake, a CRM webhook (HubSpot/Zoho/Salesforce), or a
serverless function that forwards to email + the ERP. The newsletter form uses the same
mechanism (just `email` + attribution), so it can map straight to a marketing list.

---

## SEO

Implemented site-wide for maximum search visibility:

- Unique, descriptive `<title>` and `<meta name="description">` per page
- Canonical URLs, `robots` meta, `lang` attribute, responsive viewport
- Open Graph + Twitter Card tags with a real 1200×630 social image
  (`assets/img/og-cover.jpg`)
- **JSON-LD structured data:** `HomeAndConstructionBusiness` / `Organization`, `WebSite`,
  `BreadcrumbList`, `Service` + `OfferCatalog`, `FAQPage`, `ContactPage`, `Article` and
  `Blog` — matched to the relevant pages
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, favicons and app icons
- Semantic HTML5 landmarks, one `<h1>` per page, ordered headings, descriptive link text,
  alt text, skip-link and visible focus styles
- Fast and lightweight: no JS frameworks, no render-blocking dependencies, lazy-friendly

---

## Customising content (what to swap for the client)

The design is intentionally photo-ready. Replace these to finalise:

1. **Photography** — every image slot is now populated with a real demo photograph
   (`<img class="ph-img" …>` from Unsplash, themed per section), sitting on top of an
   on-brand gradient. If a photo ever fails to load, the inline `onerror` removes it and the
   gradient shows through, so nothing can look broken. **Swap these for the client's own
   project photography** by replacing each `src` (keep the `.ph-img` element and its
   `.project-media` / `.post-media` / `.page-hero-visual` wrapper so hover-zoom, parallax and
   reveal animations keep working). The hero image carries `fetchpriority="high"`.
   Note: the demo photos load from Unsplash's CDN, so the preview needs an internet
   connection. The contact page uses a keyless Google Maps embed.
2. **Contact details** — phone `+966 11 000 0000`, emails (`info@`, `sales@`), the Riyadh
   address, WhatsApp number (`wa.me/...`) and business hours appear in the header menu,
   footer and contact page. Search-and-replace once details are confirmed.
3. **Social links** — Facebook / YouTube / Instagram `href`s are placeholders (`#`-free,
   pointing to the platform roots) — set the real profile URLs.
4. **Client logos** — the client marquee names (including IKEA, per the brief) are
   illustrative. Replace with real, permissioned client logos/names.
5. **Official logo** — `assets/img/logo-mark.svg` is a faithful recreation of the brand
   mark; drop in the official asset if preferred. App icons and the OG image are generated
   to match.
6. **Stats & testimonials** — the figures and quotes are realistic placeholders; replace
   with verified numbers and real client testimonials.

---

## Brand palette

Derived from the company logo (blue, green, slate grey, white):

| Token | Hex | Use |
|-------|-----|-----|
| Blue (primary) | `#1f9bd6` | actions, links, accents |
| Green (accent) | `#84c13e` | highlights, ticks, markers |
| Grey | `#5d6b74` | muted text |
| Ink | `#0c1a23` | dark sections, footer |
| Paper | `#ffffff` / `#f3f7fa` | light surfaces |

Type: **Geist** (display headings) · **Inter** (body) · clean uppercase **Inter** for labels — a neutral modern grotesque matching the design inspiration.

---

## Accessibility & browser support

- Respects `prefers-reduced-motion` (disables motion, smooth scroll and the loader)
- Keyboard accessible (skip-link, focus-visible, escape closes the menu)
- Progressive enhancement: all content and navigation work with JavaScript disabled
- Modern evergreen browsers (Chrome, Edge, Safari, Firefox)
