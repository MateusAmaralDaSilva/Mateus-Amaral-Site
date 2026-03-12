// src/data/content/CI-IA-Saude.ts
import { ContentBlock } from '@/interfaces';

export const content: ContentBlock[] = [
  { type: 'section_header', value: '// Narrative IA agent' },
  { type: 'text', value: 'Um RPG narrativo  onde o mestre da história é uma IA generativa'},

  { type: 'section_header', value: '// Motivação' },
  { type: 'text', value: 'Além do interesse na área de criptografia e segurança, fui incentivado pelo professor Jeroen Maria Van de Graaff a ler o livro Understanding Cryptography A Textbook for Students and Practitioners from Christof Paar and Jan Pelzl, e seu primeiro cápitulo trata dessas criptografias básicas e como quebra-las.' },
  
  { type: 'section_header', value: '// Código'},
  { type: 'text', value: 'A ideia é simples, pegamos as palavras do alfabeto e mapeamos aleatoriamente para outras palavras, desta forma nosso algoritmo é mais robusto que cifras como a cira de cesar que apenas dão um shift arbitrário nas palavras.'},
  { type: 'code', value: ''},
  { type: 'text', value: 'O proximo passo era lapidar o modelo, antes estavamos usando a ResNet34, agora tinhamos começado a usar a ResNet50, para conseguir rodar este modelo migramos para a plataforma própria de aprendizado centralizado e federado do laborátorio, o Flautim, um framework que utiliza do Flower para fornecer um ambiente de aprendizado federado.'},
  { type: 'code', value: ''},
  { type: 'text', value: 'Desta forma conseguimos ter um sistema completo de comunicação via cifras.'}
]