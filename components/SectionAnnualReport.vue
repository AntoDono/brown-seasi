<script setup lang="ts">
const REPORT_URL = 'https://drive.google.com/file/d/1IvbaHN4bnrnH0o2v3s-_nY3TGx5YyhqW/view'

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>

<template>
  <section id="annual-report" ref="root" class="relative bg-ivory-dark py-24 md:py-36 overflow-hidden">
    <!-- Background wash -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(196,30,58,0.14),transparent_55%)]" />
    <div class="pointer-events-none absolute inset-0 bg-grain opacity-[0.35]" />

    <div class="max-w-8xl mx-auto px-6 md:px-10 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <!-- Copy -->
        <div class="lg:col-span-5 space-y-8">
          <div data-reveal>
            <span class="font-mono text-2xs uppercase tracking-widest text-crimson">
              02 / Publications
            </span>
          </div>

          <div data-reveal>
            <h2 class="font-cormorant font-semibold leading-[0.95] text-ink">
              <span class="block text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight">Annual Report</span>
              <span class="block text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight text-crimson mt-1">2024–2025</span>
            </h2>
            <div class="mt-6 h-1 w-24 bg-gradient-to-r from-crimson to-crimson-vivid rounded-full" />
          </div>

          <p data-reveal class="font-sans text-base md:text-lg text-ink/65 leading-relaxed max-w-lg">
            Each year, SEASI releases a comprehensive annual report documenting our advocacy efforts, programming, academic milestones, and vision for the future of Southeast Asian Studies at Brown University.
          </p>

          <div data-reveal class="flex flex-wrap gap-4">
            <a
              :href="REPORT_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-crimson hover:bg-crimson-vivid text-ivory rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-crimson/35 hover:-translate-y-0.5 ring-1 ring-crimson-vivid/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              View Full Report
            </a>
            <a
              href="mailto:seasi@brown.edu"
              class="inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 border border-ink/15 text-ink hover:border-crimson hover:text-crimson rounded-full transition-all duration-300 bg-white/40 backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              Contact SEASI
            </a>
          </div>
        </div>

        <!-- Preview stack -->
        <div class="lg:col-span-7 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-lg">
            <!-- Back sheets -->
            <div
              class="absolute -bottom-5 -right-5 left-5 top-5 rounded-md bg-gradient-to-br from-crimson/25 to-crimson-deep/20 ring-1 ring-crimson/20 -z-20 shadow-xl"
              aria-hidden="true"
            />
            <div
              class="absolute -bottom-2 -right-2 left-2 top-2 rounded-md bg-ivory-darker/90 ring-1 ring-border -z-10 shadow-lg"
              aria-hidden="true"
            />

            <a
              :href="REPORT_URL"
              target="_blank"
              rel="noopener"
              class="group relative block overflow-hidden rounded-md bg-ink shadow-2xl ring-1 ring-crimson/30 outline-none transition-transform duration-300 ease-out will-change-transform hover:scale-[1.03] focus-visible:scale-[1.02] focus-visible:ring-2 focus-visible:ring-crimson-vivid focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-dark origin-center"
            >
              <div class="relative isolate aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <div class="absolute inset-0 z-0">
                  <img
                    src="/images/conference2.png"
                    alt=""
                    class="h-full w-full object-cover opacity-45 saturate-[0.85]"
                    aria-hidden="true"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-crimson-deep/50" />
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.28),transparent_55%)]" />
                </div>

                <!-- Spine accent -->
                <div class="absolute left-0 top-0 bottom-0 z-[2] w-2 bg-gradient-to-b from-crimson via-crimson-vivid to-crimson-deep shadow-[4px_0_24px_rgba(196,30,58,0.38)]" />

                <!-- Cover typography -->
                <div class="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-10 text-ivory">
                  <div>
                    <img
                      src="/images/logo.png"
                      alt=""
                      class="h-9 w-auto object-contain brightness-0 invert opacity-90 mb-8"
                    >
                    <p class="font-mono text-2xs uppercase tracking-[0.25em] text-crimson-vivid/90 mb-3">
                      Brown SEASI · Publication
                    </p>
                    <h3 class="font-cormorant font-bold text-4xl sm:text-5xl leading-[0.95] tracking-tight">
                      Annual<br>Report
                    </h3>
                    <p class="mt-4 font-cormorant italic text-2xl text-crimson-vivid">
                      2024–2025
                    </p>
                  </div>

                  <ul class="space-y-2.5 border-t border-ivory/10 pt-6">
                    <li
                      v-for="item in ['Advocacy & milestones', 'Events & programming', 'Faculty initiatives', 'Vision forward']"
                      :key="item"
                      class="flex items-center gap-3 font-sans text-xs text-ivory/55"
                    >
                      <span class="h-1 w-1 rounded-full bg-crimson-vivid shadow-[0_0_8px_rgba(239,68,68,0.45)]" />
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- Hover: solid panel + Google Drive copy (CSS only) -->
                <div
                  class="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-ink/90 px-8 text-center opacity-0 backdrop-blur-[1px] transition-opacity duration-300 ease-out group-hover:opacity-100"
                >
                  <span class="font-mono text-2xs uppercase tracking-[0.35em] text-crimson-vivid">Preview</span>
                  <p class="font-cormorant text-2xl sm:text-3xl text-ivory leading-snug max-w-sm">
                    Open the full PDF on Google Drive
                  </p>
                  <span class="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2 font-sans text-sm font-medium text-ivory ring-1 ring-crimson-vivid/40 shadow-lg shadow-crimson/30">
                    View document
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Bottom strip -->
              <div class="flex items-center justify-between gap-3 border-t border-ivory/10 bg-ink/95 px-5 py-3 backdrop-blur-sm">
                <span class="font-mono text-2xs uppercase tracking-widest text-ivory/40">PDF · hosted on Drive</span>
                <span class="font-mono text-2xs text-crimson-vivid">↗</span>
              </div>
            </a>

            <p class="mt-4 text-center font-mono text-2xs uppercase tracking-widest text-muted lg:text-right">
              Hover the cover for a quick preview · click to open
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
