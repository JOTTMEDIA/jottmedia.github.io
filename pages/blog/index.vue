<template>
  <UPage>
    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[325px]" :shine="false" :parallax="false" />
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <h1>Neues aus der digitalen Welt</h1>
        <p class="lead">Hier möchten wir gerne unser Wissen, über die digitale Zukunft, Technologien, Design und das Leben in einer digitalen Agentur, mit euch teilen, bleibt gespannt, wir sind es auch.</p>

        <Button>Alle anzeigen</Button>
        <Button>Design</Button>
        <Button>Entwicklung</Button>
        <Button>Neuigkeiten</Button>

        <UBlogList>
          <UBlogPost v-for="(article, index) in articles" :key="index" v-bind="article" />
        </UBlogList>

        <UPagination v-model="page" :page-count="pageMaxArticles" :total="articles?.length ?? 0" :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
          <template #prev="{ onClick }">
            <UTooltip text="Previous page">
              <UButton icon="i-heroicons-arrow-small-left-20-solid" color="primary" :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:first-child]:rotate-180 me-2" @click="onClick" />
            </UTooltip>
          </template>

          <template #next="{ onClick }">
            <UTooltip text="Next page">
              <UButton icon="i-heroicons-arrow-small-right-20-solid" color="primary" :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:last-child]:rotate-180 ms-2" @click="onClick" />
            </UTooltip>
          </template>
        </UPagination>

      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
navigateTo("/");

const route = useRoute()
const page = ref(1)
const pageMaxArticles = 10
const { data: articles } = await useAsyncData(route.path, () => queryContent(route.path).limit(pageMaxArticles).skip(pageMaxArticles * (page.value - 1)).find())

useHead({
  title: 'Blog - JOTT.MEDIA'
})
</script>
