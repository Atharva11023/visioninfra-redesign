import type { Variants } from 'framer-motion'

// ─── Easing curves ────────────────────────────────────────────
export const EASE_EXPO    = [0.16, 1, 0.3, 1]    as const
export const EASE_BACK    = [0.34, 1.56, 0.64, 1] as const
export const EASE_CINEMA  = [0.76, 0, 0.24, 1]    as const
export const EASE_SMOOTH  = [0.25, 0.46, 0.45, 0.94] as const

// ─── Variants ─────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE_EXPO },
  }),
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: EASE_EXPO },
  }),
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: (i: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: EASE_EXPO },
  }),
}

// Aliases used by older components
export const slideLeft  = fadeLeft
export const slideRight = fadeRight

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE_BACK },
  }),
}

export const clipRevealX: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)' },
  visible: (i: number = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.1, delay: i * 0.1, ease: EASE_CINEMA },
  }),
}

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1,  delayChildren: 0.05 } },
}

// Alias used by older components
export const staggerContainer = stagger

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
}

export const letterReveal: Variants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: (i: number = 0) => ({
    y: '0%', opacity: 1,
    transition: { duration: 0.75, delay: i * 0.04, ease: EASE_EXPO },
  }),
}

export const lineReveal: Variants = {
  hidden:  { y: '105%' },
  visible: (i: number = 0) => ({
    y: '0%',
    transition: { duration: 0.9, delay: i * 0.15, ease: EASE_CINEMA },
  }),
}
