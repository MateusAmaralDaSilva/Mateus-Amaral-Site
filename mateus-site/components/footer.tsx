export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full z-50 bg-white border-t-2 border-black py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
            <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Vamos Conectar</h3>
            <p className="text-sm font-mono text-gray-600">Disponível para novos desafios e pesquisas.</p>
            </div>
            <div className="flex gap-8 font-bold uppercase text-sm">
            <a 
                href="https://github.com/MateusAmaralDaSilva/Mateus-Amaral-Site" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline underline-offset-4"
            >
                GitHub
            </a>
            <a 
                href="https://www.linkedin.com/in/mateus-amaral-da-silva/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline underline-offset-4"
            >
                LinkedIn
            </a>
            <a 
                href="mailto:silvaamaralmateus@gmail.com" 
                className="hover:underline underline-offset-4"
            >
                Email
            </a>
            <a 
                href="https://wwws.cnpq.br/cvlattesweb/PKG_MENU.menu?f_cod=7DC9F83C1DFFA13A10616DDA431FDFAD" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline underline-offset-4"
            >
                Lattes
            </a>
            </div>
        </div>
        </footer>
    );
}