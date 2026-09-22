import Link from "next/link";

type Destination = {
  title: string;
  location: string;
  description: string;
  image: string;
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const destinations: Record<string, Destination> = {
  "hundred-islands": {
    title: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    description:
      "Discover the beautiful islands, clear waters, and unforgettable island adventures of Hundred Islands.",
    image: `${BASE}/images/hundred-islands.jpg`,
  },

  "bolinao-falls": {
    title: "Bolinao Falls",
    location: "Bolinao, Pangasinan",
    description:
      "Enjoy the refreshing waterfalls and natural beauty of Bolinao Falls.",
    image: `${BASE}/images/Bolinao-Falls.jpg`,
  },

  "bolinao-lighthouse": {
    title: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "Visit the historic Bolinao Lighthouse and enjoy its beautiful coastal surroundings.",
    image: `${BASE}/images/Bolinao-Lighthouse.jpg`,
  },

  "enchanted-cave": {
    title: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    description:
      "Explore the unique natural beauty and refreshing waters of Enchanted Cave.",
    image: `${BASE}/images/enchanted-cave.jpg`,
  },

  "anda-pangasinan": {
    title: "Anda Pangasinan",
    location: "Anda, Pangasinan",
    description:
      "Experience the peaceful beaches and beautiful coastal scenery of Anda, Pangasinan.",
    image: `${BASE}/images/Anda-Pangasinan-Philippines.jpg`,
  },

  "saint-james-church": {
    title: "Saint James the Great Parish Church",
    location: "Bolinao, Pangasinan",
    description:
      "Discover the historical and cultural significance of Saint James the Great Parish Church.",
    image: `${BASE}/images/saint-james-church.jpg`,
  },

  "salt-farm": {
    title: "Salt Farm",
    location: "Bani, Pangasinan",
    description:
      "Learn about the traditional salt-making practices and beautiful salt farms of Pangasinan.",
    image: `${BASE}/images/Salt-farm-Bani-Pangasinan.jpg`,
  },

  "tambobong-beach": {
    title: "Tambobong Beach",
    location: "Dasol, Pangasinan",
    description:
      "Relax and enjoy the beautiful shoreline and peaceful waters of Tambobong Beach.",
    image: `${BASE}/images/Tambobong Beach.jpg`,
  },
};

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination = destinations[slug];

  if (!destination) {
    return (
      <main className="min-h-screen bg-gray-50 px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Destination Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            Sorry, this destination does not exist.
          </p>

          <Link
              href="/#destinations"
             className="mt-6 inline-block rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white"
        >
            ← Back to Explore

          <Link
             href="/"
             className="mt-3 block text-sm font-semibold text-blue-200 hover:text-white"
          >
             ← Back to Home
           </Link>

         </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-blue-900 px-8 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-3">
          <Link
               href="/explore"
               className="text-sm font-semibold text-blue-200 hover:text-white"
             >
                ← Back to Explore
          </Link>

          <Link
               href="/"
               className="text-sm font-semibold text-blue-200 hover:text-white"
           >
               ← Back to Home
          </Link>
        </div>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            {destination.location}
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-6xl">
            {destination.title}
          </h1>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src={destination.image}
              alt={destination.title}
              className="h-[450px] w-full object-cover"
            />

            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-900">
                Discover Pangasinan
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                About {destination.title}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
                {destination.description}
              </p>

              <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900">
                 Highlights
            </h3>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
               <div className="rounded-xl bg-gray-50 p-5">
               <p className="text-2xl">🌊</p>
             <h4 className="mt-3 font-bold text-gray-900">
                Natural Beauty
            </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                 Enjoy the beautiful natural scenery and peaceful surroundings.
              </p>
            </div>

             <div className="rounded-xl bg-gray-50 p-5">
               <p className="text-2xl">📸</p>
            <h4 className="mt-3 font-bold text-gray-900">
                  Scenic Views
            </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                   Discover beautiful places perfect for sightseeing and photos.
            </p>
           </div>

            <div className="rounded-xl bg-gray-50 p-5">
            <p className="text-2xl">🌴</p>
           <h4 className="mt-3 font-bold text-gray-900">
                Local Experience
           </h4>
           <p className="mt-2 text-sm leading-relaxed text-gray-600">
                 Experience the beauty and culture of Pangasinan.
            </p>
              </div>
             </div>
            </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-500">
                    Location
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    📍 {destination.location}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-500">
                    Experience
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    🌴 Explore and enjoy Pangasinan
                  </p>
                </div>
              </div>

              <Link
                href="/explore"
                className="mt-8 inline-block rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                ← Back to Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}