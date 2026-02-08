import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#faf8f5",
        linen: "#f5f0eb",
        charcoal: "#2a2a2a",
        stone: "#8a8580",
        blush: "#c4a7a3",
        rose: "#d4b5b0",
        warm: "#b8a088",
      },
      letterSpacing: {
        "widest-plus": "0.2em",
        "super-wide": "0.3em",
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05" }],
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "prose-narrow": "540px",
        "prose-wide": "720px",
      },
    },
  },
  plugins: [],
}

export default config
