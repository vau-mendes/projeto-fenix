export default function Configuracoes() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Configurações
      </h1>

      <p className="mt-3 text-gray-400">
        Ajuste seu concurso, cargo, metas e preferências.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#15171d] p-6">
        <p className="text-gray-300">Concurso atual: PCPR 2026</p>
        <p className="mt-3 text-gray-300">Cargo: Delegado de Polícia</p>
      </div>
    </main>
  );
}