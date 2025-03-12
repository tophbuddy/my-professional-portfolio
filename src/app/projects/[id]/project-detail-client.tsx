'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import type { Project } from '@/types/project';

function BackButton() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center text-text-secondary hover:text-accent transition-colors duration-300 mb-8"
    >
      <FiArrowLeft className="mr-2" />
      Back to Projects
    </Link>
  );
}

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  return (
    <main className="flex flex-col min-h-screen py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>

            <p className="text-text-secondary mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono text-accent bg-accent/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  <FiGithub className="mr-2" />
                  View Source
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-background-secondary text-text-primary rounded-lg hover:bg-accent hover:text-background transition-colors duration-300"
                >
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </Link>
              )}
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg shadow-accent/10 bg-background-secondary">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTAxMTIwPURCNz5BPjIxRkdFTVZaV3JhZGdIamxqd2BiV2P/2wBDARUXFx4aHR4eHUJCQkJDY0NDQ0NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </div>
    </main>
  );
}
