<template>
  <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{
      container: 'transition-[height]',
      controls: 'absolute -top-8 inset-x-12',
      dots: '-top-7',
      dot: 'w-6 h-1'
    }"
      arrows
      auto-height
      class="w-full max-w-xs mx-auto"
      dots
  >
    <Image :alt="item.alt" :parallax="false" :shine="false" :src="item.src"/>
  </UCarousel>

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