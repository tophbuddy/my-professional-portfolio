'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          placeholder="Enter your name"
          className={`w-full px-4 py-2 bg-background-secondary rounded-lg border text-text-primary placeholder:text-text-secondary/50 ${
            errors.name ? 'border-red-500' : 'border-accent/20'
          } focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {errors.name.message}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          placeholder="Enter your email address"
          className={`w-full px-4 py-2 bg-background-secondary rounded-lg border text-text-primary placeholder:text-text-secondary/50 ${
            errors.email ? 'border-red-500' : 'border-accent/20'
          } focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300`}
          disabled={isSubmitting}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          placeholder="What would you like to discuss?"
          className={`w-full px-4 py-2 bg-background-secondary rounded-lg border text-text-primary placeholder:text-text-secondary/50 ${
            errors.subject ? 'border-red-500' : 'border-accent/20'
          } focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300`}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Tell me about your project, idea, or any questions you have..."
          className={`w-full px-4 py-2 bg-background-secondary rounded-lg border text-text-primary placeholder:text-text-secondary/50 ${
            errors.message ? 'border-red-500' : 'border-accent/20'
          } focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={false}
        animate={submitStatus === 'idle' ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
        className="overflow-hidden"
      >
        {submitStatus === 'success' && (
          <p className="text-green-500 text-sm">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
        )}
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 text-sm font-medium text-background bg-accent rounded-lg 
          ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent/90'} 
          transition-colors duration-300`}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
}
