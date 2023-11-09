<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" />

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />
    </UPageBody>

    <template #right>
      <UDocsToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>