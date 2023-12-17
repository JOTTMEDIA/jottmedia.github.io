<template>
  <div class="flex" :class="typeToClass[align]">
    <div class="md:w-2/5 space-y-10 relative">
      <Image :src="src" :alt="alt" />
      <div class="md:absolute">
        <Headline type="h5"><slot /></Headline>
        <Paragraph v-if="hint != null" class="italic text-sm mb-10">{{ hint }}</Paragraph>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  align: {
    type: String,
    default: 'left'
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: null
  }
})

const typeToClass = {
  left: 'justify-start',
  right: 'justify-end',
}
</script>