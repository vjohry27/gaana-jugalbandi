/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gaanaRed: "#E51A24",
        gaanaDark: "#0A0A0C",
        gaanaCardDark: "#141418",
        gaanaTextGray: "#92929A",
      },
      boxShadow: {
        "3d-pop": "0 12px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)",
        "3d-pop-light":
          "0 12px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)",
        "neon-red": "0 0 20px rgba(229, 26, 36, 0.6)",
      },
    },
  },
  plugins: [],
};
