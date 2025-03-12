'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Professional Summary
          </h2>
          <div className="h-px bg-accent/30 flex-grow" />
        </div>
        
        <div className="prose prose-lg dark:prose-invert prose-accent max-w-none">
          {/* Content will be added later by the user */}
          <p className="text-text-secondary">
            Professional summary content will be added here.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSummary;
