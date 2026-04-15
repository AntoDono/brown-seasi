// https://nuxt.com/docs/api/configuration/nuxt-config

/** Canonical origin for OG URLs (no trailing slash). Inlined at build time. */
function publicSiteUrl() {
  const raw =
    process.env.NUXT_PUBLIC_SITE_URL ||
    // Netlify sets https://yoursite.netlify.app during build — use if you didn’t set NUXT_PUBLIC_*
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    ''
  return raw.replace(/\/$/, '')
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      /**
       * Used for absolute `og:image` URLs. Prefer `NUXT_PUBLIC_SITE_URL` for a custom domain.
       * If unset, Netlify’s `URL` is used automatically during the build.
       */
      siteUrl: publicSiteUrl(),
    },
  },

  app: {
    head: {
      title: 'Brown SEASI — Southeast Asian Studies Initiative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,500&family=JetBrains+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },
})
