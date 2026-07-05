export default function Desempenho() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Desempenho <span className="text-yellow-400">Fênix</span>
      </h1>

      <p className="mt-3 text-gray-400">
        Acompanhe evolução, índice Fênix e probabilidade de aprovação.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
          <p className="text-gray-400">Índice Fênix</p>
          <h2 className="mt-2 text-5xl font-bold text-yellow-400">42%</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
          <p className="text-gray-400">Acurácia</p>
          <h2 className="mt-2 text-5xl font-bold">0%</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
          <p className="text-gray-400">Horas estudadas</p>
          <h2 className="mt-2 text-5xl font-bold">0h</h2>
        </div>
      </div>
    </main>
  );
}