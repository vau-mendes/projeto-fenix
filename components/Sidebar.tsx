import Link from "next/link";

const items = [
  { nome: "Dashboard", href: "/dashboard" },
  { nome: "Matérias", href: "/materias" },
  { nome: "Missões", href: "/missoes" },
  { nome: "Questões", href: "/questoes" },
  { nome: "Banco de Erros", href: "/banco-erros" },
  { nome: "Revisões", href: "/revisoes" },
  { nome: "Simulados", href: "/simulados" },
  { nome: "Desempenho", href: "/desempenho" },
  { nome: "Configurações", href: "/configuracoes" },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-72 border-r border-white/10 bg-[#111218] p-6">
      <h2 className="text-3xl font-bold">
        Projeto <span className="text-yellow-400">Fênix</span>
      </h2>

      <nav className="mt-10 space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white"
          >
            {item.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}