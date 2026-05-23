import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#0b1020", card: "#121a31", neon: "#4f7cff", accent: "#8b5cf6" }
    }
  },
  darkMode: "class",
  plugins: []
} satisfies Config;
