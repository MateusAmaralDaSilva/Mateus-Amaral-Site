"use client";

import { useState } from 'react';
import ProjectCard from './projectcard';

interface Project {
    title: string;
    description: string;
    tags: string[];
}

interface AreaSectionProps {
    title: string;
    projects: Project[];
}

export default function AreaSection({ title, projects }: AreaSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-black">
        {/* O Tópico Clicável */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-100 transition-colors"
        >
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">
            {title}
            </h2>
            <span className="text-3xl font-mono font-light">
            {isOpen ? '-' : '+'}
            </span>
        </button>

        {/* O Conteúdo (Projetos) que expande */}
        {isOpen && (
            <div className="pb-10 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projects.map((proj, i) => (
                <ProjectCard 
                key={i} 
                title={proj.title}
                description={proj.description}
                tags={proj.tags}
                />
            ))}
            </div>
        )}
        </div>
    );
}