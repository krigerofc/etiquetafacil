'use client';

export default function DeleteModal({ product, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Confirmar exclusão</h2>
        <p className="mb-6">
          Tem certeza que deseja deletar o produto <span className="font-bold uppercase">{product.name}</span>?
        </p>
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400" onClick={onCancel}>Cancelar</button>
          <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600" onClick={onConfirm}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
