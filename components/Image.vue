<template>
  <img :src="src" :alt="alt" class="block w-full" />
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