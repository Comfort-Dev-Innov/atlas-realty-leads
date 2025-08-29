'use client'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import Customers from '../ui/cards/Customers'
import { Button } from '../ui/base/Button'
import { useFormDialogStore } from '@/stores/formDialogStore'
import { CustomerFormDialog } from '../ui/forms/CustomFormDialog'

const CustomerSection = () => {
    const disableAnimations = false;
    const { setOpen } = useFormDialogStore();
    const customers = [
        {
            imageUrl: '/assets/images/realtor.jpg',
            label: 'Realtors'
        },
        {
            imageUrl: '/assets/images/real-estate-brokers.jpg',
            label: 'Real Estate Brokers'
        },
        {
            imageUrl: '/assets/images/listing-agents.jpg',
            label: 'Listing Agents'
        },
        {
            imageUrl: '/assets/images/independent-agent.jpg',
            label: 'Independent Agents'
        },
        {
            imageUrl: '/assets/images/team-brokerages.jpg',
            label: 'Teams & Brokerages'
        },
    ]

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
                                Who
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
                                We Help
                            </motion.span>
                        </motion.div>
                    </h2>
                    <p className="tracking-[-0.32px] px-16 text-muted-foreground text-center break-words mx-auto">
                        We exclusively serve licensed real estate professionals.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-24 gap-y-14 mt-18">
                    {customers.map((customer, index) => (
                        <Customers key={index} imageUrl={customer.imageUrl} label={customer.label} />
                    ))}
                </div>
                <div className="mt-12">
                    <Button
                        className="p-6 group relative overflow-hidden"
                        onClick={() => setOpen(true)}
                    >
                        <span className="relative z-10">Check Territory Availability</span>
                    </Button>
                </div>
            </section>
            <CustomerFormDialog />
        </MotionConfig>
    )
}

export default CustomerSection