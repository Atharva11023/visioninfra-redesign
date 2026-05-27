'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

/** Works with section and div refs — uses HTMLElement for max compatibility */
export function useReveal(threshold = 0.12, once = true) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { amount: threshold, once })
  return { ref, inView }
}

export function useDivReveal(threshold = 0.12, once = true) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { amount: threshold, once })
  return { ref, inView }
}
