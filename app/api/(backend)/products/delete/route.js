import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {Id_product, userId} = await req.json();

    if(!Id_product || !userId){
        return NextResponse.json({message:"Erro ao deletar produto"})
    }

    const deleted = Database.DeleteProduct(Id_product, userId);
    if(deleted){ 
        return NextResponse.json({message:'Produto deletado com sucesso', produto:deleted})
    }
    return NextResponse.json({message:"Erro ao deletar produto"})
 }