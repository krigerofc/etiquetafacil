'use client'

import ConfigLabel from "@/app/components/Dashboard/(products)/Label/ConfiguraçãoEtiqueta";
import PainelEtiquetasRecentes from "@/app/components/Dashboard/(products)/Label/EtiquetasRecentes";
import SelectProduct from "@/app/components/Dashboard/(products)/Label/selectLabel";
import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import LoadingScreen from "@/app/components/default/LoadingScreen/Loading";
import { Providers } from "@/app/providers";
import { useSession } from "next-auth/react";
import { useEffect, useId, useState } from "react";

export default function LabelPage() {

  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const {data: session, status} = useSession();

  async function ConfirmPrint(){

  }

useEffect(() => {
  async function Get_products() {
    try {
      const res = await fetch("/api/products/search", {
        method: "POST",
        body: JSON.stringify({ userId: session.user.id }),
      });
      const data = await res.json();
      if (data.success) {
        setProdutosDisponiveis(data.products);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log('ok');
    }
  }

  if (session) Get_products();
}, [session]);

  if (!session) return;
  if (status === "loading") return <LoadingScreen/>;
  

  return (
    <Providers>
      <div className="flex min-h-screen">
        <NavDash />

        <div className="w-full flex flex-col gap-2 p-6">

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <ConfigLabel Print={ConfirmPrint}/>
            </div>
            <div className="md:w-2/3">
              <PainelEtiquetasRecentes/>
            </div>
          </div>

          <SelectProduct produtos={produtosDisponiveis} onSelecionadosChange={setProdutosSelecionados}/>
        </div>
      </div>
    </Providers>
  );
}
