'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilter from '@/components/projects/ProjectFilter';
import LoadingCard from '@/components/shared/LoadingCard';
import type { Project } from '@/types/project';

// Client-side filtering component
export default function ProjectsPage({
  projects,
  categories,
}: {
  projects: Project[];
  categories: string[];
}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter projects based on selected categories
  const filteredProjects = selectedCategories.length === 0
    ? projects
    : projects.filter(project =>
        project.category.some(cat => selectedCategories.includes(cat))
      );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (category === 'all') return [];
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Projects
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of projects I've worked on, ranging from web applications to machine learning models.
          </p>
        </motion.div>

        <ProjectFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cv-auto"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-secondary mt-12"
          >
            No projects found for the selected categories.
          </motion.p>
        )}
      </div>
    </main>
  );
}
