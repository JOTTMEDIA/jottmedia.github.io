<template>
  <button
      class="fixed -bottom-2 sm:bottom-0 right-4 sm:right-8 h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center bg-jm-contrast-black transition-all duration-700 bg-opacity-70 hover:bg-opacity-100  rounded-full z-50"
      @click="$emit('toggle')">
    <UIcon v-if="!open" class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-menu"/>
    <UIcon v-else class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-close-thick"/>
  </button>
</template>
<script lang="ts" setup>

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})

</script>
