'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/components/navigation/NavigationContext';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

const MobileNav = (): React.JSX.Element => {
  const { isOpen, setIsOpen } = useNavigation();
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
          />
          
          {/* Menu */}
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 z-50 w-3/4 bg-[#112240] p-8 
                     shadow-xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full justify-center space-y-6">
              {navItems.map((item, index) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-mono text-lg text-[#8892b0] hover:text-accent 
                             transition-colors duration-200"
                  >
                    <span className="text-accent text-sm mr-2">0{index + 1}.</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-6">
                <Link
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  className="inline-block font-mono text-accent border border-accent rounded px-6 py-3 
                           hover:bg-accent/10 transition-colors duration-300 text-center w-full"
                >
                  Resume
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
