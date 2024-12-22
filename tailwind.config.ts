import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "pulse-slow": "spin 10s ease-in-out infinite",
        "bounce-slow": "bounce 5s ease-in-out infinite",
        "fade-slow": "fade 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
