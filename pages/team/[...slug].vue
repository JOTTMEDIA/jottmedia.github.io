<template>
  <UPageBody class="m-0 p-0 h-screen flex flex-col sm:flex-row space-y-0">
    <div class="sm:w-1/2">
      <Image :cover="true" :parallax="false" :shine="false" :src="person?.meta?.src as string"
             class="w-full h-full "/>
    </div>
    <div
        :class="person?.meta.bg"
        class="sm:w-1/2 flex flex-col justify-center p-4 space-y-4 lg:px-6 lg:space-y-6 xl:space-y-8 xl:px-8 2xl:space-y-12 2xl:px-20">
      <UButton
          :style="{ backgroundColor: 'var(--color-jm-contrast-black)', position : 'fixed' }"
          :ui="{ base: 'fixed h-10 w-10 border-0 bottom-0 right-2 xl:bottom-1  lg:right-4 xl:right-10 sm:h-12 sm:w-12 flex justify-center items-center transition-all duration-700 opacity-70 rounded-full z-50' }"
          class="hover:!opacity-100"
          color="secondary"
          label="Einfach machen"
          outline="true"
          size="lg"
          variant="outline"
          @click="navigateBack"
      >
        <UIcon class="text-lg sm:text-3xl text-jm-primary-brown transition-all z-50" name="i-mdi-close-thick"/>
      </UButton>

      <h1 class="text-lg xl:text-2xl uppercase font-extrabold" v-html="person?.meta.name"/>
      <p class="font-light text-sm xl:text-base 2xl:text-lg" v-html="person?.description"></p>
      <UContainer class="relative pt-4 text-center z-10">
        <UButton
            :class="person?.meta.button"
            color="secondary"
            label="Lerne uns kennen"
            outline="true"
            size="xl"
            target="_blank"
            to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
            variant="outline"
        />
      </UContainer>
    </div>
  </UPageBody>

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
