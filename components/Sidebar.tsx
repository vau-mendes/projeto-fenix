export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#111218] border-r border-white/10 p-6">

      <h2 className="text-3xl font-bold">
        Projeto <span className="text-yellow-400">Fênix</span>
      </h2>

      <nav className="mt-10 space-y-4">

        <div className="rounded-lg bg-yellow-400 text-black px-4 py-3 font-semibold">
          Dashboard
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Missões
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Banco de Erros
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Revisões
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Simulados
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Desempenho
        </div>

        <div className="text-gray-400 hover:text-white cursor-pointer">
          Configurações
        </div>

      </nav>

    </aside>
  );
}