export type BlockType = 'section_header' | 'text' | 'image' | 'code';

export interface ContentBlock {
  type: BlockType;
  value: string;     // O texto, a URL da imagem, ou o código em si
  caption?: string;  // Opcional: Legenda da imagem ou linguagem do código
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string; // Opcional, para projetos fechados ou confidenciais
  isPrivate?: boolean; // Indica se o projeto é privado
  slug: string; // Para URLs amigáveis, se necessário
  content?: ContentBlock[];
}

export interface ProjectCardProps extends Project {}

export interface AreaSectionProps {
    title: string;
    projects: Project[];
}

export interface ProjectHeaderProps {
  title: string;
  tags: string[];
  githubUrl?: string;
}