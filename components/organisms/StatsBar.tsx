const stats = [
  {
    number: "44",
    label: "Municipalities",
  },
  {
    number: "100+",
    label: "Beautiful Islands",
  },
  {
    number: "1M+",
    label: "Happy Visitors",
  },
  {
    number: "365",
    label: "Days to Explore",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-blue-900 px-8 py-8 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">
              {stat.number}
            </p>

            <p className="mt-1 text-sm text-blue-200">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}