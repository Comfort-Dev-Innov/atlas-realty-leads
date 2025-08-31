'use client';
import { motion, MotionConfig } from 'framer-motion';
import React from 'react';
import Customers from '../ui/cards/Customers';
import { Button } from '../ui/base/Button';
import { useFormDialogStore } from '@/stores/formDialogStore';
import { useMultipleIntersectionObserver } from '@/utils/useIntersectionObserver';

const CustomerSection = () => {
  const disableAnimations = false;
  const { setOpen } = useFormDialogStore();

  // Initialize intersection observer for multiple elements (title, description, customers, button)
  const { setRef, isVisible } = useMultipleIntersectionObserver(4, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const customers = [
    {
      imageUrl: '/assets/images/realtor.jpg',
      label: 'Realtors',
    },
    {
      imageUrl: '/assets/images/real-estate-brokers.jpg',
      label: 'Real Estate Brokers',
    },
    {
      imageUrl: '/assets/images/listing-agents.jpg',
      label: 'Listing Agents',
    },
    {
      imageUrl: '/assets/images/independent-agent.jpg',
      label: 'Independent Agents',
    },
    {
      imageUrl: '/assets/images/team-brokerages.jpg',
      label: 'Teams & Brokerages',
    },
  ];

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section
        id="who-we-help"
        className="w-full flex flex-col items-center justify-center px-8 sm:px-20 xl:px-40 py-50"
      >
        <div>
          <h2 className="text-4xl sm:text-[45px] md:text-[50px] font-bold my-4 text-center">
            <motion.div
              ref={setRef(0)}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.span
                className="text-primary font-black relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible(0)
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Who
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={isVisible(0) ? { x: '300%' } : { x: '-100%' }}
                  transition={{
                    duration: 1.5,
                    delay: 1.5,
                    repeat: isVisible(0) ? Infinity : 0,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>{' '}
              <motion.span
                className="text-black font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We Help
              </motion.span>
            </motion.div>
          </h2>
          <motion.p
            ref={setRef(1)}
            className="tracking-[-0.32px] px-16 text-muted-foreground text-center break-words mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We exclusively serve licensed real estate professionals.
          </motion.p>
        </div>
        <motion.div
          ref={setRef(2)}
          className="flex flex-wrap justify-center gap-x-24 gap-y-14 mt-18"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible(2) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {customers.map((customer, index) => (
            <Customers
              key={index}
              imageUrl={customer.imageUrl}
              label={customer.label}
            />
          ))}
        </motion.div>
        <motion.div
          ref={setRef(3)}
          className="mt-18"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            className="p-6 group relative overflow-hidden"
            onClick={() => setOpen(true)}
          >
            <span className="relative z-10">Check Territory Availability</span>
          </Button>
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default CustomerSection;
