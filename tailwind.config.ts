import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary — teal (#008896): buttons, links, nav, icons, section accents
          primary: "#008896",
          primaryDark: "#006A75",
          primaryLight: "#1FA6B4",
          // Secondary — amber (#F2B443): hover, stats, callouts, decorative
          accent: "#F2B443",
          accentDark: "#D99A2B",
          // Surfaces
          ink: "#0B0B0B",
          charcoal: "#111111",
          graphite: "#1A1A1A",
          steel: "#2A2A2A",
          mist: "#F5F5F4",
          bone: "#E7E5E4",
          // Warm light surfaces — used strategically for visual rhythm
          cream: "#F7F2E7",
          sand: "#EDE4CE",
          coffee: "#3B2E1F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        ink: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-sweep": {
          "0%": { backgroundPosition: "-120% 50%" },
          "100%": { backgroundPosition: "220% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "glow-sweep": "glow-sweep 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
