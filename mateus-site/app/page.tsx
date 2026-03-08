import AreaSection from '@/components/projectsection';
import { dataScienceProjects, cyberProjects, devProjects } from '@/data/project';

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tighter">
          Mateus Amaral da Silva
        </h1>
        <p className="max-w-xl text-lg font-medium font-mono text-gray-700">
          Cientista da Computação focado em IA aplicada em ambientes reais. Experiência prática com aprendizado profundo, federado e segurança da informação.
        </p>
      </section>

      {/* Módulos de Áreas de Atuação */}
      <section className="flex flex-col border-t-2 border-black">
        <AreaSection title="Ciência de Dados & ML" projects={dataScienceProjects} />
        <AreaSection title="Cybersecurity" projects={cyberProjects} />
        <AreaSection title="Desenvolvimento" projects={devProjects} />
      </section>
    </div>
  );
}