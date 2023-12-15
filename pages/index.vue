<template>
  <UPage>
    <UPageBody class="m-0 p-0">
      <div class="relative bg-jm-secondary-grey-lighter">
        <UContainer class="relative py-10 flex h-screen flex-col justify-between gap-y-5 z-10" :ui="{'constrained': 'max-w-3xl'}">
          <Center>
            <NuxtLink to="/" class="inline-block no-underline border-0">
              <NuxtImg src="logo.svg" alt="JOTT.MEDIA" class="w-[400px]" />
            </NuxtLink>
          </Center>

          <Center>
            <Headline type="h1" class="pb-5">Machen wir es<br><span class="text-jm-primary-green uppercase">einfach:</span> <b class="uppercase">digital</b>.</Headline>
            <NuxtLink :to="{ path: '/', hash: '#mission' }">
              <Button>Einfach machen</Button>
            </NuxtLink>
          </Center>

          <Center>
            <Headline type="h3">Dein Büro <span class="lowercase">für</span> <b>Entwicklung und Design.</b></Headline>
            <NuxtLink :to="{ path: '/', hash: '#mission' }">
              <UIcon class="text-jm-secondary-grey text-[70px]" name="i-mdi-arrow-down" />
            </NuxtLink>
          </Center>
        </UContainer>
        <Background width="1000px" height="1100px" src="header-box.png" position="bottomLeft" :out="false" />
        <Background height="701px" src="header-grey.svg" position="bottom" :out="false" />
      </div>

      <div class="relative bg-jm-primary-green">
        <Background height="645px" src="header-green-top.svg" position="top" />
        <UContainer id="mission" class="relative py-10" :ui="{'constrained': 'max-w-3xl'}">
          <Headline type="h6">Das bekommst du <b class="uppercase">von uns</b></Headline>
          <Headline type="h4"><b>Mehr Zeit</b>, sodass du deiner Energie auf den <b>Erfolg</b> und das Wachstum deines Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.</Headline>
        </UContainer>
        <Background height="875px" src="header-green-bottom.svg" position="bottom" />
      </div>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-4xl'}" style="perspective: 3000px">
        <NuxtImg ref="image" :style="imageStyle" src="https://picsum.photos/1024/768" alt="" class="w-full block" />
      </UContainer>

      <UContainer id="question" class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">Die wichtigste <b class="uppercase">Frage</b></Headline>
        <Headline type="h2" class="font-[400]">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein Unternehmen wirklich?</b>“</Headline>
      </UContainer>

      <UContainer id="leistungen" class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">So arbeiten wir <b class="uppercase">für Dich</b></Headline>
        <Headline type="h5" class="text-jm-primary-brown"><b>Ehrlich. zuverlässig. partnerschaftlich.</b></Headline>
        <Paragraph>Die Lösung muss immer zum Problem passen. Darum steht bei uns <b>an erster Stelle</b> die Analyse deiner Herausforderung. Erst, wenn diese glasklar ist, widmen wir uns der <b>Konzeption und Umsetzung</b> des tatsächlichen Produkts, wie auch immer das in deinem konkreten Fall aussehen mag. Damit das funktioniert, ist eine ehrliche, zuverlässige und partnerschaftliche Zusammenarbeit – <b>auf Augenhöhe</b> und auf beiden Seiten – unabdingbar.</Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lass uns gemeinsam loslegen</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative">
        <Background height="815px" src="grey.svg" position="top" :out="false" />
        <Background height="1397px" src="sand-grey.svg" position="top" :out="false" />
        <UContainer class="relative py-10 md:mb-40 z-10" :ui="{'constrained': 'max-w-4xl'}">
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Jonathan // Entwicklung" align="left">„<b class="text-jm-primary-brown">Mich begeistert</b> die unendliche Kreativität, mit meinen Händen und meinem MacBook <b>die Welt zu bereichern.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Jan // Gestaltung" align="right">„<b class="text-jm-primary-brown">Mein Mut zur Veränderung</b> und somit unsere Kompetenzen ergänzend nutzen zu können, <b>war die beste Entscheidung</b> meines Lebens.“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Arian // Entwicklung" align="left">„<b class="text-jm-primary-brown">Es gibt</b> keine bessere Schönheit als <b>den Intellekt.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Annika // Gestaltung" align="right">„<b class="text-jm-primary-brown">Schon als Kind</b> war ich immer <b>fasziniert</b> von farben, formen und mustern und habe es geliebt, <b>neue Dinge zu erschaffen.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Inke // Buchhaltung" align="left">„<b class="text-jm-primary-brown">Obwohl</b> in meiner Schulzeit zuerst die <b>Mengenlehre</b> unterrichtet wurde, <b>sind</b> die <b>Zahlen mein</b> ständiger <b>Begleiter</b> geworden.“</ImageFigure>
        </UContainer>
        <Background height="854px" src="sand.svg" position="bottom" :out="false" />
      </div>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lerne uns kennen</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative bg-jm-primary-green mt-64">
        <Background height="703px" src="green-top.svg" position="top" />
        <UContainer id="argument" class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
          <Headline type="h6">Unser <b class="uppercase">Argument</b></Headline>
          <Headline type="h2" class="font-[400]">„<b class="uppercase">Wir sind</b> anders als Andere, denn wir sind <b class="uppercase">ehrlich</b> mit dir.“</Headline>
        </UContainer>
        <Background height="518px" src="green-bottom.svg" position="bottom" />
      </div>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-4xl'}">
        <Carousel :items="carouselItems" />
      </UContainer>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h3" class="font-[400]">Wir entwickeln und designen  <b class="text-jm-primary-brown">digitale Premiumlösungen</b> <b>indivuduell für dein Unternehmen.</b></Headline>
      </UContainer>

      <UContainer id="services" class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">Das leisten wir <b class="uppercase">für dich</b></Headline>
        <Paragraph><b class="text-jm-primary-brown">Konzeption, Prototyping, programmierung & Design</b> von digitalen Lösungen, mit denen du deine Herausforderungen optimal meisterst. Anders gesagt: wir machen kompliziertes einfach – und räumen Wachstumsbremsen aus dem Weg. Ganz gleich, ob Webseite, Web-Applikation oder App: Unsere Lösungen zeichnen sich durch beeindruckende Funktionalität, begeisternde Userfreundlichkeit und bestechende Ästhetik aus. Hand drauf.</Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Los geht`s</Button>
          </NuxtLink>
        </Center>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
<script setup lang="ts">
import { useParallax } from '@vueuse/core'

const image = ref(null)
const parallax = reactive(useParallax(image))
const imageStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
      parallax.tilt * 20
  }deg)`,
}))

const carouselItems = ref([
  {
    id: '1',
    media_url: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '2',
    media_url: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: '3',
    media_url: 'https://picsum.photos/800/800',
    alt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
])
</script>