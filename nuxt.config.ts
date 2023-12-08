// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],
  plugins: [
    '~/plugins/ipad-cursor',
  ],
  pages: true,
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['mdi']
  }
})