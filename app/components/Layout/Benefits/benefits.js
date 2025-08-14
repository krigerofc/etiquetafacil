import { BiTimer } from 'react-icons/bi';
import { HiCalendarDateRange } from 'react-icons/hi2';
import { FaClipboardCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Benefits() {
  return (
    <div className="w-full h-auto py-10 px-4">
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center box-border mb-12">
      <Image
        src="/assets/layout/Molho.png"
        alt="Molho"
        width={600}
        height={300}
        className="max-w-full h-auto object-contain rounded-xl"
      />
    </div>


      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 bg-red-500 rounded-3xl text-white">
          <BiTimer size={56} className="mb-4" />
          <p className="font-medium tracking-wide text-center">
            Automatize suas etiquetas e ganhe tempo no dia a dia. Ideal para quem precisa de agilidade sem abrir mão da qualidade.
          </p>
        </div>

        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 bg-red-500 rounded-3xl text-white">
          <HiCalendarDateRange size={56} className="mb-4" />
          <p className="font-medium tracking-wide text-center">
            Controle de validade simplificado: mantenha seus produtos organizados e evite desperdícios com etiquetas inteligentes.
          </p>
        </div>

        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 bg-red-500 rounded-3xl text-white">
          <FaClipboardCheck size={56} className="mb-4" />
          <p className="font-medium tracking-wide text-center">
            Segurança e praticidade: etiquetas que ajudam no controle e garantem conformidade com as normas sanitárias.
          </p>
        </div>
      </div>
    </div>
  );
}
