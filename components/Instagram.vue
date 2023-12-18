<template>
  <div class="text-center mb-8">
    <NuxtLink href="https://www.instgram.com/jott.media/" target="_blank" class="inline-block"><UIcon class="text-jm-primary-green text-[70px]" name="i-mdi-instagram" /></NuxtLink>
  </div>

  <div class="flex justify-center gap-x-5 overflow-hidden">
    <div v-for="post in posts" :key="post.id" class="min-w-[50%] md:min-w-[33%]">
      <NuxtLink :href="post.link" target="_blank">
        <Image :src="post.src" :alt="post.alt" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface InstagramPosts {
  id: string
  src: string
  link?: string
  alt?: string
}

// const { data } = useFetch<InstagramPosts[]>(`/api/instagram/user`)
const posts = ref<InstagramPosts[]>([
  {
    id: '1',
    src: '1-instagram.jpg',
    link: 'https://www.instgram.com/jott.media/',
    alt: 'Unser neues Corporate Design ist da! Wir freuen uns sehr, euch unser neues Logo präsentieren zu dürfen.',
  },
  {
    id: '2',
    src: '2-instagram.jpg',
    link: 'https://www.instgram.com/jott.media/',
    alt: 'Unser neues Corporate Design ist da! Wir freuen uns sehr, euch unser neues Logo präsentieren zu dürfen',
  },
  {
    id: '3',
    src: '3-instagram.jpg',
    link: 'https://www.instgram.com/jott.media/',
    alt: 'Unser neues Corporate Design ist da! Wir freuen uns sehr, euch unser neues Logo präsentieren zu dürfen',
  },
])
</script>