module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //remove unused css in prod
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
