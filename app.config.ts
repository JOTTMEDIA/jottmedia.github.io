export default defineAppConfig({
    uiPro: {
        blogPost: {
            slots: {
                image: 'object-fill w-full max-w-full h-full block bg-center bg-cover bg-no-repeat',
                authors: 'pt-4',
                meta: 'gap-1',
                root: 'relative group/blog-post flex flex-col overflow-hidden',
                description: 'mb-0 text-xs text-pretty jm-contrast-black color-jm-contrast-black',
            },
        }
    },

    ui: {
        container: {
            base: 'max-w-(--container-3xl) mx-auto px-4 sm:px-6 lg:px-8',
        },
        colors: {
            primary: 'nuxt-ui-primary',
            secondary: 'nuxt-ui-brown',
        },
        button: {
            defaultVariants: {
                color: "secondary",
            },
            slots: {
                base: 'inline-block border-[3px] border-jm-primary-brown rounded px-3 py-2 uppercase font-[800] text-sm text-jm-primary-brown hover:text-jm-secondary-white hover:bg-jm-primary-brown transition',
            }
        },
        size: {
            xs: {
                base: 'px-2 py-1 text-xs gap-1',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4'
            },
            sm: {
                base: 'px-2.5 py-1.5 text-xs gap-1.5',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4'
            },
            md: {
                base: 'px-2.5 py-1.5 text-sm gap-1.5',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5'
            },
            lg: {
                base: 'px-3 py-2 text-sm gap-2',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5'
            },
            xl: {
                base: 'px-3 py-2 text-base gap-2',
                leadingIcon: 'size-6',
                leadingAvatarSize: 'xs',
                trailingIcon: 'size-6'
            }
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
    },

})
