// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/motion/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/device',

    ],
})
