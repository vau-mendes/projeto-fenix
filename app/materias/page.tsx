"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

type Subject = {
  id: string;
  nome: string;
  descricao: string;
  ordem: number;
};

export default function Materias() {
  const [materias, setMaterias] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarMaterias() {
      const { data } = await supabase
        .from("subjects")
        .select("*")
        .order("ordem", { ascending: true });

      setMaterias(data || []);
      setLoading(false);
    }

    carregarMaterias();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#08090d] text-white">
      <Sidebar />

      <section className="flex-1 p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Operação PCPR 2026
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Matérias no Ar
        </h1>

        <p className="mt-3 text-gray-400">
          Primeiras disciplinas oficiais cadastradas no banco do Projeto Fênix.
        </p>

        {loading ? (
          <p className="mt-10 text-yellow-400">Carregando matérias...</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {materias.map((materia) => (
              <div
                key={materia.id}
                className="rounded-2xl border border-white/10 bg-[#15171d] p-6"
              >
                <h2 className="text-2xl font-bold text-yellow-400">
                  {materia.nome}
                </h2>

                <p className="mt-3 text-gray-300">
                  {materia.descricao}
                </p>

                <button className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">
                  Estudar matéria
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}