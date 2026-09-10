export default function Footer() {
  return (
    <footer className="bg-gray-950 px-8 py-12 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Website Information */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Pangasinan Tourism
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
            Discover the beauty, culture, food, and unforgettable destinations
            of Pangasinan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white">
            Quick Links
          </h3>

          <nav className="mt-4 flex flex-col gap-3 text-sm">
            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#destinations" className="hover:text-white">
              Destinations
            </a>

            <a href="#travel-guide" className="hover:text-white">
              Travel Guide
            </a>

            <a href="#discover" className="hover:text-white">
              Discover
            </a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">
            Explore Pangasinan
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Plan your next adventure and experience the natural beauty and rich
            culture of Pangasinan, Philippines.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2026 Pangasinan Tourism. All rights reserved.
      </div>
    </footer>
  );
}