"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function criarConta() {
    setLoading(true);
    setMensagem("");

    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          nome,
        },
      },
    });

    if (error) {
      setMensagem(error.message);
    } else {
      setMensagem("Conta criada. Verifique seu e-mail para confirmar o acesso.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#08090d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">
          Criar conta <span className="text-yellow-400">Fênix</span>
        </h1>

        <p className="mt-2 text-gray-400">
          Inicie sua preparação inteligente.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
          />

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
            onClick={criarConta}
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 px-6 py-3 text-center font-bold text-black disabled:opacity-60"
          >
            {loading ? "Criando..." : "Criar conta"}
          </button>
        </div>

        {mensagem && (
          <p className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-gray-300">
            {mensagem}
          </p>
        )}

        <p className="mt-6 text-center text-gray-400">
          Já possui conta?{" "}
          <a href="/login" className="text-yellow-400">
            Entrar
          </a>
        </p>
      </div>
    </main>
  );
}