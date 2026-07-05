export default function Revisoes() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Revisões <span className="text-yellow-400">Inteligentes</span>
      </h1>

      <p className="mt-3 text-gray-400">
        Revisões em 24h, 7 dias, 30 dias e 90 dias.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {["24h", "7 dias", "30 dias", "90 dias"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
            <p className="text-yellow-400 text-3xl font-bold">{item}</p>
            <p className="mt-2 text-gray-400">0 revisões pendentes</p>
          </div>
        ))}
      </div>
    </main>
  );
}