<script setup lang="ts">
import { gsap } from 'gsap'

const props = withDefaults(
  defineProps<{
    /** Skip entrance animation (e.g. Open Graph screenshot page). */
    staticLayout?: boolean
  }>(),
  { staticLayout: false },
)

const root = ref<HTMLElement | null>(null)

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    label: 'Keynote Address',
    desc: 'A leading scholar in Southeast Asian Studies',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    label: 'Student Presentations',
    desc: 'Researchers from Brown and across the Northeast',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    label: 'Cultural Performance',
    desc: 'Celebrating Southeast Asian arts and heritage',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
    label: 'Reception',
    desc: 'Catered lunch and dinner for all attendees',
  },
]

onMounted(() => {
  const section = root.value
  if (!section || props.staticLayout) return

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.sym-label', { opacity: 0, y: 24, duration: 0.7 }, 0.08)
      .from('.sym-title', { opacity: 0, y: 36, duration: 0.85 }, 0.18)
      .from('.sym-subtitle', { opacity: 0, y: 20, duration: 0.65 }, 0.32)
      .from('.sym-meta', { opacity: 0, y: 28, duration: 0.75 }, 0.38)
      .from('.sym-card', { opacity: 0, y: 32, duration: 0.65, stagger: 0.08 }, 0.5)
  }, section)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section ref="root" class="symposium-hero-section relative bg-crimson-deep overflow-hidden border-b border-crimson-vivid/20">
    <div
      class="absolute inset-0 opacity-[0.06] pointer-events-none"
      style="background-image: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 1px,
        transparent 1px,
        transparent 18px
      )"
    />

    <div class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
      style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E&quot;)"
    />

    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/25 to-transparent pointer-events-none" />

    <div class="relative z-10 max-w-8xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-44 md:pb-28">
      <div class="sym-label mb-6">
        <span class="font-mono text-2xs uppercase tracking-widest text-ivory/70 border border-crimson-vivid/40 bg-ink/15 rounded-full px-3 py-1 inline-block ring-1 ring-crimson-vivid/20">
          6th Annual · Brown University
        </span>
      </div>

      <h1 class="sym-title font-cormorant font-bold text-ivory leading-none mb-2">
        <span class="block text-[clamp(4rem,11vw,11rem)] tracking-tighter leading-[0.88] drop-shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          Symposium
        </span>
      </h1>
      <p class="sym-subtitle font-cormorant text-[clamp(1.8rem,4.5vw,4.5rem)] tracking-tight text-ivory/70 font-light italic mb-8 max-w-3xl">
        Southeast Asian Studies
      </p>

      <div class="sym-meta flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-16">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-4 text-crimson-vivid">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span class="font-mono text-sm text-ivory/80 uppercase tracking-wide">
            Saturday, April 4, 2026
          </span>
        </div>
        <span class="hidden sm:block text-crimson-vivid/50">|</span>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-4 text-crimson-vivid">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span class="font-mono text-sm text-ivory/80 uppercase tracking-wide">
            Watson Institute · 111 Thayer St, Providence RI
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="feat in features"
          :key="feat.label"
          class="sym-card bg-white/5 border border-crimson-vivid/20 rounded-sm p-6 hover:bg-white/10 hover:border-crimson-vivid/40 transition-all duration-300 group"
        >
          <div class="text-ivory/60 group-hover:text-ivory/90 transition-colors mb-4" v-html="feat.icon" />
          <h3 class="font-cormorant font-semibold text-lg text-ivory mb-1">{{ feat.label }}</h3>
          <p class="font-sans text-xs text-ivory/45 leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
