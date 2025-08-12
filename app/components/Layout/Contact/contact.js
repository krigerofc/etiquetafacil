import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FaWhatsapp className="mb-5 text-green-500" size={76} />
        <h1 className="mb-4 text-2xl md:text-3xl uppercase font-bold tracking-wide">
          Chega de complicação
        </h1>
        <p className="text-base md:text-lg font-medium tracking-wide max-w-md">
          Com o <strong>EtiquetaFácil</strong>, você transforma o controle de validade em algo rápido.
        </p>
        <a
          href="https://wa.me/5533998573352"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-4 bg-red-500 rounded-2xl font-bold text-white text-lg md:text-2xl hover:bg-red-600 transition"
        >
          Iniciar conversa
        </a>
      </div>
    </section>
  );
}
