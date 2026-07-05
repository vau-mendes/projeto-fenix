"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";

export default function Dashboard() {
  const router = useRouter();
  const [nome, setNome] = useState("Aluno");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function verificarLogin() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      setNome(data.user.user_metadata?.nome || data.user.email || "Aluno");
      setCarregando(false);
    }

    verificarLogin();
  }, [router]);

  async function sair() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (carregando) {
    return (
      <main className="min-h-screen bg-[#08090d] text-white flex items-center justify-center">
        <p className="text-yellow-400 text-xl">Carregando Projeto Fênix...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08090d] text-white flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Olá, {nome} 👋
            </h1>

            <p className="mt-3 text-gray-400">
              Sua central de comando da Operação PCPR 2026.
            </p>
          </div>

          <button
            onClick={sair}
            className="rounded-xl border border-white/10 px-5 py-3 text-gray-300 hover:bg-white/5"
          >
            Sair
          </button>
        </header>

        <DashboardCards />

        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-yellow-400">
              Missão de Hoje
            </h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>☐ Processo Penal — Prisão Preventiva</p>
              <p>☐ Direito Penal — Crimes contra a Administração</p>
              <p>☐ Constitucional — Segurança Pública</p>
              <p>☐ 20 questões objetivas</p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-yellow-400">
              Mentor Fênix
            </h2>

            <p className="mt-6 text-gray-300">
              Hoje o foco será Processo Penal. Antes de avançar, consolide
              prisão preventiva, cadeia de custódia e provas cautelares.
            </p>

            <button className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black">
              Falar com Mentor IA
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}