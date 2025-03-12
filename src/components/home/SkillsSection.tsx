'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const skills = [
  { name: 'Frontend Development', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend Development', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
  { name: 'Tools & Methods', items: ['Git', 'Docker', 'CI/CD', 'Agile'] },
  { name: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'] },
];

const SkillsSection = (): React.JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section ref={ref} className="py-32 px-8 md:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-accent text-body">02.</span>
            <h2 className="font-playfair text-heading-lg text-text-primary font-medium">Skills & Technologies</h2>
            <div className="h-[1px] bg-accent/20 flex-grow ml-4"></div>
          </div>

          {/* Collapsible Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-accent font-mono text-body group w-full"
          >
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="transform"
            >
              <path
                d="M4.5 2.25L8.25 6L4.5 9.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <span className="group-hover:text-accent/80 transition-colors">
              View My Skills
            </span>
          </button>

          {/* Skills Grid */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                  {skills.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-background-secondary rounded-lg p-6 border border-accent/10 hover:border-accent/20 transition-colors"
                    >
                      <h3 className="font-playfair text-heading-sm text-text-primary mb-4">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((skill) => (
                          <li
                            key={skill}
                            className="font-jakarta text-body text-text-secondary flex items-center"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-accent"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
