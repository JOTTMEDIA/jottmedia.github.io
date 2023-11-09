<template>
  <div class="text-center mb-8">
    <a href="https://www.instagram.com/jott.media/" target="_blank" v-cursor-block class="inline-block"><UIcon class="text-jm-primary-green text-[70px]" name="i-mdi-instagram" /></a>
  </div>

  <div class="flex justify-center space-x-5">
    <div v-for="post in posts" :key="post.id">
      <a :href="post.link" target="_blank" v-cursor-block><img :src="post.media_url"  :alt="post.alt"/></a>
    </div>
  </div>
</template>

<script setup lang="ts">

interface InstagramPosts {
  id: string
  media_url?: string
  link?: string
  alt?: string
}

// const { data } = useFetch<InstagramPosts[]>(`/api/instagram/user`)
const posts = ref<InstagramPosts[]>([
  {
    id: '1',
    media_url: 'https://picsum.photos/400/400',
    link: 'https://picsum.photos/400/400',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '2',
    media_url: 'https://picsum.photos/400/400',
    link: 'https://picsum.photos/400/400',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '3',
    media_url: 'https://picsum.photos/400/400',
    link: 'https://picsum.photos/400/400',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
])
</script>