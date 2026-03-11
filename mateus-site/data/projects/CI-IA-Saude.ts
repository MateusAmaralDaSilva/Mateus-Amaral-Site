// src/data/content/CI-IA-Saude.ts
import { ContentBlock } from '@/interfaces';

// Exportamos APENAS os blocos daquele projeto
export const content: ContentBlock[] = [
  { type: 'section_header', value: '// Projeto CI-IA Saúde - Detecção de câncer de colo uterino' },

  { type: 'text', value: 'Responsabilidades (primeira fase): Leitura e apresentação de artigos, propor novas ideias/caminhos, criar gráficos de desempenho de modelos' },
  { type: 'text', value: 'Responsabilidades (segunda fase): Criar modelos de aprendizado centralizado e federado utilizando-se de CNNs e da plataforma Flautim, criar métricas supervisionadas e não supervisionadas, fazer dataaugmentation e liderar a equipe de modelos'},
  
  { type: 'section_header', value: '// Motivação' },
  { type: 'text', value: 'No Brasil, temos uma grande demanda de análise de exames de Papa Nicolau, em áreas rurais e afastadas de grandes cidades não existe oferta de médicos o suficiente para suprir toda a demanda de análise, a UFMG coleta exames de Minas Gerais e região com o intuito de prover uma análise de qualidade para todas as mulheres, entretanto a quantidade de exames aumentam cada vez mais e para a demanda continuar sendo tratada a UFMG busca desenvolver um modelo preditivo capas de diagnósticar lesões cervicais.' },
  
  { type: 'section_header', value: '// Resultados'},
  { type: 'text', value: 'Um dos principais problemas relacionados a este projeto é garantir a privacidade dos dados ao mesmo tempo em que exista amostras de diversos hospitais para que assim tenhamos um modelo robusto e que não sofra com a generalização dos dados, até porque cada laboratório usa pigmentos e máquinas diferentes para digitalizar as amostras dos exames de papa-nicolau. Para solucionar este problema foi proposto pelo professor o uso de aprendizado federado, desta forma os dados sempre estariam nos hospitais preservando a informação de cada um deles e também seria mais robusto a generalização por conta da forma que os parâmetros do modelo são ajustadas neste paradigma.'},
  { type: 'image', value: ''},
  { type: 'text', value: 'Esse resultado foi a primeira indicação de que o aprendizado federado poderia além de garantir a privacidade dos dados trazer resultados que não sofram domain-shift.'},
  { type: 'code', caption: 'python', value: 'def train_federated_model():\n    # Arquitetura hierárquica Flautim\n    pass' },

  { type: 'text', value: 'O proximo passo era lapidar o modelo, antes estavamos usando a ResNet34, agora tinhamos começado a usar a ResNet50, para conseguir rodar este modelo migramos para a plataforma própria de aprendizado centralizado e federado do laborátorio, o Flautim, um framework que utiliza do Flower para fornecer um ambiente de aprendizado federado.'},
  { type: 'text', value: 'Com um ambiente com alto poder computacional começamos a aplicar técnicas e ferramentas de treino e validação de modelos mais robustas.'}
];