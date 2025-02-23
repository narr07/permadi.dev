import { Host_Grotesk } from 'next/font/google';
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Sofia Sans", "sans-serif"],
        host: ["Host Grotesk", "sans-serif"],
    },
  }
  },
  plugins: [typography],
} satisfies Config;
