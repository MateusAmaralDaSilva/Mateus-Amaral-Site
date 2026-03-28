import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { MDXComponents } from './mdxpagetemplate'; 
import { MdxRendererProps } from '../../interfaces';

export function MdxRenderer({ source }: MdxRendererProps) {
    const options = {
        mdxOptions: {
            rehypePlugins: [
                [
                    rehypePrettyCode as any,
                    {
                        theme: 'github-dark', // O tema escuro estilo VS Code
                        keepBackground: false, // Deixa o fundo transparente para usarmos o nosso bg-[#1e1e1e]
                    },
                ],
            ] as any[], // <-- O segredo está aqui! Ignora o conflito de tipos do plugin.
        },
    };

    return (
        <div className="w-full">
        {/* O MDXRemote junta a string de texto, os plugins e o seu design */}
        <MDXRemote 
            source={source} 
            components={MDXComponents} 
            options={options} 
        />
        </div>
    );
}
