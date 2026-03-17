import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destinations";
import useFavourites from "../hooks/useFavourites";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id == Number(id));
  const { favourites, addToFavourites } = useFavourites()
  const isAlreadyAdded = favourites.some(item => item.id === destination.id)
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Name and Category */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold text-gray-800">{destination.name}</h1>
        <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
          {destination.category}
        </span>
      </div>

      {/* Location */}
      <p className="text-gray-500 text-lg mb-6">📍 {destination.location}</p>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {destination.description}
      </p>
      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">🕐 Best Time to Visit</p>
          <p className="font-medium text-gray-800">
            {destination.bestTimeToVisit}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">🚗 How to Reach</p>
          <p className="font-medium text-gray-800">{destination.howToReach}</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">💰 Entry Fee</p>
          <p className="font-medium text-gray-800">{destination.entryFee}</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">
            📏 Distance from Bhubaneswar
          </p>
          <p className="font-medium text-gray-800">
            {destination.distanceFromBhubaneswar}
          </p>
        </div>
      </div>
      <button
        onClick={() => addToFavourites(destination)}
        className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-medium mb-8" disabled={isAlreadyAdded}
      >
        {isAlreadyAdded ? '✅ Added to Favourites' : '❤️ Add to Favourites'}
      </button>
      {/* Nearby Places */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Nearby Places</h2>
        <div className="flex flex-wrap gap-2">
          {destination.nearbyPlaces.map((place, index) => (
            <span
              key={index}
              className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              📍 {place}
            </span>
          ))}
        </div>
      </div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium"
      >
        ← Back
      </button>
    </div>
  );
};
export default DestinationDetail;
