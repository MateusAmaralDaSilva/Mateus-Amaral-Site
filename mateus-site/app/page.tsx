// src/app/page.tsx
import Section from '@/components/section';
import AreaSection from '@/components/projectsubtopic';
import { dataScienceProjects, cyberProjects, devProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Main Section */}
      <section className="mb-32 mt-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tighter">
          Mateus Amaral da Silva
        </h1>
      </section>

      {/* 1. SEÇÃO SOBRE MIM */}
      <Section title="// Sobre" id="sobre">
        <div className="border-t-2 border-black pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium leading-relaxed">
          <div>
            <p className="mb-6">
              Atualmente no 6º semestre de Ciência da Computação na UFMG, atuo como pesquisador no Future Lab. 
              Meu foco principal é a interseção entre saúde e tecnologia, desenvolvendo modelos de aprendizado 
              federado para ambientes reais.
            </p>
          </div>
          
          {/* Caixa lateral estilo terminal */}
          <div className="font-mono text-sm border-l-2 border-black pl-6 flex flex-col justify-center gap-4">
            <p><strong>[Linguagens]:</strong> Python, C++, SQL, Java</p>
            <p><strong>[Ecossistema]:</strong> PyTorch, FastAPI, Next.js, Docker</p>
            <p><strong>[MLOps / DevOps]:</strong> Flautim, Flower, Git</p>
          </div>
        </div>
      </Section>

      {/* 2. SEÇÃO DE PROJETOS */}
      <Section title="// Projetos e Pesquisas" id="projetos">
        {/* Passamos a borda superior para cá, pois ela faz sentido no contexto de lista expansível */}
        <div className="flex flex-col border-t-2 border-black">
          <AreaSection title="Ciência de Dados & ML" projects={dataScienceProjects} />
          <AreaSection title="Cybersecurity" projects={cyberProjects} />
          <AreaSection title="Desenvolvimento" projects={devProjects} />
        </div>
      </Section>
    </div>
  );
}