# GAPS — outstanding items for client / launch

This build uses **only verified content** (the client's live site, their footer, and
material supplied directly). Fabricated content from the earlier build (ISO 9001,
"since 2009", "480+ projects / 98% on-time", the "Smith" testimonials, a Riyadh / King
Fahd Road address) has been **removed**. The items below need client input or a
post-launch step before go-live.

## Content to supply

- [ ] **Real project case studies** for `/work`. The client chose "I'll provide real
      projects". The page currently presents **real sectors + real named clients**
      (IKEA, P&G, King Abdullah Port, Saudi Air Navigation Services, Abeer) honestly.
      Provide per project: name, location, sector, scope, outcome, and photography.
      They drop into `content/site-content.ts` → `work` (add a `projects` array).
- [ ] **Project / facility photography** for the service/work/blog visuals, which are
      currently editorial colour plates (`components/ui/ArtFrame.tsx`). The homepage hero
      now uses a supplied render (`public/images/hero.jpg`). Real project photos would
      elevate the remaining sections and can replace the plates.
- [x] **Official brand logo** — added (`public/brand/logo.png` colour + `logo-white.png`),
      shown in the header and footer.
- [ ] **Client logos** — we list the real client *names*. If permissioned logo files
      are provided, swap the text list on `/work` for logos.
- [ ] **Testimonials** — the live site's testimonials are templated/fake and were
      omitted per content-integrity rules. Provide real, attributable quotes to add a
      testimonials section.
- [ ] **Social profile URLs** (Facebook / Instagram / YouTube). The footer/socials
      render only when set — add them in `content/site-content.ts` → `socials`.
- [ ] **Company history / milestones** and **team members** — omitted (no verified
      data). Supply to add an "Our journey" timeline and a team section to `/about`.
- [ ] **Blog** — three articles are present and clearly flagged as **samples**. Replace
      with real posts (or keep as a launch set) in `content/site-content.ts` → `blogPosts`.

## Facts to confirm

- [ ] **Phone** `+966 50 123 0859`, **email** `info@zayanaljazeera.com`, **address**
      `Gulf Plaza, Office 15, Madina Road, Sharafiyyah, Jeddah`, **hours**
      `Sun–Thu 8:00–18:00` — taken from the live footer. Confirm still current
      (the footer showed Mon–Fri; we used the KSA-standard Sun–Thu — verify).
- [ ] **Map** uses a keyless Google Maps embed for the Madina Road / Sharafiyyah area.
      Replace with the exact pinned location (or a Maps API key) when confirmed.
- [ ] **JSON-LD geo coordinates** are approximate for the Sharafiyyah district —
      replace with exact lat/long.

## Launch / technical

- [ ] **Contact form** uses a `mailto:` fallback (the site is a static export with no
      mail server, and no Resend key is configured). To capture leads server-side,
      host on a Node platform (e.g. Vercel) and add a Route Handler + Resend, or wire a
      form service. Tracked because CLAUDE.md §10 prefers a real server handler.
- [ ] **Analytics** not installed yet (GA4 / Plausible). Add with consent per CLAUDE.md
      §11–12 once a provider is chosen.
- [ ] **Google Business Profile** — ensure NAP matches exactly; set up GBP separately.
- [ ] **Google Search Console** — add + submit `sitemap.xml` after launch.
- [ ] **Custom domain** — to serve at `https://zayanaljazeera.com`, set
      `NEXT_PUBLIC_BASE_PATH=""` in the deploy workflow and add a `CNAME` file.
- [ ] **Arabic / RTL** — not in scope for this build. Layout uses logical properties so
      an `ar` locale can be added later (CLAUDE.md §7, §9).
- [ ] **OG image** reuses the prior build's branded cover (accurate, no fabricated
      claims). Consider per-page OG images at launch.
