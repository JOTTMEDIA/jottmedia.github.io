<template>
  <UPage>

    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-7xl','base': 'text-right'}">

          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[336px]" :shine="false" :parallax="false" />
          </NuxtLink>
      </UContainer>
      <UContainer class="py-8" :ui="{'constrained': 'max-w-7xl'}">
        <Headline type="h2" class="pb-12 leading-[57px] lowercase"><b class="text-jm-primary-brown uppercase">Neues</b> aus der <b class="text-jm-primary-brown uppercase"> digitalen Welt </b></Headline>


        <Paragraph class="text-base">Hier möchten wir gerne unser Wissen, über die digitale Zukunft, Technologien, Design <br> und das Leben in einer digitalen Agentur, mit euch teilen, bleibt gespannt, wir sind es auch.</Paragraph>
        <UContainer :ui="{'constrained': 'max-w-4xl space-x-4 ml-0 lg:px-0'}">
          <Button v-for="(category, index) in categories" :key="index"
                  :class="getCategoryClass(category)">{{category}}</Button>
        </UContainer>

        <UBlogList orientation="horizontal" class="mt-16">
          <UBlogPost v-for="(article, index) in articles" :key="index" class="p-4 bg-jm-secondary-grey-lighter">

            <NuxtImg :src="article.image" format="webp"/>
            <Paragraph class="mt-4 mb-4">{{article.date}} von <b class="text-jm-primary-green"> {{article.author}} </b></Paragraph>
            <Headline type="h5" v-html="article.title"></Headline>
            <Paragraph class="text-sm mb-4">{{article.description}} </Paragraph>
            <UBadge
                v-for="(category, index) in article.categories.slice(1)"
                :key="index"
                color="white"
                class="mr-2 py-0 text-xs text-jm-secondary-white font-bold uppercase"
                :class="getCategoryClass(category)"
                variant="solid"
                size="sm">{{category}}</UBadge>
          </UBlogPost>
        </UBlogList>


<!--                <UBlogPost v-for="(article, index) in articles"
                         :description="article.description"
                           :image="article.image"
                           :authors="[article.author]"
                           :date="formatDate(article.date)"
                           :key="index"
                           v-bind:article="article"
                >
                </UBlogPost>-->
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">

const route = useRoute()
const page = ref(1)
const pageMaxArticles = 10
const { data: articles } = await useAsyncData(route.path, () => queryContent(route.path).limit(pageMaxArticles).skip(pageMaxArticles * (page.value - 1)).find())
const categories = articles.value?.map(item => item.categories).flat().filter((item, index, self) => self.indexOf(item) === index)


function getCategoryClass(category: string): string {
  switch (category) {
    case 'Alle Anzeigen':
      return 'text-jm-contrast-black text-jm-secondary-white bg-nuxt-ui-primary-50 border-nuxt-ui-primary-50';
    case 'Design':
      return 'text-jm-primary-brown border-jm-primary-brown';
    case 'Entwicklung':
      return 'text-jm-primary-green border-jm-primary-green';
    case 'Social Media':
      return 'text-jm-contrast-blue border-jm-contrast-blue';
    case 'Finanzen':
      return 'text-jm-primary-grey border-jm-primary-grey';
    case 'Unternehmen':
      return 'text-jm-contrast-black border-jm-contrast-black';
    default:
      return ''; // Default class if needed
  }
}

useHead({
  title: 'Blog - JOTT.MEDIA'
})
</script>
