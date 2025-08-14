import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[90vh] bg-gradient-to-br from-white to-red-50 overflow-hidden border-t-2 border-red-500">
      <div className="absolute top-0 left-0 w-full h-full bg-red-100 rounded-b-[50%] opacity-20 pointer-events-none"></div>
      
        <div className="relative z-10 flex flex-col md:flex-row items-center h-full px-8 md:px-16 py-12">
            <div className="flex-1 flex flex-col justify-center animate-fade-in">
            <span className="text-sm uppercase tracking-widest text-red-500 mb-2">
                +215 mil produtos controlados
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 leading-tight mb-6">
                EtiquetaFácil
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-xl">
                Automatize suas etiquetas e ganhe tempo no dia a dia. Ideal para quem precisa de agilidade sem abrir mão da qualidade.
            </p>
            <div className="flex gap-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition">
                Conheça os planos
                </button>
                <button className="text-red-600 border border-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition">
                Fale com a gente
                </button>
            </div>
            </div>

        <div className="flex-1 relative h-full flex items-center justify-center">
            <div className="w-[90%] h-[90%] relative rounded-3xl overflow-hidden shadow-xl animate-fade-in">
                <Image
                src="/assets/layout/Header.png"
                alt="Impressora térmica imprimindo etiqueta"
                fill
                className="object-cover"
                priority
                />
            </div>
        </div>
      </div>
    </header>
  );
}
