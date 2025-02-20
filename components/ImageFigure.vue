<template>
  <div :class="typeToClass[align]" class="flex">
    <div class="md:w-2/5 space-y-10 relative">
      <NuxtImg :alt="hint ?? ''" :src="src" format="webp" loading="lazy" sizes="xs:100vw sm:50vw md:450px"/>
      <NuxtLink :to="link">
        <button
            class="w-12 h-12 bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute sm:-right-6 top-0 sm:top-auto sm:-bottom-5  transition-all z-10">
          <UIcon class="text-2xl h-9 w-9 text-jm-primary-brown" name="i-mdi-plus"/>
        </button>
      </NuxtLink>
      <div class="md:absolute">
        <h5 class="text-lg uppercase h-animation-bigger my-0 mb-4" v-html="quote"/>
        <Paragraph v-if="hint != null" class="italic text-sm mb-10">{{ hint }}</Paragraph>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  align: {
    type: String,
    default: 'left'
  },
  src: {
    type: String,
    default: null
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
