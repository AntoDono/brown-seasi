<script setup lang="ts">
const title = 'Symposium 2026 — Brown SEASI'
const description =
  "SEASI's 6th Annual Symposium on Southeast Asian Studies, April 4, 2026 at the Watson Institute, Brown University."

const ogImage = useSiteAssetUrl('/images/conference.png')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogImageAlt: 'SEASI symposium at Brown University',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

const schedule = [
  {
    time: '9:00 AM',
    title: 'Registration & Morning Welcome',
    type: 'Opening',
    desc: 'Check-in and light refreshments. Welcome remarks from SEASI leadership.',
  },
  {
    time: '10:00 AM',
    title: 'Student Paper Presentations — Panel I',
    type: 'Presentations',
    desc: 'Original research by undergraduate and graduate students from Brown and partner institutions across the Northeast.',
  },
  {
    time: '12:00 PM',
    title: 'Catered Lunch',
    type: 'Break',
    desc: 'Networking lunch for attendees, presenters, and faculty.',
  },
  {
    time: '1:30 PM',
    title: 'Student Paper Presentations — Panel II',
    type: 'Presentations',
    desc: 'A second session of student-led research presentations covering diverse topics in Southeast Asian Studies.',
  },
  {
    time: '3:30 PM',
    title: 'Keynote Address',
    type: 'Keynote',
    desc: 'A leading scholar in Southeast Asian Studies delivers the keynote lecture, followed by a Q&A session.',
    featured: true,
  },
  {
    time: '5:30 PM',
    title: 'Cultural Performance',
    type: 'Culture',
    desc: 'A performance celebrating Southeast Asian artistic and cultural heritage.',
  },
  {
    time: '6:30 PM',
    title: 'Catered Dinner & Reception',
    type: 'Reception',
    desc: 'Closing reception with dinner. An opportunity to connect with scholars, students, and advocates.',
  },
]

const typeColors: Record<string, string> = {
  Opening:       'bg-sepia/10 text-sepia ring-1 ring-sepia/20',
  Presentations: 'bg-ink/5 text-ink/60 ring-1 ring-border',
  Break:         'bg-ivory-dark text-muted ring-1 ring-border',
  Keynote:       'bg-crimson/12 text-crimson font-semibold ring-1 ring-crimson/30',
  Culture:       'bg-sepia/10 text-sepia ring-1 ring-sepia/20',
  Reception:     'bg-ink/5 text-ink/60 ring-1 ring-border',
}

const inviteRef = ref<HTMLElement | null>(null)
const scheduleRef = ref<HTMLElement | null>(null)
const locationRef = ref<HTMLElement | null>(null)

useScrollReveal(inviteRef)
useScrollReveal(scheduleRef)
useScrollReveal(locationRef)
</script>

<template>
  <div class="min-h-screen bg-ivory">
    <TheNav />

    <SymposiumHero />

    <section ref="inviteRef" class="bg-white py-16 md:py-20 border-t border-crimson/10">
      <div class="max-w-8xl mx-auto px-6 md:px-10">
        <div class="max-w-3xl mx-auto text-center">
          <p data-reveal class="font-mono text-2xs uppercase tracking-widest text-crimson mb-6">
            About the Symposium
          </p>
          <p data-reveal class="font-cormorant italic text-2xl md:text-3xl text-ink leading-snug">
            "Each year, SEASI convenes scholars, students, and advocates to advance the academic conversation around Southeast Asian studies — and to make the case for its permanent home at Brown."
          </p>
          <div data-reveal class="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="./symposium-invite"
              class="inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-crimson hover:bg-crimson-vivid text-ivory rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-crimson/25 ring-1 ring-crimson-vivid/20"
            >
              View Invitation
            </a>
            <a
              href="mailto:seasi@brown.edu?subject=Symposium 2026 RSVP"
              class="inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 border border-crimson/20 text-ink hover:border-crimson hover:text-crimson rounded-full transition-all duration-300"
            >
              RSVP / Contact
            </a>
          </div>
        </div>

        <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          <div data-reveal class="group overflow-hidden rounded-lg ring-1 ring-crimson/15 shadow-lg shadow-crimson/5">
            <img
              src="/images/conference.png"
              alt="Audience seated in the symposium venue at Brown"
              class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-64"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div data-reveal class="group overflow-hidden rounded-lg ring-1 ring-crimson/15 shadow-lg shadow-crimson/5">
            <img
              src="/images/conference2.png"
              alt="SEASI community gathering and programming"
              class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-64"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>
    </section>

    <section ref="scheduleRef" class="bg-ivory py-20 md:py-32 relative">
      <div class="max-w-8xl mx-auto px-6 md:px-10">
        <div class="mb-14">
          <p data-reveal class="font-mono text-2xs uppercase tracking-widest text-crimson mb-4">Schedule</p>
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 data-reveal class="font-cormorant font-semibold text-[clamp(2.5rem,6vw,5.5rem)] tracking-tighter leading-none text-ink">
              April 4, 2026
            </h2>
            <p data-reveal class="font-sans text-sm text-muted max-w-xs leading-relaxed md:text-right border-l-2 md:border-l-0 md:border-r-2 border-crimson/20 pl-4 md:pl-0 md:pr-4">
              Watson Institute · 111 Thayer Street<br>Providence, Rhode Island
            </p>
          </div>
        </div>

        <div data-reveal class="mb-12 overflow-hidden rounded-lg ring-1 ring-crimson/15">
          <img
            src="/images/landing-background.png"
            alt="Landscape representing Southeast Asia — symposium backdrop"
            class="h-48 w-full object-cover object-center md:h-56"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div class="flex flex-col">
          <article
            v-for="item in schedule"
            :key="item.time"
            data-reveal
            class="grid grid-cols-1 sm:grid-cols-[10rem_minmax(0,1fr)] gap-x-8 gap-y-3 py-8 border-b border-border last:border-0"
          >
            <div class="font-mono text-sm text-muted sm:text-right sm:pt-1">
              <time>{{ item.time }}</time>
            </div>

            <div class="relative sm:border-l sm:border-border sm:pl-8">
              <div
                class="pointer-events-none absolute top-2.5 -left-[7px] hidden h-3 w-3 rounded-full border-2 sm:block"
                :class="item.featured
                  ? 'border-crimson bg-crimson shadow-lg shadow-crimson/35'
                  : 'border-border bg-ivory ring-2 ring-ivory'"
              />

              <div class="flex items-center gap-3 mb-2">
                <span
                  class="font-mono text-2xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                  :class="typeColors[item.type] ?? 'bg-ivory-dark text-muted'"
                >
                  {{ item.type }}
                </span>
              </div>
              <h3
                class="font-cormorant font-semibold text-xl md:text-2xl leading-tight mb-2"
                :class="item.featured ? 'text-crimson' : 'text-ink'"
              >
                {{ item.title }}
              </h3>
              <p class="font-sans text-sm text-muted leading-relaxed max-w-xl">
                {{ item.desc }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionImageBreaker
      src="/images/conference.png"
      alt="Symposium attendees in session at Brown University"
      height="h-[45vh] md:h-[55vh]"
      overlay-text="A day of research, dialogue, and community at the Watson Institute."
    />

    <section ref="locationRef" class="bg-white py-20 md:py-28 border-t border-crimson/10">
      <div class="max-w-8xl mx-auto px-6 md:px-10">
        <div data-reveal class="mb-12 overflow-hidden rounded-lg ring-1 ring-crimson/15 md:mb-16">
          <img
            src="/images/conference2.png"
            alt="SEASI event programming and community"
            class="aspect-[21/9] w-full object-cover object-center min-h-[10rem] md:min-h-[14rem]"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div data-reveal>
            <div class="w-10 h-10 rounded-full bg-crimson/12 flex items-center justify-center mb-4 ring-1 ring-crimson/25">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 text-crimson">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 class="font-cormorant font-semibold text-xl text-ink mb-2">Venue</h3>
            <p class="font-sans text-sm text-muted leading-relaxed">
              Watson Institute for International and Public Affairs<br>
              111 Thayer Street<br>
              Providence, Rhode Island 02912
            </p>
          </div>

          <div data-reveal>
            <div class="w-10 h-10 rounded-full bg-crimson/12 flex items-center justify-center mb-4 ring-1 ring-crimson/25">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 text-crimson">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 class="font-cormorant font-semibold text-xl text-ink mb-2">Date & Time</h3>
            <p class="font-sans text-sm text-muted leading-relaxed">
              Saturday, April 4, 2026<br>
              9:00 AM – 8:00 PM<br>
              All are welcome to attend
            </p>
          </div>

          <div data-reveal>
            <div class="w-10 h-10 rounded-full bg-crimson/12 flex items-center justify-center mb-4 ring-1 ring-crimson/25">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 text-crimson">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </div>
            <h3 class="font-cormorant font-semibold text-xl text-ink mb-2">Contact</h3>
            <p class="font-sans text-sm text-muted leading-relaxed">
              Questions or RSVP:<br>
              <a href="mailto:seasi@brown.edu" class="text-crimson hover:underline">seasi@brown.edu</a><br>
              <span class="text-muted/60">Advisor: Marisa Fortney</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <TickerBar :dark="true" />
    <TheFooter />
  </div>
</template>
