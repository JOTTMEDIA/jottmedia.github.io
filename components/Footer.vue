<template>
  <div class="relative bg-(--color-jm-secondary-grey-lighter) mt-40">
    <Background height="127px" parallax="to-left" position="top" src="footer-top.svg"/>

    <div class="relative z-10">


      <UContainer class="relative py-10 z-10 max-w-(--container-2xl)">
        <div class="flex justify-between items-end">
          <div>
            <address class="not-italic">
              JOTT.MEDIA GmbH<br>
              Bahnhofstraße 33<br>
              31675 Bückeburg<br>
              <br>
              <nuxt-link href="tel:+4957229184984">+49 5722 9184984</nuxt-link>
              <br>
              <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link>
            </address>
          </div>
          <div class="text-right">
            <nuxt-link class="block font-[800] text-(--color-jm-primary-green) uppercase" to="/imprint">.Impressum
            </nuxt-link>
            <nuxt-link class="block font-[800] text-(--color-jm-primary-green) uppercase" to="/privacy">.Datenschutz
            </nuxt-link>
          </div>
        </div>
      </UContainer>

      <Background :out="false" height="400px" position="bottomRight" src="footer-box.png" width="400px"/>
    </div>

    <div class="bg-(--color-jm-primary-green) text-sm py-5">
      <UContainer class="max-w-(--container-2xl)">
        <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
      </UContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>