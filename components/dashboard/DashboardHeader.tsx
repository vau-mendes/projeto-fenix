type DashboardHeaderProps = {
  nome: string;
  onLogout: () => void;
};

export default function DashboardHeader({ nome, onLogout }: DashboardHeaderProps) {
  return (
    <header className="flex items-start justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Operação PCPR 2026
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Olá, {nome} 👋
        </h1>

        <p className="mt-3 text-gray-400">
          Sua central de comando está pronta para a missão de hoje.
        </p>
      </div>

      <button
        onClick={onLogout}
        className="rounded-xl border border-white/10 px-5 py-3 text-gray-300 hover:bg-white/5"
      >
        Sair
      </button>
    </header>
  );
}