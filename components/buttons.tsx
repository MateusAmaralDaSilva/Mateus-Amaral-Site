import Link from 'next/link';
import { BackButtonProps } from '@/interfaces';

export function BackButton({ href = "/", text = "<- Voltar" }: BackButtonProps) {
  return (
    <Link 
      href={href} 
      className="inline-block mb-12 font-mono text-sm uppercase tracking-widest border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300 font-bold"
    >
      {text}
    </Link>
  );
}

export function ResumeButton() {
    return (
        <a 
            href="files\Mateus_Amaral_Currículo.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-5 py-2 border-2 border-black font-mono text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white group w-fit"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Currículo .PDF
        </a>
    );
}