import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const { userId } = await req.json(); 

        if(!userId){
            return NextResponse.json({ message:"error in userId", success:false })
        }
        
        const {productsCount, labelCount, labelCount_today} = await Database.DashboardData(userId);

        if(!userId) return NextResponse.json({ message:"error in DB", success:false })

        return NextResponse.json({productsCount, labelCount, labelCount_today, success:true})   
    } catch(err){
        return NextResponse.json({ success: false, message: "Internal Server Error", status: 500 });
    }
}