'use client'

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function ProductHeader() {
  const [menu, setMenu] = useState(false);
  const [ feedback, setFeedback ] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [brand, setBrand] = useState("");
  const [temperature, setTemperature] = useState("");
  const [packaging, setPackaging] = useState("");
  const [default_Days, setdefault_Days] = useState("");

  const OpenMenu = () => setMenu(true);
  const CloseMenu = () => setMenu(false);

  async function CreateProduct(e){
    e.preventDefault();
    const res = await fetch('/api/products/register', {
        method: 'post',
        body: JSON.stringify({
            name: name,
            description: description,
            responsible: responsible,
            brand: brand,
            temperature: temperature,
            packaging: packaging,
            default_Days: default_Days,
        }),
    });
    
    const data = await res.json();

    if (res.ok){
        if(data.success == true){
        setFeedback({ message: "Produto criado com sucesso!", type: "success" });
        console.log(data)
        } else {
        setFeedback({ message: "Erro ao criar produto!", type: "error" });
        console.log(data)}
    } else {
        setFeedback({ message: "Erro ao criar produto!", type: "error" });
        console.log("ERROR: ERROR IN RESPONSE")
    }
    setTimeout(() => setFeedback(null), 4000);
    CloseMenu();
  };

  return (
    <div className="w-full mt-5 mb-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-medium uppercase tracking-wide text-3xl sm:text-4xl text-gray-800">
          Gerenciamento de Produtos
        </h1>

        <button
          className="p-4 bg-red-500 text-white hover:bg-red-700 cursor-pointer flex items-center text-xl sm:text-2xl rounded-3xl transition-colors"
          onClick={OpenMenu}
        >
          <IoMdAdd className="mr-2" />
          Criar Produto
        </button>
      </div>

        {feedback && (
        <div
          className={`mt-4 p-4 rounded-xl text-white font-semibold ${
            feedback.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {feedback.message}
        </div>
      )}

      {menu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-95 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6 relative shadow-2xl">

            <button
              className="absolute top-4 right-4 text-red-500 font-bold text-2xl hover:text-red-700"
              onClick={CloseMenu}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center sm:text-left">
              Criar Produto
            </h2>

            <form className="flex flex-col gap-4" onSubmit={CreateProduct}>
          
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Nome do Produto</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

             
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Marca</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Dias de validade</label>
                  <input
                    type="number"
                    value={default_Days}
                    onChange={(e) => setdefault_Days(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

             
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 mb-1">Temperatura de Armazenamento</label>
                <select
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="">Escolha</option>
                  <option value="-18">-18°C (Congelamento seguro)</option>
                  <option value="-8">-8°C (Câmara fria)</option>
                  <option value="0">0°C (Próximo ao congelamento)</option>
                  <option value="4">4°C (Geladeira comum)</option>
                </select>
              </div>

       
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-gray-700 mb-1">Tipo de Embalagem</label>
                  <select
                    value={packaging}
                    onChange={(e) => setPackaging(e.target.value)}
                    className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Escolha</option>
                    <option value="vacou">Embalagem a Vácuo</option>
                    <option value="plastico">Plástico comum</option>
                    <option value="papel">Papel filme</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 rounded-3xl hover:bg-red-700 transition-colors mt-4"
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
