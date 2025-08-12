import { FaReceipt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow" />

      <footer className="bg-white text-black py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2">
              <FaReceipt size={28} className="text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">EtiquetaFácil</h2>
            </div>
            <p className="mt-2 text-sm">
              Soluções inteligentes para controle de validade e etiquetas automáticas. Praticidade para sua cozinha, segurança para seu negócio.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navegação</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#como-funciona" className="hover:text-red-500">Como funciona</a></li>
              <li><a href="#planos" className="hover:text-red-500">Planos</a></li>
              <li><a href="#contato" className="hover:text-red-500">Contato</a></li>
              <li><a href="#faq" className="hover:text-red-500">FAQ</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Fale com a gente</h3>
            <p className="text-sm mb-4">Estamos prontos para te ajudar a descomplicar o controle da sua cozinha.</p>
            <a
              href="https://wa.me/5533998573352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition"
            >
              Iniciar conversa
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EtiquetaFácil. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
