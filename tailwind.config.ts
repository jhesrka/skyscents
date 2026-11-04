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
        sky: {
          bg: "#090807",
          bgDeep: "#050404",
          bgAlt: "#13120f",
          bgDarkBox: "#0f0d0a",
          card: "#1a1714",
          gold: "#c8a46a",
          goldBright: "#c9a56a",
          goldLight: "#d9b97c",
          goldMuted: "#a38d6c",
          borderSubtle: "#393125",
          borderMid: "#6e5c3b",
          borderGold: "#896e43",
          cream: "#f5efe3",
          creamSoft: "#f3ebdd",
          textSecondary: "#c9c0b0",
          textMuted: "#a39a8a",
          textDim: "#9b9487",
          textDarkMuted: "#7d746a",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        canvas: "1200px",
        content: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;

