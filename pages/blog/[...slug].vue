<template>
  <UPage>
    <UPageBody prose
               class="prose-h1:normal-case prose-h1:font-normal prose-headings:uppercase prose-lead:uppercase prose-lead:text-base">
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[325px] mt-2" :shine="false" :parallax="false"/>
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer class="pt-10" :ui="{'constrained': 'max-w-2xl'}">
        <h1 v-html="page?.title" class="text-4xl"/>
        <div class="flex gap-2 mb-2">
          <UBadge :ui="{ rounded: 'rounded-lg', font: 'font-extrabold', size: { xs: 'text-xs px-3 py-0.5' } }"
                  v-for="category in page?.categories" :key="category" :label="category" size="xs"/>
        </div>
        <small>{{ page?.date }} von
          <NuxtLink :to="`../team/${page?.author.toLowerCase()}`"><b class="text-jm-primary-green">{{ page?.author }}
          </b></NuxtLink>
        </small>
        <p class="lead">{{ page?.description }}</p>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-4xl'}">
        <Image :src="page?.image" :public-src="true" :alt="page?.imageAlt" :hint="page?.imageAlt"/>
      </UContainer>
      <UContainer class="pb-10" :ui="{'constrained': 'max-w-2xl'}">
        <ContentRenderer v-if="page?.body" :value="page"/>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">

const route = useRoute()
const {data: page} = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value?.seoTitle + ' - Blog - JOTT.MEDIA',
  ogTitle: page.value?.seoTitle + ' - Blog - JOTT.MEDIA',
  description: page.value?.description,
  ogDescription: page.value?.description,
  ogImage: "https://jott.media" + page.value?.image,
  twitterCard: 'summary_large_image',
})
</script>
