import Database from "@/Backend/models/Database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, name, description, responsible, brand, temperature, default_Days, userId } = await req.json();

    if (!id || !name || !description || !responsible || !brand || !temperature || !default_Days || !userId) {
      return NextResponse.json({ type: "error", message: "Erro ao atualizar o produto. Dados incompletos." }, { status: 400 });
    }

    const updated = await Database.EditProduct(
      id,
      name,
      description,
      responsible,
      brand,
      temperature,
      default_Days,
      userId
    );

    if (!updated) {
      return NextResponse.json({ type: "error", message: "Erro ao atualizar o produto." }, { status: 400 });
    }
    return NextResponse.json({ type: "success", message: "Produto atualizado com sucesso!", product: updated });
  } catch (err) {
    return NextResponse.json({ type: "error", message: err.message }, { status: 500 });
  }
}
