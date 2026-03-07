import AreaSection from '@/components/areasection';

export default function Home() {
  const dataScienceProjects = [
    { 
      title: "IA em Saúde & Aprendizado Federado", 
      description: "Implementação de modelos de aprendizado federado na plataforma Flautim para detecção de câncer de colo uterino, utilizando arquiteturas multimodais e hierárquicas.", 
      tags: ["Python", "Flautim", "Federated Learning"] 
    },
    { 
      title: "Simulação de Redes Heterogêneas", 
      description: "Simulação de distribuições heterogêneas de dados em ambientes federados utilizando Dirichlet partitioning.", 
      tags: ["Python", "Data Distribution"] 
    },
    { 
      title: "Explainable AI (XAI) & Avaliação", 
      description: "Aplicação de métodos avançados de avaliação de modelos e Explainable AI (XAI) para interpretação e validação das decisões do modelo.", 
      tags: ["PyTorch", "Scikit-learn", "XAI"] 
    },
    { 
      title: "Clusterização: K-Centros vs K-Means", 
      description: "Implementação em Python do algoritmo “k-centros” e comparação com o modelo “k-means”.", 
      tags: ["Python", "Algoritmos", "Machine Learning"] 
    }
  ];

  const cyberProjects = [
    { 
      title: "Criptografia e Quebra de Cifras", 
      description: "Sistema de criptografia por cifra de substituição aleatória e quebra via análise de frequência de idioma e algoritmo de MillerRobin para encontrar números primos.", 
      tags: ["Python", "Cryptography", "Miller-Rabin"] 
    },
    { 
      title: "Crivo de Eratóstenes & Miller-Rabin", 
      description: "Códigos para encontrar números primos via Crivo de Eratóstenes e algoritmo de Miller-Rabin.", 
      tags: ["Crivo de Eratóstenes", "Miller-Rabin"] 
    }
  ];

  const devProjects = [
    { 
      title: "RPG com Mestre IA", 
      description: "Desenvolvimento em andamento de um Role Playing Game (RPG) onde o mestre é um pseudo agente de IA.", 
      tags: ["Python", "IA", "Game Dev"] 
    },
    { 
      title: "Sistema Fullstack Solveware", 
      description: "Desenvolvimento do front-end da aplicação, modelagem de relacionamentos do banco de dados e gestão da equipe de produção.", 
      tags: ["SQL", "HTML/CSS", "Gestão"] 
    },
    { 
      title: "Desafio técnico Geeco", 
      description: "Desenvolvimento do front-end da aplicação, modelagem de relacionamentos do banco de dados, controle de usuários e implementação de um chatbot para realizar consultas para a equipe de compras.", 
      tags: ["SQL", "Next", "Python", "Chatbot", "IA"] 
    }
  ];

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