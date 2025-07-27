'use client';
import { motion } from 'framer-motion';
import React from 'react'

function HandleAnimateUp({children, styles}) {
  return (
     <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{once:false}}
        className={styles || 'order-1 w-full'}
        >
        {children}
    </motion.div>
  )
}

export default HandleAnimateUp