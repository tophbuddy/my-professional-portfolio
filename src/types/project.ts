export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string[];
  image: string;
  imageBlur?: string;
  github?: string;
  demo?: string;
  featured: boolean;
  date: string;
}
