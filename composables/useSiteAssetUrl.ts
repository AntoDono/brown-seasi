/**
 * Absolute URL for a path under `public/` (e.g. `/images/hero.png`).
 * Base comes from `runtimeConfig.public.siteUrl` (see `nuxt.config.ts`: `NUXT_PUBLIC_SITE_URL` or Netlify `URL`).
 */
export function useSiteAssetUrl(path: string) {
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string | undefined)?.replace(/\/$/, '') ?? ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (!base) return normalized
  return `${base}${normalized}`
}
