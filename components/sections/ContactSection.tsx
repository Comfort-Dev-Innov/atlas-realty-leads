'use client';
import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../ui/base/Button';
import { useFormDialogStore } from '@/stores/formDialogStore';
import { useMultipleIntersectionObserver } from '@/utils/useIntersectionObserver';

const ContactSection = () => {
  // Set to true to disable all animations for testing only
  const disableAnimations = false;
  const { setOpen } = useFormDialogStore();

  // Initialize intersection observer for multiple elements (title, contact info, button)
  const { setRef, isVisible } = useMultipleIntersectionObserver(3, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Support',
      value: 'support@atlasrealtyleads.com',
      href: 'mailto:support@[yourdomain].com',
    },
    // {
    //   icon: Mail,
    //   label: 'Sales',
    //   value: 'sales@atlasrealtyleads.com',
    //   href: 'mailto:sales@[yourdomain].com',
    // },
    {
      icon: Phone,
      label: 'Phone',
      value: '1 (800) XXX-XXXX',
      href: 'tel:+18001234567',
    },
  ];

  return (
    <MotionConfig reducedMotion={disableAnimations ? 'always' : 'never'}>
      <section
        id="contact"
        className="w-full flex flex-col items-center justify-center px-8 sm:px-20 xl:px-40 py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-[45px] md:text-[50px] font-bold my-4 text-center">
            <motion.div
              ref={setRef(0)}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.span
                className="text-primary font-black relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible(0)
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contact
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
                animate={
                  isVisible(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                & Support
              </motion.span>
            </motion.div>
          </h2>

          <motion.p
            ref={setRef(1)}
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in touch with our team. We&apos;re here to help you succeed with
            quality leads and exceptional support.
          </motion.p>

          <motion.div
            ref={setRef(1)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isVisible(1) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            ref={setRef(2)}
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isVisible(2) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              className="p-6 group relative overflow-hidden text-lg"
              onClick={() => setOpen(true)}
            >
              <span className="relative z-10">Request a Callback</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default ContactSection;
