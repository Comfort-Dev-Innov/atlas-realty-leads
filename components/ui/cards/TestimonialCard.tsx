'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Testimonial {
  id: string | number
  name: string
  location: string
  content: string
  avatar?: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
  variant?: 'default' | 'compact' | 'featured'
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className,
  variant = 'default'
}) => {
  const { name, location, content, avatar } = testimonial

  // const renderStars = (rating: number) => {
  //   return Array.from({ length: 5 }).map((_, index) => (
  //     <Star
  //       key={index}
  //       className={cn(
  //         'h-4 w-4',
  //         index < rating
  //           ? 'fill-yellow-400 text-yellow-400'
  //           : 'fill-gray-200 text-gray-200'
  //       )}
  //     />
  //   ))
  // }

  const cardVariants = {
    default: 'bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full',
    compact: 'bg-white rounded-xl shadow-md border border-gray-100 p-4 h-full',
    featured: 'bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-xl border border-primary/20 p-8 h-full'
  }

  return (
    <motion.div
      className={cn(cardVariants[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      }}
    >
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <div className="flex justify-between items-start mb-4">
          <Quote className={cn(
            'h-6 w-6',
            variant === 'featured' ? 'text-primary' : 'text-gray-400'
          )} />
          {/* Rating */}
          <div className="flex space-x-1">
            {/* {renderStars(rating)} */}
          </div>
        </div>

        {/* Content */}
        <blockquote className={cn(
          'flex-1 text-gray-700 leading-relaxed mb-6',
          variant === 'compact' ? 'text-sm' : 'text-base',
          variant === 'featured' && 'text-lg'
        )}>
          {content}
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className={cn(
            'flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold',
            variant === 'compact' ? 'h-10 w-10 text-sm' : 'h-12 w-12',
            variant === 'featured' && 'h-14 w-14 text-lg'
          )}>
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span>{name.charAt(0)}</span>
            )}
          </div>

          {/* Name and Role */}
          <div className="flex-1 min-w-0">
            <div className={cn(
              'font-semibold text-gray-900',
              variant === 'compact' ? 'text-sm' : 'text-base'
            )}>
              {name}, {location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
