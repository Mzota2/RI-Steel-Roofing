'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleElementAnimateFade({children, styles}) {
  return (
    <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        viewport={{ once: false }}
        className={styles}
    >
        {children}
    </motion.span>
  )
}

export default HandleElementAnimateFade