<template>
  <div class="relative">
    <button
        class="w-12 h-12 bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all z-10"
        @click="x -= carousel?.children[0].clientWidth + 20">
      <UIcon class="text-3xl text-jm-primary-brown" name="i-mdi-chevron-left"/>
    </button>
    <div ref="carousel" class="flex flex-row overflow-x-auto no-scrollbar w-full gap-x-[20px] snap-mandatory snap-x">
      <div v-for="item in items" :key="item.id"
           class="snap-start snap-always min-w-[100%] md:min-w-[calc(50%-10px)] pointer-events-none">
        <NuxtImg :alt="item.alt" :src="item.src" class="w-full" format="webp" loading="lazy"/>
      </div>
    </div>
    <button
        class="w-12 h-12 bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all z-10"
        @click="x += carousel?.children[0].clientWidth + 20">
      <UIcon class="text-3xl text-jm-primary-brown" name="i-mdi-chevron-right"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {usePointerSwipe, useScroll} from '@vueuse/core'

interface CarouselItems {
  id: string
  src: string
  alt?: string
}

const props = defineProps({
  items: {
    type: Array as PropType<CarouselItems[]>,
    required: true,
  },
})

const carousel = ref<HTMLElement | null>(null)
const {x, y} = useScroll(carousel, {behavior: 'smooth'})
usePointerSwipe(carousel, {
  disableTextSelect: true,
  onSwipeEnd(e: PointerEvent, direction) {
    if (direction === 'left') {
      x.value += (carousel.value?.children[0].clientWidth ?? 0) + 20
    } else if (direction === 'right') {
      x.value -= (carousel.value?.children[0].clientWidth ?? 0) + 20
    }
  },
})

onMounted(() => {
  x.value = 0;
})
</script>