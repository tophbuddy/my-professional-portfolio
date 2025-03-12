import type { ReactNode } from 'react';

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}
