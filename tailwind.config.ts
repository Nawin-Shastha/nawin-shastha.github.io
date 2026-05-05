import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#020617",
          50:  "#0a1628",
          100: "#0d1f3c",
          200: "#102040",
          300: "#1a3260",
        },
        electric: {
          DEFAULT: "#3b82f6",
          50:  "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "system-ui", "sans-serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "midnight-radial": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
        "glass-card": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        "electric-glow": "radial-gradient(circle at center, rgba(59,130,246,0.4) 0%, transparent 70%)",
      },
      backdropBlur: {
        xs: "2px", sm: "4px", md: "8px", lg: "12px",
        xl: "20px", "2xl": "40px", "3xl": "64px",
      },
      boxShadow: {
        glass:       "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-lg":  "0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        "glow-blue": "0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(59,130,246,0.1)",
        "glow-cyan": "0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.1)",
        "glow-sm":   "0 0 20px rgba(59,130,246,0.2)",
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        "pulse-slow":  "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float":       "float 6s ease-in-out infinite",
        "float-slow":  "float 9s ease-in-out infinite",
        "glow-pulse":  "glowPulse 3s ease-in-out infinite",
        "fade-up":     "fadeUp 0.6s ease forwards",
        "shimmer":     "shimmer 2.5s linear infinite",
        "ring-pulse":  "ringPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ringPulse: {
          "0%,100%": { transform: "scale(1)",    opacity: "0.3" },
          "50%":     { transform: "scale(1.06)", opacity: "0.8" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
