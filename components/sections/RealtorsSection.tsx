'use client';
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import {
  HandCoins,
  PhoneIncoming,
  Binary,
  Contact,
  ReplaceAll,
  Receipt,
} from 'lucide-react';
import RealtorCard from '../ui/cards/RealtorCard';
import {
  useIntersectionObserver,
  useMultipleIntersectionObserver,
} from '../../utils/useIntersectionObserver';

const RealtorsSection = () => {
  const disableAnimations = false;

  const { targetRef: sectionRef, isIntersecting: isSectionVisible } =
    useIntersectionObserver({
      threshold: 0.1,
      rootMargin: '-50px',
      triggerOnce: true,
    });

  const { setRef: setCardRef, isVisible: isCardVisible } =
    useMultipleIntersectionObserver(6, {
      threshold: 0.2,
      rootMargin: '-20px',
      triggerOnce: true,
    });

  const realtorContent = [
    {
      icon: HandCoins,
      title: 'Only Motivated Sellers',
      description:
        'Every lead is screened for intent, contactability, and timing.',
    },
    {
      icon: PhoneIncoming,
      title: 'Reachable Contacts',
      description:
        'You’re not chasing ghosts. We deliver sellers who pick up and talk.',
    },
    {
      icon: Binary,
      title: 'Exclusive ZIP Codes',
      description: 'Lock down your territory. We don’t double-assign.',
    },
    {
      icon: Contact,
      title: 'Full Account Control',
      description:
        'Pause, scale, or cancel anytime. You’re in the driver’s seat.',
    },
    {
      icon: ReplaceAll,
      title: 'Lead Replacements',
      description: 'Invalid lead? We’ll replace it. No extra cost, no stress.',
    },
    {
      icon: Receipt,
      title: 'Straightforward Pricing',
      description: '$65 per lead. No setup fees. No contracts.',
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section ref={sectionRef} id="why-choose-us" className="relative w-full">
        <motion.div
          className="w-full relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-primary"></div>
          <motion.div
            className="absolute inset-0"
            animate={
              isSectionVisible
                ? {
                    background: [
                      'linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--primary)/.9) 50%, hsl(var(--primary)/.8) 100%)',
                      'linear-gradient(135deg, hsl(var(--primary)/.8) 0%, hsl(var(--primary)) 30%, hsl(var(--primary)/.9) 100%)',
                      'linear-gradient(225deg, hsl(var(--primary)/.9) 0%, hsl(var(--primary)/.8) 70%, hsl(var(--primary)) 100%)',
                      'linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--primary)/.9) 50%, hsl(var(--primary)/.8) 100%)',
                    ],
                  }
                : {}
            }
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {Array.from({ length: 150 }).map((_, index) => {
            const particleTypes = [
              { size: 'w-1 h-1', opacity: 'bg-white/15', blur: 'blur-none' },
              { size: 'w-2 h-2', opacity: 'bg-white/25', blur: 'blur-sm' },
              { size: 'w-3 h-3', opacity: 'bg-white/20', blur: 'blur-none' },
              { size: 'w-4 h-4', opacity: 'bg-white/10', blur: 'blur-md' },
              {
                size: 'w-1.5 h-1.5',
                opacity: 'bg-white/30',
                blur: 'blur-[1px]',
              },
              { size: 'w-32 h-32', opacity: 'bg-white/8', blur: 'blur-2xl' },
            ];

            const particleType = particleTypes[index % particleTypes.length];
            const isLarge = index % 4 === 0;
            const movementRange = isLarge ? 40 : 20;

            return (
              <motion.div
                key={`particle-${index}`}
                className={`absolute ${particleType.size} ${particleType.opacity} ${particleType.blur} rounded-full`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={
                  isSectionVisible
                    ? {
                        y: [0, -30 - Math.random() * 20, 0],
                        x: [
                          0,
                          Math.random() * movementRange - movementRange / 2,
                          0,
                        ],
                        opacity: isLarge ? [0.1, 0.6, 0.1] : [0.2, 0.8, 0.2],
                        scale: isLarge ? [0.3, 1.2, 0.3] : [0.5, 1, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: isLarge
                    ? 6 + Math.random() * 4
                    : 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 3,
                }}
              />
            );
          })}

          <motion.div
            className="absolute inset-0 opacity-30 hidden md:block"
            animate={
              isSectionVisible
                ? {
                    background: [
                      'radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 20%, white 0%, transparent 50%), radial-gradient(circle at 20% 80%, white 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)',
                    ],
                  }
                : {}
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10 px-8 sm:px-20 xl:px-40 py-50">
            <div className="flex flex-col items-center justify-center space-y-16">
              <motion.div
                className="text-center space-y-4"
                initial="hidden"
                animate={isSectionVisible ? 'visible' : 'hidden'}
                variants={textVariants}
              >
                <motion.h1
                  className="text-[25px] min-[400px]:text-[35px] sm:text-[45px] md:text-[50px] font-bold text-white"
                  variants={textVariants}
                >
                  Why Realtors Work With Us
                </motion.h1>
                <motion.p
                  className="text-white/90 text-md sm:text-md xl:text-lg max-w-2xl"
                  variants={textVariants}
                  transition={{ delay: 0.2 }}
                >
                  We&apos;re more than just leads—we&apos;re consistent
                  conversations with real sellers.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                animate={isSectionVisible ? 'visible' : 'hidden'}
              >
                {realtorContent.map((item, index) => (
                  <motion.div
                    key={index}
                    ref={setCardRef(index)}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    <RealtorCard
                      {...item}
                      animationDelay={index * 3 + Math.random() * 5}
                      isVisible={isCardVisible(index)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default RealtorsSection;
