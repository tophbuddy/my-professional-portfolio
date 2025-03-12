'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/components/navigation/NavigationContext';

const HamburgerButton = (): React.JSX.Element => {
  const { isOpen, setIsOpen } = useNavigation();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative h-12 w-12 md:hidden"
      aria-label="Toggle Menu"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
          className="absolute h-[2px] w-6 bg-accent"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="absolute h-[2px] w-6 bg-accent"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
          className="absolute h-[2px] w-6 bg-accent"
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
