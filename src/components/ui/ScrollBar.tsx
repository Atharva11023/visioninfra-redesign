'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollBar() {
  const [progress, setProgress] = useState(0)
  const springProgress = useSpring(progress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9996] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX: springProgress,
        background: 'linear-gradient(90deg, #9a7c32, #c9a84c, #e8c97a)',
      }}
    />
  )
}
