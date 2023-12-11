<template>
  <component :is="type" :class="typeToClass[format ?? type]" class="my-0 mb-4">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const { width, height } = useWindowSize()

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  format: {
    type: String,
    default: null
  }
})

const typeToClass = {
  h1: width.value > 768 ? 'text-4xl' : 'text-3xl',
  h2: width.value > 768 ? 'text-3xl' : 'text-2xl',
  h3: width.value > 768 ? 'text-2xl uppercase' : 'text-xl uppercase',
  h4: width.value > 768 ? 'text-xl uppercase' : 'text-lg uppercase',
  h5: width.value > 768 ? 'text-lg uppercase' : 'text-base uppercase',
  h6: width.value > 768 ? 'text-sm mb-8' : 'text-sm mb-6',
}
</script>