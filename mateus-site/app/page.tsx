import AreaSection from '@/components/areasection';

export default function Home() {
  const dataScienceProjects = [
    { title: "Simulador de Federated Learning", description: "Treinamento descentralizado de modelos preservando a privacidade dos dados nas bordas.", tags: ["Python", "Machine Learning"] },
    { title: "Otimização de Arquitetura", description: "Análise de performance e consumo de recursos em topologias de redes neurais.", tags: ["Python", "Computer Architecture"] }
  ];

  const cyberProjects = [
    { title: "Scanner de Vulnerabilidades", description: "Automação de varreduras em infraestruturas web.", tags: ["Bash", "Python", "Security"] }
  ];

  const devProjects = [
    { title: "API Modular", description: "Backend focado em alta disponibilidade e modularização.", tags: ["Node.js", "Docker", "REST"] }
  ];

return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tighter">
          Mateus Amaral da Silva
        </h1>
        <p className="max-w-xl text-lg font-medium font-mono text-gray-700">
          Estudante & Pesquisador em Ciência da Computação.
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