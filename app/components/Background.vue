<template>
  <div
      ref="el"
      :class="parallaxClass"
      :style="style"
  />
</template>

<script lang="ts" setup>
interface Props {
  height: string
  width?: string
  src: string
  position?: string
  out?: boolean
  parallax?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  out: true
})

const el = ref<HTMLElement>()
const offset = ref(0)

// CSS-Klasse für den Parallax-Effekt
const parallaxClass = computed(() => {
  if (!props.parallax) return ''
  return props.parallax === 'to-right' ? 'parallax-right' : 'parallax-left'
})

function getPositionStyles() {
  const styles: Record<string, string> = {}

  if (props.position.includes('top')) {
    styles.top = '0'
    if (props.out) styles.transform = 'translateY(-100%)'
  } else if (props.position.includes('center')) {
    styles.top = '50%'
    styles.transform = 'translateY(-50%)'
  } else if (props.position.includes('bottom')) {
    styles.bottom = '0'
    if (props.out) styles.transform = 'translateY(100%)'
  }

  if (props.position.includes('Left')) styles.left = '0'
  else if (props.position.includes('Right')) styles.right = '0'

  return styles
}

const glob = import.meta.glob<Record<string, string>>('@/assets/images/*', {eager: true})

function getImagePath(src: string): string {
  const imagePath = glob[`/assets/images/${src}`]?.default
  return imagePath ? `"${imagePath}"` : ''
}

const staticStyles = {
  position: 'absolute' as const,
  backgroundImage: `url(${getImagePath(props.src)})`,
  height: props.height,
  width: props.width || (props.position.includes('Left') || props.position.includes('Right') ? 'auto' : '100%'),
  backgroundRepeat: ['top', 'center', 'bottom'].includes(props.position) ? 'repeat-x' as const : 'no-repeat' as const,
  backgroundSize: ['topLeft', 'topRight', 'centerLeft', 'centerRight', 'bottomLeft', 'bottomRight'].includes(props.position) ? 'contain' as const : 'cover' as const,
  backgroundPosition: {
    top: 'center top', topLeft: 'left top', topRight: 'right top',
    center: 'center center', centerLeft: 'left center', centerRight: 'right center',
    bottom: 'center bottom', bottomLeft: 'left bottom', bottomRight: 'right bottom'
  }[props.position] || 'center top',
  willChange: props.parallax ? 'transform' as const : 'auto' as const,
  transition: props.parallax ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
  backfaceVisibility: 'hidden' as const,
  ...getPositionStyles()
}

function getTransform() {
  const baseTransform = staticStyles.transform || ''
  if (!props.parallax) return baseTransform

  const parallaxTransform = `translateY(${offset.value}px)`
  return baseTransform ? `${baseTransform} ${parallaxTransform}` : parallaxTransform
}

const style = computed(() => ({
  ...staticStyles,
  transform: getTransform()
}))

let rafId = 0
let ticking = false

function updateParallax() {
  if (!el.value || !props.parallax) return

  const rect = el.value.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const elementTop = rect.top + scrollTop
  const elementHeight = rect.height
  const windowHeight = window.innerHeight

  // Prüfe ob das Element im Viewport ist
  if (rect.bottom >= 0 && rect.top <= windowHeight) {
    // Berechne den Offset basierend auf der Position im Viewport
    const speed = props.parallax === 'to-right' ? -0.4 : 0.4
    const yPos = -(scrollTop - elementTop) * speed
    offset.value = yPos
  }

  ticking = false
}

function handleScroll() {
  if (!ticking) {
    requestAnimationFrame(updateParallax)
    ticking = true
  }
}

function initParallax() {
  if (!el.value || !props.parallax) return
  updateParallax()
}

// Gedrosselter Resize-Handler
let resizeTimeout: number

function handleResize() {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(initParallax, 100)
}

if (props.parallax && process.client) {
  onMounted(() => {
    initParallax()
    window.addEventListener('scroll', handleScroll, {passive: true})
    window.addEventListener('resize', handleResize, {passive: true})
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    if (rafId) cancelAnimationFrame(rafId)
    clearTimeout(resizeTimeout)
  })
}
</script>

<style scoped>
/* GPU-Optimierung */
.parallax-left,
.parallax-right {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Für bessere Performance auf mobilen Geräten */
@media (max-width: 768px) {
  .parallax-left,
  .parallax-right {
    transform: none !important;
  }
}

/* Zusätzliche Styles für Flüssigkeit */
.parallax-left {
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.parallax-right {
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Reduziere Motion für Benutzer mit Accessibility-Präferenzen */
@media (prefers-reduced-motion: reduce) {
  .parallax-left,
  .parallax-right {
    transform: none !important;
    animation: none !important;
  }
}
</style>