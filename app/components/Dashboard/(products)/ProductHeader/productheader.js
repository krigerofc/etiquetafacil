'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function ProductHeader() {
  const { data: session, status } = useSession();

  const [menu, setMenu] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [brand, setBrand] = useState("");
  const [temperature, setTemperature] = useState("");
  const [default_Days, setdefault_Days] = useState("");

  if (status === "loading") return <div>Carregando...</div>;
  if (!session) return <div>Acesso negado</div>;

  const OpenMenu = () => setMenu(true);
  const CloseMenu = () => setMenu(false);

  async function CreateProduct(e){
    e.preventDefault();
    const res = await fetch('/api/products/register', {
        method: 'post',
        body: JSON.stringify({
            name, description, responsible, brand, temperature, default_Days, userId: session.user.id
        }),
    });
    
    const data = await res.json();

    if (res.ok){
        if(data.success){
            setFeedback({ message: "Produto criado com sucesso!", type: "success" });
        } else {
            setFeedback({ message: "Erro ao criar produto!", type: "error" });
        }
    } else {
        setFeedback({ message: "Erro ao criar produto!", type: "error" });
    }
    setTimeout(() => setFeedback(null), 4000);
    CloseMenu();
  };

  return (
    <div className="w-full mt-5 mb-5 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-medium uppercase tracking-wide text-2xl sm:text-4xl text-gray-800 pt-1">
          Gerenciamento de Produtos
        </h1>

        <button
          className="p-3 sm:p-4 bg-red-500 text-white hover:bg-red-700 cursor-pointer flex items-center text-lg sm:text-xl rounded-2xl sm:rounded-3xl transition-colors"
          onClick={OpenMenu}
        >
          <IoMdAdd className="mr-2" />
          Criar Produto
        </button>
      </div>

      {feedback && (
        <div
          className={`mt-4 p-4 rounded-xl text-white font-semibold text-center sm:text-left ${
            feedback.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {feedback.message}
        </div>
      )}

      {menu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 sm:p-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-red-500 font-bold text-2xl hover:text-red-700"
              onClick={CloseMenu}
            >
              ×
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-6 text-center sm:text-left">
              Criar Produto
            </h2>

            <form className="flex flex-col gap-4" onSubmit={CreateProduct}>
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Nome do Produto</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                  rows={3}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Responsável</label>
                  <input
                    type="text"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Marca</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Dias de validade</label>
                  <input
                    type="number"
                    value={default_Days}
                    onChange={(e) => setdefault_Days(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Temperatura de Armazenamento</label>
                <select
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                  required
                >
                  <option value="">Escolha</option>
                  <option value="-18">-18°C (Congelamento seguro)</option>
                  <option value="-8">-8°C (Câmara fria)</option>
                  <option value="0">0°C (Próximo ao congelamento)</option>
                  <option value="4">4°C (Geladeira comum)</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 rounded-2xl sm:rounded-3xl hover:bg-red-700 transition-colors mt-4 w-full sm:w-auto"
              >
                Criar Produto
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
