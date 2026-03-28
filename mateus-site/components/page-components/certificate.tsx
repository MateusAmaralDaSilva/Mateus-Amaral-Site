import Image from 'next/image';
import { CertificateImage } from '@/interfaces'; // Ou o caminho correto da sua interface

export default function CertificateCard({ title, imgThumb, pdfUrl }: CertificateImage) {
    return (
        // O link agora aponta para o PDF e o navegador abre-o naturalmente
        <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block h-full group cursor-pointer outline-none"
        >
            <div className="border border-black p-4 hover:bg-black hover:text-white transition-colors duration-300 flex flex-col h-full relative">
                
                {/* Contêiner da Imagem */}
                <div className="relative w-full aspect-[4/3] mb-4 border border-black overflow-hidden bg-gray-100">
                    <Image 
                        src={imgThumb} 
                        alt={title} 
                        fill 
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    />
                    
                    {/* BÔNUS: Etiqueta "PDF" no canto superior direito para dar contexto */}
                    <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 font-mono z-10 border border-white">
                        PDF
                    </div>
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-tighter mt-auto">
                    {title}
                </h3>
                
                <span className="text-[10px] font-mono uppercase mt-2 opacity-60 group-hover:opacity-100">
                    Abrir PDF -&gt;
                </span>

            </div>
        </a>
    );
}