'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleElementAnimateLeft({children, styles}) {
  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={styles}
        viewport={{once:false, amount: 0.3}}
    >
        {children}
    </motion.div>
  )
}

export default HandleElementAnimateLeft