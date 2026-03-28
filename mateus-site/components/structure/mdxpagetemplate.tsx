import Image from 'next/image';

export const MDXComponents = {
    // 1. Tipografia Padrão (Sem gambiarras, voltamos a usar a tag p correta)
    h2: (props: any) => <h2 className="text-3xl font-black uppercase tracking-tighter mt-16 mb-6" {...props} />,
    p: (props: any) => <p className="text-lg leading-relaxed text-gray-800 mb-6 text-justify hyphens-auto" lang="pt-BR" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside space-y-2 my-6" {...props} />,
    a: (props: any) => <a className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors" {...props} />,

    // 2. Blocos de Código (Mantemos igual, pois funciona perfeitamente com o rehype)
    pre: (props: any) => (
        <div className="my-8 border-2 border-black bg-[#1e1e1e] overflow-hidden">
            <div className="bg-black text-gray-400 text-xs font-mono px-4 py-2 uppercase">Código</div>
            <pre className="p-4 text-sm overflow-x-auto whitespace-pre-wrap" {...props} />
        </div>
    ),
    code: (props: any) => <code className="font-mono text-[13px]" {...props} />,

    // 3. COMPONENTES VISUAIS (A forma correta de usar imagens no MDX)
    Imagem: ({ src, alt }: { src: string, alt: string }) => (
        <div className="my-10 w-full flex flex-col">
            <Image 
                src={src} 
                alt={alt || 'Imagem do projeto'} 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="w-full h-auto border-2 border-black" 
            />
            {alt && <span className="mt-2 text-sm font-mono text-gray-500 uppercase tracking-widest">^ {alt}</span>}
        </div>
    ),

    Galeria: ({ children }: { children: React.ReactNode }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 w-full items-start">
            {children}
        </div>
    ),
};