<template>
  <div>
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
  </div>
</template>

<script setup>
const {data, pending, error} = await useAsyncData('google-posts', () => {


      const test = $fetch('/api/google-posts')

      console.log(test)
    }
);

const posts = computed(() => data.value?.posts || []);

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {year: 'numeric', month: 'long', day: 'numeric'});
}
</script>