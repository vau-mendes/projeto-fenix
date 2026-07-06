"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

type Question = {
  id: string;
  disciplina: string;
  assunto: string;
  enunciado: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  alternativa_e: string;
  resposta_correta: string;
  explicacao: string;
};

export default function Questoes() {
  const [questao, setQuestao] = useState<Question | null>(null);
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState("");
  const [explicacao, setExplicacao] = useState("");

  useEffect(() => {
    carregarQuestao();
  }, []);

  async function carregarQuestao() {
    const { data } = await supabase
      .from("questions")
      .select("*")
      .limit(1);

    if (data && data.length > 0) {
      setQuestao(data[0]);
    }
  }

  async function responder() {
    if (!questao) return;

    const correta = resposta === questao.resposta_correta;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("question_attempts").insert({
        user_id: user.id,
        question_id: questao.id,
        resposta_usuario: resposta,
        correta,
      });

      if (!correta) {
        await supabase.from("error_bank").insert({
          user_id: user.id,
          question_id: questao.id,
        });
      }
    }

    setResultado(correta ? "✅ Resposta Correta!" : "❌ Resposta Incorreta");
    setExplicacao(questao.explicacao);
  }

  if (!questao) {
    return (
      <main className="min-h-screen bg-[#08090d] text-white flex items-center justify-center">
        Carregando questão...
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-[#08090d] text-white">
      <Sidebar />

      <section className="flex-1 p-10">

        <p className="text-yellow-400 font-semibold">
          {questao.disciplina}
        </p>

        <h1 className="text-4xl font-bold mt-4">
          {questao.assunto}
        </h1>

        <div className="mt-8 rounded-2xl bg-[#15171d] p-8">

          <p className="text-lg">
            {questao.enunciado}
          </p>

          <div className="mt-8 space-y-4">

            {["A","B","C","D","E"].map((letra) => (

              <label
                key={letra}
                className="flex gap-3 rounded-xl border border-white/10 p-4 cursor-pointer"
              >
                <input
                  type="radio"
                  value={letra}
                  checked={resposta===letra}
                  onChange={(e)=>setResposta(e.target.value)}
                />

                {
                  letra==="A"?questao.alternativa_a:
                  letra==="B"?questao.alternativa_b:
                  letra==="C"?questao.alternativa_c:
                  letra==="D"?questao.alternativa_d:
                  questao.alternativa_e
                }

              </label>

            ))}

          </div>

          <button
            onClick={responder}
            className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black"
          >
            Responder
          </button>

          {resultado && (

            <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-6">

              <h2 className="text-2xl font-bold">
                {resultado}
              </h2>

              <p className="mt-4 text-gray-300">
                {explicacao}
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}