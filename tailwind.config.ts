import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D3A",
          50: "#EEF1F6",
          100: "#D7DEEA",
          200: "#AFBEDA",
          300: "#879DC5",
          400: "#5F7CB0",
          500: "#3A5A96",
          600: "#264472",
          700: "#16305A",
          800: "#0B1D3A",
          900: "#050F1E",
        },
        ink: "#0A0A0A",
        cream: "#FAFAF9",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 29, 58, 0.08)",
        card: "0 2px 12px rgba(0,0,0,0.06)",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(12px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        slideInRight: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideInRight: "slideInRight 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
