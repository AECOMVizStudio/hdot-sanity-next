import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hdotGray: "#5c5c5c",
        hdotTeal: "#22767c",
        hdotAqua: "#6fcddb",
        hdotYellow: "#ffbe20",
        hdotSand: "#d0c4ac",
      },
    },
  },
  plugins: [],
} satisfies Config;
