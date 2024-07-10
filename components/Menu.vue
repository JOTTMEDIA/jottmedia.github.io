<template>
  <div class=" flex flex-col justify-center fixed -top-2 sm:top-2 right-4 sm:right-8 xl:right-16 z-50 ">
    <div class="relative py-3 sm:max-w-xl mx-auto ">
      <nav x-data="{ open: false }">
        <button class="text-black  w-10 h-10 relative focus:outline-none bg-transparent z-[100]" @click="open = !open">
          <span class="sr-only">Open main menu</span>
          <div class="block w-5 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2 z-50">
            <span aria-hidden="true" class="block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-2': !open }"></span>
            <span aria-hidden="true" class="block absolute  h-1 w-8 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
            <span aria-hidden="true" class="block absolute  h-1 w-8 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-2': !open}"></span>
          </div>
        </button>
      </nav>
      <Center>
      <div class="top-0 left-0  w-screen h-screen transition-opacity  duration-[400ms]  z-50  bg-jm-primary-brown fixed"
           :class="{ 'opacity-100 ': open, 'opacity-0 blur-lg ': !open }"
      >
        <UContainer class="mb-4 mt-8  sm:my-10  lg:my-12 xl:my-16" :ui="{'constrained': 'max-w-6xl '}">
          <Center>
            <NuxtLink to="/" @click="open = false"  class="inline-block no-underline border-0">
              <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="lg:w-[490px]" :shine="false" :parallax="false" />
            </NuxtLink>
          </Center>
        </UContainer>

        <UContainer class="flex flex-col  sm:flex-row justify-around" :ui="{'constrained': 'max-w-3xl',  padding: 'sm:space-x-14'}">
        <ul class="uppercase font-extrabold text-left text-xl xl:text-3xl space-y-2 sm:space-y-7 text-jm-contrast-black">
          <li><NuxtLink @click="open = false" to="/blog">.blog</NuxtLink></li>
        </ul>
        <div class="text-left sm:text-right mt-4 sm:mt-0">
        <ul>
          <nuxt-link to="/privacy" @click="open = false"  class="block font-extrabold text-sm sm:text-sm">Datenschutz</nuxt-link>
          <nuxt-link to="/imprint" @click="open = false"  class="block font-extrabold text-sm sm:text-sm">Impressum</nuxt-link>
        </ul>
          <address class="not-italic text-sm  mt-2 sm:mt-6">
            JOTT.MEDIA GmbH<br>
            Bahnhofstraße 33<br>
            31675 Bückeburg<br>
            <br>
            <nuxt-link href="tel:+4957229979070">+49 5722 99790 70</nuxt-link><br>
            <nuxt-link href="mailto:hallo@jott.media">hallo@jott.media</nuxt-link><br>
            <br><div class="text-left sm:text-right flex sm:justify-end items-center  space-x-1 ">
            <p class="pr-2">Folge Uns:</p>
            <NuxtLink href="https://www.instagram.com/jott.media/"  target="_blank" class="inline-block no-underline border-0">
              <UIcon class="text-[#1E1E1E] text-2xl block " name="i-mdi-instagram" />            </NuxtLink>
            <NuxtLink href="https://de.linkedin.com/company/jottmedia" target="_blank" class="inline-block no-underline border-0">
              <UIcon class="text-[#1E1E1E] text-2xl block" name="i-mdi-linkedin"/>
            </NuxtLink>

          </div>
          </address>
          </div>
        </UContainer>
      </div>
      </Center>
    </div>
  </div>
</template>

<script setup>

const open = ref(false)

</script>


