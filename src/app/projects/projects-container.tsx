import { Suspense } from 'react';
import { getAllProjects, getAllCategories } from '@/data/projects';
import ProjectsClient from './projects-client';
import LoadingCard from '@/components/shared/LoadingCard';

function ProjectsLoading() {
  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-12 w-48 bg-background-secondary rounded-lg animate-pulse mx-auto mb-4" />
          <div className="h-4 w-96 bg-background-secondary rounded animate-pulse mx-auto" />
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-24 bg-background-secondary rounded-full animate-pulse"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={`loading-${index}`} className="aspect-[4/3]">
              <LoadingCard variant="project" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default async function ProjectsContainer() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getAllCategories(),
  ]);

  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsClient projects={projects} categories={categories} />
    </Suspense>
  );
}
