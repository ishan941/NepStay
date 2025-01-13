import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      background: "var(--background)",
        foreground: "var(--foreground)",
      'airbnb': '#ff385c',
      'airbnb-dark': '#d50027'
     }
    },
  },
  plugins: [],
} satisfies Config;
