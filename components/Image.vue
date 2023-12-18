<template>
  <div class="image-wrapper" :class="{'shine': shine}" :style="parallax ? {perspective: '2000px'} : {}">
    <img ref="image" :style="imageStyle" :src="getImageAbsolutePath(src)" :alt="alt" class="w-full block" />
  </div>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core'

const image = ref(null)
const parallax = reactive(useParallax(image))
const imageStyle = computed(() => (
  props.parallax ? {
    transition: '.3s ease-out all',
    transform: `rotateX(${parallax.roll * 10}deg) rotateY(${parallax.tilt * 10}deg)`,
  }
  : {}
))

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: null,
  },
  shine: {
    type: Boolean,
    default: true,
  },
  parallax: {
    type: Boolean,
    default: true,
  },
})

const glob = import.meta.glob<Record<string, string>>('@/assets/images/*', { eager: true })
const getImageAbsolutePath = (imageName: string): string | undefined => {
  return glob[`/assets/images/${imageName}`]['default'];
};
</script>

<style lang="scss">
.shine {
  position: relative;
  overflow: hidden;

  &::before {
    background: linear-gradient(
      to right,
      fade_out(#fff, 1) 0%,
      fade_out(#fff, 0.7) 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: -75%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 2;
  }

  &:hover,
  &:focus {
    &::before {
      animation: shine 0.85s;
    }
  }

  @keyframes shine {
    100% {
      left: 125%;
    }
  }
}
</style>