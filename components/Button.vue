<template>
  <div :class="[alignToClass[align], displayToClass[display]]">
    <a :href="props.href"
       class="inline-block border-[3px] border-jm-primary-brown rounded px-3 py-2 uppercase font-[800] text-sm text-jm-primary-brown hover:text-jm-secondary-white hover:bg-jm-primary-brown transition">
      {{ props.label }}
    </a>
  </div>
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
  },
  display: {
    type: String,
    default: 'inline'
  },
  align: {
    type: String,
    default: 'left'
  }
})

const alignToClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const displayToClass = {
  block: 'block',
  inline: 'inline-block',
}
</script>