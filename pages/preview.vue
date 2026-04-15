<script setup lang="ts">
/**
 * Temporary route for Open Graph / social preview screenshots only.
 * Visit `/temp` — simple Brown SEASI preview; symposium-style background.
 */
useHead({
  title: 'Brown SEASI — Preview (OG)',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

/** Same noise SVG as SymposiumHero (avoids template CSS parser issues). */
const symposiumNoiseBg =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-crimson-deep text-ivory">
    <section
      class="relative flex-1 flex flex-col justify-center overflow-hidden border-b border-crimson-vivid/20 px-6 md:px-10 py-16 md:py-24"
    >
      <div
        class="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style="background-image: repeating-linear-gradient(
          -45deg,
          #fff,
          #fff 1px,
          transparent 1px,
          transparent 18px
        )"
      />

      <div
        class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        aria-hidden="true"
        :style="{ backgroundImage: symposiumNoiseBg }"
      />

      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div class="relative z-10 max-w-8xl mx-auto w-full">
        <p class="font-mono text-2xs uppercase tracking-[0.28em] text-ivory/70 mb-8">
          Brown University
        </p>

        <h1 class="font-cormorant font-light text-ivory/85 italic text-[clamp(1.75rem,4.5vw,3rem)] tracking-tight mb-2">
          Welcome to the
        </h1>
        <h2 class="font-cormorant font-semibold text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.92] tracking-tighter text-ivory mb-6 drop-shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          Brown Southeast<br>
          <em class="text-crimson-vivid not-italic [text-shadow:0_0_40px_rgba(196,30,58,0.35)]">Asian Studies</em><br>
          Initiative
        </h2>

        <p class="max-w-xl font-sans text-base md:text-lg text-ivory/75 leading-relaxed">
          Southeast Asian Studies at Brown — a student- and community-led initiative for courses, faculty, and programming on campus.
        </p>
      </div>
    </section>

    <footer
      class="shrink-0 border-t border-crimson-vivid/20 bg-crimson-deep px-6 py-4 md:px-10 flex flex-wrap items-center justify-between gap-4"
    >
      <img
        src="/images/logo.png"
        alt=""
        width="160"
        height="48"
        class="h-9 md:h-10 w-auto brightness-0 invert opacity-90"
      >
      <p class="font-mono text-[10px] md:text-2xs uppercase tracking-[0.18em] text-ivory/70 text-right">
        Brown University · Providence, RI
      </p>
    </footer>
  </div>
</template>
