'use client';
import { MdDeleteForever, MdEdit } from "react-icons/md";

export default function ProductTable({ products, setDeleteItem, setEditItem }) {
  const titles = ["ID","Nome","Responsável","Marca","Dias de vencimento","Temperatura","Criação","Editar","Deletar"];

  return (
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead className="bg-red-500 text-white">
        <tr>
          {titles.map((title, i) => (
            <th key={i} className="text-left px-4 py-3 font-medium text-sm uppercase tracking-wider">{title}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {products.map(p => (
          <tr key={p.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-2 max-w-[60px] truncate">{p.id}</td>
            <td className="px-4 py-2 max-w-[150px] truncate">{p.name}</td>
            <td className="px-4 py-2 max-w-[120px] truncate">{p.responsible}</td>
            <td className="px-4 py-2 max-w-[120px] truncate">{p.brand}</td>
            <td className="px-4 py-2 max-w-[100px] truncate">{p.default_Days}</td>
            <td className="px-4 py-2 max-w-[100px] truncate">{p.temperature}</td>
            <td className="px-4 py-2 max-w-[140px] truncate">{p.createdAt}</td>
            <td className="px-4 py-2">
              <button className="flex items-center justify-center w-full px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setEditItem(p)}>
                <MdEdit size={18} />
              </button>
            </td>
            <td className="px-4 py-2">
              <button className="flex items-center justify-center w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={() => setDeleteItem(p)}>
                <MdDeleteForever size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
