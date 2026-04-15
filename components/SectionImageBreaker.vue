<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  height?: string
  overlay?: boolean
  overlayText?: string
}>()

const sectionRef = ref<HTMLElement | null>(null)
const imgRef = ref<HTMLElement | null>(null)

useImageParallax(sectionRef, imgRef, 16)
</script>

<template>
  <div
    ref="sectionRef"
    class="relative w-full overflow-hidden ring-1 ring-crimson/10"
    :class="height ?? 'h-[60vh] md:h-[75vh]'"
  >
    <div
      class="absolute top-0 left-0 right-0 z-[15] h-1.5 bg-crimson pointer-events-none"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 left-0 right-0 z-[15] h-1 bg-crimson pointer-events-none"
      aria-hidden="true"
    />
    <img
      ref="imgRef"
      :src="src"
      :alt="alt ?? 'SEASI image'"
      class="absolute inset-0 h-full w-full object-cover object-center scale-[1.14] will-change-transform"
    >

    <!-- Mutes busy photography so quote text stays readable -->
    <div
      v-if="overlayText"
      class="absolute inset-0 z-[5] bg-white/50 pointer-events-none"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent z-[6] pointer-events-none" />

    <div
      v-if="overlayText"
      class="absolute inset-0 flex items-end justify-start p-8 md:p-14 z-10"
    >
      <div class="max-w-2xl">
        <span class="font-mono text-2xs uppercase tracking-widest text-crimson mb-3 block">
          SEASI
        </span>
        <p class="relative font-cormorant italic font-semibold text-ink text-2xl md:text-4xl leading-snug border-l-4 border-crimson pl-6">
          "{{ overlayText }}"
        </p>
      </div>
    </div>

    <div v-if="caption" class="absolute bottom-4 right-4 z-10">
      <span class="font-mono text-2xs uppercase tracking-widest text-ivory/50 bg-ink/40 backdrop-blur-sm px-2 py-1 rounded">
        {{ caption }}
      </span>
    </div>
  </div>
</template>
