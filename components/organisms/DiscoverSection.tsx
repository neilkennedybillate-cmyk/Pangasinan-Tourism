export default function DiscoverSection() {
  return (
    <section
      id="discover"
      className="bg-blue-900 px-8 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Discover More
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Experience the Heart of Pangasinan
          </h2>

          <p className="mt-5 leading-relaxed text-blue-100">
            From breathtaking beaches and stunning islands to rich culture,
            delicious food, and unforgettable adventures, Pangasinan has
            something waiting for every traveler.
          </p>

          <p className="mt-4 leading-relaxed text-blue-100">
            Start planning your next adventure and discover why Pangasinan is
            one of the Philippines&apos; most beautiful destinations.
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
            Start Exploring →
          </button>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/Anda-Pangasinan-Philippines.jpg"
            alt="Beautiful destination in Pangasinan"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}