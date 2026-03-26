import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Aether Amber Design System
        "on-primary": "#422c00",
        "surface-lowest": "#0d0e11",
        "surface-highest": "#343538",
        "primary": "#f0bf6b",
        "primary-container": "#d1a352",
        "on-surface-variant": "#d2c4b2",
        "primary-fixed": "#ffdeaa",
        "surface-high": "#292a2d",
        "background": "#121316",
        "surface-container": "#1e2022",
        "surface-container-low": "#1a1c1e",
        "surface-dim": "#121316",
        "surface-variant": "#343538",
        "outline-variant": "#4f4538",
        "on-surface": "#e3e2e5",
        "on-primary-container": "#553a00",
        "outline": "#9b8f7f",
        // Keep legacy for backward compat
        foreground: "#F4ECE2",
        surface: {
          DEFAULT: "#121316",
          light: "#1a1c1e",
          lighter: "#1e2022",
        },
        muted: "#d2c4b2",
        border: {
          DEFAULT: "#4f4538",
          light: "rgba(79, 69, 56, 0.3)",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        headline: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "amber-gradient": "linear-gradient(135deg, #d1a352 0%, #f0bf6b 100%)",
        "amber-gradient-cta": "linear-gradient(to right, #d1a352, #f0bf6b)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(240, 191, 107, 0.3)",
        "glow-md": "0 0 40px rgba(240, 191, 107, 0.2)",
        "amber": "0 0 24px rgba(209, 163, 82, 0.35)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 12px 48px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ember": "ember 4s ease-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(0.98)" },
        },
        ember: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "15%": { opacity: "0.6" },
          "85%": { opacity: "0.3" },
          "100%": { transform: "translateY(-150px) translateX(20px) scale(0.2)", opacity: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
