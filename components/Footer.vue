<template>
  <div class="bg-jm-secondary-grey-lighter">
    <UContainer class="py-8" :ui="{'constrained': 'max-w-xl'}">

      <Instagram />

      <div class="flex justify-between items-end leading-7">
        <div>
          <address class="not-italic">
            JOTT.MEDIA GmbH<br>
            Bahnhofstraße 33<br>
            31675 Bückeburg<br>
            <br>
            <a href="tel:+4957229979070"><span v-cursor-block>+49 5722 99790 70</span></a><br>
            <a href="mailto:hallo@jott.media"><span v-cursor-block>hallo@jott.media</span></a>
          </address>
        </div>
        <div class="text-right">
          <nuxt-link to="/imprint" class="block font-[700] text-jm-primary-green uppercase"><span v-cursor-block>.Impressum</span></nuxt-link>
          <nuxt-link to="/privacy" class="block font-[700] text-jm-primary-green uppercase"><span v-cursor-block>.Datenschutz</span></nuxt-link>
        </div>
      </div>
    </UContainer>
    <div class="bg-jm-primary-green text-sm p-4">
      <UContainer :ui="{'constrained': 'max-w-xl'}">
        <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>