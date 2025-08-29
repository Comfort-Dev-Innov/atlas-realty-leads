import React from 'react'
import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface RealtorCardProps {
  icon: LucideIcon
  title: string
  description: string
  animationDelay?: number
}

const RealtorCard: React.FC<RealtorCardProps> = ({ icon: Icon, title, description, animationDelay = 0 }) => {
  const iconAnimation = {
    animate: {
      rotateY: [0, 180, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
        repeatDelay: 15 + Math.random() * 10,
      }
    }
  }

  const containerAnimation = {
    animate: {
      boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "0 8px 25px -3px rgba(0, 0, 0, 0.1)",
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay + 2,
        repeatDelay: 15 + Math.random() * 10
      }
    }
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md px-6 py-8 hover:shadow-lg transition-shadow duration-300 min-h-[216px]"
      variants={containerAnimation}
      animate="animate"
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <motion.div 
          className="p-3 bg-blue-100 rounded-full"
          variants={iconAnimation}
          animate="animate"
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default RealtorCard