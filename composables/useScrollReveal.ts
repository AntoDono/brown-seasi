import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Ref } from 'vue'

/**
 * Staggered scroll reveals for elements with `data-reveal` inside a container.
 */
export function useScrollReveal(
  root: Ref<HTMLElement | null | undefined>,
  options?: { start?: string; y?: number; stagger?: number; duration?: number }
) {
  const start = options?.start ?? 'top 88%'
  const y = options?.y ?? 40
  const stagger = options?.stagger ?? 0.07
  const duration = options?.duration ?? 0.85

  onMounted(() => {
    const el = unref(root)
    if (!el) return

    const ctx = gsap.context(() => {
      const nodes = el.querySelectorAll<HTMLElement>('[data-reveal]')
      if (!nodes.length) return

      gsap.set(nodes, { opacity: 0, y })

      ScrollTrigger.batch(nodes, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: 'power3.out',
            overwrite: true,
          })
        },
        start,
        once: true,
      })
    }, el)

    onUnmounted(() => {
      ctx.revert()
    })
  })
}
