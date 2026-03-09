import Link from 'next/link';

interface BackButtonProps {
  href?: string;
  text?: string;
}

export default function BackButton({ href = "/", text = "<- Voltar" }: BackButtonProps) {
  return (
    <Link 
      href={href} 
      className="inline-block mb-12 font-mono text-sm uppercase tracking-widest border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300 font-bold"
    >
      {text}
    </Link>
  );
}