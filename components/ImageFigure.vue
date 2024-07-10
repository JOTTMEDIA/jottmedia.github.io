<template>
  <div class="flex" :class="typeToClass[align]">
    <div class="md:w-2/5 space-y-10 relative">
      <Image :src="src" :alt="hint ?? ''"/>
      <NuxtLink :to="link">
        <button
            class="w-12 h-12  bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute -right-6 -bottom-5  transition-all z-10">
          <UIcon name="i-mdi-plus" class="text-2xl h-9 w-9 text-jm-primary-brown"/>
        </button>
      </NuxtLink>
      <div class="md:absolute">
        <h5 class="text-lg uppercase h-animation-bigger my-0 mb-4" v-html="quote">
        </h5>
        <Paragraph v-if="hint != null" class="italic text-sm mb-10">{{ hint }}</Paragraph>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


defineProps({
  align: {
    type: String,
    default: 'left'
  },
  src: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    default: null
  },
  quote: {
    type: String,
    default: null
  },
  link: {
    type: String,
    default: null
  }
})

const typeToClass = {
  left: 'justify-start',
  right: 'justify-end',
}
</script>