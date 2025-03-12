import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import ProjectDetailClient from './project-detail-client';
import LoadingCard from '@/components/shared/LoadingCard';

// Loading UI component with proper CLS prevention
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

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const project = await getProjectById(id);

    if (!project) {
      return {
        title: 'Project Not Found | Chris Holzheu',
        description: 'The requested project could not be found.',
        openGraph: {
          title: 'Project Not Found',
          description: 'The requested project could not be found.',
        },
      };
    }

    // Optimize metadata for Core Web Vitals
    return {
      title: `${project.title} | Chris Holzheu`,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: [{
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
          type: 'image/webp',
        }],
      },
      viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
      },
      themeColor: '#0a192f',
    };
  } catch (error) {
    return {
      title: 'Error | Chris Holzheu',
      description: 'An error occurred while loading the project.',
      openGraph: {
        title: 'Error',
        description: 'An error occurred while loading the project.',
      },
    };
  }
}

export default async function ProjectDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<ProjectDetailLoading />}>
      <ProjectDetailClient project={project} />
    </Suspense>
  );
}
