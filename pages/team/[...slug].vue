<template>
  <UPage>
    <UPageBody class="mt-0 pb-0">
      <UContainer
          class="flex"
          :class="person.bg"
          :ui="{'constrained': 'max-w-full gap-0 lg:px-0 h-screen'}" v-for="person in team">
        <div class="w-1/2">
            <NuxtImg class="w-full h-full" :src="person.image"/>
</div> <div class="w-1/2 flex flex-col justify-center px-24">
          <h1 v-html="person?.name" class=" py-16 text-xl uppercase font-extrabold" />
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
const route = useRoute()
const pageMaxPersons = 1
const {data: team} = await useAsyncData(route.path, () =>
    queryContent(route.path)
        .limit(pageMaxPersons)
        .find())
</script>