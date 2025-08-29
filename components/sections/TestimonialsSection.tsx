'use client'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/base/Button'
import { CustomerFormDialog } from '../ui/forms/CustomFormDialog'
import Carousel, { CarouselItem } from '../ui/base/Carousel'
import TestimonialCard, { Testimonial } from '../ui/cards/TestimonialCard'
import { useFormDialogStore } from '@/stores/formDialogStore'
import { useMultipleIntersectionObserver } from '@/utils/useIntersectionObserver'

const TestimonialsSection = () => {
    const disableAnimations = false;
    const { setOpen } = useFormDialogStore();

    // Initialize intersection observer for multiple elements (title, description, carousel, button)
    const { setRef, isVisible } = useMultipleIntersectionObserver(4, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true
    });

    // Sample testimonial data
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Jenna L.",
            location: "Dallas TX",
            content: "Within the first week, I had a solid seller conversation that turned into a signed listing. These leads are the real deal.",
        },
        {
            id: 2,
            name: "Marcus V.",
            location: "Phoenix AZ",
            content: "I've tried other services, but this is the first time I felt in control of the process. The flexibility and quality are unmatched.",
        },
        {
            id: 3,
            name: "Angela R",
            location: "Tampa FL",
            content: "The best part? These sellers actually answer the phone—and they're serious. I closed 2 deals in my first 30 days.",
        },
    ];

    // Convert testimonials to carousel items
    const carouselItems: CarouselItem[] = testimonials.map(testimonial => ({
        id: testimonial.id,
        content: <TestimonialCard testimonial={testimonial} />
    }));
    return (
        <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
            <section className="w-full flex flex-col items-center justify-center px-8 sm:px-20 xl:px-40 py-50">
                <div>
                    <h2 className="text-4xl sm:text-[45px] md:text-[50px] font-bold my-4 text-center">
                        <motion.div
                            ref={setRef(0)}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <motion.span
                                className="text-primary font-black relative inline-block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible(0) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                What Agents
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
                                animate={isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Are Saying
                            </motion.span>
                        </motion.div>
                    </h2>
                    <motion.p 
                        ref={setRef(1)}
                        className="tracking-[-0.32px] px-16 text-muted-foreground text-center break-words mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Hear from the real estate professionals who rely on Atlas Realty Leads.
                    </motion.p>
                </div>
                <motion.div 
                    ref={setRef(2)}
                    className="w-full mt-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible(2) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Carousel
                        items={carouselItems}
                        className="w-full mx-auto"
                        showNavigation={true}
                        showDots={true}
                        autoPlay={true}
                        autoPlayInterval={60000}
                        pauseOnHover={true}
                        dragEnabled={true}
                        loop={true}
                    />
                </motion.div>
                <motion.div 
                    ref={setRef(3)}
                    className="mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible(3) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button
                        className="p-6 group relative overflow-hidden"
                        onClick={() => setOpen(true)}
                    >
                        <span className="relative z-10">Join the Agents Getting Real Results</span>
                    </Button>
                </motion.div>
            </section>
            <CustomerFormDialog />
        </MotionConfig>
    )
}

export default TestimonialsSection