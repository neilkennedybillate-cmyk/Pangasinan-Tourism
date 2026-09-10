import Link from "next/link";

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 px-8 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Discover Pangasinan
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Discover More
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Discover the culture, nature, history, and unforgettable experiences
            that make Pangasinan a wonderful destination.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-md">
              <p className="text-5xl">🌴</p>

              <h2 className="mt-5 text-2xl font-bold text-blue-900">
                Nature
              </h2>

              <p className="mt-3 leading-relaxed text-gray-600">
                Explore beautiful beaches, islands, waterfalls, caves, and
                other natural attractions across Pangasinan.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-md">
              <p className="text-5xl">🏛️</p>

              <h2 className="mt-5 text-2xl font-bold text-blue-900">
                Culture & History
              </h2>

              <p className="mt-3 leading-relaxed text-gray-600">
                Learn more about the province's history, heritage, traditions,
                and local communities.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-md">
              <p className="text-5xl">📸</p>

              <h2 className="mt-5 text-2xl font-bold text-blue-900">
                Experiences
              </h2>

              <p className="mt-3 leading-relaxed text-gray-600">
                Create memorable experiences through sightseeing, adventures,
                food, and local activities.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}