import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import type { Project } from '@/types/project';

// Back button component moved to client for React Icons
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

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-text-secondary mb-8">{project.description}</p>
          {/* Add more project details as needed */}
        </article>
      </div>
    </main>
  );
}
