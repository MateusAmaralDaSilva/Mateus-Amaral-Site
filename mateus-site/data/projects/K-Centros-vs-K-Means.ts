// src/data/content/CI-IA-Saude.ts
import { ContentBlock } from '@/interfaces';

// Exportamos APENAS os blocos daquele projeto
export const content: ContentBlock[] = [
  { type: 'section_header', value: '// K-Centros vs K-Means' },
  { type: 'text', value: 'Comparação de técnicas de clustering (k-means e k-centros) '},

  { type: 'section_header', value: '// Resultados'},
  { type: 'text', value: '// Neste trabalho foi capaz de comparar os dois algoritmos e ver suas qualidades e defeitos, no meu github existe um arquivo onde detalho de forma minunciosa as diferenças entre as técnicas, entretanto para simplificar podemos dizer que o k-means por não recalcular a distância de pontos para cada ponto do cluster e sim cálcular a média dos pontos tem uma ordem de complexidade bem menor. Por outro lado sabemos que a média é uma métrica sensível a outliers, portanto esse algoritmo pode sofrer muito em casos em que a escala de grandeza das coordenadas são muito distintas entre pontos do mesmo cluster.'}


]