import DestinationCard from "../molecules/DestinationCard";

const destinations = [
  {
    title: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    image: "/images/hundred-Islands.jpg",
    slug: "hundred-islands",
  },
  {
    title: "Bolinao Falls",
    location: "Bolinao, Pangasinan",
    image: "/images/Bolinao-Falls.jpg",
    slug: "bolinao-falls",
  },
  {
    title: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image: "/images/Bolinao-Lighthouse.jpg",
    slug: "bolinao-lighthouse",
  },
  {
    title: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    image: "/images/enchanted-cave.jpg",
    slug: "enchanted-cave",
  },
  {
    title: "Anda Pangasinan",
    location: "Anda, Pangasinan",
    image: "/images/Anda-Pangasinan-Philippines.jpg",
    slug: "anda-pangasinan",
  },
  {
    title: "Saint James the Great Parish Church",
    location: "Bolinao, Pangasinan",
    image: "/images/saint-james-church.jpg",
    slug: "saint-james-church",
  },
  {
    title: "Salt Farm",
    location: "Bani, Pangasinan",
    image: "/images/Salt-farm-Bani-Pangasinan.jpg",
    slug: "salt-farm",
  },
  {
    title: "Tambobong Beach",
    location: "Dasol, Pangasinan",
    image: "/images/Tambobong Beach.jpg",
    slug: "tambobong-beach",
  },
];
export default function DestinationSection() {
  return (
    <section
      id="destinations"
      className="bg-gray-50 px-8 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-900">
            Explore Pangasinan
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Featured Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover some of the most beautiful and unforgettable places
            Pangasinan has to offer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.title}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              slug={destination.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}