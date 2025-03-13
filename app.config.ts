export default defineAppConfig({
    ui: {
        container: {
            base: 'max-w-[var(--ui-container-base)] mx-auto px-4 sm:px-6 lg:px-8',
            small: 'max-w-[var(--ui-container-small)] mx-auto px-4 sm:px-6 lg:px-8',
        },
        colors: {
            primary: 'text-[var(--ui-text-primary)] bg-[var(--ui-bg-primary)]',
            grey: 'nuxt-ui-grey'
        },

        variables: {
            light: {
                background: '255 255 255',
                foreground: '000 000 000'
            },
            dark: {
                background: '255 255 255',
                foreground: '000 000 000'
            },
        }
    }
})
