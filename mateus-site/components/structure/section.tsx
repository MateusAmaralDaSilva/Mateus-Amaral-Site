// src/components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  id?: string;
  children: ReactNode;
}

export default function Section({ title, id, children }: SectionProps) {
    return (
        <section id={id} className="mb-32 w-full">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">
            {title}
        </h2>
        
        {/* O container genérico que vai renderizar o que você passar dentro da tag */}
        <div className="w-full">
            {children}
        </div>
        </section>
    );
}