<script lang="ts" setup>
import {useTeamStore} from "~/stores/teamStore";
import {useArticleStore} from "~/stores/articleStore";

const {$gsap} = useNuxtApp()

const headerBox = ref(null)
const headerGrey = ref(null)
const headerGreenTop = ref(null)

const setupParallax = () => {
  const elements = [
    {ref: headerBox, name: 'headerBox'},
    {ref: headerGrey, name: 'headerGrey'},
    {ref: headerGreenTop, name: 'headerGreenTop'},
  ]

  elements.forEach(({ref, name}) => {
    if (!ref.value) {
      console.warn(`Element ${name} not found`)
      return
    }

    let domElement = ref.value
    if (ref.value.$el) {
      domElement = ref.value.$el
    }
    if (domElement.tagName === 'IMG' || domElement.querySelector('img')) {
      if (domElement.querySelector('img')) {
        domElement = domElement.querySelector('img')
      }
    }

    console.log(`${name} element:`, domElement, domElement.tagName)
  })

  if (headerBox.value) {
    let boxElement = headerBox.value
    if (headerBox.value.$el) boxElement = headerBox.value.$el
    if (boxElement.querySelector('img')) boxElement = boxElement.querySelector('img')

    $gsap.set(boxElement, {
      opacity: 0.8,
      scale: 1.1
    })

    $gsap.to(boxElement, {
      scale: 1.05,
      rotation: 2,
      scrollTrigger: {
        trigger: boxElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2
      }
    })
  }

  if (headerGrey.value) {
    let greyElement = headerGrey.value
    if (headerGrey.value.$el) greyElement = headerGrey.value.$el
    if (greyElement.querySelector('img')) greyElement = greyElement.querySelector('img')

    $gsap.fromTo(greyElement,
        {x: -100, opacity: 0.7},
        {
          x: 150,
          opacity: 1,
          scrollTrigger: {
            trigger: greyElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
    )
  }

  if (headerGreenTop.value) {
    let topElement = headerGreenTop.value
    if (headerGreenTop.value.$el) topElement = headerGreenTop.value.$el
    if (topElement.querySelector('img')) topElement = topElement.querySelector('img')

    $gsap.fromTo(topElement,
        {x: 100, y: 250},
        {
          x: -120,
          y: -20,
          scrollTrigger: {
            trigger: topElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8
          }
        }
    )
  }
}

onMounted(() => {
  setTimeout(() => {
    setupParallax()
  }, 500)
})

useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA'
})

function scrollTo(event: Event) {
  event.preventDefault()
  const target = document.getElementById('machen')
  if (target) {
    target.scrollIntoView({behavior: 'smooth'})
  }
}

const articleStore = useArticleStore()
await articleStore.fetchArticles()
const teamStore = useTeamStore()
await teamStore.fetchTeam()
</script>

<template>
  <UPageBody class="text-center bg-(--color-jm-secondary-white)">
    <div class="relative bg-(--color-jm-secondary-grey-lighter) overflow-hidden">
      <NuxtImg
          ref="headerBox"
          alt="Header Box"
          class="absolute bottom-0 left-0 pointer-events-none parallax-element"
          format="webp"
          height="1100"
          src="/images/header-box.png"
          style="z-index: 1; width: 1100px; height: 1100px; object-fit: cover;"
          width="1100"
      />

      <NuxtImg
          ref="headerGrey"
          alt="Header Grey"
          class="absolute bottom-0 left-0 right-0 pointer-events-none parallax-element"
          height="701"
          src="/images/header-grey.svg"
          style="z-index: 2; height: 701px; object-fit: cover;"
          width="100%"
      />

      <UPageHero
          class="py-4 z-10 relative"
          orientation="vertical"
      >
        <template #top>
          <NuxtLink class="inline-block no-underline border-0" to="/">
            <Image :parallax="false" :shine="false" alt="JOTT.MEDIA GmbH" src="logo.svg"/>
          </NuxtLink>
        </template>
        <template #headline>
          <h5 class="animated-bold text-5xl">
            Machen wir es<br><span class="text-(--color-nuxt-ui-primary-50) uppercase">einfach:</span><b
              class="uppercase"> digital</b>.
          </h5>
        </template>
        <template #body>
          <UButton
              :to="{path: '/', hash: '#machen'}"
              class="hover:bg-(--color-jm-primary-brown)/75 hover:text-(--ui-bg) hover:border-(--color-jm-primary-brown)"
              color="secondary"
              label="Einfach machen"
              outline="false"
              size="lg"
              variant="outline"
          />
        </template>
        <template #footer>
          <div>
            <h2 class="animated-bold uppercase text-2xl xl:text-3xl mb-0">Dein Büro<span
                class="lowercase">für</span> <b>Entwicklung und Design.</b>
            </h2>
            <NuxtLink :to="{ path: '/', hash: '#machen' }" @click="scrollTo">
              <UIcon class="text-(--color-jm-secondary-grey) text-[70px]" name="i-mdi-arrow-down"/>
            </NuxtLink>
          </div>
        </template>
      </UPageHero>
    </div>

    <div class="relative bg-(--color-jm-primary-green) text-left overflow-hidden mb-0">


      <UContainer id="machen" class="relative py-24 min-h-[400px] z-10 ">
        <h6>Das bekommst du <b class="uppercase">von uns</b></h6>
        <h3><b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
          Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für
          <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.
        </h3>
      </UContainer>
    </div>
    <NuxtImg
        alt="Header Green Bottom"
        class="left-0 right-0 pointer-events-none absolute"
        height="875"
        src="/images/header-green-bottom.svg"
        width="100%"
    />

    <UContainer class="max-w-(--container-4xl) relative py-10 z-10">
      <Image alt="Arian und Jan im Termin" src="team.jpg"/>


    </UContainer>

    <UContainer class="xl:max-w-(--container-2xl) w-2/3 mx-0 lg:mx-auto text-left relative py-10">
      <h6 class="animated-bold animation-h1">Die wichtigste <b class="uppercase">Frage</b></h6>
      <h2 class="font-[400]">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
        Unternehmen wirklich?</b>"
      </h2>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) relative pt-4 text-left">
      <h6>So arbeiten wir <b class="uppercase">für Dich</b></h6>
      <h4 class="text-(--color-jm-primary-brown)"><b>Ehrlich. zuverlässig.
        partnerschaftlich.</b>
      </h4>
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
    />

    <UContainer class="max-w-(--container-4xl) relative xl:pt-4 z-10 text-left">
      <div class="mt-16">
        <UBlogPosts class="!grid !grid-cols-2 gap-x-8 gap-y-16 items-start">
          <div
              v-for="(person, index) in teamStore.team"
              :key="index"
              :class="[
              'flex flex-col',
              (person as any).meta.align === 'right' ? 'mt-56' : ''
            ]"
          >
            <div class="relative">
              <UBlogPost
                  :key="index"
                  :image="{src: (person as any).meta.src, width: 418, height: 418, format: 'webp', aspectRatio: '16/9' }"
                  :to="(person as any).path"
                  class="text-left ring-0 overflow-visible"
              >
                <template #badge>
                  <NuxtLink :to="(person as any).path">
                    <button
                        class="w-12 h-12 bg-black/70 hover:bg-black/100 flex justify-center items-center rounded-full absolute right-4 bottom-4 transition-all z-50">
                      <UIcon class="text-2xl h-9 w-9 text-(--color-jm-primary-brown)" name="i-mdi-plus"/>
                    </button>
                  </NuxtLink>
                </template>
              </UBlogPost>
            </div>
            <div class="mt-6 space-y-4 mb-8">
              <h5 class="text-lg uppercase h-animation-bigger my-0 mb-4" v-html="(person as any).meta.quote"/>
              <Paragraph v-if="(person as any).meta.hint != null" class="italic text-sm">{{
                  (person as any).meta.hint
                }}
              </Paragraph>
            </div>
          </div>
        </UBlogPosts>
      </div>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) relative xl:pt-4 z-10">
      <UButton
          color="secondary"
          label="Lerne uns kennen"
          outline="true"
          size="lg"
          target="_blank"
          to="https://calendar.app.google/rBDjAnPNYEQpfMvJ9"
          variant="outline"
      />
    </UContainer>

    <div class="relative bg-(--color-jm-primary-green) mt-64">
      <UContainer class="max-w-(--container-xl) relative px-2 py-10 text-left">
        <h6>Das leisten wir <b class="uppercase">für dich</b></h6>
        <h2 class="font-[400] uppercase">Wir entwickeln und designen <b
            class="text-(--color-jm-primary-brown)">digitale
          Premiumlösungen</b> <b>individuell für dein Unternehmen.</b></h2>
      </UContainer>
    </div>

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
    />

    <UContainer class="max-w-(--container-5xl) py-20">
      <h2 class="pb-8 leading-9 xl:leading-5 text-3xl xl:text-4xl lowercase">
        <b class="text-(--color-jm-primary-brown) uppercase">Neues</b> aus der
        <b class="text-(--color-jm-primary-brown) uppercase"> digitalen Welt </b>
      </h2>

      <UBlogPosts class="mt-10 gap-y-8 grid-cols-1! lg:grid-cols-2! 2xl:grid-cols-3!" orientation="horizontal">
        <UBlogPost
            v-for="(article, index) in articleStore.articles"
            :key="index"
            :image="{src: article.meta.image , width: 418, height: 418, format: 'webp', aspectRatio: 'cover' }"
            :to="article.path"
            class="text-left ring-0"
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
      <UButton
          class="mt-8"
          color="secondary"
          label="Zum Blog"
          outline="true"
          size="lg"
          to="blog"
          variant="outline"
      />
    </UContainer>
  </UPageBody>
</template>

<style scoped>
.parallax-element {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>