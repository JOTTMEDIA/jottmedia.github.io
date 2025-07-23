<template>
  <slot/>
  <UFooter class="z-10 relative py-0">
    <template #top>
      <UContainer class="py-0 max-w-(--container-2xl)">
        <div class="flex justify-between items-end py-0">
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
            <nuxt-link
                class="block font-[800] text-(--color-jm-primary-green) uppercase"
                to="/imprint">.Impressum
            </nuxt-link>
            <nuxt-link
                class="block font-[800] text-(--color-jm-primary-green) uppercase"
                to="/privacy">.Datenschutz
            </nuxt-link>
          </div>
        </div>
      </UContainer>
    </template>
    <template #right>
      <NuxtImg
          alt="Footer Bottom"
          class="absolute pointer-events-none object-contain w-96 bottom-16 right-0 -z-1 "
          format="webp"
          src="/images/footer-box.png"
      />
    </template>
    <template #bottom>
      <div class=" bg-(--color-jm-primary-green) text-xl py-6 flex items-center justify-center">
        <UContainer class="max-w-(--container-2xl) ">
          <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
        </UContainer>
      </div>
    </template>
    <template #left>
      <div class="absolute left-0 bottom-14 w-full h-full bg-(--color-jm-secondary-grey-lighter)  -z-20"></div>

      <NuxtImg
          alt="Footer Top"
          class="absolute left-1/2 -top-24 bg-(--color-j m-secondary-white) -translate-x-1/2 -z-10 h-[58px] w-full"
          src="/images/footer-top.svg"
      />
    </template>
  </UFooter>
</template>
<script lang="ts" setup>
import type {NavigationMenuItem} from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: '.Impressum',
  to: '/imprint',
  target: '_blank',
}, {
  label: '.Datenschutz',
  to: '/privacy',
  target: '_blank'
}]
defineOptions({
  inheritAttrs: false
})

</script>