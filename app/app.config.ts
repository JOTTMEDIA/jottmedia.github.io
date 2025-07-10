export default defineAppConfig({
    uiPro: {
        footer: {
            slots: {
                root: '',
                top: 'lg:pt-4',
                bottom: 'py-8 lg:py-0',
                container: 'py-8 lg:py-0 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
                left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
                center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
                right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
            }
        },
        blogPost: {
            slots: {
                authors: 'pt-4',
                body: 'sm:p-3!',
                description: 'mb-0 text-xs text-pretty jm-contrast-black color-jm-contrast-black',
                image: 'object-fill w-full max-w-full h-full block bg-center bg-cover bg-no-repeat',
                meta: 'gap-1 px-0',
                root: 'relative group/blog-post flex flex-col overflow-hidden p-0 test',
                title: 'text-xl uppercase font-extrabold leading-6',
            },
        },
        pageHero: {
            slots: {
                root: 'relative isolate',
                wrapper: '',
                headline: 'mb-4',
            },
            variants: {
                orientation: {
                    horizontal: {
                        container: 'lg:grid-cols-2 lg:items-center',
                        description: 'text-pretty'
                    },
                    vertical: {
                        container: '',
                        headline: 'justify-center',
                        wrapper: 'text-center',
                        description: 'text-balance',
                        links: 'justify-center'
                    }
                },
                reverse: {
                    true: {
                        wrapper: 'order-last'
                    }
                },
                headline: {
                    true: {
                        headline: 'font-semibold text-primary flex items-center gap-1.5'
                    }
                },
                title: {
                    true: {
                        description: 'mt-6'
                    }
                }
            }
        }
    },
    ui: {
        navigationMenu: {
            slots: {
                arrow: 'hidden',
                base: 'text-(--color-jm-secondary-grey)',
                link: 'block font-[800] text-red nuxt-ui-primary-50 text-(--color-nuxt-ui-primary-100) jm-contrast-black text-highlighted jm-primary-green uppercase hover:!text-jm-primary-green-light'
            }
        },
        container: {
            base: 'max-w-(--container-3xl) mx-auto px-4 sm:px-6 lg:px-8 py-0', // <- py-0 usuwa padding-block
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