<template>

  <UPage>
    <UPageBody class="mt-0 pb-0 h-screen fixed">
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
import type {Collections} from '@nuxt/content'

const {locale} = useI18n()
const router = useRouter()
const route = useRoute()
const {slug} = route.params;


const collection = computed(() => `team_${locale.value}` as keyof Collections)

const {data: person} = await useAsyncData(async () => {
  console.log('Fetching from collection:', collection)
  console.log('Using route path:', route.path)
  const result = await queryCollection(`team_${locale.value}`)
      .where("slug", "=", slug)
      .select(
          "title",
          "slug",
          "description",
          "body",
          "meta"
      )
      .first()
  console.log('Fetched result:', result)
  return result
}, {
  watch: [locale],
})

function navigateBack() {
  router.back()
}

console.log(route.path + ' route path')
console.log(collection.value + ' collection')
</script>
