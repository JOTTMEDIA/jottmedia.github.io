<template>
  <UPageBody class="text-center bg-(--color-jm-secondary-white) mt-0">
    <div class="mb-0 bg-(--color-jm-secondary-grey-lighter) overflow-hidden relative">
      <NuxtImg
          ref="headerBox"
          alt="Header Box"
          class="absolute  bottom-0 left-0 pointer-events-none object-cover z-[2]"
          format="webp"
          height="1100"
          src="/images/header-box.png"
          width="760"
      />
      <NuxtImg

          alt="Header Grey"
          class="absolute pointer-events-none parallax-element object-cover top-23 z-[3]"
          height="770"
          src="/images/header-grey.svg"
      />


      <UPageHero
          class="py-4 relative z-10 h-screen"
          orientation="vertical"
      >

        <template #top>
          <div
              ref="headerGreenTop"
              class="absolute pointer-events-none w-screen h-[32rem] bottom-16 z-[4] bg-center bg-header-green-top"
          />

          <div
              ref="headerGrey"
              class="absolute pointer-events-none w-screen h-[35rem] bottom-0 z-[2] bg-center bg-header-grey"
          />
          <NuxtLink
              class="inline-block no-underline border-0"
              to="/"
          >
            <Image
                :parallax="false"
                :shine="false"
                alt="JOTT.MEDIA GmbH"
                src="logo.svg"
            />
          </NuxtLink>
        </template>
        <template #headline>
          <h5 class="animated-bold text-6xl mt-6">
            Machen wir es<br>
            <span class="text-(--color-nuxt-ui-primary-50) uppercase">einfach:</span>
            <b class="uppercase"> digital</b>.
          </h5>
        </template>
        <template #body>
          <UButton
              :to="{ path: '/', hash: '#machen' }"
              class="mb-10 mt-4 hover:bg-(--color-jm-primary-brown)/75 hover:text-(--ui-bg) hover:border-(--color-jm-primary-brown)"
              color="secondary"
              label="Einfach machen"
              outline="false"
              size="lg"
              variant="outline"
          />
        </template>
        <template #footer>
          <div>
            <h2 class="animated-bold uppercase text-2xl xl:text-3xl mt-8 mb-3">
              Dein Büro <span class="lowercase">für</span> <b>Entwicklung und Design.</b>
            </h2>
            <NuxtLink
                :to="{ path: '/', hash: '#machen' }"
                @click="scrollTo"
            >
              <UIcon
                  class="text-(--color-jm-secondary-grey) text-[60px]"
                  name="cil:arrow-thick-bottom"
              />
            </NuxtLink>
          </div>
        </template>
      </UPageHero>
    </div>

    <div class="relative bg-(--color-jm-primary-green) text-left overflow-hidden mb-0">
      <UContainer
          id="machen"
          class="relative min-h-[400px] z-10"
      >
        <h6>Das bekommst du <b class="uppercase">von uns</b></h6>
        <h3>
          <b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
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
      <Image
          alt="Arian und Jan im Termin"
          src="team.jpg"
      />
    </UContainer>

    <UContainer class="xl:max-w-(--container-2xl) w-2/3 mx-0 lg:mx-auto text-left relative py-10">
      <h6 class="animated-bold animation-h1">
        Die wichtigste <b class="uppercase">Frage</b>
      </h6>
      <h2 class="font-[400]">
        „<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
        Unternehmen wirklich?</b>"
      </h2>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) relative pt-4 text-left">
      <h6>So arbeiten wir <b class="uppercase">für Dich</b></h6>
      <h4 class="text-(--color-jm-primary-brown)">
        <b>Ehrlich. zuverlässig. partnerschaftlich.</b>
      </h4>
      <Paragraph>
        Die Lösung muss immer zum Problem passen. Darum steht bei uns <b>an erster Stelle</b> die Analyse
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
        <NuxtImg
            alt="Grey Top"
            class="absolute pointer-events-none top-1/2 left-2/5 scale-200 -translate-x-1/2 h-64 bg-center -z-1"
            src="/images/grey-top.svg"
            style="background-position: 46.8228% center"
            width="100%"
        />

        <UBlogPosts class="!flex !gap-y-0">
          <div
              v-for="(person, index) in teamStore.team"
              :key="index"
              :class="[
              'flex',
              (person as any).meta.align === 'right' ? 'justify-end' : 'justify-start'
            ]"
          >
            <div class="md:w-2/5 relative">
              <UBlogPost
                  :key="index"
                  :to="(person as any).path"
                  class="text-left ring-0 overflow-visible h-[416px] relative"
              >
                <template #header>
                  <NuxtImg
                      :alt="(person as any).meta.imageAlt || (person as any).name"
                      :aspect-ratio="16/9"
                      :height="416"
                      :src="(person as any).meta.src"
                      :width="416"
                      class="w-full h-full block m-0 cover bg-center"
                      format="webp"
                  />
                </template>
                <template #badge>
                  <NuxtLink
                      :to="(person as any).path"
                      class="p-0"
                  >
                    <button
                        class="w-12 h-12 bg-black/70 hover:bg-black/100 flex justify-center items-center rounded-full absolute sm:-right-6 top-0 sm:top-auto sm:-bottom-5 transition-all z-10"
                    >
                      <UIcon
                          class="text-2xl h-9 w-9 text-(--color-jm-primary-brown)"
                          name="i-mdi-plus"
                      />
                    </button>
                  </NuxtLink>
                </template>
              </UBlogPost>

              <div class="md:absolute">
                <h5
                    class="text-lg uppercase h-animation-bigger pt-4"
                    v-html="(person as any).meta.quote"
                />
                <Paragraph
                    v-if="(person as any).meta.hint != null"
                    class="italic text-sm mb-0 pt-2"
                >
                  {{ (person as any).meta.hint }}
                </Paragraph>
              </div>
            </div>
          </div>
        </UBlogPosts>
      </div>

      <NuxtImg
          alt="Grey Top"
          class="absolute left-2/5 bottom-1/6 pointer-events-none scale-200 -translate-x-1/2 h-64 bg-center -z-1"
          src="/images/grey-bottom.svg"
          style="background-position: 46.8228% center"
      />
    </UContainer>

    <UContainer class="max-w-(--container-2xl) relative xl:pt-4 z-10">
      <UButton
          class="mt-40"
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
      <NuxtImg
          alt="Green Top"
          class="absolute pointer-events-none w-full bottom-32"
          src="/images/green-top.svg"
          style="z-index: 3; height:707px; object-fit: cover; width: 100vw; left: 50%; transform: translateX(-50%) scaleX(1);"
          width="100%"
      />
      <NuxtImg
          alt="Green Bottom"
          class="absolute pointer-events-none w-full top-28"
          src="/images/green-bottom.svg"
          style="z-index: 0; height:517px; object-fit: cover; width: 100vw; left: 50%; transform: translateX(-50%) scaleX(2);"
          width="100%"
      />
      <UContainer class="max-w-(--container-2xl) relative text-left pt-4 z-10">
        <h6>Das leisten wir <b class="uppercase">für dich</b></h6>
        <h2 class="font-[400] uppercase text-3xl pt-4">
          Wir entwickeln und designen <b class="text-(--color-jm-primary-brown)">digitale
          Premiumlösungen</b> <b>individuell für dein Unternehmen.</b>
        </h2>
      </UContainer>
    </div>

    <UContainer class="max-w-(--container-4xl) py-10 z-20">
      <Carousel :items="carouselItems"/>
    </UContainer>

    <UContainer class="max-w-(--container-2xl) pt-6 text-left z-10">
      <Paragraph>
        <b class="text-(--color-jm-primary-brown) uppercase">
          Konzeption, Prototyping, Programmierung & Design
        </b> von
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
            :image="{ src: article.meta.image, width: 418, height: 418, format: 'webp', aspectRatio: 'cover' }"
            :to="article.path"
            class="text-left ring-0"
        >
          <template #title>
            <div v-html="article.title"/>
          </template>
          <template #date>
            <NuxtLink
                :to="`/team/${article?.meta?.author?.toLowerCase()}`"
                class="text-(--color-jm-primary-green) font-extrabold z-10"
            >
              {{ article.meta.author }}
            </NuxtLink>
          </template>
          <template #description>
            <div/>
          </template>
          <template #badge>
            <p class="text-sm font-light">
              {{ article.meta.date as string | Date | undefined }} von
            </p>
          </template>
          <template #authors>
            <UBadge
                v-for="(category, index) in (article.meta.categories as unknown[]).slice(1)"
                :key="index"
                class="px-2 text-xs text-(--color-jm-secondary-white) bg-(--color-jm-primary-brown) font-extrabold uppercase"
                color="primary"
                size="xs"
                variant="solid"
            >
              {{ category }}
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
<script lang="ts" setup>
import {useTeamStore} from '~/stores/teamStore'
import {useArticleStore} from '~/stores/articleStore'

const {$gsap} = useNuxtApp()

const headerGrey = ref<HTMLElement | null>(null)
const headerGreenTop = ref<HTMLElement | null>(null)

const setupParallax = (): void => {
  if (headerGrey.value) {
    const greyElement = headerGrey.value

    $gsap.fromTo(
        greyElement,
        {y: 0, x: 0},
        {
          ease: 'none',
          opacity: 0.8,
          scale: 1.05,
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: greyElement,
            y: -100,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
    )
  }

  if (headerGreenTop.value) {
    const topElement = headerGreenTop.value

    $gsap.fromTo(
        topElement,
        {x: 100, y: 150},
        {
          x: -120,
          y: -20,
          scrollTrigger: {
            trigger: topElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        }
    )
  }
}

interface CarouselItem {
  id: string
  src: string
  alt: string
}

const carouselItems = ref<CarouselItem[]>([
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
    alt: 'Wir erstellen ein Bild von unserem iPhone',
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

onMounted(() => {
  setTimeout(() => {
    setupParallax()
  }, 500)
})

useHead({
  title: 'Dein Büro für Entwicklung und Design – JOTT.MEDIA',
})

function scrollTo(event: Event): void {
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

<style scoped>
.parallax-element {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>