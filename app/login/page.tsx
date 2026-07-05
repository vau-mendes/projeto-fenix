"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function entrar() {
    setLoading(true);
    setMensagem("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setMensagem(error.message);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#08090d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">
          Entrar no <span className="text-yellow-400">Projeto Fênix</span>
        </h1>

        <p className="mt-2 text-gray-400">
          Acesse sua central de comando.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />

          <button
            onClick={entrar}
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 px-6 py-3 text-center font-bold text-black disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>

        {mensagem && (
          <p className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-gray-300">
            {mensagem}
          </p>
        )}

        <p className="mt-6 text-center text-gray-400">
          Ainda não tem acesso?{" "}
          <a href="/cadastro" className="text-yellow-400">
            Criar conta
          </a>
        </p>
      </div>
    </main>
  );
}