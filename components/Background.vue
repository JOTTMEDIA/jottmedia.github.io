<template>
  <div ref="image" :style="{backgroundImage: `url('${getImageAbsolutePath(src)}')`, height, width}" :class="[out ? positionToClassOut[position] : positionToClassIn[position]]" />
</template>

<script setup lang="ts">
import {useParallax} from "@vueuse/core";

const props = defineProps({
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: null,
  },
  src: {
    src: String,
    required: true,
  },
  position: {
    type: String,
    default: 'top',
  },
  out: {
    type: Boolean,
    default: true,
  },
})

// const image = ref(null)
// const parallax = reactive(useParallax(image))
// const imageStyle = computed(() => ({
//   transition: '.3s ease-out all',
//   transform: `translateX(${parallax.tilt * getNumberByString(props.src as string)}px)`,
// }))
//
// // get a number by string between 1 and 20
// const getNumberByString = (str: string): number => {
//   const number = str.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
//   return number % 200 + 1
// }

const positionToClassOut = {
  top: 'absolute top-0 -translate-y-full repeat-x bg-center w-full',
  topLeft: 'absolute top-0 left-0 -translate-y-full bg-no-repeat bg-contain bg-left-top',
  topRight: 'absolute top-0 right-0 -translate-y-full bg-no-repeat bg-contain bg-right-top',
  center: 'absolute top-1/2 -translate-y-1/2 repeat-x bg-center w-full',
  centerLeft: 'absolute top-1/2 left-0 -translate-y-1/2 bg-no-repeat bg-contain bg-left-center',
  centerRight: 'absolute top-1/2 right-0 -translate-y-1/2 bg-no-repeat bg-contain bg-right-center',
  bottom: 'absolute bottom-0 translate-y-full repeat-x bg-center w-full',
  bottomLeft: 'absolute bottom-0 left-0 translate-y-full bg-no-repeat bg-contain bg-left-bottom',
  bottomRight: 'absolute bottom-0 right-0 translate-y-full bg-no-repeat bg-contain bg-right-bottom',
}

const positionToClassIn = {
  top: 'absolute top-0 repeat-x bg-center w-full',
  topLeft: 'absolute top-0 left-0 bg-no-repeat bg-contain bg-left-top',
  topRight: 'absolute top-0 right-0 bg-no-repeat bg-contain bg-right-top',
  center: 'absolute top-1/2 -translate-y-1/2 repeat-x bg-center w-full',
  centerLeft: 'absolute top-1/2 left-0 -translate-y-1/2 bg-no-repeat bg-contain bg-left-center',
  centerRight: 'absolute top-1/2 right-0 -translate-y-1/2 bg-no-repeat bg-contain bg-right-center',
  bottom: 'absolute bottom-0 repeat-x bg-center w-full',
  bottomLeft: 'absolute bottom-0 left-0 bg-no-repeat bg-contain bg-left-bottom',
  bottomRight: 'absolute bottom-0 right-0 bg-no-repeat bg-contain bg-right-bottom'
}

const glob = import.meta.glob<Record<string, string>>('@/assets/images/*', { eager: true })
const getImageAbsolutePath = (imageName: string): string | undefined => {
  return glob[`/assets/images/${imageName}`]['default'];
};
</script>