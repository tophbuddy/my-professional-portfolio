'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Example Tech',
    location: 'Seattle, WA',
    period: 'Jan 2023 - Present',
    description: [
      'Led development of microservices architecture using Node.js and TypeScript',
      'Improved system performance by 40% through optimization of database queries',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['TypeScript', 'Node.js', 'React', 'AWS'],
  },
  {
    title: 'Software Development Intern',
    company: 'Tech Startup',
    location: 'San Francisco, CA',
    period: 'Jun 2022 - Dec 2022',
    description: [
      'Developed and maintained RESTful APIs using Python and Django',
      'Implemented automated testing suite reducing bug reports by 30%',
      'Collaborated with design team to improve user experience',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  },
];

const TimelinePoint = () => (
  <div className="absolute left-0 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 mt-2">
    <div className="absolute w-full h-full bg-accent/30 rounded-full animate-ping" />
  </div>
);

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="relative pl-8 pb-12 last:pb-0"
  >
    <TimelinePoint />
    <div className="absolute left-0 top-4 bottom-0 w-px bg-accent/20" />
    
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-text-primary">
          {experience.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-text-secondary">
          <span className="font-medium">{experience.company}</span>
          <span className="hidden sm:block text-accent">•</span>
          <span>{experience.location}</span>
        </div>
        <span className="text-sm text-accent font-mono">{experience.period}</span>
      </div>

      <ul className="space-y-2 text-text-secondary">
        {experience.description.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-px before:w-4 before:bg-accent"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.2 + i * 0.1 }}
            className="px-3 py-1 bg-background-secondary rounded-full text-sm text-accent font-mono"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceTimeline = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Experience
          </h2>
          <div className="h-px bg-accent/30 flex-grow" />
        </div>

        <div className="relative pl-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
