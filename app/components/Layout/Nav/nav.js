import { FaReceipt } from 'react-icons/fa';
import Link from 'next/link';

export default function NavHeader() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <FaReceipt size={32} className="text-red-500" />
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-red-500">
            EtiquetaFácil
          </h1>
        </div>

        <nav className="flex items-center gap-4 text-sm md:text-lg font-medium uppercase tracking-wide">
          <Link href="/" className="hover:text-red-500">Sobre</Link>
          <Link href="/" className="hover:text-red-500">Preços</Link>
          <Link href="/" className="hover:text-red-500">Contato</Link>
          <Link
            href="/Login"
            className="border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition"
          >
            Minha conta
          </Link>
        </nav>
      </div>
    </header>
  );
}
