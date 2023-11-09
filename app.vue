<template>
  <div class="custom-cursor" :style="{ '--mouse-x': cursorX + 'px', '--mouse-y': cursorY + 'px' }">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);

const updateCursorPosition = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});
</script>

<style>
* { cursor: none !important; }

.custom-cursor {
  --mouse-x: 0;
  --mouse-y: 0;
  position: relative;
}

.custom-cursor::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 1000;
  left: var(--mouse-x);
  top: var(--mouse-y);
  transform: translate(-50%, -50%);
}
</style>