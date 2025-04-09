import type {RouterConfig} from '@nuxt/schema'

const FIXED_OFFSET = 60

function calculateDynamicDelay(): number {
    const complexityFactor = document.querySelectorAll('*').length / 1000
    return Math.min(200, Math.max(50, complexityFactor * 50))
}

function findHashPosition(hash: string): { el: any, behavior: ScrollBehavior, top: number } | undefined {
    const el = document.querySelector(hash)
    if (el) {
        return {
            el: el,
            behavior: 'smooth',
            top: FIXED_OFFSET
        }
    }
}

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
                    setTimeout(() => resolve(findHashPosition(to.hash)), calculateDynamicDelay())
                } else {
                    nuxtApp.hooks.hookOnce('page:finish', () => {
                        setTimeout(() => resolve(findHashPosition(to.hash)), calculateDynamicDelay())
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