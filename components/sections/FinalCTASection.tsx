'use client';
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/base/Button';
import { useFormDialogStore } from '@/stores/formDialogStore';
import { useMultipleIntersectionObserver } from '@/utils/useIntersectionObserver';

const FinalCTASection = () => {
  // Set to true to disable all animations for testing only
  const disableAnimations = false;
  const { setOpen } = useFormDialogStore();

  // Initialize intersection observer for multiple elements (headline, subheadline, button)
  const { setRef, isVisible } = useMultipleIntersectionObserver(3, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:50px_50px]" />
        </div>

        <div className="relative z-10 px-8 sm:px-20 xl:px-40 py-20 sm:py-28">
          <div className="max-w-5xl mx-auto text-center">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.div
                ref={setRef(0)}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                Get{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isVisible(0)
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="bg-white text-primary px-3 py-1 rounded-lg font-black">
                    Motivated
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: '-400%' }}
                    animate={isVisible(0) ? { x: '400%' } : { x: '-300%' }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      repeat: isVisible(0) ? Infinity : 0,
                      repeatDelay: 5,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.span>{' '}
                Seller Leads
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                That Actually{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isVisible(0)
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="bg-white text-primary px-3 py-1 rounded-lg font-black">
                    Talk Back
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: '-400%' }}
                    animate={isVisible(0) ? { x: '400%' } : { x: '-400%' }}
                    transition={{
                      duration: 2,
                      delay: 3,
                      repeat: isVisible(0) ? Infinity : 0,
                      repeatDelay: 5,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.span>
                .
              </motion.div>
            </h2>

            {/* Subheadline */}
            <motion.p
              ref={setRef(1)}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lock in your ZIPs, talk to real sellers, and close more
              listings—without the hassle.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              ref={setRef(2)}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isVisible(2)
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-white text-primary hover:bg-white/90 p-8 text-xl font-bold group relative overflow-hidden shadow-2xl border-2 border-white/20"
                onClick={() => setOpen(true)}
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  className="inline-flex items-center ml-3"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-2" />
                </motion.div>

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2,
                    delay: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute -bottom-4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </section>
    </MotionConfig>
  );
};

export default FinalCTASection;
