<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const siteUrl = computed(() => (config.public.siteUrl as string | undefined)?.replace(/\/$/, '') ?? '')
const canonicalUrl = computed(() => (siteUrl.value ? `${siteUrl.value}${route.path}` : ''))

useSeoMeta({
  ogSiteName: 'Brown SEASI',
  ogType: 'website',
  ogLocale: 'en_US',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
})

useHead({
  link: computed(() =>
    canonicalUrl.value ? [{ rel: 'canonical', href: canonicalUrl.value }] : [],
  ),
})
</script>

<template>
  <NuxtPage />
</template>
