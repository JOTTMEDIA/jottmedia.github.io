<template>
  <UPage>
    <UPageBody class="mt-0 pb-0 h-screen">
      <UContainer
          :ui="{'constrained': 'max-w-full gap-0 px-0 sm:px-0 lg:px-0 '}"
          class="flex sm:flex-row flex-col sm:h-screen">
        <div class="sm:w-1/2 h-1/2 sm:h-full">
          <Image :cover="true" :parallax="false" :shine="false" :src="person?.meta?.src as string"
                 class="w-full h-full"/>
        </div>
        <div
            :class="person?.meta.bg"
            class="flex flex-col justify-center space-y-4 lg:space-y-6 2xl:space-y-12 xl:space-y-8 px-4 lg:px-6 2xl:px-20 xl:px-8 sm:w-1/2 h-1/2 sm:h-full">
          <button
              class="right-4 sm:right-10 bottom-3 sm:bottom-6 z-50 fixed flex justify-center items-center bg-jm-contrast-black bg-opacity-70 hover:bg-opacity-100 rounded-full w-10 sm:w-12 h-10 sm:h-12 transition-all duration-700"
              @click="navigateBack">
            <UIcon class="z-50 text-jm-primary-brown text-lg sm:text-3xl transition-all" name="i-mdi-close-thick"/>
          </button>
          <h1 class="font-extrabold text-lg xl:text-xl uppercase" v-html="person?.meta.name"/>
          <p class="font-light" v-html="person?.description"></p>
          <UContainer class="z-10 relative pt-0">
            <Center>
              <NuxtLink href="mailto:hallo@jott.media">
                <Button :class="person?.meta.button" class="my-4 text-xs lg:text-base">Kontakt</Button>
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
