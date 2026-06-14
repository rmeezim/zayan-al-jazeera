/**
 * Single source of truth for all site copy.
 *
 * CONTENT INTEGRITY (CLAUDE.md §3): everything here is verified from the
 * client's live site, their footer, or supplied directly by the client.
 * Fabricated items from the previous build (ISO 9001, "since 2009", project
 * counts, the "Smith" testimonials) have been removed. Items still awaiting
 * client confirmation are marked `TODO` and tracked in GAPS.md.
 */

export const site = {
  name: "Zayan Al-Jazeera",
  legalName: "Zayan Al-Jazeera Company Ltd",
  // Used for canonical URLs / metadata. The production domain.
  url: "https://zayanaljazeera.com",
  locale: "en",
  description:
    "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia — integrated construction, renovation, fit-out and maintenance delivered end-to-end by one accountable team.",
  shortDescription:
    "Integrated facility management, construction, renovation & fit-out across Saudi Arabia.",
  foundedNote: "Over a decade of experience in construction",
} as const;

export const contact = {
  phoneDisplay: "+966 50 123 0859",
  phoneHref: "tel:+966501230859",
  whatsappHref: "https://wa.me/966501230859",
  email: "info@zayanaljazeera.com",
  emailHref: "mailto:info@zayanaljazeera.com",
  address: {
    line1: "Gulf Plaza — Office 15",
    line2: "Madina Road, Sharafiyyah",
    city: "Jeddah",
    region: "Makkah Province",
    country: "Saudi Arabia",
    full: "Gulf Plaza, Office 15, Madina Road, Sharafiyyah, Jeddah, Saudi Arabia",
  },
  hours: "Sun – Thu · 8:00am – 6:00pm",
  // Keyless Google Maps embed for the Jeddah office area (no API key required).
  mapEmbed:
    "https://www.google.com/maps?q=Madina+Road,+Sharafiyyah,+Jeddah,+Saudi+Arabia&output=embed",
  mapLink: "https://www.google.com/maps/search/Madina+Road,+Sharafiyyah,+Jeddah",
} as const;

// TODO (GAPS.md): confirm real social profile URLs. Rendered only when set.
export const socials: { label: string; href: string }[] = [
  // { label: "Facebook", href: "https://facebook.com/…" },
  // { label: "Instagram", href: "https://instagram.com/…" },
  // { label: "YouTube", href: "https://youtube.com/…" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Real clients (from the client's own site + brief). Used as named references.
export const clients = [
  "IKEA",
  "P&G",
  "King Abdullah Port",
  "Saudi Air Navigation Services",
  "Abeer",
] as const;

// Defensible, verified figures only — no invented project counts.
export const stats = [
  { value: "10+", label: "Years of construction experience" },
  { value: "24/7", label: "Support & maintenance response" },
  { value: "3", label: "Integrated service divisions" },
  { value: "KSA", label: "Serving across the Kingdom" },
] as const;

export const home = {
  hero: {
    eyebrow: "Construction · Renovation · Facility Management",
    title: "We are a full-service renovation company.",
    lead:
      "We service all your construction needs — from foundations to framing, siding, roofing and window installation, through to flooring and the final finish.",
    primaryCta: { label: "Get a quote", href: "/contact" },
    secondaryCta: { label: "View our work", href: "/work" },
  },
  intro: {
    eyebrow: "Welcome to Zayan Al-Jazeera",
    title: "We understand the importance of innovation and professionalism.",
    body: [
      "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia, committed to innovation, sustainability and superior service. Our experienced team delivers tailored solutions to optimize operations and minimize costs for our clients.",
      "With a focus on reliability and environmental responsibility, we provide round-the-clock support and proactive maintenance programs — unmatched expertise across facility management, construction and renovation.",
    ],
    cta: { label: "More about us", href: "/about" },
  },
  servicesIntro: {
    eyebrow: "What we do",
    title: "Three divisions. One accountable team.",
    lead:
      "Build, maintain and operate — fully coordinated, so there are no gaps and no finger-pointing between trades.",
  },
  process: {
    eyebrow: "Our process",
    title: "Check out how our process works.",
    lead:
      "A transparent journey from first survey to long-term care — meticulous planning, accurate costing and quality controlled at every step.",
  },
  cta: {
    eyebrow: "Let's build",
    title: "Call us and get it done.",
    body:
      "When you hire us, you get highly qualified professionals with the expertise and experience to make sure your project is done properly — and keeps performing long after handover.",
    primary: { label: "Get a quote", href: "/contact" },
    secondary: { label: "Call us today", href: contact.phoneHref },
  },
} as const;

export const processSteps = [
  {
    n: "01",
    title: "Consult & survey",
    body: "We start by understanding your brief and surveying the site, then shape a tailored solution scoped to your operation and budget.",
  },
  {
    n: "02",
    title: "Plan & estimate",
    body: "Detailed design, accurate line-by-line costing and a realistic programme — full transparency on price and timeline before work begins.",
  },
  {
    n: "03",
    title: "Build & fit-out",
    body: "Our skilled teams deliver to the highest standards — from foundations and structure to fit-out and finishing — keeping you updated throughout.",
  },
  {
    n: "04",
    title: "Maintain & support",
    body: "A clean handover followed by proactive, planned maintenance and round-the-clock support, so your facility keeps running smoothly.",
  },
] as const;

/**
 * Services — verbatim intros supplied by the client, organised into the three
 * real divisions shown across their site.
 */
export const services = [
  {
    slug: "construction-renovation-fit-out",
    n: "01",
    title: "Construction, Refurbishment, Renovation & Fit-Out",
    short: "Construction & Fit-Out",
    summary:
      "Our construction, refurbishment, renovation and fit-out services cater to your every need. From revitalizing outdated interiors to constructing innovative spaces, we offer seamless solutions tailored to your vision — quality craftsmanship and timely delivery, every time.",
    items: [
      "Civil & structural works",
      "Electrical systems",
      "Plumbing systems",
      "Painting & polishing",
      "Ceiling decoration",
      "Waterproofing",
      "Carpentry",
      "Aluminum & steel cladding",
      "Asphalting",
      "Swimming pool construction",
    ],
  },
  {
    slug: "building-maintenance",
    n: "02",
    title: "Building Maintenance",
    short: "Building Maintenance",
    summary:
      "Keeping your building running smoothly. Our maintenance, PPM and MEP services ensure peak performance and longevity for your property — proactive strategies and swift corrective action that safeguard your investment and keep everything functioning, every step of the way.",
    items: [
      "Building maintenance",
      "Planned preventive maintenance (PPM)",
      "Corrective & reactive repair",
      "MEP services",
      "HVAC & chiller systems",
      "Firefighting & fire-alarm systems",
      "Elevator & escalator systems",
    ],
  },
  {
    slug: "soft-services",
    n: "03",
    title: "Specialized Soft Services",
    short: "Soft Services",
    summary:
      "We create inviting, safe spaces that leave a lasting impression. Let us handle the finer points — cleaning, hospitality, grounds and pest control — so you can focus on what matters most: your business.",
    items: [
      "Specialized cleaning services",
      "Janitorial & hospitality services",
      "Landscape maintenance",
      "Pest control services",
    ],
  },
] as const;

export const values = [
  {
    title: "Innovation",
    body: "We bring modern techniques and technology to every brief — optimizing operations and reducing cost.",
  },
  {
    title: "Sustainability",
    body: "Environmental responsibility runs through how we build and maintain — efficient, durable and considered.",
  },
  {
    title: "Reliability",
    body: "Round-the-clock support and proactive maintenance keep your facility performing, day and night.",
  },
  {
    title: "Superior service",
    body: "One accountable team, tailored solutions and a finish we'll stand behind long after handover.",
  },
] as const;

export const about = {
  hero: {
    eyebrow: "About our company",
    title: "Building, maintaining and renovating across the Kingdom.",
    lead:
      "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia, committed to innovation, sustainability and superior service.",
  },
  intro: {
    eyebrow: "Who we are",
    title: "We understand the importance of innovation and professionalism.",
    body: [
      "With over a decade of experience in construction, we partner with owners and design professionals to build high-quality projects — and to keep them running long after the build is done.",
      "Our experienced team delivers tailored solutions that optimize operations and minimize costs, backed by reliability, environmental responsibility and round-the-clock support.",
    ],
  },
  vision: {
    title: "Our vision",
    body: "Our vision is to transform facility management in Saudi Arabia by pioneering innovative solutions tailored to our clients' needs, including comprehensive renovation and fit-out services. Through advanced technology and a commitment to sustainability, we aim to optimize operations, reduce costs and enhance efficiency in every aspect of facility management. By offering turnkey solutions for renovation and fit-out, we strive to revitalize spaces, create modern environments and exceed our clients' expectations.",
  },
  mission: {
    title: "Our mission",
    body: "Our mission is to deliver top-tier integrated facility management solutions that optimize efficiency, safety and sustainability across Saudi Arabia, encompassing renovation services. With a focus on excellence in construction, maintenance, renovation and environmental stewardship, we aim to be trusted partners in shaping a brighter future for the Kingdom.",
  },
  competencies: ["Construction", "Refurbishment", "Renovation & fit-out"],
} as const;

/**
 * Our Work. Real client list + sectors served.
 * TODO (GAPS.md): client to supply real project case studies (name, location,
 * scope, photography). The structure below drops them straight in.
 */
export const work = {
  hero: {
    eyebrow: "Selected work",
    title: "Spaces we build, fit out and keep running.",
    lead:
      "From retail fit-out to whole-building maintenance — delivered for some of the most demanding operators in the Kingdom.",
  },
  sectors: [
    {
      n: "01",
      title: "Retail & Commercial Fit-Out",
      desc: "Turnkey fit-out for stores, showrooms and offices — protecting brand standards and opening dates.",
    },
    {
      n: "02",
      title: "Facility Management",
      desc: "Integrated hard and soft FM that keeps trading sites and corporate buildings running, 24/7.",
    },
    {
      n: "03",
      title: "MEP & Building Systems",
      desc: "Mechanical, electrical and plumbing — installation, upgrades and planned maintenance.",
    },
    {
      n: "04",
      title: "Renovation & Refurbishment",
      desc: "Revitalizing tired interiors and full refurbishments, managed end-to-end from survey to finish.",
    },
  ],
  projectsPlaceholder: true,
} as const;

export const contactPage = {
  hero: {
    eyebrow: "We build things differently",
    title: "Schedule an estimate. Let's work together.",
    lead:
      "Zayan Al-Jazeera is a leading facility management company in Saudi Arabia, committed to innovation, sustainability and superior service. Tell us about your project and we'll take it from there.",
  },
  serviceOptions: [
    "Construction & fit-out",
    "Renovation & refurbishment",
    "Building maintenance / FM",
    "MEP & building systems",
    "Soft services (cleaning, landscaping, pest control)",
    "Something else",
  ],
} as const;

export const faqs = [
  {
    q: "Which areas do you serve?",
    a: "We're based in Jeddah and deliver construction, renovation, fit-out and facility-management services to clients across Saudi Arabia.",
  },
  {
    q: "Do you handle both the build and the ongoing maintenance?",
    a: "Yes. We're an integrated provider — we can construct or fit out your space and then keep it running with planned preventive and reactive maintenance under one accountable team.",
  },
  {
    q: "What does a typical project look like?",
    a: "We consult and survey, then plan and provide a transparent line-by-line estimate. Once approved, our teams build and fit out to programme, finishing with a clean handover and an optional maintenance plan.",
  },
  {
    q: "Can you work around a live, trading site?",
    a: "We regularly work in occupied and trading environments, phasing works and offering round-the-clock response to minimize disruption to your operation.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us your brief through the contact form, by email or by phone. Share the scope, location and any drawings you have, and we'll come back with next steps and an estimate.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Insights / Blog                                                     */
/* SAMPLE content for the pitch — clearly flagged. Tracked in GAPS.md.  */
/* ------------------------------------------------------------------ */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  dateDisplay: string;
  excerpt: string;
  readingTime: string;
  sample: boolean;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "integrated-facilities-management-saudi-arabia",
    title: "What integrated facility management really means for Saudi businesses",
    category: "Facility Management",
    date: "2026-05-20",
    dateDisplay: "May 20, 2026",
    excerpt:
      "Splitting your build, your MEP and your soft services across three vendors creates gaps. Here's why a single accountable team changes the economics of running a building.",
    readingTime: "6 min read",
    sample: true,
    body: [
      {
        type: "p",
        text: "Most buildings are managed by accident. A contractor delivers the fit-out and leaves. A separate firm handles the air conditioning. Cleaning is on another contract entirely, and landscaping on a fourth. Each does its part — but no one owns the building as a whole.",
      },
      {
        type: "p",
        text: "Integrated facility management collapses that fragmentation into a single relationship. The team that understands how your space was built is the same team that keeps it running, which removes the gaps where problems usually hide.",
      },
      { type: "h2", text: "Why fragmentation costs you" },
      {
        type: "p",
        text: "When responsibilities are split across vendors, every issue becomes a negotiation about whose problem it is. A water stain on a ceiling could be the roof, the plumbing or the HVAC — and three separate contractors each have an incentive to point at the other two.",
      },
      {
        type: "ul",
        items: [
          "Slower resolution: faults bounce between vendors before anyone acts.",
          "Hidden cost: overlapping call-out fees, mobilizations and management overhead.",
          "No single view: no one is tracking the building's overall condition over time.",
        ],
      },
      { type: "h2", text: "The integrated alternative" },
      {
        type: "p",
        text: "With one provider covering construction, MEP, maintenance and soft services, accountability is simple: it is ours. Planned preventive maintenance is scheduled against the assets we know intimately, corrective work is faster because the team is already on-site, and you get one point of contact for the entire facility.",
      },
      {
        type: "quote",
        text: "The team that builds your space should be the team that keeps it performing — that is where reliability comes from.",
      },
      { type: "h2", text: "What to look for in a partner" },
      {
        type: "p",
        text: "Look for genuine in-house capability across the disciplines you depend on — civil, MEP, fire systems, vertical transportation and soft services — plus the round-the-clock response that a trading or operational site demands. That combination is what turns maintenance from a cost centre into a way of protecting your investment.",
      },
    ],
  },
  {
    slug: "fit-out-vs-refurbishment",
    title: "Fit-out or refurbishment? Choosing the right scope for your space",
    category: "Renovation",
    date: "2026-04-30",
    dateDisplay: "Apr 30, 2026",
    excerpt:
      "The two words get used interchangeably, but they describe very different projects — and choosing the wrong one is where budgets slip.",
    readingTime: "5 min read",
    sample: true,
    body: [
      {
        type: "p",
        text: "Before any drawings are produced, it helps to be precise about what you are actually buying. Fit-out and refurbishment overlap, but the distinction shapes your budget, your programme and how much disruption you should expect.",
      },
      { type: "h2", text: "Fit-out" },
      {
        type: "p",
        text: "A fit-out takes a shell or a stripped space and makes it usable and on-brand — partitions, ceilings, MEP, flooring, joinery and finishes. It is the right scope when the bones of the space are sound and you are defining how it looks and works.",
      },
      { type: "h2", text: "Refurbishment" },
      {
        type: "p",
        text: "A refurbishment improves what is already there — upgrading tired interiors, replacing failing systems and bringing a space back up to standard. It is the right scope when the layout broadly works but the finishes, services or condition need renewing.",
      },
      {
        type: "ul",
        items: [
          "Choose fit-out when you are taking on new or stripped-back space.",
          "Choose refurbishment when you are renewing a space already in use.",
          "Many projects are a blend — which is exactly where end-to-end coordination pays off.",
        ],
      },
    ],
  },
  {
    slug: "planned-preventive-maintenance-explained",
    title: "Planned preventive maintenance (PPM), explained simply",
    category: "Maintenance",
    date: "2026-04-10",
    dateDisplay: "Apr 10, 2026",
    excerpt:
      "PPM is the difference between fixing things when they break and stopping them breaking at all. Here is how a good programme is put together.",
    readingTime: "4 min read",
    sample: true,
    body: [
      {
        type: "p",
        text: "Reactive maintenance waits for failure. Planned preventive maintenance gets ahead of it — servicing assets on a schedule so small issues are caught before they become expensive, disruptive ones.",
      },
      { type: "h2", text: "What a PPM programme covers" },
      {
        type: "ul",
        items: [
          "HVAC and chiller servicing to protect performance and energy use.",
          "Fire-alarm and firefighting system checks for compliance and safety.",
          "Elevator and escalator inspections to keep vertical transport reliable.",
          "Electrical, plumbing and building-fabric checks on a planned cycle.",
        ],
      },
      {
        type: "p",
        text: "The result is fewer surprises, longer asset life and a building that simply keeps working — which is the whole point.",
      },
    ],
  },
];
