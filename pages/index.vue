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
            <Headline class="pb-5" type="h1">Machen wir es<br><span
                class="text-jm-primary-green uppercase">einfach:</span> <b class="uppercase">digital</b>.
            </Headline>
            <NuxtLink :to="{ path: '/', hash: '#machen' }" @click="scrollTo">
              <Button>Einfach machen</Button>
            </NuxtLink>
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
        <div class="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
          <Image alt="Wir sind bei der Arbeit" src="5-work.jpg" :cover="true" class="w-full h-full"/>
        </div>
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
          <NuxtLink href="mailto:hallo@jott.media">
            <Button>Kontakt</Button>
          </NuxtLink>
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
          <NuxtLink href="mailto:hallo@jott.media">
            <Button>Kontakt</Button>
          </NuxtLink>
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
          <NuxtLink href="mailto:hallo@jott.media">
            <Button>Kontakt</Button>
          </NuxtLink>
        </Center>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>

useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
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
    src: '2-team-jonathan-jan.jpg',
    alt: 'Jan und Jonathan im Termin',
  },
  {
    id: '2',
    src: '3-iphone-cd.jpg',
    alt: 'Wir erstellen ein Bild von unserem iPhone'
  },
  {
    id: '3',
    src: '4-klask.jpg',
    alt: 'Ein Klask-Match',
  },
])
</script>
