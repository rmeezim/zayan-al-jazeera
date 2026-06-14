import type { Config } from "tailwindcss";

/**
 * Single source of truth for the Zayan Al-Jazeera design system.
 * Palette is derived from the brand mark (petrol-blue + green) and warmed
 * with a sand neutral to match the editorial art direction.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        // warm editorial neutrals (the "blush" equivalent, on-brand-warm)
        sand: {
          DEFAULT: "#F5F0E8",
          50: "#FAF7F1",
          100: "#F5F0E8",
          200: "#EAE1D2",
          300: "#DBCEB8",
        },
        // deep petrol-blue — the brand blue, matured for dark surfaces
        ink: {
          DEFAULT: "#0B2530",
          900: "#08202A",
          800: "#0B2530",
          700: "#11323F",
          600: "#1A4250",
          500: "#28586A",
        },
        // slate body text
        muted: {
          DEFAULT: "#51626A",
          light: "#7C8B92",
          ondark: "#9FB2B9",
        },
        // brand blue — interactive / accent text on light (WCAG AA)
        brand: {
          DEFAULT: "#15749B",
          bright: "#1E90C9",
          deep: "#0F5C7C",
        },
        // brand green — the bold signature accent (used as fills/marks)
        green: {
          DEFAULT: "#84C13E",
          600: "#6FAE2C",
          700: "#5C9322",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // fluid editorial scale
        display: ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.25rem, 4.6vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        h2: ["clamp(1.85rem, 3.4vw, 3rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.35rem, 1.8vw, 1.7rem)", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.08rem, 1.35vw, 1.3rem)", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        label: ["0.74rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        container: "1240px",
        wide: "1400px",
        prose: "68ch",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,37,48,0.04), 0 8px 28px -12px rgba(11,37,48,0.12)",
        lift: "0 2px 6px rgba(11,37,48,0.06), 0 22px 50px -20px rgba(11,37,48,0.22)",
      },
      spacing: {
        section: "clamp(4.5rem, 9vw, 8.5rem)",
        "section-sm": "clamp(3rem, 6vw, 5rem)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        drawline: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        marquee: "marquee var(--mq, 36s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
