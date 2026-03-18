import destinations from "../data/destinations";
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";


const Destinations = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");


  const categories = [
    "All",
    "Beach",
    "Temple",
    "Wildlife",
    "Waterfall",
    "Hills",
  ];

  const filtered = destinations.filter((destination) => {
    const matchesCategory =
      activeCategory === "All" || destination.category === activeCategory;
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-2">
        All Destinations
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Explore the beauty of Odisha
      </p>

      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block border border-gray-300 rounded-full px-5 py-2 mb-8 focus:outline-none focus:border-green-500"
      />
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeCategory === category ? "bg-green-800 text-white" : "bg-gray-100 text-gray-600 hover:bg-green-100 "} `}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
