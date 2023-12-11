<template>
  <a :href="props.href"
     class="inline-block border-[3px] border-jm-primary-brown rounded px-3 py-2 uppercase font-[800] text-sm text-jm-primary-brown hover:text-jm-secondary-white hover:bg-jm-primary-brown transition">
    {{ props.label }}
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>