export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string; // Opcional, para projetos fechados ou confidenciais
  isPrivate?: boolean; // Indica se o projeto é privado
}

export interface ProjectCardProps extends Project {}

export interface AreaSectionProps {
    title: string;
    projects: Project[];
}
