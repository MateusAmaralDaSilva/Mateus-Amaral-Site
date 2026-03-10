import Image from 'next/image';
import { ContentBlock } from '@/interfaces';

export default function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  // Se não houver blocos, retorna o aviso
  if (!blocks || blocks.length === 0) {
    return (
      <div className="border-l-4 border-black pl-6 py-2">
        <p className="text-lg font-mono opacity-80">
          [Status]: Artigo detalhado em construção...
        </p>
      </div>
    );
  }

  // Se houver, renderiza o switch
  return (
    <>
      {blocks.map((block, index) => {
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
      })}
    </>
  );
}