<template>
  <UPage>
    <UPageBody class="m-0 p-0">
      <div class="relative">
        <UContainer
            class="relative py-10 flex h-screen flex-col justify-between gap-y-5 z-10">
          <Center>
            <NuxtLink class="inline-block no-underline border-0" to="/">
              <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" class="sm:w-[325px]" src="logo.svg"/>
            </NuxtLink>
          </Center>
          <Center>
            <Headline class="pb-5" type="h1">Machen wir es<br><span
                class="text-[var(--color-nuxt-ui-primary-50)] uppercase">einfach:</span> <b
                class="uppercase">digital</b>.
            </Headline>
            <UButton
                :to="{path: '/', hash: '#machen'}"
                color="secondary"
                label="Einfach machen"
                outline="true"
                size="lg"
                variant="outline"
                @click="scrollTo"
            />
          </Center>
          <Center>
            <Headline type="h3">Dein Büro <span class="lowercase">für</span> <b>Entwicklung und Design.</b></Headline>
            <NuxtLink :to="{ path: '/', hash: '#machen' }" @click="scrollTo">
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
          <Headline type="h6">Das bekommst du <b class="uppercase">von uns</b></Headline>
          <Headline type="h4"><b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
            Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für
            <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.
          </Headline>
        </UContainer>
        <Background height="875px" parallax="to-left" position="bottom" src="header-green-bottom.svg"/>
      </div>
      <UContainer :ui="{'constrained': 'max-w-4xl'}" class="relative py-10">
        <Image alt="Arian und Jan im Termin" src="team.jpg"/>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
        <Headline type="h6">Die wichtigste <b class="uppercase">Frage</b></Headline>
        <Headline class="font-[400]" type="h2">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
          Unternehmen wirklich?</b>“
        </Headline>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
        <Headline type="h6">So arbeiten wir <b class="uppercase">für Dich</b></Headline>
        <Headline class="text-jm-primary-brown" type="h5"><b>Ehrlich. zuverlässig. partnerschaftlich.</b></Headline>
        <Paragraph>Die Lösung muss immer zum Problem passen. Darum steht bei uns <b>an erster Stelle</b> die Analyse
          deiner Herausforderung. Erst, wenn diese glasklar ist, widmen wir uns der <b>Konzeption und Umsetzung</b> des
          tatsächlichen Produkts, wie auch immer das in deinem konkreten Fall aussehen mag. Damit das funktioniert, ist
          eine ehrliche, zuverlässige und partnerschaftliche Zusammenarbeit – <b>auf Augenhöhe</b> und auf beiden Seiten
          – unabdingbar.
        </Paragraph>
        <Center>
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
        </Center>
      </UContainer>
      <div class="relative">
        <Background :out="false" height="757px" parallax="to-right" position="top" src="grey-top.svg"/>
        <UContainer :ui="{'constrained': 'max-w-4xl'}" class="relative py-10 md:mb-40 z-10">
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
      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10 z-10">
        <Center>
          <UButton
              color="secondary"
              label="Lerne uns kennen"
              outline="true"
              size="lg"
              target="_blank"
              to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
              variant="outline"
          ></UButton>
        </Center>
      </UContainer>

      <div class="relative bg-jm-primary-green mt-64">
        <Background height="702px" parallax="to-right" position="top" src="green-top.svg"/>
        <UContainer :ui="{'constrained': 'max-w-2xl'}" class="relative py-10">
          <Headline type="h6">Das leisten wir <b class="uppercase">für dich</b></Headline>
          <Headline class="font-[400]" type="h3">Wir entwickeln und designen <b class="text-jm-primary-brown">digitale
            Premiumlösungen</b> <b>individuell für dein Unternehmen.</b></Headline>
        </UContainer>
        <Background height="517px" parallax="to-right" position="bottom" src="green-bottom.svg"/>
      </div>

      <UContainer :ui="{'constrained': 'max-w-4xl'}" class="py-10">
        <Carousel :items="carouselItems"/>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-2xl'}" class="py-10">
        <Paragraph><b class="text-jm-primary-brown uppercase">Konzeption, Prototyping, Programmierung & Design</b> von
          <b>digitalen Lösungen</b>, mit denen du deine Herausforderungen optimal <b>meisterst</b>. Anders gesagt: <b>wir
            machen Kompliziertes einfach</b> – und räumen Wachstumsbremsen aus dem Weg. <b>Ganz gleich, ob Webseite,
            Web-Applikation oder App</b>: Unsere Lösungen zeichnen sich durch beeindruckende Funktionalität,
          begeisternde Userfreundlichkeit und <b>bestechende Ästhetik</b> aus. Hand drauf.
        </Paragraph>
        <Center>
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
        </Center>
      </UContainer>

      <UContainer :ui="{'constrained': 'max-w-5xl'}" class="pt-20">
        <Center>
          <Headline class="pb-8 leading-8 lg:leading-5 text-3xl lowercase" type="h2">
            <b class="text-jm-primary-brown uppercase">Neues</b> aus der
            <b class="text-jm-primary-brown uppercase"> digitalen Welt </b>
          </Headline>
        </Center>
        <UBlogPosts>
          <UBlogPost v-for="(article, index) in articles" :key="index" class="bg-jm-secondary-grey-lighter">
            <NuxtLink :to="article.path">
              <Image :alt="article.meta.imageAlt as string | undefined" :parallax="false" :publicSrc="true"
                     :shine="false"
                     :src="article.meta.image as string"
                     class="w-full"/>
              <section class="px-3 pb-3">
                <Paragraph class="mt-3 mb-2 text-sm font-light">{{ article.meta.date }} von <b
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
        </UBlogPosts>
        <Center>
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
        </Center>

      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>

useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})
const {data: articles} = await useAsyncData(() => {
  return queryCollection('blog').all()
})

const {data: team} = await useAsyncData(() => {
  return queryCollection('team').all()
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
