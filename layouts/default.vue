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
import {hydrateOnIdle} from "@vue/runtime-core";

const Menu = defineAsyncComponent(() => import('@/components/Menu.vue'))

const MenuButton = defineAsyncComponent({
  loader: () => import('@/components/MenuButton.vue'),
  hydrate: hydrateOnIdle(),
  timeout: 2000
})
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