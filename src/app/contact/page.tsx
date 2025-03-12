'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import ContactForm from '@/components/contact/ContactForm';

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:your.email@example.com',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/yourusername',
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Contact
            </h1>
            <div className="h-px bg-accent/30 flex-grow" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary mb-8"
          >
            Have a question or want to work together? Feel free to reach out using the form below
            or connect with me on social media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background-secondary rounded-xl p-6 md:p-8 shadow-lg shadow-accent/5"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
