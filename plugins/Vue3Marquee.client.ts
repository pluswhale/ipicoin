import Vue3Marquee from 'vue3-marquee'

export default defineNuxtPlugin((nuxtApp) => {
    //@ts-ignore
  nuxtApp.vueApp.use(Vue3Marquee)
})