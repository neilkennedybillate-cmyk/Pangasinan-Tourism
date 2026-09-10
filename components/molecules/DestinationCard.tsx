import Link from "next/link";

type DestinationCardProps = {
  image: string;
  title: string;
  location: string;
  slug: string;
};

export default function DestinationCard({
  image,
  title,
  location,
  slug,
}: DestinationCardProps) {
  return (
    <Link
      href={`/explore/${slug}`}
      className="block overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-gray-500">
          {location}
        </p>

        <h3 className="mt-2 text-xl font-bold text-blue-900">
          {title}
        </h3>

        <p className="mt-4 text-sm font-semibold text-blue-900">
          Explore →
        </p>
      </div>
    </Link>
  );
}