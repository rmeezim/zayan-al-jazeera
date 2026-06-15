import type { Config } from "tailwindcss";

/**
 * Design tokens — warm editorial direction (cream + espresso + earthy green).
 * Single source of truth. Palette keeps the brand's green; the brand blue lives
 * only in the logo mark. No cool corporate blue, no grid/texture backgrounds.
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
        // warm cream neutrals (the editorial warmth)
        sand: {
          DEFAULT: "#F3ECDD",
          50: "#FAF6EE",
          100: "#F3ECDD",
          200: "#E7DCC6",
          300: "#D6C6A8",
        },
        // warm espresso/charcoal darks
        ink: {
          DEFAULT: "#1F1A13",
          900: "#15110C",
          800: "#1F1A13",
          700: "#2B251B",
          600: "#3C3428",
          500: "#4F4639",
        },
        // warm taupe-grey body text
        muted: {
          DEFAULT: "#6A6253",
          light: "#968B7A",
          ondark: "#B9AF9E",
        },
        // earthy green — text/labels/links accent (AA on cream & white)
        brand: {
          DEFAULT: "#3E6019",
          bright: "#5E8A26",
          deep: "#2E480F",
        },
        // leaf green — fills, ticks, the one highlighted moment (ink text on top)
        green: {
          DEFAULT: "#6FA12E",
          600: "#5E8A26",
          700: "#4C7020",
          bright: "#84C13E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        // De-techified: micro labels render in the warm sans, not a code mono.
        mono: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.9rem, 6.8vw, 6.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.3rem, 4.6vw, 4.25rem)", { lineHeight: "1.04", letterSpacing: "-0.018em" }],
        h2: ["clamp(1.9rem, 3.4vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.35rem, 1.9vw, 1.8rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.12rem, 1.4vw, 1.4rem)", { lineHeight: "1.6", letterSpacing: "-0.003em" }],
        label: ["0.76rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        container: "1240px",
        wide: "1440px",
        prose: "66ch",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,26,19,0.04), 0 10px 30px -16px rgba(31,26,19,0.18)",
        lift: "0 2px 8px rgba(31,26,19,0.05), 0 26px 56px -24px rgba(31,26,19,0.26)",
      },
      spacing: {
        section: "clamp(5.5rem, 11vw, 10rem)",
        "section-sm": "clamp(3.5rem, 6vw, 5.5rem)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--mq, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
