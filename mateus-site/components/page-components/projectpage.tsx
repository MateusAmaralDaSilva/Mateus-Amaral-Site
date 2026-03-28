// src/components/page-components/projectpage.ts
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
// Importamos os seus arrays centralizados
import { dataScienceProjects, cyberProjects, devProjects } from '@/data/projectcards'; 

// Junta todos numa lista só para facilitar a busca
const allProjects = [...dataScienceProjects, ...cyberProjects, ...devProjects];

export default async function getProjectPage(slug: string) {
    // 1. A FONTE DA VERDADE: Busca os metadados (título, tags, etc) no TypeScript
    const projectInfo = allProjects.find((p) => p.slug === slug);

    // Se o slug não existir na lista, dá erro 404
    if (!projectInfo) {
        notFound();
    }

    // 2. O TEXTO: Vai ler o arquivo MDX correspondente
    const filePath = path.join(process.cwd(), 'data', 'projects', `${slug}.mdx`);
    let content = '';

    try {
        // Lê apenas o texto puro (já que removemos o Frontmatter, não precisamos do gray-matter)
        content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        // Se você criou o card mas ainda não escreveu o MDX, não quebra a página
        content = 'Conteúdo do projeto em construção...';
    }
    
    // Devolve os dois juntos para a sua página renderizar!
    return { projectInfo, content };
}