import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(() => {

    const lenis = new Lenis({
        duration: 3,
    })

    const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    function scrollTo(path : string) {
        lenis.scrollTo(path)
    }

    const scrollStop = () => {
        document.body.style.overflowY = 'hidden'
        lenis.stop()
    }

    const scrollStart = () => {
        document.body.style.overflowY = ''
        lenis.start()
    }

    return {
        provide: {
            lenis,
            scrollStop,
            scrollStart,
            scrollTo
        }
    }
})