export default function DashboardStats() {
  const stats = [
    { titulo: "Índice Fênix", valor: "42%", detalhe: "fase inicial" },
    { titulo: "Dias seguidos", valor: "16", detalhe: "sequência ativa" },
    { titulo: "Questões", valor: "0", detalhe: "resolvidas" },
    { titulo: "Banco de erros", valor: "0", detalhe: "pendentes" },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.titulo}
          className="rounded-2xl border border-white/10 bg-[#15171d] p-6"
        >
          <p className="text-sm text-gray-400">{item.titulo}</p>
          <h2 className="mt-3 text-5xl font-bold text-yellow-400">
            {item.valor}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{item.detalhe}</p>
        </div>
      ))}
    </section>
  );
}