<template>
  <div class="relative">
    <UButton
        :style="{ backgroundColor: 'var(--color-jm-contrast-black)'}"
        :ui="{ base: 'h-12 w-12 opacity-70 flex justify-center border-0 items-center transition-opacity duration-300 ease rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all z-10' }"
        class="hover:!opacity-100"
        outline="false"
        size="lg"
        variant="outline"
        @click="x -= carousel?.children[0].clientWidth + 20"
    >
      <UIcon
          class="bg-[var(--color-nuxt-ui-brown-50)] size-7"
          name="i-mdi-chevron-left"
      />
    </UButton>
    <div ref="carousel" class="flex flex-row overflow-x-auto no-scrollbar w-full gap-x-[20px] snap-mandatory snap-x">
      <div v-for="item in items" :key="item.id"
           class="snap-start snap-always min-w-[100%] md:min-w-[calc(50%-10px)] pointer-events-none">
        <Image :alt="item.alt" :parallax="false" :shine="false" :src="item.src"/>
      </div>
    </div>
    <UButton
        :style="{ backgroundColor: 'var(--color-jm-contrast-black)'}"
        :ui="{ base: 'h-12 w-12 opacity-70 flex justify-center border-0 items-center transition-opacity duration-300 ease rounded-full absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full transition-all z-10' }"
        class="hover:!opacity-100"

        outline="false"
        size="lg"
        variant="outline"
        @click="x += carousel?.children[0].clientWidth + 20"
    >
      <UIcon
          class="bg-[var(--color-nuxt-ui-brown-50)]"
          name="i-mdi-chevron-right"
          size="2.1rem"/>
    </UButton>
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