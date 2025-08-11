// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // blue-500
          DEFAULT: "#2563EB", // blue-600
          dark: "#1E40AF", // blue-700
        },
        secondary: {
          light: "#E5E7EB", // gray-200
          DEFAULT: "#D1D5DB", // gray-300
          dark: "#9CA3AF", // gray-400
        },
        background: {
          light: "#F9FAFB", // gray-50
          DEFAULT: "#FFFFFF", // white
          dark: "#1F2937", // gray-900
        },
        text: {
          light: "#6B7280", // gray-500
          DEFAULT: "#374151", // gray-700
          dark: "#111827", // gray-900
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, forwards)",
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
