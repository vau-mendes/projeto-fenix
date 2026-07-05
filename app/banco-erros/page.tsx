export default function BancoErros() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Banco de <span className="text-yellow-400">Erros</span>
      </h1>

      <p className="mt-3 text-gray-400">
        Todo erro vira uma missão obrigatória de revisão.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#15171d] p-6">
        <p className="text-gray-300">Nenhum erro cadastrado ainda.</p>
      </div>
    </main>
  );
}