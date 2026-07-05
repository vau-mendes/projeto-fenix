export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
        <p className="text-gray-400">🔥 Dias Seguidos</p>
        <h2 className="text-5xl font-bold mt-3">16</h2>
      </div>

      <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
        <p className="text-gray-400">📚 Revisões</p>
        <h2 className="text-5xl font-bold mt-3">23</h2>
      </div>

      <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
        <p className="text-gray-400">❌ Banco de Erros</p>
        <h2 className="text-5xl font-bold mt-3">128</h2>
      </div>

      <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
        <p className="text-gray-400">🎯 Meta Semanal</p>
        <h2 className="text-5xl font-bold mt-3">62%</h2>
      </div>

    </div>
  );
}