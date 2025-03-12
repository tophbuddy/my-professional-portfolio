'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Codeium',
    location: 'Remote',
    period: '2024 - Present',
    description: [
      'Developing AI-powered developer tools and IDE extensions',
      'Implementing Core Web Vitals optimizations for web applications',
      'Building responsive and accessible user interfaces with React and TypeScript',
      'Contributing to open-source projects and documentation',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'TailwindCSS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2023 - 2024',
    description: [
      'Developed custom web applications for clients using modern technologies',
      'Implemented performance optimizations and responsive design patterns',
      'Created documentation and technical specifications for projects',
      'Managed project timelines and client communications',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: 'Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 - 2023',
    description: [
      'Built personal projects and portfolio websites',
      'Explored new technologies and frameworks',
      'Focused on learning modern web development practices',
      'Contributed to open-source projects',
    ],
    technologies: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ExperienceClient = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoize icon components for better performance
  const renderIcon = useCallback((Icon: typeof BriefcaseIcon, className: string) => (
    <Icon className={className} />
  ), []);

  // Simulate content loading for smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32 bg-navy text-slate-lightest cv-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-heading-lg md:text-display-sm font-bold mb-12 text-slate-lightest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-mint font-mono text-body">02.</span> Experience
        </motion.h1>

        <motion.div 
          className={`space-y-12 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline line */}
                <div className="hidden md:block md:col-span-3 relative">
                  <div className="h-full w-px bg-navy-light absolute right-8 top-0" />
                  <div className="sticky top-0 pt-4">
                    <div className="flex items-center text-mint mb-2">
                      {renderIcon(CalendarIcon, "w-4 h-4 mr-2")}
                      <span className="font-mono text-body-sm">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-slate">
                      {renderIcon(MapPinIcon, "w-4 h-4 mr-2")}
                      <span className="font-mono text-body-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="relative pb-12">
                    <div className="flex flex-col">
                      <h3 className="text-heading-sm font-bold text-slate-lighter mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-mint font-mono text-body-sm mb-4">
                        {experience.company}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-slate mb-6">
                        {experience.description.map((item, i) => (
                          <li key={i} className="pl-2">{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded text-mint bg-mint-tint font-mono text-body-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ExperienceClient;
