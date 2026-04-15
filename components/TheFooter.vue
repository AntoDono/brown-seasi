<script setup lang="ts">
const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/brown.seasi/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/brown-seasi',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/@BrownSEASI',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
]

const navLinks = [
  { label: 'Home',           href: '/' },
  { label: 'About',          href: '/#about' },
  { label: 'Events',         href: '/#events' },
  { label: 'Symposium 2026', href: '/symposium' },
  { label: 'Annual Report',  href: 'https://drive.google.com/file/d/1IvbaHN4bnrnH0o2v3s-_nY3TGx5YyhqW/view' },
]
</script>

<template>
  <footer class="bg-ink text-ivory/70">
    <!-- Top bar -->
    <div class="border-b border-ivory/10">
      <div class="max-w-8xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Brand column -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="inline-block mb-5">
            <img
              src="/images/logo.png"
              alt="Brown SEASI"
              class="h-12 w-auto object-contain brightness-0 invert"
            >
          </NuxtLink>
          <p class="font-sans text-sm leading-relaxed text-ivory/50 max-w-xs">
            The Southeast Asian Studies Initiative at Brown University. Advocating for the development of Southeast Asian Studies since 2017.
          </p>
          <a
            href="mailto:seasi@brown.edu"
            class="inline-flex items-center gap-2 mt-5 font-mono text-xs text-crimson-vivid hover:text-crimson transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-3.5 h-3.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
            seasi@brown.edu
          </a>
        </div>

        <!-- Navigation column -->
        <div>
          <h3 class="font-mono text-2xs uppercase tracking-widest text-ivory/30 mb-5">Navigation</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                class="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors flex items-center gap-1.5 group"
              >
                <span class="w-0 group-hover:w-3 h-px bg-crimson-vivid transition-all duration-300 inline-block" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Socials column -->
        <div>
          <h3 class="font-mono text-2xs uppercase tracking-widest text-ivory/30 mb-5">Follow Us</h3>
          <ul class="flex flex-col gap-4">
            <li v-for="social in socials" :key="social.label">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 font-sans text-sm text-ivory/60 hover:text-ivory group transition-colors"
              >
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-full border border-ivory/10 group-hover:border-crimson-vivid group-hover:text-crimson-vivid transition-all duration-300"
                  v-html="social.icon"
                />
                {{ social.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="max-w-8xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-mono text-2xs text-ivory/25 uppercase tracking-widest">
        © {{ new Date().getFullYear() }} Brown SEASI · Providence, RI
      </p>
      <p class="font-mono text-2xs text-ivory/25 uppercase tracking-widest">
        Brown University
      </p>
    </div>
  </footer>
</template>
