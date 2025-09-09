'use client';
import { MdDeleteForever, MdEdit } from "react-icons/md";

export default function ProductCard({ product, setDeleteItem, setEditItem }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
      <div><span className="font-semibold">ID:</span> {product.id}</div>
      <div><span className="font-semibold">Nome:</span> {product.name}</div>
      <div><span className="font-semibold">Responsável:</span> {product.responsible}</div>
      <div><span className="font-semibold">Marca:</span> {product.brand}</div>
      <div><span className="font-semibold">Dias de vencimento:</span> {product.default_Days}</div>
      <div><span className="font-semibold">Temperatura:</span> {product.temperature}</div>
      <div><span className="font-semibold">Criação:</span> {product.createdAt}</div>
      <div className="flex gap-2 mt-2">
        <button className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setEditItem(product)}>
          <MdEdit size={18} />
        </button>
        <button className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={() => setDeleteItem(product)}>
          <MdDeleteForever size={18} />
        </button>
      </div>
    </div>
  );
}
