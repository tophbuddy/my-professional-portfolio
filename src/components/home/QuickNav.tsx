'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  name: string;
  number: string;
}

const sections: Section[] = [
  { id: 'hero', name: 'Introduction', number: '01' },
  { id: 'skills', name: 'Skills', number: '02' },
  { id: 'projects', name: 'Projects', number: '03' },
];

const QuickNav = (): React.JSX.Element => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    const sectionElements = sections.map(section => ({
      id: section.id,
      element: document.getElementById(section.id),
    }));

    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * 0.3; // 30% from the top

    const currentSection = sectionElements.find(({ element }) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= triggerPoint && rect.bottom >= triggerPoint;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add a small offset to account for any fixed headers
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="hidden lg:block fixed right-8 2xl:right-12 top-1/2 -translate-y-1/2 z-50"
      role="navigation"
      aria-label="Quick navigation"
    >
      <ul className="space-y-6 md:space-y-8">
        <AnimatePresence>
          {sections.map((section, index) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => handleClick(section.id)}
                className={`group flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 -mx-2 ${
                  activeSection === section.id 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-label={`Scroll to ${section.name} section`}
                aria-current={activeSection === section.id ? 'true' : 'false'}
              >
                <span 
                  className={`font-mono text-xs transition-all duration-300 ${
                    activeSection === section.id
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {section.number}
                </span>
                <div className="relative h-px w-8 bg-[#233554] overflow-hidden rounded-full">
                  <motion.div
                    initial={false}
                    animate={{
                      width: activeSection === section.id ? '100%' : '0%',
                      x: activeSection === section.id ? 0 : '-100%',
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.1
                    }}
                    className="absolute inset-0 bg-accent rounded-full"
                  />
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.nav>
  );
};

export default QuickNav;
