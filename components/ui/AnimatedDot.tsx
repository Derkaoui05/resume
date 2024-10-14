'use client'

import { motion } from 'framer-motion'

export const AnimatedDot = () => {
  return (
    <motion.div
      className="w-3 h-3 bg-success rounded-full"
      animate={{
        scale: [.5, 1, .5],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}