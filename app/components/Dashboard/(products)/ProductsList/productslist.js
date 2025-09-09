'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";

import ProductTable from "./ProductTable";
import ProductCard from "./ProductCard";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function ProductsList({ products }) {
  const { data: session } = useSession();
  const [query, setQuery] = useState('');
  const [productList, setProductList] = useState(products || []);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => setProductList(products), [products]);

  function handleSearch(e) {
    setQuery(e);
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(e.toLowerCase())
    );
    setProductList(filtered);
  }

  async function handleDelete(product) {
    const res = await fetch('/api/products/delete', {
      method:'POST',
      body: JSON.stringify({ Id_product: product.id, userId: session.user.id }),
    });

    if(res.ok) {
      setProductList(productList.filter(p => p.id !== product.id));
      setDeleteItem(null);
    } else {
      console.log('Erro ao deletar');
    }
  }

  return (
    <div className="w-full">
      <div className="m-4 w-full h-15 my-10 rounded-4xl">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-red-500 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-sm transition-all duration-200"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 text-lg" />
        </div>
      </div>

      <div className="hidden md:block">
        <ProductTable products={productList} setDeleteItem={setDeleteItem} setEditItem={setEditItem} />
      </div>
      <div className="md:hidden flex flex-col gap-4">
        {productList.map(p => (
          <ProductCard key={p.id} product={p} setDeleteItem={setDeleteItem} setEditItem={setEditItem} />
        ))}
      </div>

      {deleteItem && <DeleteModal product={deleteItem} onCancel={() => setDeleteItem(null)} onConfirm={() => handleDelete(deleteItem)} />}
      {editItem && <EditModal product={editItem} onClose={() => setEditItem(null)} onUpdate={(updated) => {
        setProductList(productList.map(p => p.id === updated.id ? updated : p));
        setEditItem(null);
      }} />}
    </div>
  );
}
