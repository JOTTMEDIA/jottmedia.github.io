<template>
  <div class="text-center mb-8">
    <NuxtLink href="https://www.instNuxtLinkgram.com/jott.media/" target="_blank" class="inline-block"><UIcon class="text-jm-primary-green text-[70px]" name="i-mdi-instagram" /></NuxtLink>
  </div>

  <div class="flex justify-center gap-x-5 overflow-hidden">
    <div v-for="post in posts" :key="post.id" class="min-w-[50%] md:min-w-[33%]">
      <NuxtLink :href="post.link" target="_blank">
        <NuxtImg :src="post.media_url" :alt="post.alt" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface InstagramPosts {
  id: string
  media_url: string
  link?: string
  alt?: string
}

// const { data } = useFetch<InstagramPosts[]>(`/api/instagram/user`)
const posts = ref<InstagramPosts[]>([
  {
    id: '1',
    media_url: 'https://picsum.photos/800/800',
    link: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '2',
    media_url: 'https://picsum.photos/800/800',
    link: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '3',
    media_url: 'https://picsum.photos/800/800',
    link: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
])
</script>