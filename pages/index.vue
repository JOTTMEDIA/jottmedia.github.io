<template>
  <UPage>
    <UPageBody class="m-0 p-0">
      <div class="relative bg-jm-secondary-grey-lighter">
        <UContainer class="relative py-10 flex h-screen flex-col justify-between gap-y-5 z-10"
                    :ui="{'constrained': 'max-w-3xl'}">
          <Center>
            <NuxtLink to="/" class="inline-block no-underline border-0">
              <Image src="logo.svg" alt="JOTT.MEDIA GmbH" class="sm:w-[325px]" :shine="false" :parallax="false"/>
            </NuxtLink>
          </Center>
          <Center>
            <Headline type="h1" class="pb-5">Machen wir es<br><span
                class="text-jm-primary-green uppercase">einfach:</span> <b class="uppercase">digital</b>.
            </Headline>
            <NuxtLink :to="{ path: '/', hash: '#machen' }">
              <Button>Einfach machen</Button>
            </NuxtLink>
          </Center>
          <Center>
            <Headline type="h3">Dein Büro <span class="lowercase">für</span> <b>Entwicklung und Design.</b></Headline>
            <NuxtLink :to="{ path: '/', hash: '#machen' }">
              <UIcon class="text-jm-secondary-grey text-[70px]" name="i-mdi-arrow-down"/>
            </NuxtLink>
          </Center>
        </UContainer>
        <Background width="1100px" height="1100px" src="header-box.png" position="bottomLeft" :out="false"/>
        <Background height="701px" src="header-grey.svg" position="bottom" :out="false" parallax="to-right"/>
      </div>
      <div class="relative bg-jm-primary-green">
        <Background height="644px" src="header-green-top.svg" position="top" parallax="to-left"/>
        <UContainer id="machen" class="relative py-10" :ui="{'constrained': 'max-w-3xl'}">
          <Headline type="h6">Das bekommst du <b class="uppercase">von uns</b></Headline>
          <Headline type="h4"><b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
            Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für
            <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.
          </Headline>
        </UContainer>
        <Background height="875px" src="header-green-bottom.svg" position="bottom" parallax="to-left"/>
      </div>
      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-4xl'}">
        <Image src="team.jpg" alt="Arian und Jan im Termin"/>
      </UContainer>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">Die wichtigste <b class="uppercase">Frage</b></Headline>
        <Headline type="h2" class="font-[400]">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
          Unternehmen wirklich?</b>“
        </Headline>
      </UContainer>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">So arbeiten wir <b class="uppercase">für Dich</b></Headline>
        <Headline type="h5" class="text-jm-primary-brown"><b>Ehrlich. zuverlässig. partnerschaftlich.</b></Headline>
        <Paragraph>Die Lösung muss immer zum Problem passen. Darum steht bei uns <b>an erster Stelle</b> die Analyse
          deiner Herausforderung. Erst, wenn diese glasklar ist, widmen wir uns der <b>Konzeption und Umsetzung</b> des
          tatsächlichen Produkts, wie auch immer das in deinem konkreten Fall aussehen mag. Damit das funktioniert, ist
          eine ehrliche, zuverlässige und partnerschaftliche Zusammenarbeit – <b>auf Augenhöhe</b> und auf beiden Seiten
          – unabdingbar.
        </Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lass uns gemeinsam loslegen</Button>
          </NuxtLink>
        </Center>
      </UContainer>
      <div class="relative">
        <Background height="757px" src="grey-top.svg" position="top" :out="false" parallax="to-right"/>
        <UContainer class="relative py-10 md:mb-40 z-10" :ui="{'constrained': 'max-w-4xl'}">
          <ImageFigure
              v-for="person in team"
              :src="person.src"
              :quote="person.quote"
              :hint="person.hint"
              :link="person._path"
              :align="person.align">
          </ImageFigure>
        </UContainer>
        <Background height="854px" src="grey-bottom.svg" position="bottom" :out="false" parallax="to-left"/>
      </div>
      <UContainer class="relative py-10 z-10" :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lerne uns kennen</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative bg-jm-primary-green mt-64">
        <Background height="702px" src="green-top.svg" position="top" parallax="to-right"/>
        <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
          <Headline type="h6">Das leisten wir <b class="uppercase">für dich</b></Headline>
          <Headline type="h3" class="font-[400]">Wir entwickeln und designen <b class="text-jm-primary-brown">digitale
            Premiumlösungen</b> <b>individuell für dein Unternehmen.</b></Headline>
        </UContainer>
        <Background height="517px" src="green-bottom.svg" position="bottom" parallax="to-right"/>
      </div>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-4xl'}">
        <Carousel :items="carouselItems"/>
      </UContainer>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Paragraph><b class="text-jm-primary-brown uppercase">Konzeption, Prototyping, Programmierung & Design</b> von
          <b>digitalen Lösungen</b>, mit denen du deine Herausforderungen optimal <b>meisterst</b>. Anders gesagt: <b>wir
            machen Kompliziertes einfach</b> – und räumen Wachstumsbremsen aus dem Weg. <b>Ganz gleich, ob Webseite,
            Web-Applikation oder App</b>: Unsere Lösungen zeichnen sich durch beeindruckende Funktionalität,
          begeisternde Userfreundlichkeit und <b>bestechende Ästhetik</b> aus. Hand drauf.
        </Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Los geht's</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <UContainer class="pt-20" :ui="{'constrained': 'max-w-5xl'}">
        <Center>
          <Headline type="h2" class="pb-8 leading-8 lg:leading-5 text-3xl lowercase">
            <b class="text-jm-primary-brown uppercase">Neues</b> aus der
            <b class="text-jm-primary-brown uppercase"> digitalen Welt </b>
          </Headline>
        </Center>
        <UBlogList>
          <UBlogPost v-for="(article, index) in articles" :key="index" class="bg-jm-secondary-grey-lighter">
            <NuxtLink :to="article._path">
              <Image :src="article.image" :alt="article.imageAlt" class="w-full" :shine="false" :parallax="false"
                     :publicSrc="true"/>
              <section class="px-3 pb-3">
                <Paragraph class="mt-3 mb-2 text-sm font-light">{{ article.date }} von <b
                    class="text-jm-primary-green uppercase"> {{ article.author }} </b></Paragraph>
                <Headline class="font-extrabold text-lg leading-5" type="h5" v-html="article.title"/>
                <UBadge
                    v-for="(category, index) in article.categories.slice(1)"
                    :key="index"
                    color="white"
                    class="mr-2 py-0.5 text-xs text-jm-secondary-white bg-jm-primary-brown font-extrabold uppercase"
                    variant="solid"
                    size="sm">{{ category }}
                </UBadge>
              </section>
            </NuxtLink>
          </UBlogPost>
        </UBlogList>
        <Center>
          <NuxtLink to="blog">
            <Button class="mt-8">Zum Blog</Button>
          </NuxtLink>
        </Center>

      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})

const {data: team} = await useAsyncData('team', () =>
    queryContent('/team')
        .find())

const {data: articles} = await useAsyncData('articles', () =>
    queryContent('/blog')
        .sort({id: -1})
        .limit(3)
        .find())

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
