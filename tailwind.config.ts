import type { Config } from "tailwindcss";

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
        "blue-classic": "#2E86AB",
        "--primary": "var(--primary)",
        "--secondary": "var(--secondary)",
        "--accent": "var(--accent)",
        "--text-main": "var(--text-main)",
        "--text-secondary": "var(--text-secondary)",
        "--border": "var(--border)",
    
        /* Cores para fontes no Dark Mode */
        "--link": "var(--primary)",
        "--link-hover": "var(--link-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
