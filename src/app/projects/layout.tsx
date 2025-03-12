import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Christopher Holzheu',
  description: 'Explore Christopher Holzheu\'s portfolio of software engineering projects, featuring web development, machine learning, and more.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
