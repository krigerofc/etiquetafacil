'use client';

import { useSession } from "next-auth/react";
import { FaUserCircle, FaCog } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-full bg-gray-50 rounded-lg shadow-sm p-4 text-gray-500">
        Carregando perfil...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="w-full bg-gray-50 rounded-lg shadow-sm p-4 text-red-500">
        Acesso negado
      </div>
    );
  }

  return (
    <Link href="/Dashboard/Profile" className="block w-full">
      <div className="w-full bg-gray-50 rounded-lg shadow-sm p-4 flex items-center justify-between hover:bg-gray-100 transition-all cursor-pointer">
        {/* Avatar + Dados */}
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-red-500" size={48} />
          <div className="flex flex-col">
            <h1 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
              {session.user.name || "TESTETECH LTDA"}
            </h1>
            <p className="text-sm text-gray-500">
              {session.user.cnpj || "00.000.000/0001-91"}
            </p>
          </div>
        </div>

        {/* Ícone de engrenagem */}
        <FaCog className="text-red-500" size={22} />
      </div>
    </Link>
  );
}
