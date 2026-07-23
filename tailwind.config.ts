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
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(11,11,11,0) 0%, rgba(11,11,11,0.8) 80%, rgba(11,11,11,1) 100%)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,136,150,0.20), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(0,136,150,0.45)",
        accent: "0 20px 60px -20px rgba(242,180,67,0.40)",
        ink: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
