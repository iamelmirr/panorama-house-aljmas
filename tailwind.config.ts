import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D1A760",
          charcoal: "#0F172A",
          sand: "#F5F1E8",
          forest: "#2F5E4E",
          slate: "#475569",
        },
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Manrope",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 23, 42, 0.4)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
