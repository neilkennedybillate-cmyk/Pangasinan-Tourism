import Link from "next/link";

export default function TransportationPage() {
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
            How to Get Here
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Getting to Pangasinan
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Plan your journey to Pangasinan by bus, private vehicle, or other
            available transportation.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Transportation Options
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Pangasinan can be reached through several transportation options
              depending on your starting point and destination.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🚌</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  By Bus
                </h3>
                <p className="mt-2 text-gray-600">
                  Travel comfortably by bus to major cities and towns in
                  Pangasinan.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🚗</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Private Vehicle
                </h3>
                <p className="mt-2 text-gray-600">
                  Drive your own vehicle for a more flexible and convenient
                  journey.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🚐</p>
                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Other Options
                </h3>
                <p className="mt-2 text-gray-600">
                  Consider vans, taxis, and other available transportation
                  services.
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