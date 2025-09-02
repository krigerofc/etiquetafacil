import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req){
    const data = await req.json();

    if(!data.userId) return NextResponse.json({Message:'error ao encontrar produtos', success:false})

    const products = await Database.Search_all_products(data.userId);
    if (!products) return NextResponse.json({Message:'error ao encontrar produtos', success:false})

    console.log(products)
    return NextResponse.json({products:products, success:true})
}