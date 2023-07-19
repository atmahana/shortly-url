/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        25: "6.5rem",
      },
      height: {
        "60vh": "60vh",
        "80vh": "80vh",
      },
      translate: {
        22: "5.5rem",
      },
      colors: {
        primary: {
          200: "#95e7e7",
          500: "#2acfcf",
        },
        secondary: {
          300: "#625976",
          500: "#3b3054",
        },
        danger: "hsl(0, 87%, 67%)",
        neutralCustom: {
          200: "hsl(0, 0%, 75%)",
          300: "hsl(257, 7%, 63%)",
          700: "hsl(255, 11%, 22%)",
          900: "hsl(260, 8%, 14%)",
        },
      },
      backgroundImage: {
        "boost-desktop": "url('/public/background/bg-boost-desktop.svg')",
        "boost-mobile": "url('/public/background/bg-boost-mobile.svg')",
        "shorten-desktop": "url('/public/background/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/public/background/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
