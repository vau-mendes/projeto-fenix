export default function MissionToday() {
  const itens = [
    "Processo Penal — Prisão Preventiva",
    "Direito Penal — Crimes contra a Administração",
    "Constitucional — Segurança Pública",
    "20 questões objetivas",
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-yellow-400">
          Missão de Hoje
        </h2>

        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
          2h estimadas
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {itens.map((item) => (
          <label key={item} className="flex items-center gap-3 text-gray-300">
            <input type="checkbox" className="h-4 w-4" />
            {item}
          </label>
        ))}
      </div>

      <button className="mt-8 w-full rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black">
        Iniciar Missão
      </button>
    </div>
  );
}