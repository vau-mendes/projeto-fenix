export default function MentorPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        Mentor Fênix
      </h2>

      <p className="mt-5 leading-relaxed text-gray-300">
        Hoje o foco será Processo Penal. Antes de avançar, consolide prisão
        preventiva, cadeia de custódia e provas cautelares.
      </p>

      <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4 text-sm text-gray-300">
        Recomendação: não avance para conteúdo novo antes de finalizar a missão
        diária e revisar seus erros pendentes.
      </div>

      <button className="mt-6 w-full rounded-xl border border-yellow-400/40 px-6 py-3 font-bold text-yellow-400 hover:bg-yellow-400/10">
        Falar com Mentor IA
      </button>
    </div>
  );
}