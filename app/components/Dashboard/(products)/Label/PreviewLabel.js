'use client';

export default function PreviewLabel() {
const produto = {
    nome: 'Carne Moída',
    marca: 'Friboi',
    validade: '10/09/2025',
    producao: '08/09/2025',
    temperatura: '2°C',
    lote: 'A123',
    codigo: '789456123',
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Pré-visualização da Etiqueta</h2>

      <div className="flex justify-center">
        <div className="w-[240px] h-[160px] bg-white border border-gray-300 rounded-md shadow-md p-4 flex flex-col justify-between text-sm font-sans text-gray-900 tracking-tight">
          {/* Nome do produto em destaque */}
          <div className="text-base font-bold uppercase text-center text-gray-800">
            {produto.nome}
          </div>

          {/* Informações agrupadas */}
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between"><span className="font-medium">Marca:</span><span>{produto.marca}</span></div>
            <div className="flex justify-between"><span className="font-medium">Validade:</span><span>{produto.validade}</span></div>
            <div className="flex justify-between"><span className="font-medium">Produção:</span><span>{produto.producao}</span></div>
            <div className="flex justify-between"><span className="font-medium">Temperatura:</span><span>{produto.temperatura}</span></div>
            <div className="flex justify-between"><span className="font-medium">Lote:</span><span>{produto.lote}</span></div>
            <div className="flex justify-between"><span className="font-medium">Código:</span><span>{produto.codigo}</span></div>
          </div>

          {/* Rodapé institucional */}
          <div className="text-[10px] text-gray-400 text-right mt-2 italic">
            Etiqueta gerada por EtiquetaFácil
          </div>
        </div>
      </div>
    </div>
  );
}