'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
  courses: string[];
}

const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Example University',
    location: 'Seattle, WA',
    period: '2019 - 2023',
    gpa: '3.95/4.0',
    achievements: [
      'Graduated Summa Cum Laude',
      'Dean\'s List all semesters',
      'Computer Science Department Excellence Award',
    ],
    courses: [
      'Advanced Algorithms',
      'Machine Learning',
      'Distributed Systems',
      'Software Engineering',
      'Computer Networks',
      'Database Systems',
    ],
  },
];

const EducationCard = ({ education }: { education: Education }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5 }}
    className="bg-background-secondary rounded-lg p-6 md:p-8 shadow-lg shadow-accent/5"
  >
    <div className="space-y-6">
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-text-primary mb-2"
        >
          {education.degree}
        </motion.h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-text-secondary">
          <span className="font-medium">{education.school}</span>
          <span className="hidden sm:block text-accent">•</span>
          <span>{education.location}</span>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-sm text-accent font-mono">{education.period}</span>
          {education.gpa && (
            <>
              <span className="text-accent">•</span>
              <span className="text-sm text-text-secondary">GPA: {education.gpa}</span>
            </>
          )}
        </div>
      </div>

      {education.achievements.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-3">Achievements</h4>
          <ul className="space-y-2">
            {education.achievements.map((achievement, i) => (
              <motion.li
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-text-secondary"
              >
                <span className="text-accent">→</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {education.courses.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-3">Key Courses</h4>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.4 + i * 0.1 }}
                className="px-3 py-1 bg-background rounded-full text-sm text-accent font-mono border border-accent/20"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const Education = () => {
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
            Education
          </h2>
          <div className="h-px bg-accent/30 flex-grow" />
        </div>

        <div className="space-y-8">
          {educationData.map((education) => (
            <EducationCard
              key={`${education.school}-${education.degree}`}
              education={education}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
