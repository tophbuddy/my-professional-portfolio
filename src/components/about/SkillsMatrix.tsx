'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'languages' | 'frameworks' | 'tools' | 'concepts';
}

const skills: Record<string, Skill[]> = {
  languages: [
    { name: 'TypeScript', level: 5, category: 'languages' },
    { name: 'Python', level: 5, category: 'languages' },
    { name: 'Java', level: 4, category: 'languages' },
    { name: 'C++', level: 4, category: 'languages' },
  ],
  frameworks: [
    { name: 'React', level: 5, category: 'frameworks' },
    { name: 'Next.js', level: 5, category: 'frameworks' },
    { name: 'Node.js', level: 4, category: 'frameworks' },
    { name: 'Django', level: 4, category: 'frameworks' },
  ],
  tools: [
    { name: 'Git', level: 5, category: 'tools' },
    { name: 'Docker', level: 4, category: 'tools' },
    { name: 'AWS', level: 4, category: 'tools' },
    { name: 'Linux', level: 4, category: 'tools' },
  ],
  concepts: [
    { name: 'System Design', level: 4, category: 'concepts' },
    { name: 'Algorithms', level: 5, category: 'concepts' },
    { name: 'CI/CD', level: 4, category: 'concepts' },
    { name: 'Testing', level: 4, category: 'concepts' },
  ],
};

const SkillBar = ({ level }: { level: number }) => {
  const bars = Array(5).fill(0);
  
  return (
    <div className="flex gap-1">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: index < level ? 1 : 0.2,
            scaleY: 1,
          }}
          transition={{ 
            duration: 0.4,
            delay: index * 0.1,
            ease: 'easeOut'
          }}
          className={`h-4 w-1 origin-bottom rounded-full ${
            index < level ? 'bg-accent' : 'bg-text-secondary/20'
          }`}
        />
      ))}
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-text-primary capitalize">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <span className="text-text-primary group-hover:text-accent transition-colors">
                {skill.name}
              </span>
            </div>
            <SkillBar level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsMatrix = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills Matrix
          </h2>
          <div className="h-px bg-accent/30 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory
              key={category}
              title={category}
              skills={skillList}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsMatrix;
