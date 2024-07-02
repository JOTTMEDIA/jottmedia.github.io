<template>
  <UPage>

    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-7xl','base': 'text-right'}">

          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[336px]" :shine="false" :parallax="false" />
          </NuxtLink>
      </UContainer>
      <UContainer class="py-10" :ui="{'constrained': 'max-w-7xl'}">
        <Headline type="h2" class="pb-12 leading-[57px] lowercase"><b class="text-jm-primary-brown uppercase">Neues</b> aus der <b class="text-jm-primary-brown uppercase"> digitalen Welt </b></Headline>


        <Paragraph class="text-base">Hier möchten wir gerne unser Wissen, über die digitale Zukunft, Technologien, Design <br> und das Leben in einer digitalen Agentur, mit euch teilen, bleibt gespannt, wir sind es auch.</Paragraph>


        <UContainer :ui="{'constrained': 'max-w-4xl space-x-4 ml-0 lg:px-0'}">
        <Button class="text-jm-secondary-white border-transparent  bg-nuxt-ui-primary-50">Alle anzeigen</Button>
        <Button>Design</Button>
        <Button class="text-jm-primary-green border-jm-primary-green">Entwicklung</Button>
        <Button class="text-jm-contrast-blue border-jm-contrast-blue">Social Media</Button>
        <Button class="text-jm-primary-grey border-jm-primary-grey">Finanzen</Button>
        <Button class="text-jm-contrast-black border-jm-contrast-black">Unternehmen</Button>
        </UContainer>
<!--        <UBlogList>
          <UBlogPost v-for="(article, index) in articles" :key="index" v-bind="article" />
        </UBlogList>-->

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

const route = useRoute()
const page = ref(1)
const pageMaxArticles = 10
const { data: articles } = await useAsyncData(route.path, () => queryContent(route.path).limit(pageMaxArticles).skip(pageMaxArticles * (page.value - 1)).find())

useHead({
  title: 'Blog - JOTT.MEDIA'
})
</script>
