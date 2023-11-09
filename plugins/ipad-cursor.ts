import { ipadCursorPlugin } from "ipad-cursor/vue"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ipadCursorPlugin, {
        enableLighting: true,
        blockPadding: 6,
        enableAutoTextCursor: true,
        className: 'jm-cursor',
        adsorptionStrength: 0,
    });
})