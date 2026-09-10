import Link from "next/link";

export default function FoodPage() {
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
            What to Eat
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Taste Pangasinan
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Discover Pangasinan&apos;s local delicacies, fresh seafood, and
            unforgettable Filipino dishes.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Local Food to Try
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Make your Pangasinan trip more memorable by trying some of the
              local food and dishes the province has to offer.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🐟</p>

                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Fresh Seafood
                </h3>

                <p className="mt-2 text-gray-600">
                  Enjoy fresh seafood and local dishes prepared with
                  ingredients from Pangasinan&apos;s coastal communities.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🍚</p>

                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Local Delicacies
                </h3>

                <p className="mt-2 text-gray-600">
                  Taste traditional Filipino delicacies and local favorites
                  during your visit.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="text-4xl">🍽️</p>

                <h3 className="mt-4 text-xl font-bold text-blue-900">
                  Filipino Dishes
                </h3>

                <p className="mt-2 text-gray-600">
                  Discover delicious Filipino meals that you can enjoy with
                  family and friends.
                </p>
              </div>
            </div>

            <Link
              href="/plan"
              className="mt-8 inline-block rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              ← Back to Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}