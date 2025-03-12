import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingCard from '@/components/shared/LoadingCard';

// Dynamic import with loading state for better performance
const ExperienceClient = dynamic(() => import('./experience-client'), {
  loading: () => <ExperienceLoading />,
  ssr: true,
});

// Loading UI component with proper CLS prevention
function ExperienceLoading() {
  return (
    <main className="min-h-screen py-16 md:py-24 lg:py-32 bg-navy text-slate-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-32 bg-navy-light rounded animate-pulse mb-8" />
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <LoadingCard key={i} variant="timeline" />
          ))}
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Experience | Christopher Holzheu',
  description: 'My professional experience and career journey in software engineering.',
};

export default function ExperiencePage() {
  return (
    <Suspense fallback={<ExperienceLoading />}>
      <ExperienceClient />
    </Suspense>
  );
}
