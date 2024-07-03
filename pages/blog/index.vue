<template>
  <UPage>

    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-7xl','base': 'text-right'}">

          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[336px]" :shine="false" :parallax="false" />
          </NuxtLink>
      </UContainer>
      <UContainer class="pt-16" :ui="{'constrained': 'max-w-7xl'}">
        <Headline type="h2" class="pb-8 leading-[57px] text-[48px] lowercase">
          <b class="text-jm-primary-brown uppercase">Neues</b> aus der
          <b class="text-jm-primary-brown uppercase"> digitalen Welt </b>
        </Headline>
        <Paragraph class="text-base mb-8">Hier möchten wir gerne unser Wissen, über die digitale Zukunft, Technologien, Design <br> und das Leben in einer digitalen Agentur, mit euch teilen, bleibt gespannt, wir sind es auch.</Paragraph>
        <UContainer :ui="{'constrained': 'max-w-4xl space-x-4 ml-0 lg:px-0'}">
          <Button
              v-for="(category, index) in categories"
              :key="index"
              @click="selectedCategory = category"
          class="text-jm-primary-brown border-jm-primary-brown"
          >{{category}}</Button>
        </UContainer>

        <UBlogList orientation="horizontal" class="mt-12">

          <UBlogPost
              v-for="(article, index) in filteredArticles" :key="index"
                     class="bg-jm-secondary-grey-lighter ">
            <NuxtLink :to="`/blog/${article.slug}`">
            <NuxtImg :src="article.image" format="webp"/>
            <section class="px-7 pb-5">
            <Paragraph class="mt-4 mb-2 text-[14px] font-light">{{article.date}} von <b class="text-jm-primary-green uppercase"> {{article.author}} </b></Paragraph>
            <Headline class="font-extrabold text-lg" type="h5" v-html="article.title"/>
            <Paragraph class="text-sm mb-4 font-light">{{article.description}} </Paragraph>
            <UBadge
                v-for="(category, index) in article.categories.slice(1)"
                :key="index"
                color="white"
                class="mr-2 py-0.5 text-[12px] text-jm-secondary-white bg-jm-primary-brown font-extrabold uppercase"
                variant="solid"
                size="sm">{{category}}</UBadge>
            </section>
            </NuxtLink>
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

const selectedCategory = ref(null); // Step 1: State for selected category
const filteredArticles = computed(() => {
  if (!selectedCategory.value) return articles.value;
  return articles.value?.filter(article => article.categories.includes(selectedCategory.value));
});

useHead({
  title: 'Blog - JOTT.MEDIA'
})
</script>
