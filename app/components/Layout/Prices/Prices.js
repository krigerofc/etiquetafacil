import Link from "next/link";

export default function Prices(){
    return(
        <>
        <section className="bg-red-500 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-4">Planos do ETIQUETAFÁCIL</h2>
            <p className="text-lg mb-12">Automatize suas etiquetas e ganhe tempo no dia a dia. Segurança, praticidade e controle em um só lugar.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Básico</h3>
                <p className="mb-6">Para quem está começando e precisa de algo simples.</p>
                <ul className="space-y-3 text-left text-sm">
                <li>✔️ Até 200 etiquetas/mês</li>
                <li>✔️ Etiqueta inteligente</li>
                <li>✔️ Modelos prontos</li>
                <li>✔️ Alerta de vencimento</li>
                <li>✔️ Acesso via navegador</li>
                <li>✔️ Suporte por e-mail, whatsapp</li>
                <li>✔️ Conformidade com normas da ANVISA</li>
                <li>❌ Atualizações automáticas do sistema</li>
                <li>❌ Monitoramento em tempo real</li>
                <li>❌ Backup automático de dados</li>
                <li>❌ Treinamento personalizado para equipes</li>
                <li>❌ Controle de produção</li>
                <li>❌ Suporte técnico dedicado</li>
                <li>❌ Suporte via chat em horário comercial</li>
                </ul>
                <p className="text-3xl font-bold mt-6 mb-4">R$79,99/mês</p>
                <Link href="/" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                Assinar
                </Link>
            </div>


            <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 border-4 border-red-500 hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Profissional</h3>
                <p className="mb-6">Para quem imprime etiquetas com frequência e quer mais controle.</p>
                <ul className="space-y-3 text-left text-sm">
                <li>✔️ Até 1500 etiquetas/mês</li>
                <li>✔️ Etiqueta inteligente</li>
                <li>✔️ Modelos prontos</li>
                <li>✔️ Alertas de vencimento</li>
                <li>✔️ Acesso via navegador</li>
                <li>✔️ Atualizações automáticas do sistema</li>
                <li>✔️ Controle de produção</li>
                <li>✔️ Suporte 24/7</li>
                <li>✔️ Suporte por e-mail, whatsapp</li>
                <li>✔️ Conformidade com normas da ANVISA</li>
                <li>❌ Monitoramento em tempo real</li>
                <li>❌ Backup automático de dados</li>
                <li>❌ Treinamento personalizado para equipes</li>
                <li>❌ Suporte técnico dedicado</li>
                </ul>
                <p className="text-3xl font-bold mt-6 mb-4">R$129,99/mês</p>
                <Link href="/" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                Assinar
                </Link>
            </div>

        
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Empresarial</h3>
                <p className="mb-6">Para grandes operações que exigem automação total.</p>
                <ul className="space-y-3 text-left text-sm">
                <li>✔️ sem limite etiquetas/mês</li>
                <li>✔️ Etiqueta inteligente</li>
                <li>✔️ Modelos persoanlizados</li>
                <li>✔️ Alertas de vencimento</li>
                <li>✔️ Acesso via navegador</li>
                <li>✔️ Atualizações automáticas do sistema</li>
                <li>✔️ Controle de produção</li>
                <li>✔️ Suporte 24/7</li>
                <li>✔️ Suporte por e-mail, whatsapp</li>
                <li>✔️ Conformidade com normas da ANVISA</li>
                <li>✔️ Monitoramento em tempo real</li>
                <li>✔️ Backup automático de dados</li>
                <li>✔️ Treinamento personalizado para equipes</li>
                <li>✔️ Suporte técnico dedicado</li>
                </ul>
                <p className="text-3xl font-bold mt-6 mb-4">R$259,99/mês</p>
                <Link href="/" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                Assinar
                </Link>
            </div>
            </div>
        </div>
        </section>
        </>
    );
}