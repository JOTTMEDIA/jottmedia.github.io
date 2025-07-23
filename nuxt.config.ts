// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/ui-pro', '@nuxt/content', '@pinia/nuxt', '@nuxt/image'],
    devtools: {enabled: true}
})