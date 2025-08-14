export default function Statistic() {
  return (
    <div className="bg-red-500 w-full py-10 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-amber-300 mb-8">
        Confiança que se espalha pelo brasil
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <p className="text-4xl md:text-5xl text-white font-extrabold">+15 MIL</p>
          <p className="text-xl md:text-3xl text-white font-medium lowercase">
            Profissionais usam diariamente
          </p>
        </div>
        
        <div>
          <p className="text-4xl md:text-5xl text-white font-extrabold">+215 MIL</p>
          <p className="text-xl md:text-3xl text-white font-medium lowercase">
            Produtos controlados
          </p>
        </div>
      </div>
    </div>
  );
}
