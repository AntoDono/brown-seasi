/**
 * Absolute URL for a path under `public/` (e.g. `/images/hero.png`).
 * Set `NUXT_PUBLIC_SITE_URL` in production so Open Graph images resolve for crawlers.
 */
export function useSiteAssetUrl(path: string) {
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string | undefined)?.replace(/\/$/, '') ?? ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (!base) return normalized
  return `${base}${normalized}`
}
