<template>
  <UPage>
    <UPageBody prose>
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[325px]" :shine="false" :parallax="false" />
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer class="pt-10" :ui="{'constrained': 'max-w-2xl'}">
        <h1>{{ page?.title }}</h1>
        <small>{{ page?.date }} von {{ page?.author }}</small>
        <p class="lead">{{ page?.description }}</p>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-4xl'}">
        <Image :src="page?.image" :alt="page?.imageAlt" :hint="page?.imageAlt" />
      </UContainer>
      <UContainer class="pb-10" :ui="{'constrained': 'max-w-2xl'}">
        <ContentRenderer v-if="page?.body" :value="page" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useHead({
  title: page.value?.title + ' - Blog - JOTT.MEDIA'
})
</script>
