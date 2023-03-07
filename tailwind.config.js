/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('./assets/banner-img.png')",
        placeholderImg:
          "url('https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg')",
      },
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      keyframes: {
        up: {
          "0%": { transform: " translateY(0);" },
          "50%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
    plugins: [],
  },
};
