import Link from "next/link";
import DestinationSection from "../../components/organisms/DestinationSection";

export default function ExplorePage() {
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
            Explore Pangasinan
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            Explore Amazing Spots
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Discover beautiful beaches, islands, waterfalls, caves, and
            heritage destinations around Pangasinan.
          </p>
        </div>
      </section>

      <DestinationSection />
    </main>
  );
}