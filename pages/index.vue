<script setup lang="ts">
const title = 'Brown SEASI — Southeast Asian Studies Initiative'
const description =
  'The Southeast Asian Studies Initiative (SEASI) at Brown University advocates for the development of Southeast Asian Studies through faculty support, courses, and programming.'

const ogImage = useSiteAssetUrl('/images/website-preview.png')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogImageAlt: 'Brown Southeast Asian Studies Initiative — Brown University',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})
</script>

<template>
  <div class="min-h-screen bg-ivory">
    <TheNav />

    <SectionHero />

    <TickerBar />

    <SectionAbout />

    <SectionImageBreaker
      src="/images/conference.png"
      alt="Surfer at sunset"
      :overlay="true"
      overlay-text="Advocating for a durable infrastructure that firmly establishes Southeast Asian studies within Brown University."
      caption="Brown SEASI"
    />

    <SectionAnnualReport />

    <SectionEvents />

    <SectionImageBreaker
      src="/images/conference2.png"
      alt="Southeast Asian cultural image"
      height="h-[40vh] md:h-[55vh]"
      :overlay="false"
    />

    <TickerBar :dark="true" />

    <TheFooter />
  </div>
</template>
