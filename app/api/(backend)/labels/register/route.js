import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const { userId, Products, amount } = await req.json();
        let state = false;

        if(!userId || !Products || !amount){
            return NextResponse.json({Message:"ERROR, Informações faltando.",});
        }

        const IntAmount = parseInt(amount);
        const data_now = new Date();
        
        const resultados = [];


    for (const p of Products) {
      try {
        const result_days = new Date(data_now);
        result_days.setDate(result_days.getDate() + p.default_Days);

        const label = await Database.CreateLabel(userId, p.id, p.name,  IntAmount, result_days,"Good" );

        if (!label) {
          resultados.push({ produtoId: p.id, status: "erro", motivo: "Falha ao criar etiqueta" });
        } else {
          resultados.push({ produtoId: p.id, status: "ok" });
          state = true;
        }
      } catch (error) {
        resultados.push({ produtoId: p.id, status: "erro", motivo: error.message });
      }
    }
    if(state === true){
        return NextResponse.json({ Message: "Processamento concluído",});
    } else{
        return NextResponse.json({ Message: "Erro, alguma coisa está faltando.",});
    }
  } catch (error) {
    return NextResponse.json({ Message: "Erro interno", ERROR: error.message }, { status: 500 });
  }
}