<script setup lang="ts">
import {useArticleStore} from "~/stores/articleStore";
import {useTeamStore} from "~/stores/teamStore";
useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})

const articleStore = useArticleStore()
await articleStore.fetchArticles()

const teamStore = useTeamStore()
await teamStore.fetchTeam()

console.log('Team store data:', teamStore.team)
</script>

<template>
  <UBlogPosts class="mt-10 gap-y-8 grid-cols-1! lg:grid-cols-2! 2xl:grid-cols-3!" orientation="horizontal">
    <UBlogPost
        v-for="(person, index) in teamStore.team"
        :key="index"
        :image="{src: person.meta.src , width: 1000, height: 600, format: 'webp', aspectRatio: 'cover' }"
        :to="person.path"
        class="text-left ring-0"
        v-bind="person"
    >
      <template #debug>
        <div class="hidden">{{ console.log('Person path:', person.path) }}</div>
      </template>
    </UBlogPost>
  </UBlogPosts>

  <UBlogPosts class="mt-10 gap-y-8 grid-cols-1! lg:grid-cols-2! 2xl:grid-cols-3!" orientation="horizontal">
    <UBlogPost
        v-for="(article, index) in articleStore.articles"
        :key="index"
        :image="{src: article.meta.image , width: 1000, height: 600, format: 'webp', aspectRatio: 'cover' }"
        :to="article.path"
        class="text-left ring-0"
        v-bind="article"
    >
      <template #title>
        <div v-html="article.title"></div>
      </template>
      <template #date>
        <NuxtLink :to="`/team/${article?.meta?.author?.toLowerCase()}`"
                  class="text-(--color-jm-primary-green) font-extrabold z-10">
          {{ article.meta.author }}
        </NuxtLink>
      </template>
      <template #description>
        <div></div>
      </template>
      <template #badge>
        <p class="text-sm font-light">{{ article.meta.date as string | Date | undefined }} von</p>
      </template>
      <template #authors>
        <UBadge
            v-for="(category, index) in (article.meta.categories as unknown[]).slice(1)"
            :key="index"
            class="px-2 text-xs text-(--color-jm-secondary-white) bg-(--color-jm-primary-brown) font-extrabold uppercase"
            color="primary"
            size="xs"
            variant="solid">{{ category }}
        </UBadge>
      </template>
    </UBlogPost>
  </UBlogPosts>
</template>

<style scoped>
</style>