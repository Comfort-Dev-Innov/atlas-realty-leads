'use client';
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { GiHouseKeys } from 'react-icons/gi';
import { useFormDialogStore } from '@/stores/formDialogStore';

export default function SimplePricing() {
  // Set to true to disable all animations for testing only
  const disableAnimations = false;
  const { setOpen } = useFormDialogStore();
  const cardFeatures = [
    'Free lead replacements',
    'Minimum 1 lead to get started',
    'Cancel anytime',
  ];
  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <div id="pricing" className="w-full flex flex-col items-center justify-center mt-4 md:mt-4 my-8">
        <div className="border-t w-[80%] border-black/80 mt-8 mb-8" />
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
              Simple
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
            <motion.span
              className="text-black font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Pricing
            </motion.span>
          </motion.div>
        </h2>
        {/* Pricing Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[80%] md:w-[30rem] bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-md flex flex-col items-center justify-center border border-gray-200 p-8 py-16"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="border text-white rounded-full p-2 border-white bg-white/50 self-start ml-8 mb-2"
          >
            <GiHouseKeys size={28} />
          </motion.div>
          {/* Badge */}
          {/* <div className="text-sm text-white bg-white/50 px-8 py-1 rounded-2xl self-start ml-8 mb-4">
            <p>Exclusive</p>
          </div> */}
          <p className="text-white text-5xl font-bold self-start mt-4 ml-8">
            $75
          </p>
          <p className="text-white self-start ml-8 pt-4 mb-2 text-md mt-4">
            Per exclusive, pre-screened motivated seller lead.
          </p>

          <ul className="ml-16 self-start flex flex-col items-start mb-16">
            {cardFeatures.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className=" text-white mb-2 text-md self-start list-disc"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.5 }}
              viewport={{ once: true }}
              className="w-full py-4 mt-8 bg-white/30 hover:bg-white/40 transition-all duration-300 cursor-pointer rounded-lg text-white font-bold"
              onClick={() => setOpen(true)}
            >
              See Sample Leads
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
