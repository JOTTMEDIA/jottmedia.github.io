<template>
  <div class="custom-cursor" :class="{'cursor-down': isMouseDown, 'cursor-show': isMouseShow}" :style="{ '--mouse-x': cursorX + 'px', '--mouse-y': cursorY + 'px' }">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isMouseDown = ref(false);
const isMouseShow = ref(true);

const updateCursorPosition = (e: MouseEvent) => {
  isMouseShow.value = true;
  cursorX.value = e.clientX  + document.body.scrollLeft + document.documentElement.scrollLeft;
  cursorY.value = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
};

const updateCursorDown = (e: MouseEvent) => {
  isMouseDown.value = true;
};

const updateCursorUp = (e: MouseEvent) => {
  isMouseDown.value = false;
};

const updateCursorScroll = (e: Event) => {
  isMouseShow.value = false;
}

onMounted(() => {
  window.addEventListener('mousedown', updateCursorDown);
  window.addEventListener('mouseup', updateCursorUp);
  window.addEventListener('mousemove', updateCursorPosition);
  window.addEventListener('scroll', updateCursorScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousedown', updateCursorDown);
  window.removeEventListener('mouseup', updateCursorUp);
  window.removeEventListener('mousemove', updateCursorPosition);
  window.removeEventListener('scroll', updateCursorScroll);
});
</script>

<style lang="scss">
* { cursor: none !important; }

.custom-cursor {
  --mouse-x: 0;
  --mouse-y: 0;
  position: relative;
}

.custom-cursor {
  &.cursor-down::before {
    width: 40px;
    height: 40px;
  }

  &.cursor-show::before {
    opacity: 1;
  }

  &::before {
    transition: width 0.1s ease-out, height 0.1s ease-out, opacity 0.1s ease-out;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;
    left: var(--mouse-x);
    top: var(--mouse-y);
    transform: translate(-50%, -50%);
    z-index: 99999;
    opacity: 0;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>