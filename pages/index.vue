<template>
  <UPageBody class="m-0 p-0 text-center bg-(--color-jm-secondary-white) pb-12">
    <div class="relative bg-(--color-jm-secondary-grey-lighter)">
      <UContainer

          class="relative h-screen mx-auto px-4 sm:px-6 lg:px-8 max-w-(--container-3xl) py-10 flex flex-col justify-between items-center gap-y-5 sm:gap-y-0 z-10">
        <NuxtLink class="inline-block no-underline border-0 " to="/">
          <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" src="logo.svg"/>
        </NuxtLink>
        <Headline class="pt-5 pb-11 xl:pb-5 text-3xl xl:text-5xl xl:leading-14" format="div" type="h1">Machen wir es<br><span
            class="text-(--color-nuxt-ui-primary-50) uppercase">einfach:</span><b class="uppercase"> digital</b>.
        </Headline>
        <UButton
            :to="{path: '/', hash: '#machen'}"
            class="hover:bg-(--color-jm-primary-brown)/75 hover:text-(--ui-bg) hover:border-(--color-jm-primary-brown)"
            color="secondary"
            label="Einfach machen"
            outline="false"
            size="lg"
            variant="outline"
            @click="scrollTo"
        />
        <div>
          <Headline class="pt-12 xl:pt-28 uppercase text-2xl xl:text-3xl mb-0" format="div" type="h2">Dein Büro <span
              class="lowercase">für</span> <b>Entwicklung
            und
            Design.</b>
          </Headline>
          <NuxtLink :to="{ path: '/', hash: '#machen' }" @click="scrollTo">
            <UIcon class="text-(--color-jm-secondary-grey) text-[70px]" name="i-mdi-arrow-down"/>
          </NuxtLink>
        </div>
      </UContainer>
      <Background :out="false" height="1100px" position="bottomLeft" src="header-box.png" width="1100px"/>
      <Background :out="false" height="701px" parallax="to-right" position="bottom" src="header-grey.svg"/>
    </div>
    <div class="relative bg-(--color-jm-primary-green) text-left">
      <Background height="644px" parallax="to-left" position="top" src="header-green-top.svg"/>
      <UContainer id="machen" class="relative">
        <Headline type="h6">Das bekommst du <b class="uppercase">von uns</b></Headline>
        <Headline type="h3"><b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
          Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für
          <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.
        </Headline>
      </UContainer>
      <Background height="875px" parallax="to-left" position="bottom" src="header-green-bottom.svg"/>
    </div>
    <UContainer class="max-w-(--container-4xl) relative py-10">
      <Image alt="Arian und Jan im Termin" src="team.jpg"/>
    </UContainer>

    <UContainer class="xl:max-w-(--container-2xl) w-2/3  mx-0 lg:mx-auto text-left relative py-10">
      <Headline type="h6">Die wichtigste <b class="uppercase">Frage</b></Headline>
      <Headline class="font-[400]" type="h2">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
        Unternehmen wirklich?</b>“
      </Headline>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) relative pt-4 text-left">
      <Headline type="h6">So arbeiten wir <b class="uppercase">für Dich</b></Headline>
      <Headline class="text-(--color-jm-primary-brown)" type="h5"><b>Ehrlich. zuverlässig. partnerschaftlich.</b>
      </Headline>
      <Paragraph>Die Lösung muss immer zum Problem passen. Darum steht bei uns <b>an erster Stelle</b> die Analyse
        deiner Herausforderung. Erst, wenn diese glasklar ist, widmen wir uns der <b>Konzeption und Umsetzung</b> des
        tatsächlichen Produkts, wie auch immer das in deinem konkreten Fall aussehen mag. Damit das funktioniert, ist
        eine ehrliche, zuverlässige und partnerschaftliche Zusammenarbeit – <b>auf Augenhöhe</b> und auf beiden Seiten
        – unabdingbar.
      </Paragraph>
    </UContainer>
    <UButton
        color="secondary"
        label="Lass uns gemeinsam loslegen"
        outline="true"
        size="lg"
        target="_blank"
        to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
        variant="outline"
    >
    </UButton>
    <div class="relative">
      <Background :out="false" height="757px" parallax="to-right" position="top" src="grey-top.svg"/>
      <UContainer class="max-w-(--container-4xl) relative py-10 md:mb-40 z-10 text-left">
        <ImageFigure
            v-for="person in team"
            :align="person.meta.align as string | undefined"
            :hint="person.meta.hint as string | undefined"
            :link="person.path as string | undefined"
            :quote="person.meta.quote as string | undefined"
            :src="person.meta.src as string | undefined">
        </ImageFigure>
      </UContainer>
      <Background :out="false" height="854px" parallax="to-left" position="bottom" src="grey-bottom.svg"/>
    </div>
    <UContainer class="max-w-(--container-2xl) relative xl:pt-4 z-10">
      <UButton
          color="secondary"
          label="Lerne uns kennen"
          outline="true"
          size="lg"
          target="_blank"
          to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
          variant="outline"
      ></UButton>
    </UContainer>

    <div class="relative bg-(--color-jm-primary-green) mt-64">
      <Background height="702px" parallax="to-right" position="top" src="green-top.svg"/>
      <UContainer class="max-w-(--container-3xl) relative px-2 py-10 text-left">
        <Headline class="" type="h6">Das leisten wir <b class="uppercase">für dich</b></Headline>
        <Headline class="font-[400] uppercase" type="h2">Wir entwickeln und designen <b
            class="text-(--color-jm-primary-brown)">digitale
          Premiumlösungen</b> <b>individuell für dein Unternehmen.</b></Headline>
      </UContainer>
      <Background height="517px" parallax="to-right" position="bottom" src="green-bottom.svg"/>
    </div>

    <UContainer class="max-w-(--container-4xl) py-10">
      <Carousel :items="carouselItems"/>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) pt-6 text-left">
      <Paragraph><b class="text-(--color-jm-primary-brown) uppercase">Konzeption, Prototyping, Programmierung &
        Design</b> von
        <b>digitalen Lösungen</b>, mit denen du deine Herausforderungen optimal <b>meisterst</b>. Anders gesagt: <b>wir
          machen Kompliziertes einfach</b> – und räumen Wachstumsbremsen aus dem Weg. <b>Ganz gleich, ob Webseite,
          Web-Applikation oder App</b>: Unsere Lösungen zeichnen sich durch beeindruckende Funktionalität,
        begeisternde Userfreundlichkeit und <b>bestechende Ästhetik</b> aus. Hand drauf.
      </Paragraph>
    </UContainer>
    <UButton
        color="secondary"
        label="Los geht's"
        outline="true"
        size="lg"
        target="_blank"
        to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
        variant="outline"
    >
    </UButton>
    <UContainer class="max-w-(--container-5xl) py-20">
      <Headline class="pb-8 leading-9 xl:leading-5 text-3xl lowercase" type="h2">
        <b class="text-(--color-jm-primary-brown) uppercase">Neues</b> aus der
        <b class="text-(--color-jm-primary-brown) uppercase"> digitalen Welt </b>
      </Headline>
      <UBlogPosts class="mt-10 gap-y-8 grid-cols-1! lg:grid-cols-2! 2xl:grid-cols-3!" orientation="horizontal">
        <UBlogPost
            v-for="(article, index) in articles"
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
                      class="text-(--color-jm-primary-green) font-extrabold z-50">
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
      <UButton
          class="mt-8"
          color="secondary"
          label="Zum Blog"
          outline="true"
          size="lg"
          to="blog"
          variant="outline"
      >
      </UButton>
    </UContainer>
  </UPageBody>
</template>

<script lang="ts" setup>

useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})
const {data: articles} = await useAsyncData(() => {
  return queryCollection('blog').limit(3).all()
})

const {data: team} = await useAsyncData(() => {
  return queryCollection('team').all()
})

console.log(articles)
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
