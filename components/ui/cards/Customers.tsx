'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Customers = ({imageUrl, label}: {imageUrl: string, label: string}) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
        <motion.div 
            className="w-48 h-48 rounded-full overflow-hidden border-6 border-white shadow-2xl"
            animate={{ 
                y: [0, -8, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2 // Random delay for each image
            }}
            whileHover={{
                y: -12,
                transition: { duration: 0.3 }
            }}
        >
            <img src={imageUrl} alt={label} className="w-full h-full object-cover" />
        </motion.div>
        <h2 className="text-lg font-light tracking-wide">{label}</h2>
    </div>
  )
}

export default Customers