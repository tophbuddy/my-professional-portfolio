import { Project } from '@/types/project';

const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: ['Web Development', 'Frontend'],
    image: '/images/projects/portfolio.webp',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.dev',
    featured: true,
    date: '2024-01',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    category: ['Web Development', 'Full Stack'],
    image: '/images/projects/task-app.jpg',
    github: 'https://github.com/username/task-management',
    demo: 'https://tasks.example.com',
    featured: true,
    date: '2024-12',
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning models.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    category: ['Machine Learning', 'AI'],
    image: '/images/projects/ai-image.jpg',
    github: 'https://github.com/username/ai-image-gen',
    featured: false,
    date: '2024-09',
  },
];

// Server-side data fetching
export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find(project => project.id === id) || null;
}

export async function getAllProjects(): Promise<Project[]> {
  return [...projects];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter(project => project.featured);
}

export async function getAllCategories(): Promise<string[]> {
  const categories = new Set<string>();
  projects.forEach(project => {
    project.category.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
}

export async function getAllTechnologies(): Promise<string[]> {
  const technologies = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => technologies.add(tech));
  });
  return Array.from(technologies).sort();
}
