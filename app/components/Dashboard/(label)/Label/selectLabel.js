'use client';

import { useState } from 'react';
import { FaBoxOpen, FaCheckCircle, FaSearch } from 'react-icons/fa';

export default function SelectProduct({ produtos, onSelecionadosChange }) {
  const [selecionados, setSelecionados] = useState([]);
  const [busca, setBusca] = useState('');

  function toggleSelecionado(produto) {
    const jaSelecionado = selecionados.some(p => p.id === produto.id);
    const novaLista = jaSelecionado
      ? selecionados.filter(p => p.id !== produto.id)
      : [...selecionados, produto];

    setSelecionados(novaLista);
    if (typeof onSelecionadosChange === 'function') {
      onSelecionadosChange(novaLista);
    }
  }

  const produtosFiltrados = Array.isArray(produtos)
    ? produtos.filter((produto) =>
        typeof produto.name === 'string' &&
        produto.name.toLowerCase().includes(busca.toLowerCase())
      )
    : [];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md max-h-[700px] overflow-y-hidden mt-8">
      <div className="flex items-center gap-2 mb-6">
        <FaBoxOpen className="text-red-500 text-2xl" />
        <h2 className="text-2xl font-semibold text-gray-800">Selecionar Produtos</h2>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
        />
      </div>

     <div className="flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-2">
        {produtosFiltrados.map((produto) => {
          const ativo = selecionados.some(p => p.id === produto.id);
          return (
            <div
              key={produto.id}
              onClick={() => toggleSelecionado(produto)}
              className={`w-full cursor-pointer border rounded-lg p-4 shadow-sm transition-all ${
                ativo ? 'bg-red-50 border-red-400' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">{produto.name}</h3>
                {ativo && <FaCheckCircle className="text-red-500 text-xl" />}
              </div>
              <div className="text-sm text-gray-500 space-y-1 flex gap-2">
                <p><strong>ID:</strong> {produto.id}</p>
                <p><strong>Marca:</strong> {produto.brand}</p>
                <p><strong>Validade:</strong> {produto.default_Days}</p>
                <p><strong>Temperatura:</strong> {produto.temperature}</p>
              </div>
            </div>
          );
        })}
        {produtosFiltrados.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-4">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}
