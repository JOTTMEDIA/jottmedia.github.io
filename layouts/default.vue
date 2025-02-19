<template>
  <main>
    <transition name="fade">
      <Menu v-if="open" :open="open"/>
    </transition>
    <MenuButton :open="open" @toggle="open = !open"/>
    <UMain>
      <slot/>
    </UMain>
    <Footer/>
  </main>
</template>

<script lang="ts" setup>
import MenuButton from '~/components/MenuButton.vue'

const Menu = defineAsyncComponent(() => import('@/components/Menu.vue'))
const open = ref(false)
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>