"use client";
import { useState } from "react";
import { FaReceipt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {

  const router = useRouter();
  // system
  const [Menu, SetMenu] = useState(0);
  const [Status, SetStatus] = useState("");
  const [StatusType, SetStatusType] = useState("");

  // login
  const [Email, SetEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  // register
  const [ConfirmPassword, SetConfirmPassword] = useState("");
  const [Cnpj, SetCnpj] = useState("");
  const [Name, SetName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!Email || !Password) {
      SetStatus("Preencha todos os campos!");
      setTimeout(() => SetStatus(""), 4000);
      SetStatusType("");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email: Email,
      password: Password
    });

    if(res.ok){
      router.push("/dashboard")
      SetStatus("Login feito com sucesso!");
      setTimeout(() => SetStatus("success"), 4000);
      SetStatusType("");
    } else {
      SetStatus("E-mail ou senha inválidos.");
      setTimeout(() => SetStatus(""), 4000);
      SetStatusType("");
    }
  }

  async function Register(e) {
    e.preventDefault();

    if (!Email || !Password || !Cnpj || !Name || !ConfirmPassword) {
      SetStatus("Preencha todos os campos!");
      setTimeout(() => SetStatus(""), 4000);
      SetStatusType("");
      return;
    }

      if( Password != ConfirmPassword){
        SetStatus("Verifique sua senha!");
        setTimeout(() => SetStatus(""), 4000);
        SetStatusType("");
        return;
      }

    const res = await fetch("/api/register",{
      method: "POST",
      body: JSON.stringify({ 
        email: Email, 
        password: Password,
        confirmpassword: ConfirmPassword,
        cnpj: Cnpj,
        name: Name,
      }),
    });

    const data = await res.json();

    if (res.ok){
      if(data.success == true){
        SetStatus("Conta criada com sucesso!");
        SetStatusType("success");
        setTimeout(() => SetStatus(""), 4000);
        SetMenu(0)
      }
      if(data.success == false){
        SetStatus(data.message);
        SetStatusType("");
        setTimeout(() => SetStatus(""), 4000);
      }
    } else{
      console.log("ERROR: ERROR IN RESPONSE")
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Feedback */}
      {Status && (
        <div className={`fixed left-4 bottom-4 px-6 py-3 rounded-lg shadow-lg animate-fadeIn z-50 text-sm max-w-xs w-full
          ${StatusType === "success"
            ? "bg-green-100 border border-green-400 text-green-700"
            : "bg-red-100 border border-red-400 text-red-700"
          }`}>
          {Status}
        </div>
      )}

      {/* Formulário */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-8 px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md space-y-6">
          <div className="flex items-center gap-3 justify-center mb-6">
            <FaReceipt size={32} className="text-red-500" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-red-500 tracking-wide">
              EtiquetaFácil
            </h1>
          </div>


          <div>
            {Menu === 0 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  onChange={e => SetEmail(e.target.value)}
                  value={Email}
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <input
                  onChange={e => setPassword(e.target.value)}
                  value={Password}
                  type="password"
                  placeholder="Senha"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white rounded-xl py-3 font-semibold text-lg hover:bg-red-600 shadow-md transition-transform transform hover:scale-105 w-full"
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="text-red-500 font-medium hover:underline mt-2"
                  onClick={() => SetMenu(1)}
                >
                  Não tem conta? Cadastre-se
                </button>
              </form>
            )}

            
            {Menu === 1 && (
              <form onSubmit={Register} className="flex flex-col gap-4">
                <input
                  onChange={e => SetName(e.target.value)}
                  value={Name}
                  type="text"
                  placeholder="Empresa"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <input
                  onChange={e => SetCnpj(e.target.value)}
                  value={Cnpj}
                  type="text"
                  placeholder="CNPJ"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <input
                  onChange={e => SetEmail(e.target.value)}
                  value={Email}
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <input
                  onChange={e => setPassword(e.target.value)}
                  value={Password}
                  type="password"
                  placeholder="Senha"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <input
                  onChange={e => SetConfirmPassword(e.target.value)}
                  value={ConfirmPassword}
                  type="password"
                  placeholder="Confirmar senha"
                  className="border border-gray-300 rounded-xl p-3 sm:p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition w-full"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white rounded-xl py-3 font-semibold text-lg hover:bg-red-600 shadow-md transition-transform transform hover:scale-105 w-full"
                >
                  Registrar
                </button>
                <button
                  type="button"
                  className="text-gray-500 font-medium hover:underline mt-2"
                  onClick={() => SetMenu(0)}
                >
                  Já tenho conta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Lateral decorativa */}
      <div className="flex-1 hidden md:flex flex-col items-center justify-center bg-red-500 relative overflow-hidden rounded-l-2xl">
        <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-red-400 rounded-full -top-10 -right-10 sm:-top-16 sm:-right-16 opacity-30 animate-pulse"></div>
        <div className="absolute w-60 h-60 sm:w-96 sm:h-96 bg-red-600 rounded-full -bottom-10 -left-10 sm:-bottom-20 sm:-left-24 opacity-20 animate-pulse"></div>
        <div className="z-10 text-center animate-fadeIn px-4">
          <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-wider">
            Bem-vindo ao EtiquetaFácil!
          </h2>
          <p className="text-white/80 text-sm mt-2 animate-bounce">
            Seu sistema de etiquetas inteligente
          </p>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}