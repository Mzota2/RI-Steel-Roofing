'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleElementAnimateRight({children, styles}) {
  return (
    <motion.span
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
        className={styles}
    >
        {children}
    </motion.span>
  )
}

export default HandleElementAnimateRight