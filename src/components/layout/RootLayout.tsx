'use client';

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps): React.JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default RootLayout;
