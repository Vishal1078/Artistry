import Link from "next/link";

export default function HomePage() {
  const categories = ["Singers", "Dancers", "Speakers", "DJs"];

  return (
    <div className="p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to Artistly.com</h1>
        <p className="mt-2 text-gray-600">Connecting Event Planners & Artists</p>
        <Link href="/artists">
          <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700">
            Explore Artists
          </button>
        </Link>
      </header>

      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat} className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg">
            <p className="text-lg font-medium">{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
