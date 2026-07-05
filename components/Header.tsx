export default function Header() {
  return (
    <header className="flex items-center justify-between mb-10">

      <div>
        <h1 className="text-5xl font-bold">
          Olá, Dr. Mendes 👋
        </h1>

        <p className="mt-3 text-gray-400">
          Sua missão diária está pronta.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
          VM
        </div>

      </div>

    </header>
  );
}