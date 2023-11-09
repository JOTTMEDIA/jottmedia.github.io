<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')

const links = [{
  label: 'Home',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Blog',
  icon: 'i-heroicons-book-open',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UDocsSearchButton :label="null"  />
      <UColorModeButton />
      <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>