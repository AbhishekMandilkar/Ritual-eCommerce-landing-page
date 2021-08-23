// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Circular Std"],
        serif: ["Dutch801 Rm BT"],
      },
      colors: {
        "ritual-blue": "#142b6f",
        "ritual-blue-lt": "#6579b6",
        white: "#ffffff",
        grey: "#F8F7F9",
      },
      backgroundImage: (theme) => ({
        "hero-dsk": "url('/src/images/Home-Hero-Desktop.jpg')",
        "hero-phn": "url('/src/images/Home-Hero-Mobile.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
