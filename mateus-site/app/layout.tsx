// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

// Importando os nossos novos módulos
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

export const metadata: Metadata = {
  title: 'O Meu Portfólio | Comp Sci',
  description: 'Portfólio de Ciência de Dados, Cybersecurity e Desenvolvimento',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      {/* Adicionamos flex e flex-col aqui no body 
        para estruturar a página inteira em coluna 
      */}
      <body className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white">
        
        {/* Header Global */}
        <Header />

        {/* O main usa flex-grow para ocupar o espaço vazio,
          e pb-32 para dar espaço ao footer fixo.
        */}
        <main className="flex-grow w-full pb-32">
          {children}
        </main>

        {/* Footer Global */}
        <Footer />

      </body>
    </html>
  );
}