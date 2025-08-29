'use client'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/base/Button'
import { CustomerFormDialog } from '../ui/forms/CustomFormDialog'
import Carousel, { CarouselItem } from '../ui/base/Carousel'
import TestimonialCard, { Testimonial } from '../ui/cards/TestimonialCard'
import { useFormDialogStore } from '@/stores/formDialogStore'

const TestimonialsSection = () => {
    const disableAnimations = false;
    const { setOpen } = useFormDialogStore();

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
            content: "I’ve tried other services, but this is the first time I felt in control of the process. The flexibility and quality are unmatched.",
        },
        {
            id: 3,
            name: "Angela R",
            location: "Tampa FL",
            content: "The best part? These sellers actually answer the phone—and they’re serious. I closed 2 deals in my first 30 days.",
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
                                What Agents
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
                                Are Saying
                            </motion.span>
                        </motion.div>
                    </h2>
                    <p className="tracking-[-0.32px] px-16 text-muted-foreground text-center break-words mx-auto">
                        Hear from the real estate professionals who rely on Atlas Realty Leads.
                    </p>
                </div>
                <motion.div 
                    className="w-full mt-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
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
                <div className="mt-4">
                    <Button
                        className="p-6 group relative overflow-hidden"
                        onClick={() => setOpen(true)}
                    >
                        <span className="relative z-10">Join the Agents Getting Real Results</span>
                    </Button>
                </div>
            </section>
            <CustomerFormDialog />
        </MotionConfig>
    )
}

export default TestimonialsSection