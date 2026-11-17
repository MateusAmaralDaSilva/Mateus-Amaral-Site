// src/data/projects.ts
import { Project } from '@/interfaces';

export const dataScienceProjects: Project[] = [
    { 
        title: "IA em Saúde & Aprendizado Federado", 
        description: "Implementação de modelos de aprendizado federado na plataforma Flautim para detecção de câncer de colo uterino.", 
        tags: ["Python", "Flautim", "Federated Learning"],
        isPrivate: true, // Indica que este projeto é privado/confidencial 
        slug: "CI-IA-Saude"
    },
    {
        title: "Segmentação Celular com IA",
        description: "Pipeline em Python para segmentação de instâncias celulares, extração de crops, treinamento e avaliação de máscaras.",
        tags: ["Python", "Computer Vision", "Deep Learning"],
        isPrivate: true,
        slug: "Segmentacao-Celular"
    },
    { 
        title: "Clusterização: K-Centros vs K-Means", 
        description: "Implementação em Python do algoritmo “k-centros” e comparação com o modelo “k-means”.", 
        tags: ["Python", "Algoritmos", "Machine Learning"],
        githubUrl: "https://github.com/MateusAmaralDaSilva/KMeans-vs-Algoritmos-de-Clustering-Aproximativos",
        slug: "K-Centros-vs-K-Means"
    },
    {
        title: "Immersive Tool for Games",
        description: "Ferramenta para jogos que transforma fala ou texto do jogador em estados de jogo válidos para NPCs.",
        tags: ["Python", "IA", "Game Dev", "Speech-to-Text"],
        githubUrl: "https://github.com/MateusAmaralDaSilva/Immersive-Tool-For-Games-WIP-.git",
        slug: "Immersive-Tool-For-Games"
    },
    {
        title: "Cientista de Dados na Guidance",
        description: "Desenvolvimento de sistemas multiagentes com CrewAI para a Lacerda, empresa de advocacia, e para a Ânima, grupo educacional com várias universidades.",
        tags: ["Python", "CrewAI", "IA", "Sistemas Multiagentes"],
        isPrivate: true,
        slug: "Cientista-de-Dados-Guidance"
    },
];

export const cyberProjects: Project[] = [
    { 
        title: "Criptografia e Quebra de Cifras", 
        description: "Sistema de criptografia por cifra de substituição aleatória e quebra via análise de frequência de idioma e algoritmo de MillerRobin para encontrar números primos.", 
        tags: ["Python", "Cryptography", "Miller-Rabin"], 
        githubUrl: "https://github.com/MateusAmaralDaSilva/Crypto-Topics/tree/main/Cryptography%20by%20Frequency",
        slug: "Criptografia-e-Quebra-de-Cifras"
    },
    { 
        title: "Crivo de Eratóstenes & Miller-Rabin", 
        description: "Códigos para encontrar números primos via Crivo de Eratóstenes e algoritmo de Miller-Rabin.", 
        tags: ["Crivo de Eratóstenes", "Miller-Rabin"], 
        githubUrl: "https://github.com/MateusAmaralDaSilva/Crypto-Topics/tree/main/Find%20prime%20number",
        slug: "Crivo-de-Eratostenes-e-Miller-Rabin"
    }
];

export const devProjects: Project[] = [
    {
        title: "SaaS para Controle de Estoque e Agendamentos",
        description: "Aplicação full-stack desenvolvida e hospedada na Oracle, com controle de estoque, agendamentos, segurança contra ataques e aplicação de métodos de privacidade.",
        tags: ["Fullstack", "Oracle", "Segurança", "Privacidade"],
        isPrivate: true,
        slug: "SaaS-Controle-de-Estoque-e-Agendamentos"
    },
    {
        title: "Sistema Fullstack Solveware", 
        description: "Desenvolvimento do front-end da aplicação, modelagem de relacionamentos do banco de dados e gestão da equipe de produção.", 
        tags: ["SQL", "HTML/CSS", "Gestão"],
        slug: "Sistema-Solveware"
    },
    { 
        title: "Desafio técnico Geeco", 
        description: "Desenvolvimento do front-end da aplicação, modelagem de relacionamentos do banco de dados, controle de usuários e implementação de um chatbot para realizar consultas para a equipe de compras.", 
        tags: ["SQL", "Next", "Python", "Chatbot", "IA"] ,
        githubUrl: "https://github.com/MateusAmaralDaSilva/Geeco-Challenge",
        slug: "Desafio-tecnico-Geeco"
    }
];
