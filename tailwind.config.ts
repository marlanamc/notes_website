import { type Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

export default {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["-apple-system", "SF Pro", "SF Pro Display", "SF Pro Text", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#7B93B8",
          foreground: "#E8F0FF",
        },
        secondary: {
          DEFAULT: "#B89B96",
          foreground: "#FFF0ED",
        },
        muted: {
          DEFAULT: "#2C2A2A",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#8BA893",
          foreground: "#E8F5EB",
        },
        background: {
          DEFAULT: "#1A1A1A",
        },
        card: {
          DEFAULT: "#2C2C2C",
          foreground: "#E8E8E8",
        },
        popover: {
          DEFAULT: "#2C2C2C",
          foreground: "#E8E8E8",
        },
        border: "#3F3F46",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config