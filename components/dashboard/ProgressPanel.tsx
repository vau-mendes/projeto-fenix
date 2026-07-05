export default function ProgressPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        Progresso Semanal
      </h2>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Meta da semana</span>
          <span>62%</span>
        </div>

        <div className="mt-3 h-4 overflow-hidden rounded-full bg-black/40">
          <div className="h-full w-[62%] rounded-full bg-yellow-400" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-xl bg-black/30 p-4">
          <p className="text-2xl font-bold">4h</p>
          <p className="text-xs text-gray-500">hoje</p>
        </div>

        <div className="rounded-xl bg-black/30 p-4">
          <p className="text-2xl font-bold">18h</p>
          <p className="text-xs text-gray-500">semana</p>
        </div>

        <div className="rounded-xl bg-black/30 p-4">
          <p className="text-2xl font-bold">90%</p>
          <p className="text-xs text-gray-500">meta final</p>
        </div>
      </div>
    </div>
  );
}