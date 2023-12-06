<script setup>
const links = [{
  label: 'IMpres',
  to: 'https://ui.nuxt.com/'
}, {
  label: 'Nuxt Docs',
  to: 'https://nuxt.com'
}, {
  label: 'Nuxt Studio',
  to: 'https://nuxt.studio',
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
    </template>
  </UFooter>
</template>