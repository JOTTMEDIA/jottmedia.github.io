<template>
  <div ref="target" :style="{backgroundImage: `url(${getImageAbsolutePath(src)})`, height, width, ...targetStyle}" :class="[out ? positionToClassOut[position] : positionToClassIn[position]]" />
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

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
  parallax: {
    type: String,
    default: null,
  },
})

const target = ref(null)
const targetBounding = reactive(useElementBounding(target))
const targetStyle = computed(() => {
  if(props.parallax == 'to-right')
    return { backgroundPosition: `${(targetBounding.y * 0.01) + 50}%` }

  if(props.parallax == 'to-left')
    return  { backgroundPosition: `${(targetBounding.y * -0.01) + 50}%` }

  return {}
})

const positionToClassOut = {
  top: 'absolute top-[1px] -translate-y-full repeat-x bg-center w-screen',
  topLeft: 'absolute top-[1px] left-0 -translate-y-full bg-no-repeat bg-contain bg-left-top',
  topRight: 'absolute top-[1px] right-0 -translate-y-full bg-no-repeat bg-contain bg-right-top',
  center: 'absolute top-1/2 -translate-y-1/2 repeat-x bg-center w-screen',
  centerLeft: 'absolute top-1/2 left-0 -translate-y-1/2 bg-no-repeat bg-contain bg-left-center',
  centerRight: 'absolute top-1/2 right-0 -translate-y-1/2 bg-no-repeat bg-contain bg-right-center',
  bottom: 'absolute bottom-[1px] translate-y-full repeat-x bg-center w-screen',
  bottomLeft: 'absolute bottom-[1px] left-0 translate-y-full bg-no-repeat bg-contain bg-left-bottom',
  bottomRight: 'absolute bottom-[1px] right-0 translate-y-full bg-no-repeat bg-contain bg-right-bottom',
}

const positionToClassIn = {
  top: 'absolute top-[1px] repeat-x bg-center w-screen',
  topLeft: 'absolute top-[1px] left-0 bg-no-repeat bg-contain bg-left-top',
  topRight: 'absolute top-[1px] right-0 bg-no-repeat bg-contain bg-right-top',
  center: 'absolute top-1/2 -translate-y-1/2 repeat-x bg-center w-screen',
  centerLeft: 'absolute top-1/2 left-0 -translate-y-1/2 bg-no-repeat bg-contain bg-left-center',
  centerRight: 'absolute top-1/2 right-0 -translate-y-1/2 bg-no-repeat bg-contain bg-right-center',
  bottom: 'absolute bottom-[1px] repeat-x bg-center w-screen',
  bottomLeft: 'absolute bottom-[1px] left-0 bg-no-repeat bg-contain bg-left-bottom',
  bottomRight: 'absolute bottom-[1px] right-0 bg-no-repeat bg-contain bg-right-bottom'
}

const glob = import.meta.glob<Record<string, string>>('@/assets/images/*', { eager: true })
const getImageAbsolutePath = (imageName: string): string | undefined => {
  return '\"' + glob[`/assets/images/${imageName}`]['default'] + '\"';
};
</script>
