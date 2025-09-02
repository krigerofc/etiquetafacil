import { NextResponse } from "next/server";
import Database from "@/Backend/models/Database";

export async function POST(req) {
    try{
    const {name, description, responsible, brand, temperature, default_Days, userId} = await req.json();

    if(!name || !description || !responsible || !brand || !temperature  || !default_Days || !userId){
        return NextResponse.json({Message: "Preencha todas as informações.", success: false})
    }

    if(isNaN(default_Days) || default_Days <= 0){
        return NextResponse.json({Message: 'Dis de validade inválidos', success: false})
    }

    if(name.length > 100 || description.length > 200 || brand.length > 50 || responsible.length > 50){
    return NextResponse.json({Message: "Algum campo excede o tamanho permitido.", success: false});
    }

    const product = Database.CreateProduct({
        name: name,
        description: description,
        responsible: responsible,
        brand: brand,
        temperature: temperature,
        default_Days: default_Days,
        userId: userId})

    if (product){
        return NextResponse.json({message: "Produto criado com sucesso!", success: true})
    }

    return NextResponse.json({message: "Erro ao criar produto!", success: false})
    } catch(error){
        return NextResponse.json({Message: error.message , success: false})
    }
}