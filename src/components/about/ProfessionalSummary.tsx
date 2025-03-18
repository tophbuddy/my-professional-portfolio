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
          <p className="text-text-secondary">
            Hi, I'm Chris—a passionate software engineer with hands-on experience in full-stack development and secure automation. I kick-started my career with an internship at SAP Fieldglass, where I led the development of a Java-based automation tool that streamlined critical business processes. Since then, I've built projects ranging from a social movie review platform to a Python-based data analysis tool, and I continue to sharpen my skills through side projects like a news aggregator and a friend's portfolio website.
          </p>

          <p className="text-text-secondary">
            Even though I'm currently between full-time roles, I'm actively learning and evolving by taking courses in data analysis and machine learning, and by leveraging AI code helper tools to boost my efficiency. I believe in turning challenges into opportunities, using every setback as a stepping stone toward a thriving career in tech.
          </p>

          <p className="text-text-secondary">
            When I'm not immersed in coding or expanding my technical horizons, you can find me experimenting in the kitchen—cooking and baking recipes from various cuisines while constantly challenging myself with new techniques. I also enjoy taking care of my cat Boba, staying active with regular exercise, diving into captivating history books (most recently Ron Chernow's book on Ulysses S. Grant), and tackling creative home improvement projects.
          </p>

          <p className="text-text-secondary">
            I'm excited to bring my blend of professional experience, continuous learning, and diverse passions to new opportunities in the tech industry.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSummary;
