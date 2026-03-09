import Image from 'next/image';
import Link from 'next/link';
import getProjectPage from '@/components/page-components/projectpage'; 

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { projectInfo, blocks } = await getProjectPage(resolvedParams.slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      
      {/* Botão de Voltar */}
      <Link href="/" className="inline-block mb-12 font-mono text-sm uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
        {"<- Voltar para Home"}
      </Link>

      {/* CABEÇALHO (Gerado com os dados do projects.ts) */}
      <header className="mb-16 border-b-4 border-black pb-8">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
          {projectInfo.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {projectInfo.tags.map((tag: string) => (
            <span key={tag} className="text-sm font-mono border border-black px-2 py-1 uppercase bg-gray-50">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Adiciona link do Github se existir no projects.ts */}
        {projectInfo.githubUrl && (
          <a href={projectInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-sm underline hover:text-gray-600">
            [Ver Repositório no GitHub]
          </a>
        )}
      </header>

      {/* CORPO DO ARTIGO (Gerado com os dados da pasta content/) */}
      <article className="space-y-8">
        {blocks && blocks.length > 0 ? (
          blocks.map((block: any, index: number) => {
            switch (block.type) {
              
              case 'section_header':
                return (
                  <h2 key={index} className="text-3xl font-black uppercase tracking-tighter mt-16 mb-6">
                    {block.value}
                  </h2>
                );
              
              case 'text':
                return (
                  <p key={index} className="text-lg leading-relaxed text-gray-800">
                    {block.value}
                  </p>
                );
              
              case 'image':
                return (
                  <div key={index} className="my-12">
                    <div className="relative w-full h-64 md:h-96 border-2 border-black grayscale hover:grayscale-0 transition-all duration-500">
                      <Image src={block.value} alt={block.caption || 'Project Image'} fill className="object-cover" />
                    </div>
                    {block.caption && (
                      <p className="mt-2 text-sm font-mono text-gray-500 uppercase tracking-widest">
                        ^ {block.caption}
                      </p>
                    )}
                  </div>
                );
              
              case 'code':
                return (
                  <div key={index} className="my-8 border-2 border-black bg-gray-50">
                    {block.caption && (
                      <div className="bg-black text-white text-xs font-mono px-4 py-1 uppercase">
                        {block.caption}
                      </div>
                    )}
                    <pre className="p-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{block.value}</code>
                    </pre>
                  </div>
                );
                
              default:
                return null;
            }
          })
        ) : (
          <div className="border-l-4 border-black pl-6 py-2">
            <p className="text-lg font-mono opacity-80">
              [Status]: Artigo detalhado em construção...
            </p>
          </div>
        )}
      </article>

    </div>
  );
}