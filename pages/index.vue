<script setup lang="ts">
useHead({
  title: 'Brown SEASI — Southeast Asian Studies Initiative',
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
