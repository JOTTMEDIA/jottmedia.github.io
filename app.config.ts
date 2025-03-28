export default defineAppConfig({
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
    /*    uiPro: {
            blogPost: {
                slots: {
                    root: 'relative group/blog-post flex flex-col rounded-[calc(var(--ui-radius)*2)] overflow-hidden',
                    header: 'relative overflow-hidden aspect-[16/9] w-full pointer-events-none',
                    body: 'min-w-0 flex-1 flex flex-col p-0',
                    footer: '',
                    image: 'object-cover object-top w-full h-full',
                    title: 'text-xl text-pretty font-semibold text-(--ui-text-highlighted)',
                    description: 'mt-1 text-base text-pretty',
                    authors: 'pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5',
                    avatar: '',
                    meta: 'flex items-center gap-2 mb-2',
                    date: 'text-sm',
                    badge: ''
                },
            }
        }*/
})
