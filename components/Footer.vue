<template>
  <div class="relative bg-jm-secondary-grey-lighter mt-40">
    <Background height="127px" parallax="to-left" position="top" src="footer-top.svg"/>

    <div class="relative z-10">


      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10 z-10">
        <div class="flex justify-between items-end">
          <div>
            <address class="not-italic">
              JOTT.MEDIA GmbH<br>
              Bahnhofstraße 33<br>
              31675 Bückeburg<br>
              <br>
              <nuxt-link href="tel:+4957229184984">+49 5722 9184984</nuxt-link><br>
              <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link>
            </address>
          </div>
          <div class="text-right">
            <nuxt-link class="block font-[800] text-jm-primary-green uppercase" to="/imprint">{{
                t('imprint')
              }}
            </nuxt-link>
            <nuxt-link class="block font-[800] text-jm-primary-green uppercase" to="/privacy">{{
                t('privacy')
              }}
            </nuxt-link>
          </div>
        </div>
      </UContainer>

      <Background :out="false" height="400px" position="bottomRight" src="footer-box.png" width="400px"/>
    </div>

    <div class="bg-jm-primary-green text-sm py-5">
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – {{ t('rights') }}</p>
      </UContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
const {t} = useI18n()
</script>