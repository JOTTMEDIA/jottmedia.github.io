<template>
  <component :is="type" :class="typeToClass[format ?? type]" class="my-0 mb-4">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

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
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl uppercase',
  h4: 'text-xl uppercase',
  h5: 'text-lg uppercase',
  h6: 'text-sm mb-8',
}
</script>