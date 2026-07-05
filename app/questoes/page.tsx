export default function Questoes() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white p-10">
      <h1 className="text-5xl font-bold">
        Banco de <span className="text-yellow-400">Questões</span>
      </h1>

      <p className="mt-3 text-gray-400">
        Resolva questões, acompanhe acertos e alimente o banco de erros.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#15171d] p-6">
        <p className="text-yellow-400 font-bold">Questão exemplo</p>
        <p className="mt-4 text-gray-300">
          Sobre prisão preventiva, assinale a alternativa correta.
        </p>
      </div>
    </main>
  );
}