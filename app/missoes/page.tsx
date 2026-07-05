export default function Missoes() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Missões <span className="text-yellow-400">Fênix</span>
      </h1>

      <p className="mt-3 text-gray-400">
        Aqui ficarão suas missões diárias de estudo.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#15171d] p-6">
        <h2 className="text-2xl font-bold text-yellow-400">
          Missão de Hoje
        </h2>

        <div className="mt-6 space-y-4 text-gray-300">
          <p>☐ Processo Penal — Prisão Preventiva</p>
          <p>☐ Direito Penal — Crimes contra a Administração</p>
          <p>☐ Constitucional — Segurança Pública</p>
          <p>☐ 20 questões objetivas</p>
        </div>
      </div>
    </main>
  );
}