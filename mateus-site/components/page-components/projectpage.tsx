import { dataScienceProjects, cyberProjects, devProjects } from '@/data/projectcards';
import { ContentBlock } from '@/interfaces';
import { notFound } from 'next/navigation';

const allProjects = [...dataScienceProjects, ...cyberProjects, ...devProjects];

export default async function getProjectPage(slug: string) {
    const projectInfo = allProjects.find((p) => p.slug === slug);

    if (!projectInfo) notFound();

    let blocks: ContentBlock[] = [];
    try {
        const module = await import(`@/data/projects/${slug}`);
        blocks = module.content;
    } catch (error) {
        // Arquivo de texto longo ainda não existe, não faz nada
    }
    
    return { projectInfo, blocks };
}