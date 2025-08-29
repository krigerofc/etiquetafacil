    import { Database } from "@/Backend/models/Database";
    import { NextResponse } from "next/server";

    export async function POST(request) {
        try{
            const { email, password, confirmpassword, cnpj, name} = await request.json();
            
            const bcrypt = require('bcrypt');
            const email_verify = email.toLowerCase();
            const hashedPassword = await bcrypt.hash(password, 10);

            // validation

            if(!email || !password || !confirmpassword || !cnpj || !name){
                return NextResponse.json({ Message: "Preencha todos os campos!", success:false});}
            if( password != confirmpassword){
                return NextResponse.json({ Message: "Verifique sua senha!", success:false });}
            if (!/\S+@\S+\.\S+/.test(email_verify)) {
                return NextResponse.json({ Message: "Email inválido!", status: 400 });}
            if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
                return NextResponse.json({ Message: "Senha fraca! Use ao menos 8 caracteres, letras maiúsculas, minúsculas e números.", success:false });}
            if (name.length < 3 || name.length > 50) {
                return NextResponse.json({ Message: "Nome deve ter entre 3 e 50 caracteres.", success:false });}
            if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
                return NextResponse.json({ Message: "Nome contém caracteres inválidos.", success:false });}

            const cnpjNumbers = cnpj.replace(/\D/g, "");
            if (!cnpj || cnpjNumbers.length !== 14) {
                return NextResponse.json({ Message: "CNPJ inválido!", success:false });}

            const existingUser = await Database.FindUser(email.toLowerCase())
            const existinCnpj = await Database.FindCnpj(cnpj)
            if(existingUser){ return NextResponse.json({ message: "Email já cadastrado", success:false }) }
            if(existinCnpj){ return NextResponse.json({ message: "Cnpj já cadastrado", success:false}) }

            const user = await Database.CreateUser({
                email: email.toLowerCase(),
                password: hashedPassword,
                cnpj: cnpj,
                name: name.toLowerCase()
            });

            return NextResponse.json({ message: "Usuário registrado com sucesso!", success: true, user});
        } catch(error){
            return NextResponse.json({ message: error });
        }
    }