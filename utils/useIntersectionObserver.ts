'use client'
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    if (triggerOnce && hasTriggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsIntersecting(isVisible)
        
        if (isVisible && triggerOnce) {
          setHasTriggered(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return {
    targetRef,
    isIntersecting: triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting,
    hasTriggered
  }
}

export const useMultipleIntersectionObserver = (
  elementsCount: number,
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [visibilityMap, setVisibilityMap] = useState<Record<number, boolean>>({})
  const [triggeredMap, setTriggeredMap] = useState<Record<number, boolean>>({})
  const refs = useRef<(HTMLElement | null)[]>(new Array(elementsCount).fill(null))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.current.forEach((target, index) => {
      if (!target) return

      if (triggerOnce && triggeredMap[index]) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting
          
          setVisibilityMap(prev => ({
            ...prev,
            [index]: isVisible
          }))
          
          if (isVisible && triggerOnce) {
            setTriggeredMap(prev => ({
              ...prev,
              [index]: true
            }))
          }
        },
        {
          threshold,
          rootMargin
        }
      )

      observer.observe(target)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [elementsCount, threshold, rootMargin, triggerOnce, triggeredMap])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }

  const isVisible = (index: number) => {
    return triggerOnce 
      ? (triggeredMap[index] || visibilityMap[index]) 
      : visibilityMap[index]
  }

  return {
    setRef,
    isVisible,
    visibilityMap: triggerOnce 
      ? Object.keys(visibilityMap).reduce((acc, key) => {
          const index = parseInt(key)
          acc[index] = triggeredMap[index] || visibilityMap[index]
          return acc
        }, {} as Record<number, boolean>)
      : visibilityMap
  }
}
