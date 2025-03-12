'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = (): React.JSX.Element => {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-8 md:px-24 py-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          {/* Small greeting */}
          <motion.p 
            className="font-mono text-accent text-body"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="font-playfair text-display-lg md:text-[5.5rem] font-bold text-text-primary tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Christopher Holzheu.
          </motion.h1>

          {/* Tagline */}
          <motion.h2 
            className="font-playfair text-display-sm md:text-display font-bold text-text-secondary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="font-jakarta text-body-lg text-text-secondary max-w-xl mt-5 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-5"
          >
            <button className="font-mono text-body text-accent border border-accent rounded-lg px-7 py-4 
                             hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02]">
              Check out my course!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
