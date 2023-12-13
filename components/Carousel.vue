<template>
  <div class="relative">
    <button @click="x -= carousel?.children[0].clientWidth + 20" class="w-12 h-12 bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"><UIcon name="i-mdi-chevron-left" class="text-3xl text-jm-primary-brown" /></button>
    <div ref="carousel" class="flex flex-row overflow-x-auto no-scrollbar w-full gap-x-[20px] snap-mandatory snap-x">
      <div v-for="item in items" :key="item.id" class="snap-start snap-always min-w-[100%] md:min-w-[calc(50%-10px)] pointer-events-none">
        <NuxtImg :src="item.media_url" :alt="item.alt" class="block w-full" />
      </div>
    </div>
    <button @click="x += carousel?.children[0].clientWidth + 20" class="w-12 h-12 bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 flex justify-center items-center rounded-full absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all"><UIcon name="i-mdi-chevron-right" class="text-3xl text-jm-primary-brown" /></button>
  </div>
</template>

<script setup lang="ts">
import { useScroll, usePointerSwipe } from '@vueuse/core'

interface CarouselItems {
  id: string
  media_url: string
  alt?: string
}

const props = defineProps({
  items: {
    type: Array as PropType<CarouselItems[]>,
    required: true,
  },
})

const carousel = ref<HTMLElement | null>(null)
const { x, y } = useScroll(carousel, { behavior: 'smooth' })
usePointerSwipe(carousel, {
  disableTextSelect: true,
  onSwipeEnd(e: PointerEvent, direction) {
    if(direction === 'left') {
      x.value += (carousel.value?.children[0].clientWidth ?? 0) + 20
    } else if(direction === 'right') {
      x.value -= (carousel.value?.children[0].clientWidth ?? 0) + 20
    }
  },
})
</script>