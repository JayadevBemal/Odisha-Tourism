import { useParams, useNavigate } from"react-router-dom";
import destinations from "../data/destinations";
import useFavourites from "../hooks/useFavourites";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === Number(id));
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();
  const isAdded = favourites.some((item) => item.id === destination.id);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── HERO IMAGE ── */}
      <div className="relative h-72 w-full">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* back button on image */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-6 bg-white bg-opacity-20 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white border-opacity-40 hover:bg-opacity-30 transition"
        >
          ← Back
        </button>

        {/* name + location on image */}
        <div className="absolute bottom-6 left-6">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            {destination.category}
          </span>
          <h1 className="text-white text-3xl font-bold mt-2">
            {destination.name}
          </h1>
          <p className="text-green-200 text-sm mt-1">
            📍 {destination.location}
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* About */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            About this Place
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              🕐 Best Time to Visit
            </p>
            <p className="text-gray-800 font-semibold text-sm">
              {destination.bestTimeToVisit}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              💰 Entry Fee
            </p>
            <p className="text-gray-800 font-semibold text-sm">
              {destination.entryFee}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              📏 Distance from Bhubaneswar
            </p>
            <p className="text-gray-800 font-semibold text-sm">
              {destination.distanceFromBhubaneswar}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              🚗 How to Reach
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {destination.howToReach}
            </p>
          </div>

        </div>

        {/* Nearby Places */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Nearby Places
          </h2>
          <div className="flex flex-wrap gap-2">
            {destination.nearbyPlaces.map((place) => (
              <span
                key={place}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full"
              >
                📍 {place}
              </span>
            ))}
          </div>
        </div>

        {/* Favourite button */}
        <button
          onClick={() =>
            isAdded
              ? removeFromFavourites(destination.id)
              : addToFavourites(destination)
          }
          className={`w-full py-3 rounded-full text-sm font-bold transition ${
            isAdded
              ? "bg-gray-100 text-green-700 border border-green-300"
              : "bg-green-800 text-white hover:bg-green-700"
          }`}
        >
          {isAdded ? "✅ Saved to Favourites" : "❤️ Save to Favourites"}
        </button>

      </div>
    </div>
  );
};

export default DestinationDetail;