import { Link } from 'react-router-dom'
import destinations from '../destinations'
import DestinationCard from './DestinationCard.jsx'

const Home = () => {
  const featured = destinations.filter(d => d.featured === true)

  return (
    <div>

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Explore Odisha</h1>
          <p className="text-xl mb-8">Discover the soul of India — temples, beaches, wildlife and more</p>
          <Link
            to="/destinations"
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Explore Now
          </Link>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-2">Featured Destinations</h2>
        <p className="text-center text-gray-500 mb-10">Hand picked places you must visit in Odisha</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-medium"
          >
            View All Destinations
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home