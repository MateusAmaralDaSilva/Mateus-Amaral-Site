// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

// Importando os nossos novos módulos
import Header from '@/components/header';
import Footer from '@/components/footer';

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

        {/* O main usa flex-grow para ocupar todo o espaço vazio disponível,
          empurrando o Footer para baixo caso a página tenha pouco conteúdo.
        */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer Global */}
        <Footer />

      </body>
    </html>
  );
}