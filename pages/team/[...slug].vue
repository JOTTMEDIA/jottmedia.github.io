<template>
  <UPage>
    <UPageBody class="mt-0 pb-0 h-screen">
      <UContainer
          :ui="{'constrained': 'max-w-full gap-0 px-0 sm:px-0 lg:px-0 '}"
          class="flex flex-col sm:flex-row sm:h-screen">
        <div class="sm:w-1/2 h-1/2 sm:h-full">
          <Image :cover="true" :parallax="false" :shine="false" :src="person?.meta?.src as string"
                 class="w-full h-full"/>
        </div>
        <div
            :class="person?.meta.bg"
            class="sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center px-4 space-y-4 lg:px-6 lg:space-y-6 xl:space-y-8 xl:px-8 2xl:space-y-12 2xl:px-20">
          <button
              class="fixed bottom-3 sm:bottom-6 right-4 sm:right-10 h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center bg-jm-contrast-black transition-all duration-700 bg-opacity-70 hover:bg-opacity-100  rounded-full z-50"
              @click="navigateBack">
            <UIcon class="text-lg sm:text-3xl text-jm-primary-brown transition-all z-50" name="i-mdi-close-thick"/>
          </button>
          <h1 class="text-lg xl:text-xl uppercase font-extrabold" v-html="person?.meta.name"/>
          <p class="font-light" v-html="person?.description"></p>
          <UContainer class="relative pt-0 z-10">
            <Center>
              <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
                <Button :class="person?.meta.button" class=" text-xs lg:text-base my-4">Lerne uns kennen</Button>
              </NuxtLink>
            </Center>
          </UContainer>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'minimal'
});
const route = useRoute()
const router = useRouter()

function navigateBack() {
  router.back();
}

const {data: person} = await useAsyncData(() => {
  return queryCollection('team')
      .path(route.path)
      .first()
})

</script>
