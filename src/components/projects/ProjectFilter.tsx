'use client';

import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  selectedCategories,
  onCategoryChange,
}: ProjectFilterProps) {
  // Memoize unique categories to prevent unnecessary re-renders
  const uniqueCategories = useMemo(() => Array.from(new Set(categories)), [categories]);

  // Optimize category selection handler
  const handleCategoryClick = useCallback((category: string) => {
    onCategoryChange(category);
  }, [onCategoryChange]);

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <motion.button
        key="all"
        onClick={() => handleCategoryClick('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategories.length === 0
            ? 'bg-accent text-background'
            : 'bg-background-secondary text-text-secondary hover:text-accent'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Projects
      </motion.button>
      {uniqueCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategories.includes(category)
              ? 'bg-accent text-background'
              : 'bg-background-secondary text-text-secondary hover:text-accent'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
