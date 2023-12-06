<template>
  <UFooter :links="links">
    <template #left>
      <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
    </template>
  </UFooter>
</template>

<script setup>
const links = [{
  label: 'Impressum',
  to: '/imprint'
}, {
  label: 'Datenschutz',
  to: '/priacy'
}]
</script>