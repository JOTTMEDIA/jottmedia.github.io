import { ipadCursorPlugin } from "ipad-cursor/vue"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ipadCursorPlugin, {
        enableLighting: true,
        blockPadding: 8,
        enableAutoTextCursor: true,
        className: 'jm-cursor',
        adsorptionStrength: 10,
    });
})