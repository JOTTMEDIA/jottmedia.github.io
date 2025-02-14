<template>
  <UPage>
    <UPageBody class="m-0 p-0">
      <div class="relative bg-jm-secondary-grey-lighter">
        <UContainer :ui="{'constrained': 'max-w-3xl'}"
                    class="relative py-10 flex h-screen flex-col justify-between gap-y-5 z-10">
          <Center>
            <NuxtLink class="inline-block no-underline border-0" to="/">
              <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="sm:w-[325px]" src="logo.svg"/>
            </NuxtLink>
          </Center>
          <Center>
            <Headline class="pb-5" type="h1">{{ t('make.we') }}<br><span
                class="text-jm-primary-green uppercase">
              {{ t('make.simple') }}</span>
              <b class="uppercase">digital</b>.
            </Headline>
            <NuxtLink :to="{ hash: '#machen' }" @click="scrollTo">
              <Button>{{ t('makeSimpleButton') }}</Button>
            </NuxtLink>
          </Center>
          <Center>
            <Headline type="h3">
              {{ t('office.your') }}
              <span class="lowercase">
                {{ t('office.for') }}
              </span>
              <b>{{ t('office.development') }}
              </b>
            </Headline>
            <NuxtLink :to="{ hash: '#machen' }" @click="scrollTo">
              <UIcon class="text-jm-secondary-grey text-[70px]" name="i-mdi-arrow-down"/>
            </NuxtLink>
          </Center>
        </UContainer>
        <Background :out="false" height="1100px" position="bottomLeft" src="header-box.png" width="1100px"/>
        <Background :out="false" height="701px" parallax="to-right" position="bottom" src="header-grey.svg"/>
      </div>
      <div class="relative bg-jm-primary-green">
        <Background height="644px" parallax="to-left" position="top" src="header-green-top.svg"/>
        <UContainer id="machen" :ui="{'constrained': 'max-w-3xl'}" class="relative py-10">
          <Headline type="h6">
            {{ t('get.what') }}
            <b class="uppercase">
              {{ t('get.fromUs') }}
            </b>
          </Headline>
          <Headline type="h4">
            <b>
              {{ t('get.time') }}
            </b>
            {{ t('get.energy') }}
            <b>
              {{ t('get.success') }}
            </b>
            {{ t('get.growth') }}
            <b>
              {{ t('get.efficiency') }}
            </b>
            {{ t('get.business') }}
          </Headline>
        </UContainer>
        <Background height="875px" parallax="to-left" position="bottom" src="header-green-bottom.svg"/>
      </div>
      <UContainer :ui="{'constrained': 'max-w-4xl'}" class="relative py-10">
        <Image alt="Arian und Jan im Termin" src="team.jpg"/>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
        <Headline type="h6">{{ t('question.important') }}
          <b class="uppercase">
            {{ t('question.question') }}
          </b>
        </Headline>
        <Headline class="font-[400]" type="h2">„<b class="uppercase">{{ t('question.what') }}</b>
          {{ t('question.exactly') }}
          <b class="uppercase">
            {{ t('question.need') }}
          </b>“
        </Headline>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
        <Headline type="h6">
          {{ t('work.we') }}
          <b class="uppercase">
            {{ t('work.forYou') }}
          </b>
        </Headline>
        <Headline class="text-jm-primary-brown" type="h5">
          <b>{{ t('work.honesty') }}</b></Headline>
        <Paragraph>
          {{ t('solution.problem') }}
          <b>
            {{ t('solution.solution') }}
          </b>
          {{ t('solution.priority') }}
          {{ t('solution.analyze') }}
          <b>{{ t('solution.conception') }}</b>
          {{ t('solution.products') }}
          {{ t('solution.equal') }}
          {{ t('solution.sides') }}
        </Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>{{ t('startButton') }}</Button>
          </NuxtLink>
        </Center>
      </UContainer>
      <div class="relative">
        <Background :out="false" height="757px" parallax="to-right" position="top" src="grey-top.svg"/>
        <UContainer :ui="{'constrained': 'max-w-4xl'}" class="relative py-10 md:mb-40 z-10">
          <ImageFigure
              v-for="person in team"
              :key="person.path"
              :align="person.meta.align as string | undefined"
              :hint="person.meta.hint as string | undefined"
              :link="localePath({name: 'team-slug', params: {slug: person.slug}})"
              :quote="person.meta.quote as string | undefined"
              :src="person.meta.src as string | undefined">
          </ImageFigure>
        </UContainer>
        <Background :out="false" height="854px" parallax="to-left" position="bottom" src="grey-bottom.svg"/>
      </div>
      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10 z-10">
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>{{ t('knowButton') }}</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative bg-jm-primary-green mt-64">
        <Background height="702px" parallax="to-right" position="top" src="green-top.svg"/>
        <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
          <Headline type="h6">
            {{ t('we.do') }}
            <b class="uppercase">
              {{ t('we.forYou') }}
            </b>
          </Headline>
          <Headline class="font-[400]" type="h3">
            {{ t('we.development') }}
            <b
                class="text-jm-primary-brown">
              {{ t('we.digital') }}</b>
            <b>{{ t('we.customise') }}
            </b>
          </Headline>
        </UContainer>
        <Background height="517px" parallax="to-right" position="bottom" src="green-bottom.svg"/>
      </div>

      <UContainer :ui="{'constrained': 'max-w-4xl'}" class="py-10">
        <Carousel :items="carouselItems"/>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="py-10">
        <Paragraph><b class="text-jm-primary-brown uppercase">
          {{ t('challenges.conception') }}
        </b> {{ t('challenges.of') }}
          <b>
            {{ t('challenges.digital') }}
          </b>
          {{ t('challenges.challenge') }}
          <b>{{ t('challenges.master') }}
          </b>
          {{ t('challenges.other') }}
          <b>{{ t('challenges.complicated') }}
          </b> {{ t('challenges.obstacles') }}
          <b>{{ t('challenges.website') }}
          </b> {{ t('challenges.solutions') }}
          <b>{{ t('challenges.aesthetics') }}
          </b>
          {{ t('challenges.start') }}
        </Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>{{ t('goButton') }}</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-5xl'}" class="pt-20">
        <Center>
          <Headline class="pb-8 leading-8 lg:leading-5 text-3xl lowercase" type="h2">
            <b class="text-jm-primary-brown uppercase">{{ t('world.new') }}</b> {{ t('world.from') }} <b
              class="text-jm-primary-brown uppercase">{{ t('world.digital') }}</b>
          </Headline>
        </Center>
        <UBlogList>
          <UBlogPost v-for="(article, index) in articles" :key="index" class="bg-jm-secondary-grey-lighter">
            <NuxtLink :to="localePath({name: 'blog-slug', params: {slug: article.slug as string}})">
              <Image :alt="article.meta.imageAlt as string | undefined" :parallax="false" :publicSrc="true"
                     :shine="false"
                     :src="article.meta.image as string"
                     class="w-full"/>
              <section class="px-3 pb-3">
                <Paragraph class="mt-3 mb-2 text-sm font-light">{{ article.meta.date }} {{ t('challenges.of') }} <b
                    class="text-jm-primary-green uppercase"> {{ article.meta.author }} </b></Paragraph>
                <Headline class="font-extrabold text-lg leading-5" type="h5" v-html="article.title"/>
                <UBadge
                    v-for="(category, index) in (article.meta.categories as unknown[]).slice(1)"
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
        <Center>
          <NuxtLink :to="localePath({name: 'blog'})">
            <Button class="mt-4">{{ t('blogButton') }}</Button>
          </NuxtLink>
        </Center>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>
import type {Collections} from '@nuxt/content'

const localePath = useLocalePath()

const {t, locale} = useI18n()
useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})
const {data: articles} = await useAsyncData(async () => {
  const collection = ('articles_' + locale.value) as keyof Collections
  return await queryCollection(collection).limit(3)
      .all() as Collections['articles_en'][] | Collections['articles_de'][]
}, {
  watch: [locale],
})


const {data: team} = await useAsyncData(async () => {
  const collection = ('team_' + locale.value) as keyof Collections
  return await queryCollection(collection)
      .all() as Collections['team_en'][] | Collections['team_de'][]
}, {
  watch: [locale],
})

const scrollTo = () => {
  const element = document.getElementById('machen');
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
};

const carouselItems = ref([
  {
    id: '1',
    src: '1-team-arian-annika.jpg',
    alt: 'Arian und Annika spielen Klask',
  },
  {
    id: '2',
    src: '2-team-jonathan-jan.jpg',
    alt: 'Jan und Jonathan sind im Termin',
  },
  {
    id: '3',
    src: '3-iphone-cd.jpg',
    alt: 'Wir erstellen ein Bild von unserem iPhone'
  },
  {
    id: '4',
    src: '4-klask.jpg',
    alt: 'Ein Klask-Match',
  },
  {
    id: '5',
    src: '5-work.jpg',
    alt: 'Wir sind bei der Arbeit',
  },
])
</script>
