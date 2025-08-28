'use client'
import React from 'react'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="flex-1 w-full flex gap-6 justify-between items-center">
        <div className="w-1/2">
            <h1 className="text-[65px] font-bold mb-6 leading-tight">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <motion.span 
                        className="text-primary font-black relative inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Motivated
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ 
                                duration: 1.5, 
                                delay: 1.5,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.span> Seller Leads.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative"
                >
                    <motion.span 
                        className="text-primary font-black relative inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Real
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "500%" }}
                            transition={{ 
                                duration: 1.5, 
                                delay: 2.8,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.span> Conversations.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="relative"
                >
                    <motion.span 
                        className="text-primary font-black relative inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        Real
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "500%" }}
                            transition={{ 
                                duration: 1.5, 
                                delay: 4.1,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.span> Closings.
                </motion.div>
            </h1>
            <motion.p 
                className="text-2xl mb-8 text-gray-900 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                Connect with homeowners who are ready to talk, move, and sell. No fluff,
                no chasing. Just motivated sellers you can actually reach.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button className="p-6 group relative overflow-hidden">
                    <span className="relative z-10">See How It Works</span>
                    <motion.div
                        className="inline-flex items-center"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </Button>
            </motion.div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative h-96">
            {/* Big center circle */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full overflow-hidden left-[200px] shadow-2xl border-4 border-white z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                    scale: { duration: 0.8, delay: 0.2 },
                    opacity: { duration: 0.8, delay: 0.2 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img
                    src="/assets/images/real-estate-3.jpg" 
                    alt="Real Estate Property" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Left smaller circle */}
            <motion.div
                className="absolute w-[250px] h-[250px] rounded-full overflow-hidden shadow-xl border-3 border-white -top-32 left-24 z-12"
                initial={{ scale: 0, opacity: 0, x: -50 }}
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                    scale: { duration: 0.8, delay: 0.5 },
                    opacity: { duration: 0.8, delay: 0.5 },
                    x: { duration: 0.8, delay: 0.5 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img 
                    src="/assets/images/real-estate-2.jpg" 
                    alt="Real Estate Property" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Right smallest circle */}
            <motion.div
                className="absolute w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-2 border-white right-12 -bottom-24 z-12"
                initial={{ scale: 0, opacity: 0, x: 50 }}
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: 0,
                    y: [0, -6, 0],
                    rotate: [0, 4, -4, 0]
                }}
                transition={{ 
                    scale: { duration: 0.8, delay: 0.8 },
                    opacity: { duration: 0.8, delay: 0.8 },
                    x: { duration: 0.8, delay: 0.8 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img  
                    src="/assets/images/real-estate-1.jpg" 
                    alt="Real Estate Property" 
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Extra circles */}
            <motion.div
                className="absolute w-[120px] h-[120px] rounded-full overflow-hidden shadow-2xl border-2 border-white left-32 -bottom-32 z-12"
                initial={{ scale: 0, opacity: 0, x: 50 }}
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: 0,
                    y: [0, -6, 0],
                    rotate: [0, 4, -4, 0]
                }}
                transition={{ 
                    scale: { duration: 0.8, delay: 0.8 },
                    opacity: { duration: 0.8, delay: 0.8 },
                    x: { duration: 0.8, delay: 0.8 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img  
                    src="/assets/images/family-home-tour.jpg" 
                    alt="Real Estate Property" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.div
                className="absolute w-[100px] h-[100px] rounded-full overflow-hidden shadow-xl border-3 border-white -top-36 right-12 z-5"
                initial={{ scale: 0, opacity: 0, x: -50 }}
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                    scale: { duration: 0.8, delay: 0.5 },
                    opacity: { duration: 0.8, delay: 0.5 },
                    x: { duration: 0.8, delay: 0.5 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img 
                    src="/assets/images/talk-business.jpg" 
                    alt="Real Estate Property" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection