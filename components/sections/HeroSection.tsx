'use client';
import React from 'react';
import { Button } from '../ui/base/Button';
import { motion, MotionConfig } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useFormDialogStore } from '@/stores/formDialogStore';
import Image from 'next/image';

const HeroSection = () => {
  // Set to true to disable all animations for testing only
  const disableAnimations = false;
  const { setOpen } = useFormDialogStore();

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section className="p-8 sm:px-20 xl:px-40 sm:flex-1 w-full flex flex-col-reverse lg:flex-row gap-12 sm:gap-6 justify-between items-center mt-8 sm:min-h-screen">
        <div className="w-full lg:w-1/2 min-h-[25rem] sm:min-h-[30rem] sm:mt-[10rem]">
          <h1 className="text-center lg:text-left text-[25px] min-[400px]:text-[35px] sm:text-[45px] md:text-[50px] font-bold mb-6 leading-tight">
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
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 1.5,
                    delay: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>{' '}
              Seller Leads.
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
                  initial={{ x: '-100%' }}
                  animate={{ x: '500%' }}
                  transition={{
                    duration: 1.5,
                    delay: 2.8,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>{' '}
              Conversations.
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
                  initial={{ x: '-100%' }}
                  animate={{ x: '500%' }}
                  transition={{
                    duration: 1.5,
                    delay: 4.1,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>{' '}
              Closings.
            </motion.div>
          </h1>
          <motion.p
            className="text-center lg:text-left text-md sm:text-md xl:text-lg mb-8 text-gray-900 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Connect with homeowners who are ready to talk, move, and sell. No
            fluff, no chasing. Just motivated sellers you can actually reach.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start focus:outline-none"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="p-6 group relative overflow-hidden"
              onClick={() => setOpen(true)}
            >
              <span className="relative z-10">See How It Works</span>
              <motion.div
                className="inline-flex items-center"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center relative h-120 sm:h-[30rem]">
          {/* Big center circle */}
          <motion.div
            className="absolute w-[200px] h-[200px] min-[400px]:w-[250px] min-[400px]:h-[250px] sm:w-[350px] sm:h-[350px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden left-[30px] min-[400px]:left-[100px] min-[500px]:left-[200px] sm:left-[150px] md:left-[280px] lg:left-[100px] 2xl:left-[200px] shadow-2xl border-4 border-white z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              scale: { duration: 0.8, delay: 0.2 },
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/real-estate-3.jpg"
              alt="Real Estate Property"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Left smaller circle */}
          <motion.div
            className="absolute w-[120px] h-[120px] min-[400px]:w-[150px] min-[400px]:h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[250px] xl:h-[250px] rounded-full overflow-hidden shadow-xl border-3 border-white top-16 lg:-top-32 -left-4 min-[400px]:left-12 xl:left-24 z-12"
            initial={{ scale: 0, opacity: 0, x: -50 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              scale: { duration: 0.8, delay: 0.5 },
              opacity: { duration: 0.8, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image
              src="/assets/images/real-estate-2.jpg"
              width={1000}
              height={1000}
              alt="Real Estate Property"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right smallest circle */}
          <motion.div
            className="absolute w-[120px] h-[120px] min-[400px]:w-[180px] min-[400px]:h-[180px] sm:w-[150px] sm:h-[150px] xl:w-[180px] xl:h-[180px] rounded-full overflow-hidden shadow-lg border-2 border-white right-6 xl:-right-12 2xl:right-12 bottom-24 min-[400px]:bottom-6 sm:-bottom-24 z-12"
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: [0, -6, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              scale: { duration: 0.8, delay: 0.8 },
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/real-estate-1.jpg"
              alt="Real Estate Property"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Extra circles */}
          <motion.div
            className="absolute min-[400px]:w-[120px] min-[400px]:h-[120px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-2xl border-2 border-white left-4 sm:left-32 bottom-2 sm:-bottom-32 z-12"
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: [0, -6, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              scale: { duration: 0.8, delay: 0.8 },
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/family-home-tour.jpg"
              alt="Real Estate Property"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute w-[80px] h-[80px] min-[400px]:w-[100px] min-[400px]:h-[100px] rounded-full overflow-hidden shadow-xl border-3 border-white top-8 min-[400px]:top-16 sm:top-36 lg:-top-36 right-4 min-[400px]:right-6 sm:-right-4 lg:right-12 z-15 lg:z-5"
            initial={{ scale: 0, opacity: 0, x: -50 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              scale: { duration: 0.8, delay: 0.5 },
              opacity: { duration: 0.8, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/talk-business.jpg"
              alt="Real Estate Property"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default HeroSection;
