'use client';

import { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

export default function PainelEtiquetasRecentes() {
  const [etiquetas, setEtiquetas] = useState([]);

  useEffect(() => {
    async function fetchEtiquetas() {
      const res = await fetch('/api/etiquetas/recentes');
      const data = await res.json();
      setEtiquetas(data);
    }

    fetchEtiquetas();
  }, []);

  function verificarStatus(dataValidade) {
    const hoje = new Date();
    const validade = new Date(dataValidade);
    return validade < hoje ? 'vencida' : 'valida';
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Etiquetas Impressas Recentemente</h2>

      {etiquetas.length === 0 ? (
        <p className="text-gray-500">Nenhuma etiqueta foi impressa recentemente.</p>
      ) : (
        <table className="min-w-full table-auto">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Produto</th>
              <th className="px-4 py-2 text-left">Quantidade</th>
              <th className="px-4 py-2 text-left">Data de Impressão</th>
              <th className="px-4 py-2 text-left">Validade</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {etiquetas.map((etiqueta) => {
              const status = verificarStatus(etiqueta.validade);
              return (
                <tr key={etiqueta.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{etiqueta.produto}</td>
                  <td className="px-4 py-2">{etiqueta.quantidade}</td>
                  <td className="px-4 py-2">{etiqueta.data}</td>
                  <td className="px-4 py-2">{etiqueta.validade}</td>
                  <td className="px-4 py-2">
                    {status === 'vencida' ? (
                      <span className="flex items-center gap-2 text-red-600 font-medium">
                        <FaExclamationTriangle /> Vencida
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-green-600 font-medium">
                        <FaCheckCircle /> Válida
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
