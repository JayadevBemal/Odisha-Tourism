import { useEffect, useState } from "react";

const useFavourites = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || [],
  );
  

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (destination) => {
    const alreadyAdded = favourites.some((item) => item.id === destination.id);
    if (alreadyAdded) {
      return;
    }
    setFavourites([...favourites, destination]);
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
  };

  return { favourites, addToFavourites, removeFromFavourites };
};
export default useFavourites;
