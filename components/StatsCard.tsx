type StatsCardProps = {
  titulo: string;
  valor: string;
  cor?: string;
};

export default function StatsCard({
  titulo,
  valor,
  cor = "text-white",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-[#15171d] border border-white/10 p-6">

      <p className="text-gray-400 text-sm">
        {titulo}
      </p>

      <h2 className={`text-5xl font-bold mt-3 ${cor}`}>
        {valor}
      </h2>

    </div>
  );
}