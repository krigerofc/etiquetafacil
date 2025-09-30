'use client'

import Database from "@/Backend/models/Database";
import { useSession } from "next-auth/react";

    export default function Etiqueta({ labelproducts }) {

        const {data: session, status} = useSession();
        const address = `${session.user.address}, ${session.user.zipCode}, ${session.user.state}`

        const date_now = new Date();
        const result_days = new Date(date_now);
        result_days.setDate(result_days.getDate() + labelproducts.default_Days);


        const infoEtiqueta = {
        produto: labelproducts.name,
        tipo: labelproducts.description,
        validadeOriginal: "22/06/2024",
        manipulacao: `${date_now.toLocaleDateString('pt-br')} : ${date_now.toLocaleTimeString('pt-br')} `,
        validadeFinal: `${result_days.toLocaleDateString('pt-br')} : ${result_days.toLocaleTimeString('pt-br')} `,
        marca: labelproducts.brand,
        //sif: "2845",
        responsavel: labelproducts.responsible,
        empresa: {
            nome: session.user.name,
            phone: session.user.phone,
            cnpj: session.user.cnpj,
            endereco: address,
            cidade: session.user.city
        },
        referencia: labelproducts.id,
        };

    return (
        <div className="w-[500px] p-6 border border-black bg-white font-sans text-gray-900 shadow-md space-y-1">
        
        {/* Cabeçalho do produto */}
        <header className="text-base max-w-[450px]">
            <h1 className="text-xl font-bold uppercase">{infoEtiqueta.produto}</h1>
            <p className="text-sm text-gray-700">{infoEtiqueta.tipo}</p>
        </header>

        <hr className="border-t-2 border-black" />

        {/* Informações principais */}
        <section className="space-y-0 text-left text-base max-w-[450px]">
            {/*<p><strong>Val. Original:</strong> 22/06/2024</p>*/}
            <p><strong>Manipulação:</strong> {infoEtiqueta.manipulacao} </p>
            <p><strong>Validade:</strong> {infoEtiqueta.validadeFinal} </p>
            <p><strong>Marca / Forn:</strong> {infoEtiqueta.marca} </p>
        </section>

        <hr className="border-t-2 border-black" />

        {/* Responsável */}
        <section className="text-base max-w-[450px]">
            <p className="font-medium"><strong>Resp.:</strong> {infoEtiqueta.responsavel}</p>
            <p><strong>Phone:</strong> { infoEtiqueta.empresa.phone }</p>
            <p><strong>CNPJ:</strong> { infoEtiqueta.empresa.cnpj } </p>
            <p className="text-m leading-tight"><strong>Endereço:</strong> { address} </p>
        </section>

        {/* Código de referência */}
        <footer>
            <p className="text-base font-mono text-gray-700 font-bold max-w-[450px]">ID:{infoEtiqueta.referencia}</p>
        </footer>
        </div>
    );
    }
