    export default function Etiqueta() {
        const infoEtiqueta = {
        produto: "RIGATONI",
        tipo: "COZIDO / RESFRIADO",
        validadeOriginal: "22/06/2024",
        manipulacao: "10/07/2024 - 14:18:07",
        validadeFinal: "17/07/2024",
        marca: "DE CECCO",
        sif: "2845",
        responsavel: "EDUARDO",
        empresa: {
            nome: "DELICIAS CASEIRAS",
            cnpj: "41.093768/0001-62",
            endereco: "RUA DO MERCADO, 60",
            cidade: "PORTO ALEGRE - RS"
        },
        referencia: "#F7201A",
        qrCodeUrl: "https://example.com"
        };

    return (
        <div className="w-[300px] p-4 border border-black bg-white font-sans text-gray-900 shadow-md space-y-1">
        
        {/* Cabeçalho do produto */}
        <header className="text">
            <h1 className="text-xl font-bold uppercase">{infoEtiqueta.produto}</h1>
            <p className="text-sm text-gray-700">{infoEtiqueta.tipo}</p>
        </header>

        <hr className="border-t-2 border-black" />

        {/* Informações principais */}
        <section className="text-sm space-y-0">
            <p><strong>Val. Original:</strong> 22/06/2024</p>
            <p><strong>Manipulação:</strong> 10/07/2024 - 14:18:07</p>
            <p><strong>Validade:</strong> 17/07/2024</p>
            <p><strong>Marca / Forn:</strong> DE CECCO</p>
        </section>

        <hr className="border-t-2 border-black" />

        {/* Responsável */}
        <section className="text-sm">
            <p><strong>Resp.:</strong> EDUARDO</p>
            <p><strong>Phone:</strong> EDUARDO</p>
            <p><strong>CNPJ:</strong> 41.093768/0001-62</p>
            <p className="text-sm leading-tight w-[260px]"><strong>Endereço:</strong> DELICIAS CASEIRAS— RUA DO MERCADO, 60 — PORTO ALEGRE - RS</p>
        </section>

        {/* Código de referência */}
        <footer>
            <p className="text-sm text-center font-mono text-gray-700">id</p>
        </footer>
        </div>
    );
    }
