'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';
import HamburgerButton from '@/components/ui/HamburgerButton';
import MainNav from '@/components/navigation/MainNav';
import MobileNav from '@/components/navigation/MobileNav';

const Header = (): React.JSX.Element => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 backdrop-blur-sm"
    >
      <div className="container mx-auto px-8 md:px-24">
        <div className="flex h-24 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-accent text-lg hover:text-accent/80 transition-colors duration-200"
          >
            CH
          </Link>

          <div className="flex items-center space-x-8">
            <MainNav />
            <Link
              href="/resume"
              className="font-mono text-accent border border-accent rounded px-4 py-2 
                       hover:bg-accent/10 transition-colors duration-300"
            >
              Resume
            </Link>
            <HamburgerButton />
          </div>
        </div>
      </div>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
