// src/app/page.tsx
import Section from '@/components/structure/section';
import AreaSection from '@/components/page-components/projectsection';
import { dataScienceProjects, cyberProjects, devProjects } from '@/data/projectcards';
import { profilePicture } from '@/components/images';
import {} from '@/components/page-components/projectpage';
import CertificatesSection from '@/components/page-components/certificatesection';
import { ResumeButton } from '@/components/buttons'; 

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Main Section */}
      <section className="mb-32 mt-10">
        {/* Container Flex */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-center md:text-left">
            Mateus Amaral da Silva
          </h1>
          <div className="relative w-20 h-20 md:w-20 md:h-20 shrink-0 rounded-full overflow-hidden border-2 border-black">
            {profilePicture}
          </div>
        </div>

        {/* Introdução */}
        <p className="max-w-xl text-lg font-medium font-mono text-gray-700 text-center md:text-left">
          Cientista da Computação focado em IA aplicada em ambientes reais. Experiência prática com aprendizado profundo, federado e segurança da informação.
        </p>

      </section>

      {/* 1. SEÇÃO SOBRE MIM */}
      <Section title="// Sobre" id="sobre">
        <div className="border-t-2 border-black pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-6">
              Atualmente no 6º semestre de Ciência da Computação na UFMG, atuo como pesquisador no Future Lab. 
              Meu foco principal é trabalhar com tecnologias emergentes, desenvolvendo modelos de aprendizado 
              de máquina para ambientes reais.
            </p>
          </div>
          <div>
            <p className="mb-2">
              Saiba mais sobre minha trajetória acadêmica e profissional baixando meu currículo atualizado:
            </p>
            <ResumeButton />
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

      {/* 3. SEÇÃO DE CERTIFICADOS */}
      <Section title="// Certificados" id="certificados">
        {/* Passamos a borda superior para cá, pois ela faz sentido no contexto de lista expansível */}
        <div className="flex flex-col border-t-2 border-black">
          <CertificatesSection />
        </div>
      </Section>

      {/* 4. SEÇÃO DE HOBBIES */}
      <Section title="// Hobbies" id="hobbies">
        {/* Passamos a borda superior para cá, pois ela faz sentido no contexto de lista expansível */}
        <div className="flex flex-col border-t-2 border-black">
          Work In Progress
        </div>
      </Section>
    </div>
  );
}