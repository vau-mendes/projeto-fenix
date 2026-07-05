"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MissionToday from "@/components/dashboard/MissionToday";
import MentorPanel from "@/components/dashboard/MentorPanel";
import ProgressPanel from "@/components/dashboard/ProgressPanel";

type Profile = {
  nome: string | null;
  email: string | null;
  concurso: string | null;
  cargo: string | null;
  indice_fenix: number | null;
  dias_seguidos: number | null;
  questoes_resolvidas: number | null;
  banco_erros: number | null;
};

export default function Dashboard() {
  const router = useRouter();
  const [perfil, setPerfil] = useState<Profile | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarPerfil() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.push("/login");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userData.user.id)
        .single();

      setPerfil(profileData);
      setCarregando(false);
    }

    carregarPerfil();
  }, [router]);

  async function sair() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (carregando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090d] text-white">
        <p className="text-xl text-yellow-400">Carregando Projeto Fênix...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-[#08090d] text-white">
      <Sidebar />

      <section className="flex-1 space-y-10 p-10">
        <DashboardHeader
          nome={perfil?.nome || "Aluno"}
          onLogout={sair}
        />

        <section className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
            <p className="text-sm text-gray-400">Índice Fênix</p>
            <h2 className="mt-3 text-5xl font-bold text-yellow-400">
              {perfil?.indice_fenix ?? 42}%
            </h2>
            <p className="mt-2 text-sm text-gray-500">fase inicial</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
            <p className="text-sm text-gray-400">Dias seguidos</p>
            <h2 className="mt-3 text-5xl font-bold text-yellow-400">
              {perfil?.dias_seguidos ?? 1}
            </h2>
            <p className="mt-2 text-sm text-gray-500">sequência ativa</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
            <p className="text-sm text-gray-400">Questões</p>
            <h2 className="mt-3 text-5xl font-bold text-yellow-400">
              {perfil?.questoes_resolvidas ?? 0}
            </h2>
            <p className="mt-2 text-sm text-gray-500">resolvidas</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-6">
            <p className="text-sm text-gray-400">Banco de erros</p>
            <h2 className="mt-3 text-5xl font-bold text-yellow-400">
              {perfil?.banco_erros ?? 0}
            </h2>
            <p className="mt-2 text-sm text-gray-500">pendentes</p>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-3">
          <MissionToday />
          <MentorPanel />
          <ProgressPanel />
        </div>
      </section>
    </main>
  );
}