<template>
  <UPage>
    <UPageBody class="mt-0 pb-0">
      <UContainer
          v-for="person in team"
          class="flex"
          :class="person.bg"
          :ui="{'constrained': 'max-w-full gap-0 lg:px-0 h-screen'}">
        <div class="w-1/2">
          <NuxtImg class="w-full h-full" :src="person.image"/>
        </div>
        <div class="w-1/2 flex flex-col justify-center px-24">
          <button class="text-black w-12 h-12 relative focus:outline-none bg-transparent z-[100] self-end" @click="navigateBack">
            <UIcon name="i-mdi-close-thick" class="text-2xl"/>
          </button>
          <h1 v-html="person?.name" class=" py-16 text-xl uppercase font-extrabold"/>
          <p v-html="person?.description" class="text-sm "></p>
          <UContainer class="relative pt-10 z-10">
            <Center>
              <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
                <Button :class="person.button">Lerne uns kennen</Button>
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
  layout: 'team'
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

console.log(team)
</script>