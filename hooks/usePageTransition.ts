'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

export const usePageTransition = () => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (href: string) => {
      setIsTransitioning(true);

      // Start the transition animation
      setTimeout(() => {
        router.push(href);
      }, 500); // Half of the transition duration

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    },
    [router]
  );

  return {
    navigateWithTransition,
    isTransitioning,
  };
};
