// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    routeRules: {
        '/': {prerender: true},
    },
    image: {
        format: ['webp'],
        quality: 80,
    },
    css: ['~/assets/css/main.css'],
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'page', mode: 'out-in'},
        head: {
            title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Wir unterstützen dich und dein Unternehmen eigene Prozesse digital zu vereinfachen, um mehr Zeit, mehr Zufriedenheit und mehr Qualität zu gewinnen und erfoglreich zu wachsen.'
                },
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'msapplication-TileColor', content: '#ffffff'},
                {name: 'theme-color', content: '#ffffff'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {rel: 'manifest', href: '/site.webmanifest'},
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
            ]
        },
    },
    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        '@nuxt/ui-pro',
        '@vueuse/nuxt',
        '@nuxt/image',
    ],
    pages: true,
    colorMode: {
        preference: 'light'
    },
    content: {
        preview: {
            api: 'https://api.nuxt.studio',
            gitInfo: {
                name: 'jottmedia.github.io',
                owner: 'JOTTMEDIA',
                url: 'https://github.com/JOTTMEDIA/jottmedia.github.io'
            }
        }
    },
    uiPro: {
        license: process.env.NUXT_UI_PRO_LICENSE
    },
    compatibilityDate: '2025-01-13'
})