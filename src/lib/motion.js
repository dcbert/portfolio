import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Narrow viewports: shorter pin travel, still Lenis + color wipes. */
export function isCompactViewport() {
  return window.matchMedia('(max-width: 639px)').matches
}

export function pinTravel(desktop, mobile) {
  return isCompactViewport() ? mobile : desktop
}

/**
 * Single scroll authority: GSAP ticker drives Lenis; ScrollTrigger updates on Lenis scroll.
 */
export function createMotion() {
  const reduced = prefersReducedMotion()

  if (reduced) {
    document.documentElement.classList.add('motion-reduced')
    return {
      lenis: null,
      reduced: true,
      destroy() {},
      scrollTo(target) {
        const el =
          typeof target === 'string' ? document.querySelector(target) : target
        el?.scrollIntoView({ behavior: 'auto', block: 'start' })
      },
    }
  }

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  })

  document.documentElement.classList.add('lenis')

  lenis.on('scroll', ScrollTrigger.update)

  const tickerFn = (time) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  window.__lenis = lenis

  const onLoad = () => {
    ScrollTrigger.refresh()
    lenis.resize()
  }
  window.addEventListener('load', onLoad)

  return {
    lenis,
    reduced: false,
    destroy() {
      window.removeEventListener('load', onLoad)
      gsap.ticker.remove(tickerFn)
      lenis.destroy()
      window.__lenis = null
      ScrollTrigger.getAll().forEach((t) => t.kill())
    },
    scrollTo(target, opts = {}) {
      lenis.scrollTo(target, { offset: 0, duration: 1.2, ...opts })
    },
  }
}

export function wipeBg(color) {
  document.documentElement.style.setProperty('--chapter-bg', color)
}

export const COLORS = {
  void: '#07070a',
  charcoal: '#121218',
  copperField: '#1a120c',
  surface: '#1a1a22',
}
