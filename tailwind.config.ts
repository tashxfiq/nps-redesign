import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f7f1",
          100: "#e3ecdf",
          200: "#c6d9bd",
          300: "#9fbf91",
          400: "#739f63",
          500: "#558246",
          600: "#406835",
          700: "#33532b",
          800: "#2a4324",
          900: "#1f3119",
          950: "#0f1c0c",
        },
        moss: {
          400: "#7a9c5e",
          500: "#5e7f47",
        },
        bark: {
          500: "#7a5a3a",
          600: "#5d4327",
          700: "#3f2d18",
        },
        sand: {
          50: "#fbf8f1",
          100: "#f5efde",
          200: "#ebdcb5",
        },
        sky: {
          warm: "#f7e9c8",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(31, 49, 25, 0.18)",
        lift: "0 18px 40px -16px rgba(31, 49, 25, 0.32)",
      },
      backgroundImage: {
        "park-grid": "radial-gradient(circle at 1px 1px, rgba(31,49,25,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
