<template>
  <div class="relative z-10">
    <slot/>
    <UFooter>
      <template #top>
        <UContainer class="relative z-10 py-0  max-w-(--container-2xl)">
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
      <!--      <UNavigationMenu

                :arrow="false"

                :items="items" class=""
                orientation="vertical"
            />-->
      <template #bottom>
        <div class=" bg-(--color-jm-primary-green) text-sm py-5">
          <UContainer class="max-w-(--container-2xl)">
            <p>© {{ new Date().getFullYear() }} JOTT.MEDIA – Alle Rechte vorbehalten</p>
          </UContainer>
        </div>
      </template>

    </UFooter>
  </div>

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