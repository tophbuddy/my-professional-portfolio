import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import LoadingCard from '@/components/shared/LoadingCard';
import ProjectDetailClient from './project-detail-client';

// Loading UI component
function ProjectDetailLoading() {
  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-32 bg-background-secondary rounded animate-pulse mb-8" />
        <LoadingCard variant="detail" />
      </div>
    </main>
  );
}

interface ProjectDetailProps {
  projectId: string;
}

export default async function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<ProjectDetailLoading />}>
      <ProjectDetailClient project={project} />
    </Suspense>
  );
}
