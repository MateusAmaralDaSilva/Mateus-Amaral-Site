import { GithubIcon, LockIcon } from '@/components/images';
import { ProjectCardProps } from '@/interfaces';
import Link from 'next/link';

export default function ProjectCard({ title, description, tags, githubUrl, isPrivate, slug }: ProjectCardProps) {
    return (
        <Link href={`/projetos/${slug}`} className="block h-full group cursor-pointer outline-none">
            <div className="relative border border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col justify-between h-full">
            
            {/* A Bandeirinha */}
            {/* O if verifica se pelo menos um dos dois existe para desenhar a bandeira */}
            {(githubUrl || isPrivate) && (
                <div className="absolute top-0 right-2 w-7 h-10 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors flex justify-center items-start pt-3 [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)] z-10">
                
                {/* Lógica Condicional */}
                {githubUrl ? (
                    <GithubIcon />
                ) : isPrivate ? (
                    <LockIcon />
                ) : null}

                </div>
            )}

            {/* Adicionei pr-12 (padding-right) para o texto não ficar por baixo da bandeira */}
                <div className="pr-12">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">{title}</h3>
                    <p className="text-sm mb-6 opacity-80">{description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono border border-current px-2 py-1 uppercase">
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}