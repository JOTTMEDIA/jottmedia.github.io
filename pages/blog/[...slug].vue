<template>
  <UPage class="m-0 p-0 bg-(--color-jm-secondary-white)">
    <UPageBody
        class="prose-h1:uppercase prose-h1:py-4 prose-h1:text-2xl prose-p:leading-7  prose-headings:uppercase prose-lead:uppercase prose-lead:text-base"
        prose>
      <UContainer class="max-w-(--container-2xl) text-center">

        <NuxtLink class="inline-block no-underline border-0" to="/">
          <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="w-[325px] mt-2" src="logo.svg"/>
        </NuxtLink>

      </UContainer>
      <UContainer class="max-w-(--container-2xl)">
        <UPageHeader class="text-2xl xl:text-5xl xl:leading-14" v-html="page?.title"/>
        <div class="flex gap-2 mt-12 mb-2">
          <UBadge v-for="category in page?.meta.categories"
                  :key="category"
                  :label="category"
                  class="px-2 text-xs text-(--color-jm-secondary-white) bg-(--color-jm-primary-green) font-extrabold"
                  color="primary"
                  size="xs"
                  variant="solid"/>
        </div>
        <small>{{ page?.meta.date }} von
          <NuxtLink :to="`/team/${(page?.meta.author as string).toLowerCase()}`"><b
              class="text-(--color-jm-primary-green) ">{{ page?.meta.author }}
          </b></NuxtLink>
        </small>
        <p class="lead pt-6">{{ page?.description }}</p>
      </UContainer>
      <UContainer class="max-w-(--container-4xl)">
        <Image :alt="page?.meta.imageAlt as string | undefined"
               :hint="page?.meta.imageAlt as string | undefined"
               :public-src="true"
               :src="page?.meta.image as string"/>
      </UContainer>
      <UContainer class="pb-10 max-w-(--container-2xl)">
        <ContentRenderer v-if="page?.body" :value="page"/>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>

const route = useRoute()
const {data: page} = await useAsyncData(() => {
  return queryCollection('blog')
      .path(route.path)
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
