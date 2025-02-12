<template>
  <UPage>
    <UPageBody
        class="prose-h1:normal-case prose-h1:font-normal prose-headings:uppercase prose-lead:uppercase prose-lead:text-base"
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
          <UBadge v-for="category in page?.meta.categories"
                  :key="category" :label="category"
                  :ui="{ rounded: 'rounded-lg', font: 'font-extrabold', size: { xs: 'text-xs px-3 py-0.5' } }"
                  size="xs"/>
        </div>
        <small>{{ page?.meta.date }} von
          <NuxtLink :to="`../team/${(page?.meta.author as string).toLowerCase()}`"><b
              class="text-jm-primary-green">{{ page?.meta.author }}
          </b></NuxtLink>
        </small>
        <p class="lead">{{ page?.description }}</p>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-4xl'}">
        <Image :alt="page?.meta.imageAlt as string | undefined"
               :hint="page?.meta.imageAlt as string | undefined"
               :public-src="true"
               :src="page?.meta.image as string"/>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="pb-10">
        <ContentRenderer v-if="page?.body" :value="page"/>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>

import type {Collections} from "@nuxt/content";

const {locale} = useI18n()
const route = useRoute()
const {data: page} = await useAsyncData(async () => {
  const collection = ('articles_' + locale.value) as keyof Collections
  return await queryCollection(collection)
      .first()
})

useSeoMeta({
  title: page.value?.meta.seoTitle + ' - Blog - JOTT.MEDIA',
  ogTitle: page.value?.meta.seoTitle + ' - Blog - JOTT.MEDIA',
  description: page.value?.description,
  ogDescription: page.value?.description,
  ogImage: "https://jott.media" + page.value?.meta.image,
  twitterCard: 'summary_large_image',
})
</script>
