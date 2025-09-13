'use client';

import { useState } from 'react';

export default function SelectProduct({ produtos }) {
  const [selecionado, setSelecionado] = useState(null);

  function selecionar(id) {
    setSelecionado(id === selecionado ? null : id);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Selecionar Produto</h2>
      <div className="flex flex-col gap-4">
        {produtos?.map((produto) => {
          const ativo = produto.id === selecionado;
          return (
            <div
              key={produto.id}
              onClick={() => selecionar(produto.id)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm transition-all ${
                ativo ? 'bg-red-100 border-red-400' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <h3 className="text-lg font-bold mb-1">{produto.nome}</h3>
              <p className="text-sm text-gray-700">
                <strong>Marca:</strong> {produto.marca}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Validade:</strong> {produto.validade}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Temperatura:</strong> {produto.temperatura}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
