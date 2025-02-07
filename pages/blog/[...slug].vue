<template>
  <UPage>
    <UPageBody class="prose-h1:normal-case prose-h1:font-normal prose-headings:uppercase prose-lead:uppercase prose-lead:text-base"
               prose>
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink class="inline-block no-underline border-0" to="/">
            <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="w-[325px] mt-2" src="logo.svg"/>
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="pt-10">
        <h1 class="text-4xl" v-html="page?.title"/>
        <div class="flex gap-2 mb-2">
          <UBadge v-for="category in page?.categories"
                  :key="category" :label="category" :ui="{ rounded: 'rounded-lg', font: 'font-extrabold', size: { xs: 'text-xs px-3 py-0.5' } }" size="xs"/>
        </div>
        <small>{{ page?.date }} von
          <NuxtLink :to="`../team/${page?.author.toLowerCase()}`"><b class="text-jm-primary-green">{{ page?.author }}
          </b></NuxtLink>
        </small>
        <p class="lead">{{ page?.description }}</p>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-4xl'}">
        <Image :alt="page?.imageAlt" :hint="page?.imageAlt" :public-src="true" :src="page?.image"/>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="pb-10">
        <ContentRenderer v-if="page?.body" :value="page"/>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>

const route = useRoute()
const {data: page} = await useAsyncData(route.path, () => queryCollection('content').first())

useSeoMeta({
  title: page.value?.seoTitle + ' - Blog - JOTT.MEDIA',
  ogTitle: page.value?.seoTitle + ' - Blog - JOTT.MEDIA',
  description: page.value?.description,
  ogDescription: page.value?.description,
  ogImage: "https://jott.media" + page.value?.image,
  twitterCard: 'summary_large_image',
})
</script>
