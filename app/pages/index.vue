<script lang="ts" setup>

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
</script>
<template>
  <UPageBody class="text-center bg-(--color-jm-secondary-white)">
    <div class="relative bg-(--color-jm-secondary-grey-lighter)">
      <Background :out="false" height="1100px" position="bottomLeft" src="header-box.png" width="1100px"/>
      <Background :out="false" height="701px" parallax="to-right" position="bottom" src="header-grey.svg"/>
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
    <div class="relative bg-(--color-jm-primary-green) text-left">
      <Background height="644px" parallax="to-left" position="top" src="header-green-top.svg"/>
      <UContainer id="machen" class="relative py-24 min-h-[400px]">
        <h6>Das bekommst du <b class="uppercase">von uns</b></h6>
        <h3><b>Mehr Zeit</b>, sodass du deine Energie auf den <b>Erfolg</b> und das Wachstum deines
          Unternehmens fokussieren kannst. Dazu vereinfachen und digitalisieren wir deine Prozesse – und sorgen so für
          <b>mehr Effizienz, Zufriedenheit und Qualität</b> für dein Business.
        </h3>
      </UContainer>
      <Background height="875px" parallax="to-left" position="bottom" src="header-green-bottom.svg"/>
    </div>

    <UContainer class="max-w-(--container-4xl) relative py-10">
      <Image alt="Arian und Jan im Termin" src="team.jpg"/>
    </UContainer>

    <UContainer class="xl:max-w-(--container-2xl) w-2/3  mx-0 lg:mx-auto text-left relative py-10">
      <h6 class="animated-bold animation-h1">Die wichtigste <b class="uppercase">Frage</b></h6>
      <h2 class="font-[400]">„<b class="uppercase">Was</b> genau <b class="uppercase">braucht dein
        Unternehmen wirklich?</b>“
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
    >
    </UButton>
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
    >
    </UButton>
    <UContainer class="max-w-(--container-5xl) py-20">
      <h2 class="pb-8 leading-9 xl:leading-5 text-3xl xl:text-4xl lowercase">
        <b class="text-(--color-jm-primary-brown) uppercase">Neues</b> aus der
        <b class="text-(--color-jm-primary-brown) uppercase"> digitalen Welt </b>
      </h2>
      <Content/>
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

<style scoped>

</style>