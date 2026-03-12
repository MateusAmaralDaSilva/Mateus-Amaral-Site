// src/data/content/CI-IA-Saude.ts
import { ContentBlock } from '@/interfaces';

// Exportamos APENAS os blocos daquele projeto
export const content: ContentBlock[] = [
  { type: 'section_header', value: '// Narrative IA agent' },
  { type: 'text', value: 'Um RPG narrativo  onde o mestre da história é uma IA generativa.'},

  { type: 'section_header', value: '// Motivação' },
  { type: 'text', value: 'A motivação deste projeto é aprender sobre IA generativa e também testar os limites da IA criando um jogo.'},

  { type: 'section_header', value: '// Resultados e desafios'},
  { type: 'text', value: 'O código foi elaborado usando a LLM llamacpp por ser leve e rápida, uma vez que é implementada emm c++. Já o gerencimento dos dados e do jogo foram feitas em python.'},
  { type: 'text', value: 'Os resultados que tive foram um sistema completo que criava o estado do jogo, enviava o estado atual e o anterior para dar contexto para a IA e retornava um novo estado. Além disso havia criação de usúario e salvamento de jogo para que o jogador pudesse fechar o programa e voltar no mesmo estado.'},
  { type: 'text', value: 'Já os desafios que surgiram foram voltados as capacidades das LLMs que tenho capacidade de usar não conseguem manter o JSon formatado ao longo do tempo, desta forma o algoritmo não é capaz de continuar atualizando as fases. Por conta deste erro dei uma pausa no projeto para repagina-lo no futuro.'},
  
]