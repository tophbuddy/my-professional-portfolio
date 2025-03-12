'use client';

import { motion } from 'framer-motion';

interface LoadingCardProps {
  variant?: 'project' | 'detail' | 'timeline';
}

export default function LoadingCard({ variant = 'project' }: LoadingCardProps) {
  if (variant === 'timeline') {
    return (
      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* Timeline metadata */}
        <div className="hidden md:block md:col-span-3 relative">
          <div className="h-full w-px bg-navy-light absolute right-8 top-0" />
          <div className="sticky top-0 pt-4 space-y-2">
            <motion.div
              animate={{ opacity: [0.3, 0.6] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="h-6 w-24 bg-navy-light rounded"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.1 }}
              className="h-6 w-32 bg-navy-light rounded"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
          <div className="relative pb-12 space-y-4">
            <motion.div
              animate={{ opacity: [0.3, 0.6] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="h-8 w-64 bg-navy-light rounded"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.1 }}
              className="h-6 w-48 bg-navy-light rounded"
            />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.6] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.2 + (i * 0.1) }}
                  className="h-4 w-full bg-navy-light rounded"
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 0.6] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.3 + (i * 0.1) }}
                  className="h-8 w-20 bg-navy-light rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'detail') {
    return (
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <motion.div
            animate={{ opacity: [0.3, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="h-12 w-3/4 bg-navy-light rounded-lg"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.1 }}
            className="h-24 w-full bg-navy-light rounded-lg"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
            className="h-8 w-1/2 bg-navy-light rounded-lg"
          />
        </div>
        <motion.div
          animate={{ opacity: [0.3, 0.6] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
          className="aspect-video bg-navy-light rounded-lg"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-light mb-4">
        <motion.div
          animate={{ opacity: [0.3, 0.6] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
        />
      </div>
      <div className="space-y-2">
        <motion.div
          animate={{ opacity: [0.3, 0.6] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.1 }}
          className="h-6 w-3/4 bg-navy-light rounded-lg"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
          className="h-4 w-1/2 bg-navy-light rounded-lg"
        />
      </div>
    </motion.div>
  );
}
