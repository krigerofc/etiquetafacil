export default function Statistic(){
    return(
        <>
        <div className="bg-red-500 w-full h-64 text-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide p-8 text-amber-300">Confiança que se espalha pelo brasil</h1>
            <div className="flex justify-center items-center flex-row space-x-10 mt-4">
                <div>
                    <p className="text-5xl text-white font-extrabold">+15 MIL</p>
                    <p className="text-3xl text-white font-medium lowercase">Profissionais usam diariamente</p>
                </div>
                <div>
                    <p className="text-5xl text-white font-extrabold">+215 MIL</p>
                    <p className="text-3xl text-white font-medium lowercase">Produtos controlados</p>
                </div>
            </div>
        </div>
        </>
    );
}