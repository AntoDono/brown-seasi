<script setup lang="ts">
import { gsap } from 'gsap'

const root = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const infRef = ref<HTMLElement | null>(null)

const symposiumDisplay = ref(0)
const yearDisplay = ref(2005)

useScrollReveal(root)

onMounted(() => {
  const block = statsRef.value
  const infEl = infRef.value
  if (!block) return

  const ctx = gsap.context(() => {
    const counters = { sym: 0, year: 2005 }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 82%',
        once: true,
      },
    })

    tl.to(counters, {
      sym: 6,
      duration: 1.15,
      ease: 'power2.out',
      onUpdate: () => {
        symposiumDisplay.value = Math.round(counters.sym)
      },
    })

    tl.to(
      counters,
      {
        year: 2017,
        duration: 1.35,
        ease: 'power1.inOut',
        onUpdate: () => {
          yearDisplay.value = Math.round(counters.year)
        },
      },
      0.12
    )

    if (infEl) {
      gsap.set(infEl, { opacity: 0, scale: 0.35, rotate: -12 })
      tl.to(
        infEl,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.85,
          ease: 'back.out(1.6)',
        },
        0.28
      )
    }
  }, block)

  onUnmounted(() => ctx.revert())
})
</script>

<template>
  <section id="about" ref="root" class="relative bg-ivory py-24 md:py-36 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6 md:px-10">
      <div data-reveal class="mb-10">
        <span class="font-mono text-2xs uppercase tracking-widest text-crimson">
          01 / About SEASI
        </span>
      </div>

      <div data-reveal class="mb-16 md:mb-20">
        <h2 class="font-cormorant font-semibold leading-none">
          <span class="block text-[clamp(3.5rem,9vw,9rem)] tracking-tighter text-crimson/25 italic">
            meet
          </span>
          <span class="block text-[clamp(3.5rem,9vw,9rem)] tracking-tighter text-ink -mt-4 md:-mt-6">
            SEASI.
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div data-reveal class="relative group">
          <div class="aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-crimson/10 shadow-[0_24px_80px_-24px_rgba(185,28,28,0.25)]">
            <img
              src="/images/conference2.png"
              alt="SEASI members and events"
              class="img-cover transition-transform duration-700 group-hover:scale-[1.03]"
            >
          </div>
          <div class="absolute -bottom-4 -left-4 w-32 h-1 bg-gradient-to-r from-crimson to-crimson-vivid" />
          <div class="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-crimson/40 pointer-events-none" />
        </div>

        <div class="flex flex-col gap-8">
          <div data-reveal class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-crimson/15 flex items-center justify-center shrink-0 ring-1 ring-crimson/25">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 text-crimson fill-current">
                <path d="M216,70.39v112c-72,59.69-104-56.47-176,3.22v-112C112,13.92,144,130.08,216,70.39Z" opacity="0.2"/>
                <path d="M222.16,177.25a8,8,0,0,1-1,11.25c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.64-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.28,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.63,79.07-.74A8,8,0,0,1,222.16,177.25Zm-11.27-57c-31.83,26.38-53.72,14.5-79.07.74-26.61-14.43-56.76-30.79-96.93,2.49a8,8,0,0,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.19,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31ZM45.11,79.8c31.83-26.37,53.72-14.49,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.12,47-19.5a8,8,0,1,0-10.22-12.31c-31.83,26.38-53.72,14.5-79.07.74C105.21,50.58,75.06,34.22,34.89,67.5A8,8,0,1,0,45.11,79.8Z"/>
              </svg>
            </div>
            <h3 class="font-cormorant font-semibold text-2xl text-ink">About Us</h3>
          </div>

          <div data-reveal class="space-y-5">
            <p class="font-sans text-base md:text-lg text-ink/70 leading-relaxed">
              The Southeast Asian Studies Initiative began in 2017 after students in
              <em class="text-ink font-medium">Modern Southeast Asian History</em>
              recognized how little sustained coursework on the region existed at Brown.
            </p>
            <p class="font-sans text-base md:text-lg text-ink/70 leading-relaxed">
              Since then, SEASI has organized efforts, secured new faculty and language instruction at the department level, held numerous events to expand the understanding of Southeast Asia, and developed formal academic proposals to push for long-term institutional commitments.
            </p>
            <p class="font-sans text-base md:text-lg text-ink/70 leading-relaxed">
              The initiative continues to advocate for a durable infrastructure — such as a center or concentration — that would firmly establish Southeast Asian studies within the university.
            </p>
          </div>

          <div
            ref="statsRef"
            data-reveal
            class="grid grid-cols-3 gap-4 pt-4 border-t border-crimson/15"
            aria-live="polite"
          >
            <div>
              <p class="font-cormorant font-bold text-4xl text-crimson leading-none tabular-nums">
                <span>{{ symposiumDisplay }}</span><span
                  v-show="symposiumDisplay >= 6"
                  class="text-[0.55em] font-semibold align-top"
                >th</span>
              </p>
              <p class="font-sans text-xs text-muted mt-1 uppercase tracking-wide">
                Annual<br>Symposium
              </p>
            </div>
            <div>
              <p class="font-cormorant font-bold text-4xl text-crimson leading-none tabular-nums min-h-[2.5rem]">
                {{ yearDisplay }}
              </p>
              <p class="font-sans text-xs text-muted mt-1 uppercase tracking-wide">
                Year<br>Founded
              </p>
            </div>
            <div>
              <p
                ref="infRef"
                class="font-cormorant font-bold text-4xl text-crimson leading-none tabular-nums min-h-[2.5rem] opacity-0"
              >
                ∞
              </p>
              <p class="font-sans text-xs text-muted mt-1 uppercase tracking-wide">
                Ongoing<br>Advocacy
              </p>
            </div>
          </div>

          <div data-reveal>
            <a
              href="https://drive.google.com/file/d/1IvbaHN4bnrnH0o2v3s-_nY3TGx5YyhqW/view"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-sans text-sm font-medium text-crimson hover:text-crimson-dark border-b-2 border-crimson/30 hover:border-crimson pb-0.5 transition-colors duration-200"
            >
              Read our Annual Report 2024–2025
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
