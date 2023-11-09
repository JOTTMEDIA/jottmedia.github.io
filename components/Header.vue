<script setup lang="ts">
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
<!--      <Logo class="w-auto h-6" />-->
    </template>

    <template #right>
      <UDocsSearchButton :label="null"  />
      <UColorModeButton />
    </template>

    <template #panel>
      <UNavigationTree :links="links" />
    </template>
  </UHeader>
</template>