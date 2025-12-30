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
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          blue: "#00f3ff",
          purple: "#bc13fe",
          cyan: "#0afff0",
          pink: "#ff0099",
        },
        cyber: {
          black: "#0a0a0a",
          dark: "#121212",
          gray: "#1e1e1e",
          light: "#2a2a2a",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 5px #00f3ff)' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px #00f3ff)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
