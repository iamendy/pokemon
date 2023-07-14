/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1F1C47",
        "dark-50": "#433896",
        light: "#BCB6E6",
        lighter: "#E8E6FE",
        purple: "#7660FF",
        orange: "#DE8155",
        yellow: "#DED355",
      },
      fontFamily: {
        manrope: "var('--manrope')",
      },
    },
  },
  plugins: [],
};
