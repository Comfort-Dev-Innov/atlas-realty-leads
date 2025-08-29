'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

export interface CarouselItem {
  id: string | number
  content: React.ReactNode
}

interface CarouselProps {
  items: CarouselItem[]
  className?: string
  itemClassName?: string
  showNavigation?: boolean
  showDots?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
  dragEnabled?: boolean
  itemsPerView?: number
  gap?: number
  loop?: boolean
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  className,
  itemClassName,
  showNavigation = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  pauseOnHover = true,
  dragEnabled = true,
  itemsPerView = 1,
  loop = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const totalItems = items.length
  const maxIndex = Math.max(0, totalItems - itemsPerView)

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    if (autoPlay && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (loop) {
            return (prevIndex + 1) % totalItems
          }
          return prevIndex >= maxIndex ? 0 : prevIndex + 1
        })
      }, autoPlayInterval)
    }
  }, [autoPlay, isHovered, autoPlayInterval, loop, totalItems, maxIndex])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [startAutoPlay, stopAutoPlay])

  useEffect(() => {
    if (pauseOnHover) {
      if (isHovered) {
        stopAutoPlay()
      } else {
        startAutoPlay()
      }
    }
  }, [isHovered, pauseOnHover, startAutoPlay, stopAutoPlay])

  const goToSlide = useCallback((index: number) => {
    if (loop) {
      setCurrentIndex(index % totalItems)
    } else {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
    }
  }, [totalItems, maxIndex, loop])

  const goToPrevious = useCallback(() => {
    if (loop) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
    } else {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
    }
  }, [totalItems, loop])

  const goToNext = useCallback(() => {
    if (loop) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
    } else {
      setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
    }
  }, [maxIndex, totalItems, loop])

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (!dragEnabled) return

      const threshold = 50
      if (info.offset.x > threshold) {
        goToPrevious()
      } else if (info.offset.x < -threshold) {
        goToNext()
      }
    },
    [dragEnabled, goToPrevious, goToNext]
  )

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const isMobile = windowWidth < 640
  const isTablet = windowWidth < 1024
  
  const centerCardWidth = isMobile ? 280 : isTablet ? 350 : 400
  const sideCardWidth = isMobile ? 200 : isTablet ? 300 : 400
  const cardGap = isMobile ? 20 : isTablet ? 25 : 30
  
  if (totalItems === 0) {
    return null
  }

  return (
    <div
      className={cn('relative w-full overflow-hidden min-h-[500px]', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center min-h-[400px] relative">
          {items.map((item, index) => {
            const distance = index - currentIndex
            const isCenter = distance === 0
            const isVisible = isMobile ? isCenter : Math.abs(distance) <= 1
            
            let xPosition = distance * (sideCardWidth + cardGap)
            if (distance > 0) {
              xPosition = (centerCardWidth / 2) + cardGap + ((distance - 1) * (sideCardWidth + cardGap)) + (sideCardWidth / 2)
            } else if (distance < 0) {
              xPosition = -(centerCardWidth / 2) - cardGap - ((Math.abs(distance) - 1) * (sideCardWidth + cardGap)) - (sideCardWidth / 2)
            }

            return (
              <motion.div
                key={item.id}
                className={cn(
                  'absolute cursor-pointer',
                  itemClassName,
                  !isVisible && 'pointer-events-none'
                )}
                style={{
                  width: isCenter ? centerCardWidth : sideCardWidth,
                  zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(distance))
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: xPosition,
                  scale: isCenter ? 1 : 0.85,
                  opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                  filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.3 },
                  filter: { duration: 0.3 }
                }}
                onClick={() => !isCenter && goToSlide(index)}
                drag={dragEnabled ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                whileHover={!isCenter ? { scale: 0.9, filter: 'blur(1px)' } : {}}
              >
                {item.content}
              </motion.div>
            )
          })}
        </div>
      </div>

      {showNavigation && totalItems > 1 && !isMobile && (
        <>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              'absolute left-4 top-[35%] -translate-y-1/2 z-20',
              'bg-white/90 backdrop-blur-sm border-gray-200',
              'hover:bg-white hover:scale-110 transition-all duration-200',
              'shadow-lg',
              (!loop && currentIndex === 0) && 'opacity-50 cursor-not-allowed'
            )}
            onClick={goToPrevious}
            disabled={!loop && currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              'absolute right-4 top-[35%] -translate-y-1/2 z-20',
              'bg-white/90 backdrop-blur-sm border-gray-200',
              'hover:bg-white hover:scale-110 transition-all duration-200',
              'shadow-lg',
              (!loop && currentIndex >= totalItems - 1) && 'opacity-50 cursor-not-allowed'
            )}
            onClick={goToNext}
            disabled={!loop && currentIndex >= totalItems - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showDots && totalItems > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                'hover:scale-125',
                currentIndex === index
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
