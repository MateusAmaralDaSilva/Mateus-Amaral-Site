"use client";

import { useState } from 'react';
import ProjectCard from './projectcard';
import { AreaSectionProps } from '@/interfaces';

export default function AreaSection({ title, projects }: AreaSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-black overflow-hidden">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-all duration-300"
        >
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest italic">
            {title}
            </h2>
            <span className={`text-3xl font-mono transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? '−' : '+'}
            </span>
        </button>

        {/* Container com Animação */}
        <div 
            className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 pb-10' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
            <div className="overflow-hidden">
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                <ProjectCard key={i} {...proj} />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}