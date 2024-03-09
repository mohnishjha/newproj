/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.d.ts",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    }
  },
  experimental: {},
  plugins: [
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/forms'),
  ],
};
