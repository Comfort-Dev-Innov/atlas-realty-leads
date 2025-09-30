'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePageTransition } from '@/hooks/usePageTransition';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const { navigateWithTransition } = usePageTransition();

  const homeNavigationItems = [
    { name: 'Why Choose Us', href: '#why-choose-us', type: 'scroll' },
    { name: 'How it Works', href: '#how-it-works', type: 'scroll' },
    { name: 'Pricing', href: '#pricing', type: 'scroll' },
    { name: 'Who We Help', href: '#who-we-help', type: 'scroll' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Contact Us', href: '#contact-us', type: 'scroll' },
    { name: 'Contractors', href: '/contractors', type: 'page' },
  ];

  const contractorNavigationItems = [
    { name: "Back to Realtor's Home Page", href: '/', type: 'page' },
  ];

  // Filter navigation items based on current page
  const navigationItems =
    currentPath === '/contractors'
      ? contractorNavigationItems
      : homeNavigationItems;

  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Handle path changes (for SPAs like Next.js)
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handlePathChange);
    window.addEventListener('scroll', handleScroll);

    // Also listen for pushstate/replacestate changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      handlePathChange();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      handlePathChange();
    };

    return () => {
      window.removeEventListener('popstate', handlePathChange);
      window.removeEventListener('scroll', handleScroll);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string, type: string) => {
    setIsMobileMenuOpen(false);

    if (type === 'scroll') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (type === 'page') {
      navigateWithTransition(href);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fdfdfd] transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-between p-6 sm:px-20 xl:px-40">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => navigateWithTransition('/')}
            className="h-[60px]"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Atlas Realty Leads"
              width={100}
              height={30}
              className="w-full h-full object-contain"
            />
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
          {navigationItems.map((item, index) => {
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.type);
                }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item, index) => {
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.type);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
