"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import MissionToday from "@/components/dashboard/MissionToday";
import MentorPanel from "@/components/dashboard/MentorPanel";
import ProgressPanel from "@/components/dashboard/ProgressPanel";

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
      <main className="flex min-h-screen items-center justify-center bg-[#08090d] text-white">
        <p className="text-xl text-yellow-400">
          Carregando Projeto Fênix...
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-[#08090d] text-white">
      <Sidebar />

      <section className="flex-1 space-y-10 p-10">
        <DashboardHeader nome={nome} onLogout={sair} />

        <DashboardStats />

        <div className="grid gap-6 xl:grid-cols-3">
          <MissionToday />
          <MentorPanel />
          <ProgressPanel />
        </div>
      </section>
    </main>
  );
}