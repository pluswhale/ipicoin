/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./componentsForMobile/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1600px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1450px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1220px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '920px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '550px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand sans-serif'],
      },
    },
  },
    plugins: [],

}