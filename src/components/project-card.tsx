'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className="group block bg-background-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 2}
          quality={85}
          placeholder="blur"
          blurDataURL={project.imageBlur || project.image}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary line-clamp-2">
          {project.description}
        </p>
        {project.category && project.category.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 bg-background rounded-full text-text-secondary"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
