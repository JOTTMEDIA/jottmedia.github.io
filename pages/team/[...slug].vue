<template>
  <UPage>
    <UPageBody class="mt-0 pb-0 h-screen">
      <UContainer
          v-for="person in team"
          class="flex flex-col sm:flex-row h-screen "
          :ui="{'constrained': 'max-w-full gap-0 px-0 sm:px-0 lg:px-0 '}">
        <div class="sm:w-1/2">
          <Image class="w-full h-full" :src="person.src"/>
        </div>
        <div class="sm:w-1/2 flex flex-col justify-between px-4 lg:px-6 lg:py-8 xl:py-4 xl:px-8 2xl:py-16 2xl:px-20" :class="person.bg">
          <button class="mt-2 w-12 h-12 relative text-black focus:outline-none bg-transparent z-[100] self-end"
                  @click="navigateBack">
            <UIcon name="i-mdi-close-thick" class="text-2xl"/>
          </button>
          <h1 v-html="person?.name" class=" sm:leading-5 xl:leading-10 xl:text-xl uppercase font-extrabold "/>
          <p v-html="person?.description" class="text-xs xl:text-sm"></p>
          <UContainer class="relative pt-0 z-10">
            <Center>
              <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
                <Button class=" text-xs lg:text-base my-4" :class="person.button">Lerne uns kennen</Button>
              </NuxtLink>
            </Center>
          </UContainer>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
});
const route = useRoute()
const router = useRouter()

const pageMaxPersons = 1

function navigateBack() {
  router.back();
}

const {data: team} = await useAsyncData(route.path, () =>
  queryContent(route.path)
    .limit(pageMaxPersons)
    .find())
</script>
