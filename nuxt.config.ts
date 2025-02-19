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

    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxthq/studio',
        '@nuxtjs/web-vitals'
    ],

    webVitals: {
        provider: 'log', // Define the provider here (e.g., 'log', 'ga', 'gtag', 'datadog', etc.)
        debug: true, // Optional: Enable debug mode
        disabled: false, // Optional: Disable the module
        // Add any other options specific to the provider
    },
    i18n: {
        lazy: true,
        defaultLocale: 'de',
        langDir: 'locales',
        locales: [
            {
                code: 'de',
                language: 'de-DE',
                name: 'Deutsch',
                file: 'de-DE.json',
            },
            {
                code: 'en',
                language: 'en-GB',
                name: 'English',
                file: 'en-GB.json',
            },
        ],
    },
    pages: true,
    colorMode: {
        preference: 'light'
    },
    uiPro: {routerOptions: false},

    compatibilityDate: '2025-01-13'
})