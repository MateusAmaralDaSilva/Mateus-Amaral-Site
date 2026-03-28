import getProjectPage from '@/components/page-components/projectpage';
import BackButton from '@/components/buttons';
import ProjectHeader from '@/components/structure/projectheader';
import { MdxRenderer } from '@/components/structure/mdxrenderer';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = await params;

  const { projectInfo, content } = await getProjectPage(resolvedParams.slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      
      <BackButton text="<- Voltar para Home" />
      
      <ProjectHeader 
        title={projectInfo.title} 
        tags={projectInfo.tags} 
        githubUrl={projectInfo.githubUrl} 
      />

      {/* Ajustei a margem superior (mt-12) para dar um respiro após a linha do cabeçalho */}
      <article className="space-y-8 mt-12 prose prose-lg max-w-none">
        <MdxRenderer source={content} />
      </article>

    </div>
  );
}