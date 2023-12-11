<template>
  <div class="bg-jm-secondary-grey-lighter">
    <UContainer class="py-8" :ui="{'constrained': 'max-w-4xl'}">
      <Instagram />
    </UContainer>

    <UContainer class="py-12" :ui="{'constrained': 'max-w-3xl'}">
      <div class="flex justify-between items-end leading-7">
        <div>
          <address class="not-italic">
            JOTT.MEDIA GmbH<br>
            Bahnhofstraße 33<br>
            31675 Bückeburg<br>
            <br>
            <a href="tel:+4957229979070">+49 5722 99790 70</a><br>
            <a href="mailto:hallo@jott.media">hallo@jott.media</a>
          </address>
        </div>
        <div class="text-right">
          <nuxt-link to="/imprint" class="block font-[700] text-jm-primary-green uppercase">.Impressum</nuxt-link>
          <nuxt-link to="/privacy" class="block font-[700] text-jm-primary-green uppercase">.Datenschutz</nuxt-link>
        </div>
      </div>
    </UContainer>

    <div class="bg-jm-primary-green text-sm py-4">
      <UContainer :ui="{'constrained': 'max-w-3xl'}">
        <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>