<script setup lang="ts">
import { gsap } from 'gsap'

defineProps<{
  dark?: boolean
}>()

const items = [
  'Southeast Asian Studies',
  'Brown University',
  'Providence, RI',
  'Est. 2017',
  'seasi@brown.edu',
  'Symposium 2026',
  'Academic Advocacy',
]

const trackRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const track = trackRef.value
  if (!track) return

  const half = track.scrollWidth / 2
  if (!half) return

  gsap.fromTo(
    track,
    { x: 0 },
    {
      x: -half,
      duration: 45,
      ease: 'none',
      repeat: -1,
    }
  )
})
</script>

<template>
  <div
    class="overflow-hidden py-4 relative border-y"
    :class="dark ? 'bg-ink border-ivory/10' : 'bg-crimson border-crimson-dark/20'"
  >
    <div
      class="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
      :class="dark
        ? 'bg-gradient-to-r from-ink to-transparent'
        : 'bg-gradient-to-r from-crimson to-transparent'"
    />
    <div
      class="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
      :class="dark
        ? 'bg-gradient-to-l from-ink to-transparent'
        : 'bg-gradient-to-l from-crimson to-transparent'"
    />

    <div ref="trackRef" class="flex w-max items-center will-change-transform">
      <template v-for="pass in 2" :key="pass">
        <span
          v-for="(item, i) in items"
          :key="`${pass}-${i}`"
          class="flex items-center shrink-0"
        >
          <span
            class="font-cormorant italic text-xl md:text-2xl font-medium whitespace-nowrap px-6"
            :class="dark ? 'text-ivory/75' : 'text-ivory'"
          >
            {{ item }}
          </span>
          <span
            class="text-lg font-light"
            :class="dark ? 'text-crimson-vivid/70' : 'text-ivory/55'"
          >·</span>
        </span>
      </template>
    </div>
  </div>
</template>
