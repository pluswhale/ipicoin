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
      'mobile': '480px',
      'tablet': '1420px',
      'laptop': '1420px',
      'desktop': '1600px',
    },
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand sans-serif'],
      },
    },
  },
    plugins: [],

}