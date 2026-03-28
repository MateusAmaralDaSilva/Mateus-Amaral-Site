'use client';
import { useState } from 'react';
import { certificadosData } from '@/data/certificados';
import CertificateCard from '@/components/page-components/certificatecard';

export default function CertificatesSection() {
    
    // 1. Agrupar dados
    const grouped = certificadosData.reduce((acc, cert) => {
        acc[cert.year] = acc[cert.year] || [];
        acc[cert.year].push(cert);
        return acc;
    }, {} as Record<number, typeof certificadosData>);

    const years = Object.keys(grouped).map(Number).sort((a, b) => b - a);
    const [openYears, setOpenYears] = useState<number[]>([]);
    const toggle = (y: number) => setOpenYears(p => p.includes(y) ? p.filter(i => i !== y) : [...p, y]);

    return (
        <div className="space-y-4 w-full"> 
            {years.map((year) => {
                const isOpen = openYears.includes(year);
                return (
                    <div key={year} className="flex flex-col w-full">
                        
                        {/* Barra do Ano com w-full forçado */}
                        <button 
                            onClick={() => toggle(year)}
                            className={`w-full flex items-center justify-between p-4 border-4 border-black uppercasefont-black font-mono text-xl md:text-2xl transition-all duration-300 outline-none ${
                                isOpen ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
                            }`}
                        >
                            <span>&gt; {year}</span>
                            <span>{isOpen ? '[-]' : '[+]'}</span>
                        </button>
                        {/* Container dos Certificados com w-full */}
                        {isOpen && (
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border-x-4border-t-0 border-black bg-gray-50 animate-fade-in origin-top">
                                {grouped[year].map((cert) => (
                                    <CertificateCard key={cert.id} {...cert} />
                                ))}
                            </div>
                        )}
                        
                    </div>
                );
            })}
        </div>
    );
}