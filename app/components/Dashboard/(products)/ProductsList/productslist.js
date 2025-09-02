"use client";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export default function ProductsList({ products }) {
  const Tittles = [
    "ID",
    "Nome",
    "Responsável",
    "Marca",
    "Dias de vencimento",
    "Temperatura",
    "Criação",
    "Editar",
    "Deletar",
  ];

  function DeleteProduct(product) {}
  function EditProduct(product) {}

  return (
    <div className="w-full">
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-red-500 text-white">
            <tr>
              {Tittles.map((item, t) => (
                <th
                  key={t}
                  className="text-left px-4 py-3 font-medium text-sm uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products?.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 max-w-[60px] truncate" title={p.id}>
                  {p.id}
                </td>
                <td className="px-4 py-2 max-w-[150px] truncate" title={p.name}>
                  {p.name}
                </td>
                <td
                  className="px-4 py-2 max-w-[120px] truncate"
                  title={p.responsible}
                >
                  {p.responsible}
                </td>
                <td className="px-4 py-2 max-w-[120px] truncate" title={p.brand}>
                  {p.brand}
                </td>
                <td
                  className="px-4 py-2 max-w-[100px] truncate"
                  title={p.default_Days}
                >
                  {p.default_Days}
                </td>
                <td
                  className="px-4 py-2 max-w-[100px] truncate"
                  title={p.temperature}
                >
                  {p.temperature}
                </td>
                <td
                  className="px-4 py-2 max-w-[140px] truncate"
                  title={p.createdAt}
                >
                  {p.createdAt}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="flex items-center justify-center w-full px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={() => EditProduct(p)}
                  >
                    <MdEdit size={18} />
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="flex items-center justify-center w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => DeleteProduct(p)}
                  >
                    <MdDeleteForever size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col gap-4">
        {products?.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2"
          >
            <div>
              <span className="font-semibold">ID:</span> {p.id}
            </div>
            <div>
              <span className="font-semibold">Nome:</span> {p.name}
            </div>
            <div>
              <span className="font-semibold">Responsável:</span> {p.responsible}
            </div>
            <div>
              <span className="font-semibold">Marca:</span> {p.brand}
            </div>
            <div>
              <span className="font-semibold">Dias de vencimento:</span>{" "}
              {p.default_Days}
            </div>
            <div>
              <span className="font-semibold">Temperatura:</span> {p.temperature}
            </div>
            <div>
              <span className="font-semibold">Criação:</span> {p.createdAt}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => EditProduct(p)}
              >
                <MdEdit size={18} />
              </button>
              <button
                className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => DeleteProduct(p)}
              >
                <MdDeleteForever size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
