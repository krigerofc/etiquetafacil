'use client';
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function EditModal({ product, onClose, onUpdate }) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [responsible, setResponsible] = useState(product.responsible);
  const [brand, setBrand] = useState(product.brand);
  const [temperature, setTemperature] = useState(product.temperature);
  const [default_Days, setDefault_Days] = useState(product.default_Days);
  const [feedback, setFeedback] = useState(null);

  const { data: session } = useSession();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/products/update', {
        method:'POST',
        body: JSON.stringify({ 
            id: product.id, 
            name:name, 
            description:description, 
            responsible: responsible, 
            brand: brand, 
            temperature: temperature, 
            default_Days: default_Days, 
            userId: session.user.id}),
      });
      const data = await res.json();
      if(res.ok) {
        onUpdate(data.product);
        setFeedback({ type: 'success', message: 'Produto atualizado com sucesso!' });
      } else {
        setFeedback({ type: 'error', message: 'Erro ao atualizar o produto.' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: 'Erro na requisição.' });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 sm:p-6">
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] animate-fadeIn">
        
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition text-3xl font-bold"
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        <h2 className="text-3xl font-extrabold text-red-500 mb-6 text-center sm:text-left">
          Editar Produto
        </h2>

        {feedback && (
          <div className={`mt-2 p-4 rounded-xl font-semibold text-white flex items-center gap-2 justify-center sm:justify-start transition-colors
            ${feedback.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {feedback.message}
          </div>
        )}

        <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Nome do Produto" 
              className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm"
              required
            />
            <input 
              type="text" 
              value={responsible} 
              onChange={(e) => setResponsible(e.target.value)} 
              placeholder="Responsável" 
              className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              value={brand} 
              onChange={(e) => setBrand(e.target.value)} 
              placeholder="Marca" 
              className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm"
              required
            />
            <input 
              type="number" 
              value={default_Days} 
              onChange={(e) => setDefault_Days(e.target.value)} 
              placeholder="Dias de validade" 
              className="flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm"
              required
            />
          </div>

          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Descrição" 
            className="border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm resize-none"
            rows={4} 
            required
          />

          <select 
            value={temperature} 
            onChange={(e) => setTemperature(e.target.value)} 
            className="border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow shadow-sm"
            required
          >
            <option value="">Escolha a temperatura</option>
            <option value="-18">-18°C (Congelamento seguro)</option>
            <option value="-8">-8°C (Câmara fria)</option>
            <option value="0">0°C (Próximo ao congelamento)</option>
            <option value="4">4°C (Geladeira comum)</option>
          </select>

          <button 
            type="submit" 
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-3xl text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Atualizar Produto
          </button>
        </form>
      </div>
    </div>
  );
}
