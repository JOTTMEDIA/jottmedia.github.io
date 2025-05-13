<script setup>
const {data: posts, pending, error} = await useFetch('/api/posts');
</script>

<template>
  <div>
    <h1>Google Business Neuigkeiten</h1>
    <div v-if="pending">Wird geladen...</div>
    <div v-else-if="error">Fehler: {{ error.message }}</div>
    <ul v-else>
      <li v-for="post in posts.localPosts" :key="post.name">
        <h3>{{ post.summary }}</h3>
        <p>Aktion: {{ post.callToAction?.actionType }}</p>
      </li>
    </ul>
  </div>
</template>