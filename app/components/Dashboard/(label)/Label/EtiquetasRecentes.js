'use client';

import LoadingScreen from '@/app/components/default/LoadingScreen/Loading';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

export default function PainelEtiquetasRecentes() {
  const [etiquetas, setEtiquetas] = useState([]);
  const {data: session, status} = useSession();

  useEffect(() => {
    if (status !== "authenticated") return 

    async function fetchEtiquetas() {
      const res = await fetch('/api/labels/all', 
        {method:"POST", 
         body:JSON.stringify({
          userId:session.user.id
         })
      });
      const data = await res.json();
      console.log(data)
      setEtiquetas(data.labels || []);
    }

    fetchEtiquetas();
  }, [session, status]);

  if (status !== "authenticated") return <LoadingScreen/>;
  if (status === "loading") return <LoadingScreen/>;

  function verificarStatus(status) {
    if(status === 'Expired'){ return 'Expired'}
  }

  return (
    <div className="max-h-[500px] w-full max-w-full text-center mx-auto bg-white p-6 rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Etiquetas Impressas Recentemente</h2>

      {etiquetas.length === 0 ? (
        <p className="text-gray-500">Nenhuma etiqueta foi impressa recentemente.</p>
      ) : (
        <table className="min-w-full table-auto">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Produto</th>
              <th className="px-4 py-2 text-left">Quantidade</th>
              <th className="px-4 py-2 text-left">Data de Impressão</th>
              <th className="px-4 py-2 text-left">Validade</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {etiquetas.map((etiqueta) => {
              const status = verificarStatus(etiqueta.status);
              const date_manufacture = new Date(etiqueta.manufacture_Date).toLocaleDateString('pt-BR');
              const date_expired = new Date(etiqueta.experation_Date).toLocaleDateString('pt-BR')
              const now = Date.now();
              const expirationTimestamp = new Date(etiqueta.experation_Date).getTime();

              return (
                <tr key={etiqueta.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{etiqueta.id}</td>
                  <td className="px-4 py-2">{etiqueta.name}</td>
                  <td className="px-4 py-2">{etiqueta.amount}</td>
                  <td className="px-4 py-2">{date_manufacture}</td>
                  <td className="px-4 py-2">{date_expired}</td>
                  <td className="px-4 py-2">

                    {now > expirationTimestamp ? (
                      <span className="flex items-center gap-2 text-red-600 font-medium">
                        <FaExclamationTriangle /> Vencida
                      </span>
                    ) : status === 'Alert' ||  expirationTimestamp == now ? (
                      <span className="flex items-center gap-2 text-yellow-500 font-medium">
                        <FaCheckCircle /> Alert
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
