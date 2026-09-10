import Button from "../atoms/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/hundred-islands.jpg"
        alt="Hundred Islands, Pangasinan"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative mx-auto w-full max-w-6xl px-8 py-24">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em]">
            Welcome to Pangasinan
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Discover the Beauty of Pangasinan
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-100">
            Explore breathtaking islands, beautiful beaches, waterfalls,
            caves, and unforgettable destinations in the heart of the
            Philippines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/explore">
              <Button>
                Explore Spots →
              </Button>
            </Link>
            
            <Link href="/plan">
              <Button variant="outline">
                Plan Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}