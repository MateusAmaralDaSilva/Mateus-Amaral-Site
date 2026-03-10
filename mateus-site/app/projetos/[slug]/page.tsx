// src/app/projetos/[slug]/page.tsx
import getProjectPage from '@/components/page-components/projectpage';
import BackButton from '@/components/buttons';
import ProjectHeader from '@/components/structure/projectheader';
import BlockRenderer from '@/components/structure/blockrender';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = await params;
  const { projectInfo, blocks } = await getProjectPage(resolvedParams.slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      
      <BackButton text="<- Voltar para Home" />
      
      <ProjectHeader 
        title={projectInfo.title} 
        tags={projectInfo.tags} 
        githubUrl={projectInfo.githubUrl} 
      />

      <article className="space-y-8">
        <BlockRenderer blocks={blocks} />
      </article>

    </div>
  );
}