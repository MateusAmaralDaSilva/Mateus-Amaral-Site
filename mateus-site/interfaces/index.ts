import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string; // Opcional, para projetos fechados ou confidenciais
  isPrivate?: boolean; // Indica se o projeto é privado
  slug: string; // Para URLs amigáveis, se necessário
  content?: string; // A string gigante de texto (MDX)
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

export interface MdxRendererProps {
    source: string;
}

export interface CertificateImage {
    id: string;
    title: string;
    year: number;
    imgThumb: string; // Continua sendo a imagem de capa leve
    pdfUrl: string;   // <-- MUDANÇA AQUI: Aponta para o PDF
}

export const certificadosData: CertificateImage[] = [
    {
        id: 'cert-ml',
        title: 'Machine Learning Specialization',
        year: 2026,
        imgThumb: '/images/certificates/ml_specialization_thumb.jpg',
        pdfUrl: '/docs/certificates/ml_specialization.pdf', // <-- Coloque o seu PDF aqui na pasta public
    },
];
export interface SectionProps {
  title: string;
  id?: string;
  children: ReactNode;
}

export interface BackButtonProps {
  href?: string;
  text?: string;
}