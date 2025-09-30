'use client'

import ConfigLabel from "@/app/components/Dashboard/(label)/Label/ConfiguraçãoEtiqueta";
import PainelEtiquetasRecentes from "@/app/components/Dashboard/(label)/Label/EtiquetasRecentes";
import Etiqueta from "@/app/components/Dashboard/(label)/Label/label";
import SelectProduct from "@/app/components/Dashboard/(label)/Label/selectLabel";
import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import LoadingScreen from "@/app/components/default/LoadingScreen/Loading";


import { useReactToPrint } from "react-to-print";
import { Providers } from "@/app/providers";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Feedback from "@/app/components/Config/FeedBack/feedback";


export default function LabelPage() {

  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const {data: session, status} = useSession();

  const contentRef = useRef(null);
  const PrintLabel = useReactToPrint({ contentRef })
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  function teste(){
    
    if(session.user.phone == null || session.user.address == null){
       return setFeedback({ message: "Preencha todos os dados do usuario em configurações", type: "error" });
    }
    PrintLabel();
    ConfirmPrint();
  }


async function ConfirmPrint(config) {

  const res = await fetch('/api/labels/register', {
    method:"POST",
    body:JSON.stringify({
      userId:session.user.id,
      Products:produtosSelecionados,
      amount:config.quantidade
    })
  });


  const data = await res.json();
  
  if(data){
    console.log(data)
  } else{
    console.log("Deu errado")
  }
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
      <Feedback message={feedback.message} type={feedback.type} />
      <div className="flex min-h-screen">
        <NavDash />

        <div className="w-full flex flex-col gap-2 p-6">

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <ConfigLabel Print={() => {teste()}}/>
            </div>
            <div className="md:w-2/3">
              <PainelEtiquetasRecentes/>
            </div>
          </div>

          <SelectProduct produtos={produtosDisponiveis} onSelecionadosChange={setProdutosSelecionados}/>
          <div className="overflow-hidden hidden bg-amber-500">
            <div ref={ contentRef } className="flex justify-center items-center w-full h-screen"> {produtosSelecionados.map((p, i) => (
              <Etiqueta 
              labelproducts={p}
              key={i}/>
            ))} </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}
