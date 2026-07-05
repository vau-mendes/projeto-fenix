export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-yellow-500/40 px-5 py-2 text-sm text-yellow-400">
          Delegado PCPR • Primeira Fase
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Projeto <span className="text-yellow-400">Fênix</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          A aprovação não é sorte. É método.
        </p>

        <p className="mt-4 max-w-3xl text-gray-400">
          Plataforma inteligente de preparação para concursos jurídicos, com IA
          mentora, banco de erros, revisões programadas e missões diárias.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/login"
            className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Entrar na Plataforma
          </a>

          <a
            href="#metodo"
            className="rounded-xl border border-yellow-400/40 px-8 py-4 font-bold text-yellow-400 hover:bg-yellow-400/10"
          >
            Conhecer o Método
          </a>
        </div>
      </section>

      <section id="metodo" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold">
            Método Fênix
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-yellow-400">
                IA Mentor
              </h3>
              <p className="mt-3 text-gray-400">
                O sistema identifica seus pontos fracos e indica exatamente o
                que estudar.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-yellow-400">
                Banco de Erros
              </h3>
              <p className="mt-3 text-gray-400">
                Cada erro vira uma missão de revisão até o domínio completo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-yellow-400">
                Missões Diárias
              </h3>
              <p className="mt-3 text-gray-400">
                Você não decide aleatoriamente o que estudar. A plataforma guia
                sua preparação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}