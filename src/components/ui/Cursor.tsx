'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const dotX   = useMotionValue(-100)
  const dotY   = useMotionValue(-100)
  const ringX  = useSpring(dotX, { stiffness: 110, damping: 18 })
  const ringY  = useSpring(dotY, { stiffness: 110, damping: 18 })

  const [hovered,  setHovered]  = useState(false)
  const [clicked,  setClicked]  = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const move = (e: MouseEvent) => { dotX.set(e.clientX); dotY.set(e.clientY) }
    const down = () => setClicked(true)
    const up   = () => setClicked(false)

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => setHovered(true))
      el.addEventListener('mouseleave', () => setHovered(false))
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach(addHover)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup',   up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup',   up)
    }
  }, [dotX, dotY])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width:  clicked ? 6 : 8,
          height: clicked ? 6 : 8,
          backgroundColor: '#c9a84c',
          transition: 'width 0.12s, height 0.12s',
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full border"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width:  hovered ? 52 : clicked ? 30 : 38,
          height: hovered ? 52 : clicked ? 30 : 38,
          borderColor: hovered ? 'rgba(201,168,76,0.75)' : 'rgba(201,168,76,0.35)',
          transition: 'width 0.28s cubic-bezier(0.16,1,0.3,1), height 0.28s cubic-bezier(0.16,1,0.3,1), border-color 0.28s',
          mixBlendMode: hovered ? 'difference' : 'normal',
        }}
      />
    </>
  )
}
