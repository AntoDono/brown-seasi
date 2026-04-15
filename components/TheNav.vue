<script setup lang="ts">
const menuOpen = ref(false)

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 60)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Symposium 2026', href: '/symposium' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-ivory/95 backdrop-blur-md border-b border-crimson/10 shadow-[0_8px_30px_-12px_rgba(196,30,58,0.12)]'
      : 'bg-transparent'"
  >
    <nav class="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 group shrink-0"
        @click="closeMenu"
      >
        <img
          src="/images/logo.png"
          alt="Brown SEASI"
          class="h-9 md:h-11 w-auto object-contain"
        >
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            :class="scrolled
              ? 'text-stone-700 hover:text-crimson-vivid'
              : 'text-ivory hover:text-crimson-vivid'"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-0.5 left-0 w-0 h-px bg-crimson-vivid group-hover:w-full transition-all duration-300"
            />
          </NuxtLink>
        </li>
        <li>
          <a
            href="mailto:seasi@brown.edu"
            class="font-sans text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300"
            :class="scrolled
              ? 'border-crimson-vivid text-crimson-vivid hover:bg-crimson-vivid hover:text-ivory'
              : 'border-crimson-vivid/55 text-ivory hover:bg-crimson-vivid/25'"
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        class="md:hidden flex flex-col gap-1 p-1 transition-all duration-300"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <span
          class="block w-6 h-0.5 transition-all duration-300 origin-center"
          :class="[
            scrolled ? 'bg-stone-900' : 'bg-ivory',
            menuOpen ? 'rotate-45 translate-y-[0.38rem]' : '',
          ]"
        />
        <span
          class="block w-6 h-0.5 transition-all duration-300"
          :class="[
            scrolled ? 'bg-stone-900' : 'bg-ivory',
            menuOpen ? 'opacity-0' : 'opacity-100',
          ]"
        />
        <span
          class="block w-6 h-0.5 transition-all duration-300 origin-center"
          :class="[
            scrolled ? 'bg-stone-900' : 'bg-ivory',
            menuOpen ? '-rotate-45 -translate-y-[0.38rem]' : '',
          ]"
        />
      </button>
    </nav>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden relative border-t border-crimson/10 bg-ivory/98 backdrop-blur-md"
      >
        <ul class="px-6 py-4 flex flex-col gap-1">
          <li v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block font-sans text-base font-medium text-stone-700 py-3 border-b border-border last:border-0 transition-colors hover:text-crimson-vivid"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="pt-2">
            <a
              href="mailto:seasi@brown.edu"
              class="inline-block font-sans text-sm font-medium px-4 py-2 rounded-full border border-crimson-vivid/50 text-crimson-vivid hover:bg-crimson-vivid hover:text-ivory transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
