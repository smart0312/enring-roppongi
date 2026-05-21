import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        enring: {
          green: "#2a3d32",
          "green-deep": "#1e2e26",
          "green-muted": "#3d5248",
          silver: "#c8cdd2",
          "silver-bright": "#e8ecef",
          dark: "#0a0c0f",
          navy: "#0f1419",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1e2e26 0%, #0f1419 45%, #0a0c0f 100%)",
        "silver-text":
          "linear-gradient(180deg, #f0f2f4 0%, #c8cdd2 40%, #9aa3ab 100%)",
      },
      letterSpacing: {
        luxury: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
