<template>
  <div class="fixed text-center flex flex-col justify-center -bottom-2 sm:bottom-0 right-4 sm:right-8 z-50">
    <UButton
        :style="{ backgroundColor: 'var(--color-jm-contrast-black)'}"
        :ui="{ base: 'h-10 w-10 sm:h-12 sm:w-12 border-0 flex justify-center items-center transition-all duration-700 opacity-70 rounded-full z-50' }"
        class="hover:!opacity-100"
        color="secondary"
        label="Einfach machen"
        outline="true"
        size="lg"
        variant="outline"
        @click="open = !open"
    >
      <UIcon v-if="!open" class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-menu"/>
      <UIcon v-else class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-close-thick"/>
    </UButton>
    <div class="relative py-3 mx-auto ">
      <transition mode="in-out" name="page">
        <div
            v-if="open"
            class="top-0 left-0 w-screen h-screen flex flex-col justify-start z-30 bg-(--color-jm-primary-brown) fixed">
          <UContainer class="my-8">

            <NuxtLink class="inline-block no-underline w-full mt-2 pr-2 sm:w-[325px] border-0" to="/"
                      @click="open = false">
              <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="w-2/3 sm:w-full mx-auto"
                     src="logo-overlay.svg"/>
            </NuxtLink>
          </UContainer>
          <UContainer :ui="{ padding: 'space-x-2 sm:space-x-4'}"
                      class="max-w-(--container-6xl) w-full sm:mt-12 flex flex-col sm:flex-row justify-around">
            <ul class="uppercase font-extrabold text-left text-xl xl:text-3xl space-y-4 sm:space-y-8 text-jm-contrast-black">
              <li>
                <NuxtLink to="/" @click="open = false">.Startseite</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" @click="open = false">.Blog</NuxtLink>
              </li>
            </ul>
            <div class="text-left sm:text-right mt-8 sm:mt-0">
              <nuxt-link class="block font-extrabold text-sm sm:text-base" to="/privacy" @click="open = false">
                Datenschutz
              </nuxt-link>
              <nuxt-link class="block font-extrabold text-sm sm:text-base" to="/imprint" @click="open = false">
                Impressum
              </nuxt-link>
              <address class="not-italic text-sm  mt-6 sm:mt-16">
                JOTT.MEDIA GmbH<br>
                Bahnhofstraße 33<br>
                31675 Bückeburg<br>
                <br>
                <nuxt-link href="tel:+4957229184984">+49 5722 9184984</nuxt-link>
                <br>
                <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link>
                <br>
                <br>
                <div class="text-left sm:text-right flex sm:justify-end items-center space-x-1">
                  <p class="pr-2">Folge uns:</p>
                  <NuxtLink class="inline-block no-underline border-0" href="https://www.instagram.com/jott.media/"
                            target="_blank">
                    <UIcon class="text-[#1E1E1E] text-2xl block " name="i-mdi-instagram"/>
                  </NuxtLink>
                  <NuxtLink class="inline-block no-underline border-0"
                            href="https://de.linkedin.com/company/jottmedia"
                            target="_blank">
                    <UIcon class="text-[#1E1E1E] text-2xl block" name="i-mdi-linkedin"/>
                  </NuxtLink>
                </div>
              </address>
            </div>
          </UContainer>
        </div>
      </transition>

    </div>
  </div>
</template>
<script setup>
const open = ref(false)
</script>