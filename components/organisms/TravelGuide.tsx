import Link from "next/link";

const guides = [
  {
    
  title: "How to Get Here",
  description:
    "Plan your journey to Pangasinan by bus, private vehicle, or other available transportation.",
  icon: "🚌",
  slug: "transportation",
  },
  {
    title: "Where to Stay",
    description:
      "Find comfortable resorts, hotels, and accommodations for your Pangasinan adventure.",
    icon: "🏨",
    slug: "accommodation",
  },
  {
    title: "What to Eat",
    description:
      "Taste Pangasinan's local delicacies, fresh seafood, and unforgettable Filipino dishes.",
    icon: "🍽️",
    slug: "food",
  },
];

export default function TravelGuide() {
  return (
    <section
      id="travel-guide"
      className="bg-white px-8 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-900">
            Plan Your Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Your Pangasinan Travel Guide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Everything you need to know before starting your adventure in
            Pangasinan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="rounded-xl border border-gray-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">
                {guide.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-900">
                {guide.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                {guide.description}
              </p>

              <Link
                 href={`/plan/${guide.slug}`}
                 className="mt-6 inline-block text-sm font-semibold text-blue-900 hover:underline"
           >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}