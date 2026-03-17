import DestinationCard from "../components/DestinationCard"
import useFavourites from "../hooks/useFavourites"

const Favourites = () => {
  const { favourites, removeFromFavourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-xl">No favourites yet!</p>
        <p className="text-gray-400 mt-2">Go explore and add some destinations ❤️</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold text-green-800 text-center mb-2">
        My Favourites
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Places you want to visit
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favourites.map((destination) => (
          <div key={destination.id} className="relative">
            <DestinationCard destination={destination} />
            <button
              onClick={() => removeFromFavourites(destination.id)}
              className="mt-2 w-full bg-red-50 text-red-500 border border-red-200 px-4 py-2 rounded-xl text-sm hover:bg-red-500 hover:text-white transition font-medium"
            >
              ❌ Remove from Favourites
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Favourites