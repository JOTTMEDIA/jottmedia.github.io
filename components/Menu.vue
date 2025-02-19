<template>
  <UContainer :ui="{'constrained': 'sm:max-w-6xl', padding: 'space-x-2 sm:space-x-4'}"
              class="fixed flex flex-col justify-center -bottom-2 sm:bottom-0 right-4 sm:right-8 z-50">
    <button
        class="h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center bg-jm-contrast-black transition-all duration-700 bg-opacity-70 hover:bg-opacity-100  rounded-full z-50"
        @click="open = !open">
      <UIcon v-if="!open" class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-menu"/>
      <UIcon v-else class="text-lg sm:text-2xl text-jm-primary-brown transition-all z-50" name="i-mdi-close-thick"/>
    </button>
    <div class="relative py-3 mx-auto ">
      <Center>
        <transition mode="in-out" name="page">
          <div
              v-if="open"
              class="top-0 left-0 w-screen h-screen flex flex-col justify-start  z-30 bg-jm-primary-brown fixed">


            <UContainer :ui="{'constrained': 'sm:max-w-8xl'}" class="my-8">
              <button :class="{ 'font-bold': currentLocale === 'de' }" @click="setLocale('de')">DE</button>
              |
              <button :class="{ 'font-bold': currentLocale === 'en' }" @click="setLocale('en')">EN</button>
              <Center>
                <NuxtLink :to="localePath({path: '/'})"
                          class="inline-block no-underline w-full mt-2 xl:mr-3 sm:w-[325px] border-0"
                          @click="open = false">
                  <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="w-full"
                         src="logo-overlay.svg"/>
                </NuxtLink>
              </Center>
            </UContainer>

            <UContainer :ui="{'constrained': 'w-full', padding: 'space-x-2 sm:space-x-4'}"
                        class="sm:mt-12 flex flex-col sm:flex-row justify-around">
              <ul class="uppercase font-extrabold text-left text-xl xl:text-3xl space-y-4 sm:space-y-8 text-jm-contrast-black">
                <li>
                  <NuxtLink :to="localePath({ name: 'index' })" @click="open = false">{{ t('menu.home') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath({name: 'blog'})" @click="open = false">{{ t('menu.blog') }}</NuxtLink>
                </li>
              </ul>
              <div class="text-left sm:text-right mt-8 sm:mt-0">
                <nuxt-link :to="localePath({path: 'privacy'})" class="block font-extrabold text-sm sm:text-base"
                           @click="open = false">
                  .{{ t('privacy') }}
                </nuxt-link>
                <nuxt-link :to="localePath({path: 'imprint'})" class="block font-extrabold text-sm sm:text-base"
                           @click="open = false">
                  .{{ t('imprint') }}
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
                    <p class="pr-2"> {{ t('menu.follow') }}</p>
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
      </Center>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
const {t, locale, setLocale} = useI18n()
const localePath = useLocalePath()
const open = ref(false)
const currentLocale = computed(() => locale.value)


</script>