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
            <Headline type="h1" class="pb-5">„Lass es uns <span class="text-jm-primary-green uppercase">einfach</span> <b class="uppercase">digital</b> machen.“</Headline>
            <NuxtLink :to="{ path: '/', hash: '#mission' }">
              <Button>Mehr erfahren</Button>
            </NuxtLink>
          </Center>

          <Center>
            <Headline type="h3">Das Büro für <b>Entwicklung und Design.</b></Headline>
            <NuxtLink :to="{ path: '/', hash: '#mission' }">
              <UIcon class="text-jm-secondary-grey text-[70px]" name="i-mdi-arrow-down" />
            </NuxtLink>
          </Center>
        </UContainer>
        <Background width="1000px" height="1100px" src="header-box.png" position="bottomLeft" :out="false" />
        <Background height="758px" src="header-grey.svg" position="bottom" :out="false" />
      </div>

      <div class="relative bg-jm-primary-green">
        <Background height="644px" src="header-green-top.svg" position="top" />
        <UContainer id="mission" class="relative py-10" :ui="{'constrained': 'max-w-3xl'}">
          <Headline type="h6">Unsere <b class="uppercase">Mission</b></Headline>
          <Headline type="h4">Wir unterstützen dich und dein Unternehmen eigene <b>Prozesse digital</b> zu <b>vereinfachen,</b> um <b>mehr Zeit,</b> mehr Zufriedenheit und mehr Qualität zu gewinnen und <b>erfoglreich zu wachsen.</b></Headline>
        </UContainer>
        <Background height="636px" src="header-green-bottom.svg" position="bottom" />
      </div>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-4xl'}">
        <NuxtImg src="https://picsum.photos/1024/768" alt="" class="w-full block" />
      </UContainer>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h3" class="font-[400]">Denn wir entwickeln und designen <b class="text-jm-primary-brown">digitale Premiumlösungen, die</b> <b>nur für dein Unternehmen</b> <b class="text-jm-primary-brown">passen.</b></Headline>
      </UContainer>

      <UContainer id="leistungen" class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">Unsere <b class="uppercase">Leistungen</b></Headline>
        <Headline type="h5" class="text-jm-primary-brown font-[800]">Konzeption, Prototyping, Programmierung & Design</Headline>
        <Paragraph>Von komplexen, automatisierten und <b>individuell</b> zugeschnittenen <b>Websites & Apps</b> mit einem hohen Anspruch an <b>Funktionalität, Userfreundlichkeit</b> und <b>Ästhetik.</b> Weiterer Text mit dem Aufgreifen von z. B. UI und UX Design und genaureres zu Prototyping von Apps und Web-Applikationen. Mehr Details zu euren Leistungen und Arbeitsvorgängen.</Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lass uns gemeinsam loslegen</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative">
        <Background height="652px" src="grey.svg" position="top" :out="false" />
        <Background height="1180px" src="sand-grey.svg" position="top" :out="false" />
        <UContainer class="relative py-10 md:mb-40 z-10" :ui="{'constrained': 'max-w-4xl'}">
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Jonathan, CTO" align="left">„<b class="text-jm-primary-brown">Mich begeistert</b> die unendliche Kreativität, mit meinen Händen und meinem MacBook <b>die Welt zu verändern.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Jan, CCO" align="right">„<b class="text-jm-primary-brown">Mein Mut zur Veränderung</b> und somit unsere Kompetenzen ergänzend nutzen zu können, <b>war die beste Entscheidung</b> meines Lebens.“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Arian, Developer" align="left">„<b class="text-jm-primary-brown">Mich begeistert</b> die unendliche Kreativität, mit meinen Händen und meinem MacBook <b>die Welt zu verändern.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Annika, Graphic Designer" align="right">„<b class="text-jm-primary-brown">Mich begeistert</b> die unendliche Kreativität, mit meinen Händen und meinem MacBook <b>die Welt zu verändern.</b>“</ImageFigure>
          <ImageFigure media-url="https://picsum.photos/1800/1800" hint="Inke, CFO" align="left">„<b class="text-jm-primary-brown">Mich begeistert</b> die unendliche Kreativität, mit meinen Händen und meinem MacBook <b>die Welt zu verändern.</b>“</ImageFigure>
        </UContainer>
        <Background height="739px" src="sand.svg" position="bottom" :out="false" />
      </div>

      <UContainer class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Lerne uns kennen</Button>
          </NuxtLink>
        </Center>
      </UContainer>

      <div class="relative bg-jm-primary-green">
        <Background height="751px" src="green-top.svg" position="top" />
        <UContainer id="frage" class="relative py-10" :ui="{'constrained': 'max-w-2xl'}">
          <Headline type="h6">Die wichtigste <b class="uppercase">Frage</b></Headline>
          <Headline type="h2" class="font-[400]">„<b class="uppercase">Was</b> genau <b class="uppercase">brauchst du</b> mit <span class="uppercase">deinem Unternehmen</span> <b class="uppercase">wirklich?</b>“</Headline>
        </UContainer>
        <Background height="518px" src="green-bottom.svg" position="bottom" />
      </div>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-4xl'}">
        <Carousel :items="carouselItems" />
      </UContainer>

      <UContainer class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h3" class="font-[400]">Wir sind anders als andere, denn wir sind ehrlich mit dir und möchten <span class="text-jm-primary-brown font-[800]">deine unternehmerischen Prozesse</span> <span class="font-[800]">bis ins Detail</span> <span class="text-jm-primary-brown font-[800]">kennenlernen.</span></Headline>
      </UContainer>

      <UContainer id="arbeitsweise" class="py-10" :ui="{'constrained': 'max-w-2xl'}">
        <Headline type="h6">Unsere <b class="uppercase">Arbeitsweise</b></Headline>
        <Headline type="h4" class="text-jm-primary-brown font-[800]">Ehrlich. zuverlässig. partnerschaftlich.</Headline>
        <Paragraph>Text zu eurer Arbeitsweise in Verbindung mit euren Werten (Texte zu den Werten aufgreifen, für euch passende Inhalte einbinden. Was macht euch aus, was ist euere Unternehmenskultur: Kultur des Miteinanders, des rerspektvolle, zuverlässigem und vertrauensvollem Miteinander. Zugewandt und offen, in einer Partnerschaft, in der Ehrlichkeit auf beiden Seite die Zusammenarbeit stärkt.</Paragraph>
        <Center>
          <NuxtLink href="https://calendar.app.google/rBDjAnPNYEQpfMvJ9" target="_blank">
            <Button>Starte mit uns durch</Button>
          </NuxtLink>
        </Center>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
<script setup lang="ts">
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