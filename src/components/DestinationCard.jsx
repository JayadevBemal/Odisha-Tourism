import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        
        {/* Category Badge */}
        <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
          {destination.category}
        </span>

        <h3 className="text-xl font-bold mt-3 mb-1 text-gray-800">{destination.name}</h3>
        <p className="text-gray-500 text-sm mb-1">📍 {destination.location}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">🕐 {destination.bestTimeToVisit}</span>
          <Link
            to={`/destinations/${destination.id}`}
            className="text-green-700 font-semibold text-sm hover:underline"
          >
            Explore →
          </Link>
        </div>

      </div>
    </div>
  )
}

export default DestinationCard