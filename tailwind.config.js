/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(315deg, #3F0EFA, #90F)",
        "purple-gradient": "linear-gradient(135deg, #3F0EFA, #90F)",
      },
    },
  },
  plugins: [],
};
