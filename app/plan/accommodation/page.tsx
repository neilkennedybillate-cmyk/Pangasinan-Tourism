import Link from "next/link";

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 px-8 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/plan"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            ← Back to Plan Your Trip
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Where to Stay
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Find a Place to Stay
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Find comfortable resorts, hotels, and accommodations for your
            Pangasinan adventure.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Accommodation Options
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Choose from different types of accommodations depending on your
              destination, budget, and travel needs.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🏨</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Hotels
                </h3>
                <p className="mt-2 text-gray-600">
                  Stay in comfortable hotels located near popular destinations
                  and city centers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🏝️</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Resorts
                </h3>
                <p className="mt-2 text-gray-600">
                  Enjoy relaxing stays at resorts near beaches and other
                  beautiful attractions.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🏡</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Other Stays
                </h3>
                <p className="mt-2 text-gray-600">
                  Explore guesthouses, homestays, and other affordable
                  accommodation options.
                </p>
              </div>
            </div>
             <div className="flex flex-col items-start gap-3">
            <Link
                  href="/plan"
                  className="text-sm font-semibold text-blue-200 hover:text-white"
                >
                  ← Back to Plan Your Trip
            </Link>

            <Link
                  href="/"
                  className="text-sm font-semibold text-blue-200 hover:text-white"
                >
                  ← Back to Home
            </Link>
        </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}