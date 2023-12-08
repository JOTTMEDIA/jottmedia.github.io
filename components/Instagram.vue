<template>
  <div class="text-center">
    <UIcon class="text-jm-primary-green text-7xl" name="i-mdi-instagram" />
  </div>

  <div>
    <div v-for="post in posts" :key="post.id">
      <div class="flex justify-center">
        <div class="w-1/2">
          <img :src="post.media_url"  alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface InstagramPosts {
  id: string
  media_url?: string
  link?: string
}

// load posts from /api/instagram/feed
const { data } = useFetch<InstagramPosts[]>(`/api/instagram/feed?handle=${props.handle}`)
const posts = ref<InstagramPosts[]>([])
</script>