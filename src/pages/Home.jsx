import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { useEffect, useState } from "react";

const Home = () => {
  const featured = destinations.filter((d) => d.featured === true);
  const [currIndex,setCurrIndex] = useState(0);

  const heroImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600", // mountains
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600", // beach
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600", // forest
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600", // waterfall
]


useEffect(() => {
  const timer = setInterval(() => {
    setCurrIndex((prev) => (prev + 1) % heroImages.length)
  }, 3000)

  return () => clearInterval(timer)
}, [])

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen  bg-center flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Explore Odisha</h1>
          <p className="text-xl mb-8">
            Discover the soul of India — temples, beaches, wildlife and more
          </p>
          <Link
            to="/destinations"
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-2">
          Featured Destinations
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Hand picked places you must visit in Odisha
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-medium"
          >
            View All Destinations
          </Link>
        </div>
       
      </div>
      {/* ── COMING SOON ── */}
<div className="bg-green-800 text-white py-12 px-6 text-center">
  <div className="max-w-2xl mx-auto">

    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
      Work in Progress
    </span>

    <h2 className="text-2xl font-bold mt-4 mb-3">
      This is just the beginning 🚀
    </h2>

    <p className="text-green-200 text-sm leading-relaxed mb-6">
      Odisha is a land of countless hidden gems — every district has its own 
      stories, temples, nature spots and cultural treasures waiting to be 
      discovered. This app is a growing collection that will keep expanding 
      with more destinations, deeper guides and richer experiences over time.
    </p>

    <p className="text-green-300 text-xs italic">
      — More destinations · More features · Always evolving
    </p>

  </div>
</div>
    </div>
  );
};

export default Home;
