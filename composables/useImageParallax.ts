import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Ref } from 'vue'

export function useImageParallax(
  section: Ref<HTMLElement | null | undefined>,
  image: Ref<HTMLElement | null | undefined>,
  yPercent = 14
) {
  onMounted(() => {
    const wrap = unref(section)
    const img = unref(image)
    if (!wrap || !img) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -yPercent * 0.35 },
        {
          yPercent: yPercent * 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, wrap)

    onUnmounted(() => ctx.revert())
  })
}
