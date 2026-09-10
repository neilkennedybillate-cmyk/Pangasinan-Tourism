import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
      {/* Website Logo / Name */}
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold text-blue-900">
            Pangasinan Tourism
          </h1>

          <p className="text-xs text-gray-500">
            Explore. Discover. Experience.
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-900">
          Home
        </Link>

        <Link href="/explore" className="hover:text-blue-900">
          Destinations
        </Link>

        <Link href="/plan" className="hover:text-blue-900">
          Travel Guide
        </Link>

        <Link href="/discover" className="hover:text-blue-900">
          Discover
        </Link>
      </nav>
    </header>
  );
}