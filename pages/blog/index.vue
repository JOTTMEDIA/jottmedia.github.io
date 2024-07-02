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
        <Button class="text-jm-secondary-white border-transparent  bg-nuxt-ui-primary-50">Alle anzeigen</Button>
        <Button>Design</Button>
        <Button class="text-jm-primary-green border-jm-primary-green">Entwicklung</Button>
        <Button class="text-jm-contrast-blue border-jm-contrast-blue">Social Media</Button>
        <Button class="text-jm-primary-grey border-jm-primary-grey">Finanzen</Button>
        <Button class="text-jm-contrast-black border-jm-contrast-black">Unternehmen</Button>
        </UContainer>


        <UBlogList orientation="horizontal" class="mt-16">
          <UBlogPost v-for="(article, index) in articles" :key="index">

            <NuxtImg :src="article.image" format="webp"/>
            <Paragraph class="mb-8">{{article.date}} von <b class="text-jm-primary-green"> {{article.author}} </b></Paragraph>
            <Headline type="h5" v-html="article.title"></Headline>
            <Paragraph class="text-sm mb-4">{{article.description}} </Paragraph>
            <UBadge
                v-for="(category) in article.categories"
                class="mr-2 py-0 text-xs text-jm-secondary-white font-bold uppercase"
                variant="solid"
                size="sm">{{category}}</UBadge>


          </UBlogPost>
        </UBlogList>


        <!--        <UBlogPost v-for="(article, index) in articles"
                         :description="article.description"
                           :image="article.image"
                           :key="index"
                           v-bind:article="article"
                           v-html="article.title"
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



const categories = articles.value?.map(item => item.categories)

console.log(categories)

useHead({
  title: 'Blog - JOTT.MEDIA'
})
</script>
