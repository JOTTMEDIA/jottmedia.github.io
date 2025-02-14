import type {RouterConfig} from '@nuxt/schema'

function findHashPosition(hash: string): { el: any, behavior: ScrollBehavior, top: number } | undefined {
    const el = document.querySelector(hash)
    if (el) {
        const top = 60

        return {
            el: hash,
            behavior: 'smooth',
            top,
        }
    }
}

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp()

        if (history.state && history.state.stop)
            return

        if (history.state && history.state.smooth) {
            return {
                el: history.state.smooth,
                behavior: 'smooth',
            }
        }


        if (savedPosition) {

            return new Promise((resolve) => {
                nuxtApp.hooks.hookOnce('page:finish', () => {
                    setTimeout(() => resolve(savedPosition), 250)
                })
            })
        }

        if (to.hash) {
            return new Promise((resolve) => {
                if (to.path === from.path) {
                    setTimeout(() => resolve(findHashPosition(to.hash)), 50)
                } else {
                    nuxtApp.hooks.hookOnce('page:finish', () => {
                        setTimeout(() => resolve(findHashPosition(to.hash)), 50)
                    })
                }
            })
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({top: 0})
            }, 250)
        })
    },
}