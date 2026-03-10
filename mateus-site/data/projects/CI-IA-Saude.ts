// src/data/content/CI-IA-Saude.ts
import { ContentBlock } from '@/interfaces';

// Exportamos APENAS os blocos daquele projeto
export const content: ContentBlock[] = [
  { type: 'section_header', value: '// O Desafio da Privacidade' },
  { type: 'text', value: 'A detecção precoce do câncer de colo uterino requer muitos dados, mas hospitais não podem compartilhar informações de pacientes devido à LGPD.' },
  
  { type: 'section_header', value: '// A Solução com Flautim' },
  { type: 'text', value: 'Work in Progress' },
  
  { type: 'code', caption: 'python', value: 'def train_federated_model():\n    # Arquitetura hierárquica Flautim\n    pass' }
];