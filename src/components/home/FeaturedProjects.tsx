'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Code Assistant',
    description: 'A sophisticated code assistant that leverages machine learning to provide intelligent code suggestions and autocompletions. Built with a focus on developer productivity and seamless integration.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    image: '/images/featured/placeholder.svg',
    github: 'https://github.com/username/code-assistant',
    external: 'https://code-assistant-demo.com',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS. Features smooth animations, dark mode, and optimized performance. You\'re looking at it right now!',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    image: '/images/featured/placeholder.svg',
    github: 'https://github.com/username/portfolio-website',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products and orders.',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/featured/placeholder.svg',
    github: 'https://github.com/username/ecommerce-platform',
    external: 'https://ecommerce-demo.com',
  },
];

const FeaturedProjects = (): React.JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8 md:px-24 cv-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-accent text-body">03.</span>
            <h2 className="font-playfair text-heading-lg text-text-primary font-medium">Some Things I've Built</h2>
            <div className="h-[1px] bg-accent/20 flex-grow ml-4"></div>
          </div>

          {/* Projects List */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid grid-cols-12 items-center gap-4 
                          ${index % 2 === 0 ? '' : 'text-right'}`}
              >
                {/* Project Image */}
                <div 
                  className={`relative col-span-7 rounded-lg overflow-hidden aspect-video group cursor-pointer
                            ${index % 2 === 0 ? 'col-start-1' : 'col-start-6'}`}
                  role="img"
                  aria-label={`Screenshot of ${project.title}`}
                >
                  <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-multiply group-hover:opacity-0 transition-all duration-300 ease-in-out" />
                  <div className="absolute inset-0 bg-background-secondary" />
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover relative z-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURCNz5BPjIxRkdFTVZaV3JhZGdIamxqd2BiV2P/2wBDARUXFx4aHR4eHUJCQkJDY0NDQ0NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    onLoadingComplete={(img) => {
                      img.classList.remove('opacity-0');
                      img.classList.add('opacity-75');
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className={`col-span-7 z-20 
                              ${index % 2 === 0 ? 'col-start-6' : 'col-start-1'}`}>
                  <div className={`space-y-4 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <p className="font-mono text-accent text-body">Featured Project</p>
                    <h3 className="font-playfair text-heading text-text-primary">
                      {project.title}
                    </h3>
                    <div className="bg-background-secondary p-6 rounded-lg border border-accent/10">
                      <p className="font-jakarta text-body text-text-secondary">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-4 font-mono text-body-sm text-text-secondary
                                ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className={`flex items-center gap-4 
                                 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-accent transition-colors duration-300 ease-in-out"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-accent transition-colors duration-300 ease-in-out"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center pt-16"
          >
            <Link
              href="/projects"
              className="inline-block font-mono text-body text-accent border border-accent rounded-lg px-6 py-4 
                       hover:bg-accent/10 hover:scale-[1.02] transition-all duration-300"
            >
              View Full Project Archive
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
