// tailwind.config.ts
import type { Config } from "next";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uva: {
          black: "#1a1a1a", // Darker black for sleekness
          red: "#bc0031",   // UvA Red
          gray: "#f8f8f8",  // Lighter background gray
        },
        science: {
          teal: "#2a9d8f",
          blue: "#264653",
          coral: "#e9c46a",
          purple: "#7f5af0",
          green: "#4cc9f0",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bubble-glow': { // Subtle glow for elements
          '0%, 100%': { boxShadow: '0 0 5px rgba(42, 157, 143, 0.2)' },
          '50%': { boxShadow: '0 0 10px rgba(42, 157, 143, 0.5)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'bubble-glow': 'bubble-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;