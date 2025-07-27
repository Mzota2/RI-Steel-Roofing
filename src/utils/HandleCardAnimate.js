'use client';
import React from 'react'
import { motion } from 'framer-motion'
function HandleCardAnimate({key, children, styles}) {
  return (
    <motion.div 
        className={styles}
        key={key}
        variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
    >
        {children}
    
    </motion.div>
  )
}

export default HandleCardAnimate