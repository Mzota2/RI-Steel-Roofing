'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleElementAnimateScale({children, styles}) {
  return (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className={styles}
    >
        {children}
    </motion.div>
  )
}

export default HandleElementAnimateScale