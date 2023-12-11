<template>
  <NuxtImg :src="src" :alt="alt" class="inline-block w-full" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>