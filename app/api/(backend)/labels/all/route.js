import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const { userId } = await req.json();

        if(!userId){
            return NextResponse.json({message:'Erro ao consultar'})
        }

        const labels = await Database.Search_Labels(userId);
        
        if (!labels || labels.length === 0) {
            return NextResponse.json({ message: "Nenhuma etiqueta encontrada" , status: 404 });
        }

        return NextResponse.json({labels})
    } catch (error){
        return NextResponse.json({ message: "Erro ao consultar etiquetas", error: error.message, status: 500 });
    }
}