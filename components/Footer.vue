<template>
  <div class="relative bg-jm-secondary-grey-lighter mt-40">
    <Background height="127px" src="footer-top.svg" position="top" parallax="to-left" />

    <div class="z-10 relative">


      <UContainer class="z-10 relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <div class="flex justify-between items-end">
          <div>
            <address class="not-italic">
              JOTT.MEDIA GmbH<br>
              Lindenstraße 12<br>
              31683 Obernkirchen<br>
              <br>
              <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link>
            </address>
          </div>
          <div class="text-right">
            <nuxt-link to="/imprint" class="block font-[800] text-jm-primary-green uppercase">.Impressum</nuxt-link>
            <nuxt-link to="/privacy" class="block font-[800] text-jm-primary-green uppercase">.Datenschutz</nuxt-link>
          </div>
        </div>
      </UContainer>

      <Background width="400px" height="400px" src="footer-box.png" position="bottomRight" :out="false" />
    </div>

    <div class="bg-jm-primary-green py-5 text-sm">
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
      </UContainer>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>