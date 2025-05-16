<template>
  <!--  <div>
      <h1 class="text-2xl font-bold mb-4">Google Local Posts</h1>

      <div v-if="pending">Beiträge werden geladen...</div>
      <div v-else-if="error">Fehler beim Laden der Beiträge</div>

      <div v-else class="space-y-4">
        <div v-for="post in posts" :key="post.link" class="p-4 border rounded shadow-sm">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <div class="text-sm text-gray-500">{{ formatDate(post.pubDate) }}</div>
          <div class="mt-2" v-html="post.descriptionHtml"/>
          <a :href="post.link" class="text-blue-600 underline mt-2 inline-block" target="_blank">Beitrag ansehen</a>
        </div>
      </div>
    </div>-->

  <UBlogList>
    <UBlogPost v-for="(post, index) in posts" :key="index" class="bg-jm-secondary-grey-lighter">

      <NuxtLink :to="post.link">
        <Image :parallax="false"
               :publicSrc="true"
               :shine="false"
               :src="post.image"
               class="w-full"/>
        <section class="px-3 pb-3">
          <Paragraph class="mt-3 mb-2 text-sm font-light">{{ formatDate(post.pubDate) }}</Paragraph>
          <Headline class="font-extrabold text-lg leading-5" type="h5" v-html="post.title"/>
          <UBadge
              class="mr-2 py-0.5 text-xs text-jm-secondary-white bg-jm-primary-brown font-extrabold uppercase"
              color="white"
              size="sm"
              variant="solid"> Entwicklung
          </UBadge>
        </section>
      </NuxtLink>
    </UBlogPost>
  </UBlogList>
</template>

<script setup>
const {data, pending, error} = await useAsyncData('rss', async () => {
  const result = await $fetch('/api/rss');


  return result;
});


const posts = computed(() => data.value?.posts || []);

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {year: 'numeric', month: 'long', day: 'numeric'});
}
</script>