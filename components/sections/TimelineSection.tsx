'use client';

import { motion, MotionConfig } from 'framer-motion';
import { LayoutList, Target, Users, Cpu } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const TimelineSection = () => {
  // Set to true to disable all animations for testing only
  const disableAnimations = false;

  // State for tracking current active step
  const [currentStep, setCurrentStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // // Debug: Log current step changes
  // useEffect(() => {
  //   console.log('Current step changed to:', currentStep);
  // }, [currentStep]);

  // Intersection Observer to track which step is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setCurrentStep(index + 1);
            }
          },
          {
            threshold: 0.3, // Reduced threshold for better triggering
            rootMargin: '-10% 0px -10% 0px', // Reduced margin for better detection
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  const steps = [
    {
      id: 1,
      icon: LayoutList,
      title: 'Choose Your ZIP Codes',
      description: 'You tell us where to target.',
      imageSrc: '/assets/images/step1.jpg',
      imageAlt: 'Choose Your ZIP Codes',
    },
    {
      id: 2,
      icon: Target,
      title: 'We Start the Outreach',
      description: 'Our system contacts homeowners and filters for motivation.',
      imageSrc: '/assets/images/step2.jpg',
      imageAlt: 'We Start the Outreach',
      reverse: true,
    },
    {
      id: 3,
      icon: Users,
      title: 'You Get Real Leads',
      description:
        'Pay-per-lead delivery with no fluff. Every contact is screened for motivation and readiness to talk.',
      imageSrc: '/assets/images/step3.jpg',
      imageAlt: 'You Get Real Leads',
    },
    {
      id: 4,
      icon: Cpu,
      title: 'You Take Control',
      description: "Adjust your lead flow anytime. You're always in charge.",
      imageSrc: '/assets/images/step4.jpg',
      imageAlt: 'You Take Control',
      reverse: true,
    },
  ];

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section className=" py-32">
        {/* Header Section */}
        <div className="">
          <div className=" container flex flex-col gap-6 py-4 lg:py-8">
            <h2 className="text-4xl sm:text-[45px] md:text-[50px] xl:text-[45px] font-bold my-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.span
                  className="text-primary font-black relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  How
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '300%' }}
                    transition={{
                      duration: 1.5,
                      delay: 1.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.span>{' '}
                <motion.span
                  className="text-black font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  It Works
                </motion.span>
              </motion.div>
            </h2>
            <p className="tracking-[-0.32px] px-16 text-muted-foreground text-center break-words mx-auto">
              This is an overview on how Atlas Realty Leads can help you reach
              your goals.
            </p>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="mr-16 container overflow-hidden w-[100%] pb-40 px-18 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:pt-20! relative">
          {/* DEBUG: Show current step */}
          {/* <div className="fixed top-4 right-4 bg-black text-white p-2 rounded z-50 lg:block hidden">
            Current Step: {currentStep} / {steps.length}
          </div> */}
          {/* Progress Line - Desktop Only */}
          <div className="hidden lg:block absolute left-8 top-20 bottom-20 w-1 z-10">
            {/* Background Line */}
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full" />

            {/* Progress Fill with Primary Color - FIXED */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                backgroundColor: '#0c4e8b',
                boxShadow: '0 0 8px rgba(12, 78, 139, 0.4)',
                zIndex: 2,
              }}
              initial={{ height: '0%' }}
              animate={{
                height: `${Math.min((currentStep / steps.length) * 100, 100)}%`,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                type: 'spring',
                stiffness: 120,
                damping: 25,
              }}
            />

            {/* Animated Progress Glow - FIXED */}
            <motion.div
              className="absolute top-0 rounded-full origin-top"
              style={{
                backgroundColor: 'rgba(12, 78, 139, 0.6)',
                zIndex: 1,
              }}
              initial={{ height: '0%' }}
              animate={{
                height: `${Math.min((currentStep / steps.length) * 100, 100)}%`,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                type: 'spring',
                stiffness: 120,
                damping: 25,
                delay: 0.1,
              }}
            />

            {/* Step Indicators */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="absolute w-8 h-8 -left-3.5 rounded-full border-2 bg-white dark:bg-gray-900 transition-colors duration-300 z-20"
                style={{
                  top: `${(index / Math.max(steps.length - 1, 1)) * 100}%`,
                  transform: 'translateY(-50%)',
                }}
                animate={{
                  borderColor:
                    currentStep > index
                      ? '#0c4e8b'
                      : currentStep === index + 1
                      ? '#0c4e8b'
                      : '#9ca3af',
                  backgroundColor:
                    currentStep > index + 1 ? '#0c4e8b' : '#ffffff',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-sm font-bold transition-colors duration-300"
                    style={{
                      color:
                        currentStep > index + 1
                          ? '#ffffff'
                          : currentStep >= index + 1
                          ? '#0c4e8b'
                          : '#9ca3af',
                    }}
                  >
                    {step.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const delay = index * 0.3; // Stagger delay between steps
            const isReverse = step.reverse;

            return (
              <motion.div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="relative flex"
                initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: delay,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.div
                  className={`flex w-full justify-center px-1 py-10 text-end md:gap-6 lg:gap-10 ${
                    step.reverse ? 'lg:flex-row-reverse lg:text-start' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: delay + 0.2,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                >
                  {/* Desktop Text Content */}
                  <motion.div
                    className="flex-1 max-lg:hidden"
                    initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: delay + 0.4,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl tracking-[-0.96px]">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground ${
                        step.reverse ? '' : 'ml-auto'
                      }`}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Icon
                  <motion.div
                    className="z-[-1] size-fit -translate-y-5 bg-background p-4 max-lg:-translate-x-4"
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: delay + 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-[10px] border bg-card p-[5px] shadow-md">
                      <div className="size-fit rounded-md border bg-muted p-1">
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
                      </div>
                    </div>
                  </motion.div> */}

                  {/* Image Content */}
                  <motion.div
                    className="flex-1 max-lg:-translate-x-4"
                    initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: delay + 0.6,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Mobile Text Content */}
                    <div className="text-start lg:pointer-events-none lg:hidden">
                      <h3 className="text-2xl tracking-[-0.96px]">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 mb-10 max-w-[250px] tracking-[-0.32px] text-balance text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Image Container */}
                    <div className="flex items-start justify-start max-w-[250px]">
                      <div className={step.reverse ? 'lg:ml-auto' : ''}>
                        {/* Top Border */}
                        <motion.div
                          className="px-6 lg:px-10"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: delay + 0.7,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                        >
                          <div
                            className="w-full border-2 border-dashed h-6 lg:h-10"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23hsl(var(--foreground))' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                          />
                        </motion.div>

                        {/* Main Image Grid */}
                        <motion.div
                          className="relative grid grid-cols-[auto_1fr_auto] items-stretch"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: delay + 0.8,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="border-2 border-dashed h-full w-6 lg:w-10"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23hsl(var(--foreground))' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: delay + 0.9,
                              ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                          />
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: delay + 0.2,
                              ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src={step.imageSrc}
                              width={250}
                              height={250}
                              alt={step.imageAlt}
                              className="object-cover dark:invert max-w-[250px] max-h-[250px]"
                            />
                          </motion.div>
                          <motion.div
                            className="h-full border-2 border-dashed w-6 lg:w-10"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23hsl(var(--foreground))' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: delay + 0.9,
                              ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                          />
                        </motion.div>

                        {/* Bottom Border */}
                        <motion.div
                          className="px-6 lg:px-10"
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: delay + 0.7,
                            ease: 'easeOut',
                          }}
                          viewport={{ once: true }}
                        >
                          <div
                            className="w-full border-2 border-dashed h-6 lg:h-10"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23hsl(var(--foreground))' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Vertical Timeline Line */}
                <motion.div
                  className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${
                    index === 0
                      ? 'bg-foreground/10'
                      : isLast
                      ? 'bg-linear-to-b from-foreground/10 via-foreground/10 to-transparent'
                      : 'bg-foreground/10'
                  }`}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: delay + 0.3,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                >
                  {index === 0 && (
                    <motion.div
                      className="h-4 w-[3px] -translate-y-full bg-linear-to-b from-transparent to-foreground/10"
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: delay + 0.5,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </MotionConfig>
  );
};

export default TimelineSection;
