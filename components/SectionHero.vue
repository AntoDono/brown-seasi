<script setup lang="ts">
import { gsap } from 'gsap'

const root = ref<HTMLElement | null>(null)
const bgLayer = ref<HTMLElement | null>(null)

function scrollToContent() {
  const el = document.getElementById('about')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const section = root.value
  if (!section) return

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-badge', { opacity: 0, y: 28, duration: 0.75 }, 0.1)
      .from('.hero-line-a', { opacity: 0, y: 36, duration: 0.8 }, 0.22)
      .from('.hero-line-b', { opacity: 0, y: 44, duration: 0.85 }, 0.32)
      .from('.hero-copy', { opacity: 0, y: 32, duration: 0.75 }, 0.48)
      .from('.hero-cta', { opacity: 0, y: 24, duration: 0.7 }, 0.56)
      .from('.hero-scroll', { opacity: 0, y: 16, duration: 0.6 }, 0.68)

    if (bgLayer.value) {
      gsap.fromTo(
        bgLayer.value,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.6,
          ease: 'power2.out',
        }
      )
    }

    gsap.to('.hero-scroll-line', {
      opacity: 0.35,
      repeat: -1,
      yoyo: true,
      duration: 1.35,
      ease: 'sine.inOut',
    })
  }, section)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section
    ref="root"
    class="hero-section relative w-full h-screen min-h-[600px] flex items-center md:items-end overflow-hidden grain-overlay"
  >
    <!-- Background image -->
    <div ref="bgLayer" class="absolute inset-0 z-0 will-change-transform">
      <img
        src="/images/landing-background.png"
        alt="Southeast Asian landscape"
        class="img-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-br from-white/45 via-white/25 to-crimson-deep/20" />
      <div class="absolute inset-0 bg-gradient-to-t from-crimson-deep/35 via-transparent to-ink/10" />
      <div class="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-crimson-deep/40 to-transparent" />
      <!-- Red editorial accent -->
      <div class="absolute top-0 right-0 w-[min(45%,420px)] h-full bg-gradient-to-l from-crimson/15 to-transparent pointer-events-none" />
    </div>

    <div class="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-10 pt-24 pb-12 md:pt-0 md:pb-28">
      <div class="hero-badge mb-6">
        <span class="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-widest text-ivory/85 border border-crimson-vivid/35 bg-ink/20 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-[0_0_0_1px_rgba(154,71,71,0.2)]">
          <span class="w-1.5 h-1.5 rounded-full bg-crimson-vivid inline-block shadow-[0_0_12px_rgba(154,71,71,0.55)]" />
          Est. 2017 · Brown University
        </span>
      </div>

      <h1 class="font-cormorant font-light text-ivory leading-none mb-2 hero-line-a">
        <span class="block text-[clamp(2.5rem,6vw,5.5rem)] tracking-tight text-ivory/75 italic">
          Welcome to the
        </span>
      </h1>
      <h2 class="font-cormorant font-semibold text-ivory leading-none mb-8 hero-line-b">
        <span class="block text-[clamp(3rem,7.5vw,8rem)] tracking-tighter leading-[0.9] drop-shadow-[0_4px_32px_rgba(0,0,0,0.35)]">
          Brown Southeast<br>
          <em class="text-crimson-vivid not-italic [text-shadow:0_0_40px_rgba(154,71,71,0.35)]">Asian Studies</em><br>
          Initiative.
        </span>
      </h2>

      <div class="flex flex-col gap-6">
        <p class="hero-copy font-sans text-base md:text-lg text-ivory/75 max-w-md leading-relaxed border-l-2 border-crimson-vivid/60 pl-5">
          An academic advocacy group at Brown University calling for the development of Southeast Asian Studies through increased faculty, courses, and programming.
        </p>
        <div class="hero-cta flex flex-wrap items-center justify-center gap-4 w-full">
          <NuxtLink
            to="/#about"
            class="font-sans text-sm font-medium px-6 py-3 rounded-full bg-crimson text-white hover:bg-crimson-dark transition-colors duration-200"
          >
            Learn More
          </NuxtLink>
          <NuxtLink
            to="/symposium"
            class="font-sans text-sm font-medium px-6 py-3 rounded-full bg-white text-[#1C1917] border border-stone-400/90 shadow-md transition-colors duration-200 hover:bg-stone-100"
          >
            Symposium 2026
          </NuxtLink>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="hero-scroll absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2 group cursor-pointer"
      aria-label="Scroll down"
      @click="scrollToContent"
    >
      <span class="font-mono text-2xs uppercase tracking-widest text-ivory/50 group-hover:text-crimson-vivid transition-colors">
        Scroll
      </span>
      <span class="relative w-px h-10 bg-gradient-to-b from-ivory/35 to-transparent block overflow-hidden rounded-full">
        <span class="hero-scroll-line absolute inset-0 bg-gradient-to-b from-crimson-vivid via-crimson-vivid/50 to-transparent opacity-90" />
      </span>
    </button>
  </section>
</template>
