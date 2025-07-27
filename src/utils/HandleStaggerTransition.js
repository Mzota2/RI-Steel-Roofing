'use client';
import { motion } from 'framer-motion'
import React from 'react'

function HandleStaggerTransition({children, styles}) {
  return (
    <motion.div
        className={styles}
        initial="hidden"
        whileInView="visible"
        variants={{
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.15
            }
        }
        }}
        viewport={{ once: false }}>
            {children}
    </motion.div>
  )
}

export default HandleStaggerTransition