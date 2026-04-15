<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

const events = [
  {
    id: 1,
    date: 'Mar 02, 2026',
    time: '5:00 PM',
    title: 'Ecology as Relation: Tracing Curatorial Practices in Southeast Asia',
    location: 'Brown University, Providence RI',
    tag: 'Lecture',
    tagColor: 'bg-sepia/10 text-sepia ring-1 ring-sepia/20',
    past: true,
  },
  {
    id: 2,
    date: 'Apr 04, 2026',
    time: 'All Day',
    title: 'SEASI 6th Annual Symposium',
    description: 'Student presentations, keynote address, cultural performance, and catered reception at the Watson Institute.',
    location: 'Watson Institute, 111 Thayer St, Providence RI',
    tag: 'Symposium',
    tagColor: 'bg-crimson/12 text-crimson ring-1 ring-crimson/30',
    href: '/symposium',
    featured: true,
    past: false,
  },
]
</script>

<template>
  <section id="events" ref="root" class="relative bg-white py-24 md:py-36 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6 md:px-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div data-reveal class="mb-4">
            <span class="font-mono text-2xs uppercase tracking-widest text-crimson">
              03 / Events
            </span>
          </div>
          <h2 data-reveal class="font-cormorant font-semibold text-[clamp(3rem,7vw,6rem)] tracking-tighter leading-none text-ink">
            Find us.
          </h2>
        </div>
        <p data-reveal class="font-sans text-sm text-muted max-w-xs leading-relaxed md:text-right border-l-2 md:border-l-0 md:border-r-2 border-crimson/25 pl-4 md:pl-0 md:pr-4">
          SEASI hosts speaker series, research symposiums, and cultural programming throughout the academic year.
        </p>
      </div>

      <div class="flex flex-col divide-y divide-border">
        <article
          v-for="(event, i) in events"
          :key="event.id"
          data-reveal
        >
          <component
            :is="event.href ? 'NuxtLink' : 'div'"
            :to="event.href"
            class="group flex flex-col md:flex-row md:items-start gap-6 py-8 md:py-10"
            :class="event.href ? 'cursor-pointer' : ''"
          >
            <div class="md:w-48 shrink-0">
              <time class="font-mono text-2xs uppercase tracking-widest text-muted block">
                {{ event.date }}
              </time>
              <span class="font-mono text-2xs uppercase tracking-widest text-muted/60 block mt-0.5">
                {{ event.time }}
              </span>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-3">
                <span
                  class="font-mono text-2xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                  :class="event.tagColor"
                >
                  {{ event.tag }}
                </span>
                <span v-if="event.past" class="font-mono text-2xs uppercase tracking-widest text-muted/40">
                  Past
                </span>
              </div>

              <h3
                class="font-cormorant font-semibold text-2xl md:text-3xl text-ink leading-tight transition-colors duration-200"
                :class="event.href ? 'group-hover:text-crimson' : ''"
              >
                {{ event.title }}
              </h3>

              <p v-if="event.description" class="font-sans text-sm text-muted mt-3 leading-relaxed max-w-xl">
                {{ event.description }}
              </p>

              <div class="flex items-center gap-1.5 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-3.5 h-3.5 text-crimson/50 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span class="font-sans text-xs text-muted">{{ event.location }}</span>
              </div>
            </div>

            <div v-if="event.href" class="hidden md:flex items-center self-center">
              <div class="w-10 h-10 rounded-full border border-border group-hover:border-crimson group-hover:bg-crimson flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-crimson/25">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-muted group-hover:text-ivory transition-colors duration-300">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          </component>
        </article>
      </div>

      <div data-reveal class="mt-14 pt-10 border-t border-crimson/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p class="font-sans text-sm text-muted">
          Stay updated on all SEASI events and programming.
        </p>
        <a
          href="mailto:seasi@brown.edu?subject=SEASI Mailing List"
          class="inline-flex items-center gap-2 font-sans text-sm font-medium text-crimson hover:text-crimson-dark border-b-2 border-crimson/25 hover:border-crimson pb-0.5 transition-colors duration-200 whitespace-nowrap"
        >
          Join our mailing list
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
