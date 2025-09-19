'use client';

import { useState } from 'react';

export default function ConfigLabel({ Print}) {
  const [tipo, setTipo] = useState('termica');
  const [tamanho, setTamanho] = useState('5x7');
  const [quantidade, setQuantidade] = useState(1);

  const tamanhosDisponiveis = {
    termica: ['3x5', '4x6', '5x7'],
    a4: ['5x7', '6x8', '4x6'],
  };

  function PrePrint() {
    const config = {
      tipo, // A4 ou termica
      tamanho,
      quantidade,
    };
    
    Print(config);
  }

  return (
  <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
      <h2 className="text-xl font-semibold mb-4">Configuração de Etiqueta</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Tipo de Impressão</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="termica">Impressora Térmica</option>
          <option value="a4">Folha A4</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Tamanho da Etiqueta</label>
        <select
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          {tamanhosDisponiveis[tipo].map((t) => (
            <option key={t} value={t}>{t} cm</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Quantidade de Etiquetas</label>
        <input
          type="number"
          min={1}
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        onClick={PrePrint}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Confirmar Impressão
      </button>
    </div>
  );
}
