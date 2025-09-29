'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="page-transition"
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at 50% 50%)' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Loading Animation */}
            <div className="flex flex-col items-center space-y-6">
              {/* Logo or Brand */}
              <div className="bg-white p-8 rounded overflow-clip">
                <Image
                  src="/assets/images/logo.png"
                  alt="Atlas Realty Leads"
                  width={150}
                  height={150}
                />
              </div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white text-3xl font-bold"
              >
                Atlas Realty Leads
              </motion.div>

              {/* Loading Spinner */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative"
              >
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </motion.div>

              {/* Loading Text */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-white/80 text-lg font-medium"
              >
                Preparing your next move...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
