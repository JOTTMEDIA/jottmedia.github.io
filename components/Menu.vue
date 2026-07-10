<template>
  <div class="right-4 sm:right-8 -bottom-2 sm:bottom-0 z-50 fixed flex flex-col justify-center">
    <button @click="open = !open"
            class="z-50 flex justify-center items-center bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 rounded-full w-10 sm:w-12 h-10 sm:h-12 transition-all duration-700">
      <UIcon v-if="!open" class="z-50 text-jm-primary-brown text-lg sm:text-2xl transition-all" name="i-mdi-menu"/>
      <UIcon v-else class="z-50 text-jm-primary-brown text-lg sm:text-2xl transition-all" name="i-mdi-close-thick"/>
    </button>
    <div class="relative mx-auto py-3">
      <Center>
        <transition name="page" mode="in-out">
          <div
              v-if="open"
              class="top-0 left-0 z-30 fixed flex flex-col justify-start bg-jm-primary-brown w-screen h-screen">
            <UContainer class="my-8" :ui="{'constrained': 'sm:max-w-6xl'}">
              <Center>
                <NuxtLink to="/" @click="open = false" class="inline-block mt-2 border-0 w-full sm:w-[325px] no-underline">
                  <Image src="logo-overlay.svg" alt="JOTT.MEDIA GmbH" class="w-full" :shine="false"
                         :parallax="false"/>
                </NuxtLink>
              </Center>
            </UContainer>

            <UContainer class="flex sm:flex-row flex-col justify-around sm:mt-12"
                        :ui="{'constrained': 'w-full', padding: 'space-x-2 sm:space-x-4'}">
              <ul class="space-y-4 sm:space-y-8 font-extrabold text-jm-contrast-black text-xl xl:text-3xl text-left uppercase">
                <li>
                  <NuxtLink @click="open = false" to="/">.Startseite</NuxtLink>
                </li>
              </ul>
              <div class="mt-8 sm:mt-0 text-left sm:text-right">
                  <nuxt-link to="/privacy" @click="open = false" class="block font-extrabold text-sm sm:text-base">
                    Datenschutz
                  </nuxt-link>
                  <nuxt-link to="/imprint" @click="open = false" class="block font-extrabold text-sm sm:text-base">
                    Impressum
                  </nuxt-link>
                <address class="mt-6 sm:mt-16 text-sm not-italic">
                  JOTT.MEDIA GmbH<br>
                  Lindenstraße 12<br>
                  31683 Obernkirchen<br>
                  <br>
                  <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link>
                  <br>
                  <br>
                  <div class="flex sm:justify-end items-center space-x-1 text-left sm:text-right">
                    <p class="pr-2">Folge uns:</p>
                    <NuxtLink href="https://www.instagram.com/jott.media/" target="_blank"
                              class="inline-block border-0 no-underline">
                      <UIcon class="block text-[#1E1E1E] text-2xl" name="i-mdi-instagram"/>
                    </NuxtLink>
                    <NuxtLink href="https://de.linkedin.com/company/jottmedia" target="_blank"
                              class="inline-block border-0 no-underline">
                      <UIcon class="block text-[#1E1E1E] text-2xl" name="i-mdi-linkedin"/>
                    </NuxtLink>
                  </div>
                </address>
              </div>
            </UContainer>
          </div>
        </transition>
      </Center>
    </div>
  </div>
</template>
<script setup>
const open = ref(false)
</script>