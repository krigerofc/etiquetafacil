import { ProductDatabase } from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
    const {name, description, responsible, brand, temperature, packaging, default_Days} = await req.json();

    if(!name || !description || !responsible || !brand || !temperature || !packaging || !default_Days){
        return NextResponse.json({Message: "Preencha todas as informações.", success: false})
    }

    if(isNaN(default_Days) || default_Days <= 0){
        return NextResponse.json({Message: 'Dis de validade inválidos', success: false})
    }

    if(name.length > 100 || description.length > 200 || brand.length > 50 || responsible.length > 50){
    return NextResponse.json({Message: "Algum campo excede o tamanho permitido.", success: false});
    }

    const product = ProductDatabase.CreateProduct({
        name: name,
        description: description,
        responsible: responsible,
        brand: brand,
        temperature: temperature,
        packaging: packaging,
        default_Days: default_Days})

    if (product){
        return NextResponse.json({message: "Produto criado com sucesso!", success: true})
    }

    return NextResponse.json({message: "Erro ao criar produto!", success: false})
    } catch(error){
        return NextResponse.json({Message: error.message , success: false})
    }
}