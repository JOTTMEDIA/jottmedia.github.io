<template>
  <p :class="{'animation-bigger': targetIsVisible || targetIsAlreadyVisible}" class="mb-16">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = ref(false)
const targetIsAlreadyVisible = ref(false)
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
    if (isIntersecting) targetIsAlreadyVisible.value = true
  },
)
</script>

<style>
@keyframes bigger {
  0% {
    font-variation-settings: "wght" 400;
    letter-spacing: 0.05em;
  }
  40% {
    font-variation-settings: "wght" 600;
    letter-spacing: 0.03em;
  }
  100% {
    font-variation-settings: "wght" 800;
    letter-spacing: 0;
  }
}

.animation-bigger b {
  animation: bigger;
  animation-duration: 1s;
  animation-timing-function: linear;
}
</style>