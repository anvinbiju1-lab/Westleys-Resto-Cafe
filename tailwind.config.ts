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
        background: "#050608",
        "bg-secondary": "#0A0C10",
        foreground: "#F4ECE2",
        primary: {
          DEFAULT: "#D1A352",
          hover: "#B8893A",
          glow: "rgba(209, 163, 82, 0.25)",
          dim: "rgba(209, 163, 82, 0.12)",
        },
        secondary: "#41252B",
        surface: {
          DEFAULT: "#111319",
          light: "#151820",
          lighter: "#1C2030",
        },
        muted: "#A29A8D",
        border: {
          DEFAULT: "#27272F",
          light: "rgba(39, 39, 47, 0.6)",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "amber-gradient": "linear-gradient(135deg, #D1A352 0%, #B8893A 100%)",
        "radial-amber": "radial-gradient(ellipse at center, rgba(209, 163, 82, 0.15) 0%, transparent 70%)",
        "radial-dark": "radial-gradient(ellipse at center, #111319 0%, #050608 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(209, 163, 82, 0.15)",
        "glow-md": "0 0 40px rgba(209, 163, 82, 0.2)",
        "glow-lg": "0 0 80px rgba(209, 163, 82, 0.25)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(209, 163, 82, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      maxWidth: {
        "content": "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "ember": "ember 4s ease-out infinite",
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
        ember: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "15%": { opacity: "0.6" },
          "85%": { opacity: "0.3" },
          "100%": { transform: "translateY(-150px) translateX(20px) scale(0.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
