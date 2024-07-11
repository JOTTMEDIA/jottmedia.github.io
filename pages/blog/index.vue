<template>
  <UPage>
    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink to="/" class="inline-block no-underline border-0">
            <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="w-[325px] mt-2" :shine="false" :parallax="false"/>
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer class="pt-16" :ui="{'constrained': 'max-w-7xl'}">
        <Headline type="h2" class="pb-8 leading-8 lg:leading-5 text-3xl lowercase">
          <b class="text-jm-primary-brown uppercase">Neues</b> aus der
          <b class="text-jm-primary-brown uppercase"> digitalen Welt </b>
        </Headline>
        <Paragraph class="text-sm lg:text-tiny mb-8">Hier möchten wir gerne unser Wissen, über die digitale Zukunft,
          Technologien, Design <br> und das Leben in einer digitalen Agentur, mit euch teilen, bleibt gespannt, wir sind
          es auch.
        </Paragraph>
        <UContainer :ui="{constrained: 'max-w-4xl space-x-4 space-y-4 ml-0', padding: 'px-0 sm:px-0 lg:px-0'}">
          <Button
              v-for="(category, index) in categories"
              :key="index"
              @click="selectedCategory = category"
              class="text-jm-primary-brown border-jm-primary-brown "
              :class="category === selectedCategory ? 'bg-jm-primary-brown text-jm-secondary-white' : 'text-jm-primary-brown border-jm-primary-brown'"
          >{{ category }}
          </Button>
        </UContainer>

        <UBlogList orientation="horizontal" class="mt-10 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
          <UBlogPost
              v-for="(article, index) in filteredArticles" :key="index"
              class="bg-jm-secondary-grey-lighter">
            <NuxtLink :to="article._path">
              <NuxtImg class="w-full" :src="article.image" format="webp"/>
              <section class="px-3 lg:px-7 pb-5">
                <Paragraph class="mt-4 mb-2 text-sm font-light">{{ article.date }} von <b
                    class="text-jm-primary-green uppercase"> {{ article.author }} </b></Paragraph>
                <Headline class="font-extrabold text-lg" type="h5" v-html="article.title"/>
                <Paragraph class="text-sm mb-4 font-light">{{ truncateText(article.description, 250) }}</Paragraph>
                <UBadge
                    v-for="(category, index) in article.categories.slice(1)"
                    :key="index"
                    color="white"
                    class="mr-2 py-0.5 text-xs text-jm-secondary-white bg-jm-primary-brown font-extrabold uppercase"
                    variant="solid"
                    size="sm">{{ category }}
                </UBadge>
              </section>
            </NuxtLink>
          </UBlogPost>
        </UBlogList>

        <Button
            @click="loadMorePosts"
            :disabled="articles?.length < pageMaxArticles"
            class="mt-8 mx-auto flex text-jm-primary-brown border-jm-primary-brown"
            :class="{
    'text-jm-primary-brown border-jm-primary-brown': articles?.length > pageMaxArticles,
    'text-jm-primary-brown': articles?.length < pageMaxArticles
  }"
        >{{ loadMoreButtonLabel }}
        </Button>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
const route = useRoute()
const page = ref(1)
const categories: Ref<string[] | undefined> = ref([])

const pageMaxArticles = ref(6)
const {data: articles} = await useAsyncData(route.path, () =>
    queryContent(route.path)
        .sort({id: -1})
        .limit(pageMaxArticles.value)
        .skip(pageMaxArticles.value * (page.value - 1))
        .find())


function fetchCategories() {
  categories.value = articles.value?.map(item => item.categories)
      .flat()
      .filter((item, index, self) => self.indexOf(item) === index)
}

const selectedCategory = ref('')
const filteredArticles = computed(() => {
  if (!selectedCategory.value) return articles.value;
  return articles.value?.filter(article => article.categories.includes(selectedCategory.value));
});

const loadMoreButtonLabel = computed(() => {
  return articles.value?.length < pageMaxArticles.value ? 'Keine weiteren Beiträge' : 'Mehr Anzeigen';
});

async function loadMorePosts() {
  pageMaxArticles.value += 6
  await useAsyncData(route.path, () =>
      queryContent(route.path)
          .sort({id: -1})
          .limit(pageMaxArticles.value)
          .find()
  )
  fetchCategories()
}


function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

useHead({
  title: 'Blog - JOTT.MEDIA'
})

fetchCategories()
</script>
