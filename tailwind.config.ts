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
        navy: {
          50: "#e6eaf0",
          100: "#b3c0d1",
          200: "#8099b5",
          300: "#4d7399",
          400: "#264d80",
          500: "#1a3d6b",
          600: "#143058",
          700: "#102847",
          800: "#0d233a",
          900: "#091a2d",
          950: "#050f1a",
        },
        accent: {
          DEFAULT: "#c0392b",
          light: "#e74c3c",
          dark: "#962d22",
          orange: "#d35400",
          "orange-light": "#e67e22",
        },
        steel: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
        },
        metallic: {
          light: "#c0c7cf",
          DEFAULT: "#8a929a",
          dark: "#5a6268",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
