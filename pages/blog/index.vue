<template>
  <UPage>
    <UPageBody>
      <UContainer :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink class="inline-block no-underline border-0" to="/">
            <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="w-[325px] mt-2" src="logo.svg"/>
          </NuxtLink>
        </Center>
      </UContainer>
      <UContainer :ui="{'constrained': 'max-w-7xl'}" class="pt-16">
        <Headline class="pb-8 leading-8 lg:leading-5 text-3xl lowercase" type="h2">
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
              :class="category === selectedCategory ? 'bg-jm-primary-brown text-jm-secondary-white' : 'text-jm-primary-brown border-jm-primary-brown'"
              class="text-jm-primary-brown border-jm-primary-brown "
              @click="selectedCategory = category"
          >{{ category }}
          </Button>
        </UContainer>

        <UBlogList class="mt-10 gap-y-8 lg:grid-cols-2 xl:grid-cols-3" orientation="horizontal">
          <UBlogPost
              v-for="(article, index) in filteredArticles" :key="index"
              class="bg-jm-secondary-grey-lighter">
            <NuxtLink :to="article.path" class="grid items-end h-full">
              <NuxtImg :src="article.meta.image as string | undefined" class="w-full h-full" format="webp"/>
              <section class="px-3 lg:px-7 pb-5">
                <Paragraph class="mt-4 mb-2 text-sm font-light">{{ article.meta.date }} von <b
                    class="text-jm-primary-green uppercase"> {{ article.meta.author }} </b></Paragraph>
                <Headline class="font-extrabold text-lg" type="h5" v-html="article.title"/>
                <Paragraph class="text-sm mb-4 font-light">{{ truncateText(article.description, 250) }}</Paragraph>
                <UBadge
                    v-for="(category, index) in (article.meta?.categories ?? []).slice(1)"
                    :key="index"
                    class="mr-2 py-0.5 text-xs text-jm-secondary-white bg-jm-primary-brown font-extrabold uppercase"
                    color="white"
                    size="sm"
                    variant="solid">{{ category }}
                </UBadge>
              </section>
            </NuxtLink>
          </UBlogPost>
        </UBlogList>

        <Button
            :class="{
            'text-jm-primary-brown border-jm-primary-brown': (articles?.length ?? 0) > pageMaxArticles,
            'text-jm-primary-brown': (articles?.length ?? 0) < pageMaxArticles
          }"
            :disabled="(articles?.length ?? 0) < pageMaxArticles"
            class="mt-8 mx-auto flex text-jm-primary-brown border-jm-primary-brown"
            @click="loadMorePosts"
        >{{ loadMoreButtonLabel }}
        </Button>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>
const route = useRoute();
const page = ref(1);
const categories: Ref<string[] | undefined> = ref([]);

const pageMaxArticles = ref(6);
const {data: articles} = await useAsyncData(route.path, () =>
    queryCollection('blog')
        .limit(pageMaxArticles.value)
        .skip(pageMaxArticles.value * (page.value - 1))
        .order('id', 'DESC')
        .all()
);

const {data: rssData} = await useAsyncData('rss', async () => {
  return await $fetch('/api/rss');
});

const rssPosts = computed(() => rssData.value?.posts.map((post) => ({
  path: post.link,
  meta: {
    image: post.image,
    date: post.pubDate ? formatDate(post.pubDate) : '',
    author: 'Jonathan',
    categories: ['Entwicklung'],
  },
  title: post.title,
  description: post.descriptionHtml,
})) || []);

interface ArticleMeta {
  date: string;
  author: string;
  categories: string[];
  image?: string;
}

interface Article {
  path: string;
  meta: ArticleMeta;
  title: string;
  description: string;
}

const combinedArticles = computed(() => {
  const allItems = [...(articles.value || []), ...rssPosts.value] as Article[];
  return allItems.sort((a, b) => {
    const getTimestamp = (item: Article) => {
      if (!item?.meta?.date) return 0;
      return new Date(item.meta.date.split('.').reverse().join('-')).getTime();
    };
    return getTimestamp(b) - getTimestamp(a);
  });
}) as ComputedRef<Article[]>;

function fetchCategories() {
  categories.value = combinedArticles.value?.map(item => item.meta.categories as string[])
      .flat()
      .filter((item, index, self) => self.indexOf(item) === index) || [];
}

const selectedCategory = ref('');
const filteredArticles = computed<Article[]>(() => {
  if (!selectedCategory.value) return combinedArticles.value;
  return combinedArticles.value?.filter(article => article.meta.categories.includes(selectedCategory.value)) ?? [];
});

const loadMoreButtonLabel = computed(() => {
  return combinedArticles.value?.length < pageMaxArticles.value ? 'Keine weiteren Beiträge' : 'Mehr Anzeigen';
});

async function loadMorePosts() {
  pageMaxArticles.value += 6;
  await useAsyncData(route.path, () =>
      queryCollection('blog')
          .order('id', 'DESC')
          .limit(pageMaxArticles.value)
          .all()
  );
  fetchCategories();
}

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'});
}

useHead({
  title: 'Blog - JOTT.MEDIA',
});

fetchCategories();
</script>
