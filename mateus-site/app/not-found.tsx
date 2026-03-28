import Link from 'next/link';
import {BackButton} from '@/components/buttons';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      
      {/* Caixa Principal (Estilo Brutalista com "Sombra Dura") */}
      <div className="border-4 border-black p-8 md:p-16 mb-12 bg-white relative">
        {/* Efeito de sombra sólida preta (Brutalism) */}
        <div className="absolute top-2 left-2 w-full h-full bg-black -z-10" />
        
        <h1 className="text-8xl md:text-[9rem] font-black tracking-tighter leading-none mb-4">
          404
        </h1>
        
        <div className="border-t-4 border-black pt-4 mt-2">
          <p className="font-mono text-lg md:text-xl uppercase tracking-widest font-bold">
            [Erro]: Rota Inexistente
          </p>
        </div>
      </div>

      {/* Texto de Contexto */}
      <div className="max-w-md mb-12 space-y-4 font-mono text-sm md:text-base">
        <p>
          {">"} O diretório ou documento que você tentou acessar não foi encontrado no servidor.
        </p>
        <p className="opacity-80">
          {">"} Esta página pode estar em desenvolvimento ou ter sido movida/deletada.
        </p>
      </div>

      {/* Botão de Retorno */}
      <BackButton text="<- Voltar para Home" />
      
    </div>
  );
}