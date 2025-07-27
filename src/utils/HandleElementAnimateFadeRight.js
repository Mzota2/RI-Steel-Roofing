'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleElementAnimateFadeRight({children, styles}) {
  return (
    <motion.span
        variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
        className={styles}
    >
        {children}
    </motion.span>
  )
}

export default HandleElementAnimateFadeRight